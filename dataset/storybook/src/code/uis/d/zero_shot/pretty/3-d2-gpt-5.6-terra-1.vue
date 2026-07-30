<template>
    <main class="min-h-screen bg-white p-4 font-sans text-slate-600">
        <section class="w-full max-w-[1048px]">
            <header class="flex items-center gap-3">
                <Button
                    icon="pi pi-arrow-circle-left"
                    severity="secondary"
                    rounded
                    aria-label="Zurück"
                    class="!h-9 !w-9 !bg-slate-100 !text-slate-500"
                />
                <div class="flex flex-col gap-0.5">
                    <h1 class="m-0 text-[23px] font-bold leading-7 text-slate-700">Projektaufgaben</h1>
                    <p class="m-0 text-[12px] leading-4 text-slate-500">
                        Hier werden alle Aufgaben des Projekts <strong class="font-semibold">Projekt 1</strong> aufgelistet.
                    </p>
                </div>
            </header>

            <Breadcrumb :home="home" :model="breadcrumbItems" class="mt-4 !border-0 !bg-transparent !p-2 text-[11px]" />

            <div class="mt-4 flex items-start gap-3">
                <div class="flex w-[153px] flex-col gap-1">
                    <label for="task-search" class="text-[10px] text-slate-600">Suche</label>
                    <div class="relative">
                        <i class="pi pi-search absolute left-2 top-1/2 z-10 -translate-y-1/2 text-[10px] text-slate-400" />
                        <InputText
                            id="task-search"
                            v-model="search"
                            placeholder="Suche..."
                            class="!h-6 !w-full !py-1 !pl-6 !pr-2 !text-[10px]"
                        />
                    </div>
                </div>

                <div class="flex w-[154px] flex-col gap-1">
                    <label for="status-filter" class="text-[10px] text-slate-600">Status</label>
                    <Select
                        ref="statusSelect"
                        v-model="selectedStatus"
                        inputId="status-filter"
                        :options="statusOptions"
                        placeholder="Status auswählen"
                        appendTo="self"
                        class="!h-6 !w-full !text-[10px]"
                        :pt="{
                            root: { class: '!border-emerald-400' },
                            label: { class: '!py-1 !px-2 !text-[10px]' },
                            dropdown: { class: '!w-7' },
                            overlay: { class: '!mt-0 !text-[10px]' },
                            option: { class: '!px-2 !py-1.5 !text-[10px]' }
                        }"
                    />
                </div>
            </div>

            <DataTable
                :value="tasks"
                dataKey="id"
                v-model:selection="selectedTasks"
                class="mt-2 text-[10px]"
                tableStyle="width: 100%; table-layout: fixed"
                :pt="{
                    headerCell: { class: '!bg-white !px-3 !py-2 !text-[10px]' },
                    bodyCell: { class: '!px-3 !py-2 !text-[10px]' }
                }"
            >
                <Column selectionMode="multiple" headerStyle="width: 6%" bodyStyle="width: 6%" />
                <Column field="task" header="Aufgabe" headerStyle="width: 35%" bodyStyle="width: 35%" />
                <Column header="Verantwortlicher" headerStyle="width: 17.5%" bodyStyle="width: 17.5%">
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <Avatar :label="data.initials" shape="circle" class="!h-5 !w-5 !bg-slate-200 !text-[9px] !text-slate-500" />
                            <span class="whitespace-nowrap">{{ data.owner }}</span>
                        </div>
                    </template>
                </Column>
                <Column header="Status" headerStyle="width: 17.5%" bodyStyle="width: 17.5%">
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <ProgressBar
                                :value="data.progress"
                                :showValue="false"
                                class="h-1 flex-1"
                                :pt="{ value: { class: '!bg-emerald-500' } }"
                            />
                            <span class="w-6 text-right text-[9px]">{{ data.progress }} %</span>
                        </div>
                    </template>
                </Column>
                <Column header="Status" headerStyle="width: 11%" bodyStyle="width: 11%">
                    <template #body="{ data }">
                        <Tag
                            :value="data.status"
                            :severity="data.severity"
                            class="!px-1.5 !py-0.5 !text-[9px] !font-bold"
                        />
                    </template>
                </Column>
                <Column field="due" header="Fällig" headerStyle="width: 8.5%" bodyStyle="width: 8.5%">
                    <template #body="{ data }">
                        <span :class="{ 'text-red-500': data.overdue }">{{ data.due }}</span>
                    </template>
                </Column>
                <Column header="Aktionen" headerStyle="width: 7.5%" bodyStyle="width: 7.5%">
                    <template #body="{ data }">
                        <div class="flex justify-center">
                            <Button
                                :ref="data.id === 2 ? 'actionButton' : null"
                                icon="pi pi-ellipsis-h"
                                severity="secondary"
                                variant="text"
                                size="small"
                                aria-label="Aktionen"
                                class="!h-6 !w-6 !p-0"
                                @click="toggleActions($event, data)"
                            />
                        </div>
                    </template>
                </Column>
            </DataTable>
        </section>

        <Popover ref="actionPopover" class="!w-[142px]" :pt="{ content: { class: '!p-2' } }">
            <div class="flex flex-col gap-2">
                <Button
                    label="Bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="!justify-start !text-[10px]"
                />
                <Button
                    label="Status aktualisieren"
                    icon="pi pi-list-check"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="!justify-start !text-[10px]"
                />
                <Button
                    label="Löschen"
                    icon="pi pi-trash"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="!justify-start !text-[10px]"
                />
            </div>
        </Popover>
    </main>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Avatar from 'primevue/avatar';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import Popover from 'primevue/popover';
import ProgressBar from 'primevue/progressbar';
import Select from 'primevue/select';
import Tag from 'primevue/tag';

const search = ref('');
const selectedStatus = ref(null);
const selectedTasks = ref([]);
const statusSelect = ref();
const actionPopover = ref();
const actionButton = ref();
const activeTask = ref(null);

const home = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
    { label: 'Projekte' },
    { label: 'Projekt 1' },
    { label: 'Aufgaben' }
]);

const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

const tasks = ref([
    {
        id: 1,
        task: 'Webseite Relaunch',
        initials: 'M',
        owner: 'Max Mustermann',
        progress: 100,
        status: 'Fertig',
        severity: 'success',
        due: '03.06.2026',
        overdue: false
    },
    {
        id: 2,
        task: 'Mobile App',
        initials: 'A',
        owner: 'Anna Schmidt',
        progress: 45,
        status: 'In Arbeit',
        severity: 'warn',
        due: '10.06.2026',
        overdue: false
    },
    {
        id: 3,
        task: 'Marketing Kampagne',
        initials: 'L',
        owner: 'Lisa Weber',
        progress: 0,
        status: 'Offen',
        severity: 'info',
        due: '18.05.2026',
        overdue: false
    },
    {
        id: 4,
        task: 'API Migration',
        initials: 'P',
        owner: 'Paul Müller',
        progress: 72,
        status: 'Blockiert',
        severity: 'danger',
        due: '12.05.2026',
        overdue: true
    }
]);

const toggleActions = (event, task) => {
    activeTask.value = task;
    actionPopover.value?.toggle(event);
};

onMounted(async () => {
    await nextTick();
    statusSelect.value?.show?.();

    if (actionButton.value?.$el) {
        actionPopover.value?.show?.({ currentTarget: actionButton.value.$el });
    }
});
</script>