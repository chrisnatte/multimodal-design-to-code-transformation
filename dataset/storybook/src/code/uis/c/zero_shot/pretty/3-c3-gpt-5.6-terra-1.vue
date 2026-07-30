<template>
    <main class="min-h-screen bg-white px-[58px] pt-3 text-[10px] text-slate-600">
        <header class="flex items-start gap-3">
            <Button
                icon="pi pi-arrow-left"
                severity="secondary"
                variant="text"
                rounded
                aria-label="Zurück"
                class="!mt-0.5 !h-8 !w-8 !border !border-slate-200 !p-0 !text-slate-500"
            />
            <div>
                <h1 class="m-0 text-[23px] font-bold leading-6 text-slate-700">Projektaufgaben</h1>
                <p class="mt-1 text-[12px] text-slate-500">
                    Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
                </p>
            </div>
        </header>

        <section class="mt-3">
            <Breadcrumb :home="home" :model="breadcrumbItems" class="!border-0 !bg-transparent !p-0 !text-[10px]" />
        </section>

        <section class="mt-5 flex items-end gap-3">
            <div class="flex flex-col gap-1">
                <label for="task-search" class="font-medium text-slate-600">Suche</label>
                <span class="p-input-icon-left">
                    <i class="pi pi-search !text-[10px] !text-slate-400" />
                    <InputText
                        id="task-search"
                        v-model="search"
                        placeholder="Suche..."
                        class="!h-6 !w-[154px] !text-[10px]"
                    />
                </span>
            </div>

            <div class="flex flex-col gap-1">
                <label for="status-filter" class="font-medium text-slate-600">Status</label>
                <Select
                    ref="statusSelect"
                    input-id="status-filter"
                    v-model="selectedStatus"
                    :options="statusOptions"
                    placeholder="Status auswählen"
                    class="!h-6 !w-[154px] !text-[10px]"
                    panel-class="!text-[10px]"
                />
            </div>
        </section>

        <section class="mt-2 w-[1048px]">
            <DataTable
                v-model:selection="selectedTasks"
                :value="tasks"
                data-key="id"
                class="!text-[10px]"
                table-style="min-width: 1048px"
            >
                <Column header-style="width: 50px" body-style="width: 50px">
                    <template #header>
                        <Checkbox v-model="selectAll" binary aria-label="Alle Aufgaben auswählen" />
                    </template>
                    <template #body="{ data }">
                        <Checkbox v-model="selectedTasks" :value="data" :aria-label="data.task" />
                    </template>
                </Column>

                <Column field="task" header="Aufgabe" header-style="width: 365px" body-style="width: 365px">
                    <template #body="{ data }">
                        <span class="text-slate-600">{{ data.task }}</span>
                    </template>
                </Column>

                <Column field="owner" header="Verantwortlicher" header-style="width: 182px" body-style="width: 182px">
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-[10px] font-semibold text-slate-500">
                                {{ data.initials }}
                            </span>
                            <span>{{ data.owner }}</span>
                        </div>
                    </template>
                </Column>

                <Column header="Status" header-style="width: 182px" body-style="width: 182px">
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <ProgressBar :value="data.progress" :show-value="false" class="!h-1 !w-[130px]" />
                            <span class="w-6 text-right text-[9px]">{{ data.progress }} %</span>
                        </div>
                    </template>
                </Column>

                <Column field="status" header="Status" header-style="width: 114px" body-style="width: 114px">
                    <template #body="{ data }">
                        <Tag :value="data.status" :severity="data.severity" class="!px-1.5 !py-0 !text-[9px]" />
                    </template>
                </Column>

                <Column field="dueDate" header="Fällig" header-style="width: 88px" body-style="width: 88px">
                    <template #body="{ data }">
                        <span :class="data.overdue ? 'text-red-500' : ''">{{ data.dueDate }}</span>
                    </template>
                </Column>

                <Column header="Aktionen" header-style="width: 67px" body-style="width: 67px">
                    <template #body="{ data }">
                        <Button
                            v-if="data.id === 2"
                            ref="actionsTrigger"
                            icon="pi pi-ellipsis-h"
                            severity="secondary"
                            variant="text"
                            rounded
                            aria-label="Aktionen"
                            class="!h-6 !w-6 !p-0"
                            @click="toggleActions"
                        />
                        <Button
                            v-else
                            icon="pi pi-ellipsis-h"
                            severity="secondary"
                            variant="text"
                            rounded
                            aria-label="Aktionen"
                            class="!h-6 !w-6 !p-0"
                        />
                    </template>
                </Column>
            </DataTable>
        </section>

        <Menu ref="actionsMenu" :model="actionItems" popup class="!w-[142px] !text-[10px]" />
    </main>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';
import ProgressBar from 'primevue/progressbar';
import Select from 'primevue/select';
import Tag from 'primevue/tag';

const search = ref('');
const selectedStatus = ref(null);
const selectedTasks = ref([]);
const selectAll = ref(false);
const statusSelect = ref();
const actionsMenu = ref();
const actionsTrigger = ref();

const home = { icon: 'pi pi-home' };
const breadcrumbItems = [
    { label: 'Projekte' },
    { label: 'Projekt 1' },
    { label: 'Aufgaben' }
];

const statusOptions = ['Offen', 'In Arbeit', 'Blockiert', 'Fertig'];

const tasks = ref([
    {
        id: 1,
        task: 'Webseite Relaunch',
        initials: 'M',
        owner: 'Max Mustermann',
        progress: 100,
        status: 'Fertig',
        severity: 'success',
        dueDate: '03.06.2026'
    },
    {
        id: 2,
        task: 'Mobile App',
        initials: 'A',
        owner: 'Anna Schmidt',
        progress: 45,
        status: 'In Arbeit',
        severity: 'warn',
        dueDate: '10.06.2026'
    },
    {
        id: 3,
        task: 'Marketing Kampagne',
        initials: 'L',
        owner: 'Lisa Weber',
        progress: 0,
        status: 'Offen',
        severity: 'info',
        dueDate: '18.05.2026'
    },
    {
        id: 4,
        task: 'API Migration',
        initials: 'P',
        owner: 'Paul Müller',
        progress: 72,
        status: 'Blockiert',
        severity: 'danger',
        dueDate: '12.05.2026',
        overdue: true
    }
]);

const actionItems = [
    { label: 'Bearbeiten', icon: 'pi pi-pencil' },
    { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
    { label: 'Löschen', icon: 'pi pi-trash' }
];

const toggleActions = (event) => {
    actionsMenu.value?.toggle(event);
};

onMounted(async () => {
    await nextTick();
    statusSelect.value?.show?.();
    if (actionsTrigger.value?.$el) {
        actionsMenu.value?.toggle({
            currentTarget: actionsTrigger.value.$el,
            target: actionsTrigger.value.$el
        });
    }
});
</script>