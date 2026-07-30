<template>
    <main class="min-h-screen bg-white px-[58px] pt-3 text-surface-600">
        <header class="flex items-start gap-3">
            <Button
                icon="pi pi-arrow-left"
                severity="secondary"
                variant="text"
                rounded
                aria-label="Zurück"
                class="!mt-0.5 !h-9 !w-9 !border !border-surface-200 !bg-surface-50 !p-0"
            />
            <div>
                <h1 class="m-0 text-2xl font-bold leading-7 text-surface-700">Projektaufgaben</h1>
                <p class="mt-1 text-sm text-surface-500">
                    Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
                </p>
            </div>
        </header>

        <section class="ml-2 mt-4 w-[1048px]">
            <Breadcrumb :home="home" :model="breadcrumbItems" class="!border-0 !bg-transparent !p-0 text-xs" />

            <div class="mt-5 flex items-end gap-3">
                <div class="flex w-[153px] flex-col gap-1">
                    <label for="task-search" class="text-xs font-medium text-surface-600">Suche</label>
                    <span class="relative">
                        <i class="pi pi-search absolute left-2 top-1/2 -translate-y-1/2 text-xs text-surface-400"></i>
                        <InputText
                            id="task-search"
                            v-model="searchTerm"
                            placeholder="Suche..."
                            size="small"
                            class="w-full !pl-6"
                        />
                    </span>
                </div>

                <div class="flex w-[154px] flex-col gap-1">
                    <label for="status-filter" class="text-xs font-medium text-surface-600">Status</label>
                    <Select
                        ref="statusSelect"
                        v-model="statusFilter"
                        inputId="status-filter"
                        :options="statusOptions"
                        placeholder="Status auswählen"
                        size="small"
                        class="w-full"
                    />
                </div>
            </div>

            <DataTable
                v-model:selection="selectedTasks"
                :value="tasks"
                dataKey="id"
                size="small"
                class="mt-2"
                tableStyle="min-width: 65.5rem"
                :pt="{
                    headerCell: { class: '!bg-white !px-3 !py-2 !text-xs !font-semibold !text-surface-600' },
                    bodyCell: { class: '!px-3 !py-2 !text-xs !text-surface-600' }
                }"
            >
                <Column headerStyle="width: 3.2rem" bodyStyle="width: 3.2rem">
                    <template #header>
                        <Checkbox v-model="allSelected" binary aria-label="Alle Aufgaben auswählen" />
                    </template>
                    <template #body="{ data }">
                        <Checkbox v-model="selectedTaskIds" :value="data.id" aria-label="Aufgabe auswählen" />
                    </template>
                </Column>

                <Column field="task" header="Aufgabe" headerStyle="width: 23rem">
                    <template #body="{ data }">
                        <span>{{ data.task }}</span>
                    </template>
                </Column>

                <Column header="Verantwortlicher" headerStyle="width: 12rem">
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <Avatar :label="data.initials" shape="circle" class="!h-5 !w-5 !bg-surface-200 !text-[10px] !text-surface-500" />
                            <span>{{ data.owner }}</span>
                        </div>
                    </template>
                </Column>

                <Column header="Status" headerStyle="width: 11.5rem">
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <ProgressBar :value="data.progress" :showValue="false" class="h-1 w-[130px]" />
                            <span class="w-7 text-right text-[10px]">{{ data.progress }} %</span>
                        </div>
                    </template>
                </Column>

                <Column header="Status" headerStyle="width: 7rem">
                    <template #body="{ data }">
                        <Tag :value="data.status" :severity="data.severity" class="!px-1.5 !py-0.5 !text-[10px]" />
                    </template>
                </Column>

                <Column header="Fällig" headerStyle="width: 6.8rem">
                    <template #body="{ data }">
                        <span :class="{ 'text-red-500': data.overdue }">{{ data.due }}</span>
                    </template>
                </Column>

                <Column header="Aktionen" headerStyle="width: 4.5rem" bodyStyle="width: 4.5rem">
                    <template #body="{ data }">
                        <Button
                            v-if="data.id === 2"
                            ref="actionButton"
                            icon="pi pi-ellipsis-h"
                            severity="secondary"
                            variant="text"
                            rounded
                            size="small"
                            aria-label="Aktionen"
                            class="!h-6 !w-6 !bg-surface-100 !p-0"
                            @click="toggleActions"
                        />
                        <Button
                            v-else
                            icon="pi pi-ellipsis-h"
                            severity="secondary"
                            variant="text"
                            rounded
                            size="small"
                            aria-label="Aktionen"
                            class="!h-6 !w-6 !p-0"
                            @click="toggleActions"
                        />
                    </template>
                </Column>
            </DataTable>
        </section>

        <Popover ref="actionPopover" appendTo="self" aria-label="Aufgabenaktionen">
            <div class="flex w-[126px] flex-col gap-1">
                <Button
                    label="Bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    class="!justify-start !border-surface-200 !px-2 !py-1.5 !text-[10px]"
                />
                <Button
                    label="Status aktualisieren"
                    icon="pi pi-list"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    class="!justify-start !border-surface-200 !px-2 !py-1.5 !text-[10px]"
                />
                <Button
                    label="Löschen"
                    icon="pi pi-trash"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    class="!justify-start !border-surface-200 !px-2 !py-1.5 !text-[10px]"
                />
            </div>
        </Popover>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import Popover from 'primevue/popover';
import ProgressBar from 'primevue/progressbar';
import Select from 'primevue/select';
import Tag from 'primevue/tag';

const searchTerm = ref('');
const statusFilter = ref(null);
const selectedTasks = ref([]);
const selectedTaskIds = ref([1]);
const allSelected = ref(false);
const statusSelect = ref();
const actionPopover = ref();
const actionButton = ref();

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

const toggleActions = (event) => {
    actionPopover.value.toggle(event);
};
</script>