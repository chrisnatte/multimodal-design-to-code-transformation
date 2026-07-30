<template>
    <main class="min-h-screen bg-white p-4 font-[Inter,Arial,sans-serif] text-surface-900">
        <section class="flex items-center gap-4">
            <Button
                icon="pi pi-arrow-circle-left"
                rounded
                severity="secondary"
                aria-label="Zurück"
                class="!h-[50px] !w-[50px] !bg-surface-100 !text-surface-700 !border-surface-100"
            />
            <div class="flex h-[58px] flex-col gap-1">
                <h1 class="m-0 text-[32px] font-bold leading-[39px]">Projektaufgaben</h1>
                <p class="m-0 text-base leading-[19px]">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
            </div>
        </section>

        <div class="ml-[66px] mt-3 w-fit">
            <Breadcrumb :home="home" :model="breadcrumbItems" class="!border-0 !bg-white !p-3.5">
                <template #separator>
                    <i class="pi pi-chevron-right text-xs text-surface-500" />
                </template>
            </Breadcrumb>
        </div>

        <section class="ml-[66px] mt-4 flex items-start gap-4">
            <div class="flex w-[216px] flex-col gap-2">
                <label for="task-search" class="text-sm">Suche</label>
                <span class="relative">
                    <i class="pi pi-search absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-surface-500" />
                    <InputText
                        id="task-search"
                        v-model="searchValue"
                        placeholder="Suche..."
                        class="h-[33px] w-full !pl-9 text-sm"
                    />
                </span>
            </div>

            <div class="flex w-[216px] flex-col gap-2">
                <label for="status-filter" class="text-sm">Status</label>
                <Select
                    id="status-filter"
                    v-model="selectedStatus"
                    :options="statusOptions"
                    placeholder="Status auswählen"
                    class="h-[33px] w-full text-sm"
                />
            </div>
        </section>

        <section class="ml-[66px] mt-4 w-[1472px]">
            <DataTable
                v-model:selection="selectedTasks"
                :value="tasks"
                dataKey="id"
                showGridlines
                tableStyle="width: 1472px; table-layout: fixed"
                class="text-sm"
            >
                <Column selectionMode="multiple" headerStyle="width: 72px" bodyStyle="width: 72px" />
                <Column field="task" header="Aufgabe" headerStyle="width: 512px" bodyStyle="width: 512px" />
                <Column header="Verantwortlicher" headerStyle="width: 256px" bodyStyle="width: 256px">
                    <template #body="{ data }">
                        <div class="flex items-center gap-3">
                            <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-surface-200 !text-sm !text-surface-700" />
                            <span>{{ data.assignee }}</span>
                        </div>
                    </template>
                </Column>
                <Column header="Status" headerStyle="width: 256px" bodyStyle="width: 256px">
                    <template #body="{ data }">
                        <div class="flex items-center gap-3">
                            <ProgressBar
                                :value="data.progress"
                                :showValue="false"
                                class="h-[6px] flex-1"
                            />
                            <span class="w-[34px] text-xs">{{ data.progress }} %</span>
                        </div>
                    </template>
                </Column>
                <Column header="Status" headerStyle="width: 160px" bodyStyle="width: 160px">
                    <template #body="{ data }">
                        <Tag :value="data.status" :severity="data.severity" class="!text-xs" />
                    </template>
                </Column>
                <Column field="dueDate" header="Fällig" headerStyle="width: 124px" bodyStyle="width: 124px" />
                <Column header="Aktionen" headerStyle="width: 92px" bodyStyle="width: 92px">
                    <template #body="{ data }">
                        <div class="flex justify-center">
                            <Button
                                icon="pi pi-ellipsis-h"
                                severity="secondary"
                                variant="text"
                                size="small"
                                aria-label="Aktionen anzeigen"
                                :class="{ '!bg-surface-100': data.id === 2 }"
                                @click="toggleActions($event, data)"
                            />
                        </div>
                    </template>
                </Column>
            </DataTable>
        </section>

        <Popover ref="actionPopover" appendTo="body">
            <div class="flex w-[177px] flex-col gap-2">
                <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" variant="outlined" size="small" fluid />
                <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" variant="outlined" size="small" fluid />
                <Button label="Löschen" icon="pi pi-trash" severity="secondary" variant="outlined" size="small" fluid />
            </div>
        </Popover>
    </main>
</template>

<script setup>
import { ref } from 'vue';
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

const searchValue = ref('');
const selectedStatus = ref(null);
const selectedTasks = ref([]);
const actionPopover = ref(null);
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
        assignee: 'Max Mustermann',
        progress: 100,
        status: 'Fertig',
        severity: 'success',
        dueDate: '03.06.2026'
    },
    {
        id: 2,
        task: 'Mobile App',
        initials: 'A',
        assignee: 'Anna Schmidt',
        progress: 45,
        status: 'In Arbeit',
        severity: 'warn',
        dueDate: '10.06.2026'
    },
    {
        id: 3,
        task: 'Marketing Kampagne',
        initials: 'L',
        assignee: 'Lisa Weber',
        progress: 0,
        status: 'Offen',
        severity: 'info',
        dueDate: '18.05.2026'
    },
    {
        id: 4,
        task: 'API Migration',
        initials: 'P',
        assignee: 'Paul Müller',
        progress: 72,
        status: 'Blockiert',
        severity: 'danger',
        dueDate: '12.05.2026'
    }
]);

function toggleActions(event, task) {
    activeTask.value = task;
    actionPopover.value?.toggle(event);
}
</script>