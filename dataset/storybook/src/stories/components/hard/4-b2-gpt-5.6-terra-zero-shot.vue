<template>
    <div class="flex bg-white p-6">
        <DataTable
            :value="projects"
            dataKey="project"
            class="w-[600px]"
            tableStyle="width: 600px"
            :tableProps="{ 'aria-label': 'Projektaktionen' }"
        >
            <Column
                field="project"
                header="Projekt"
                headerStyle="width: 224px; min-width: 224px; padding: 10.5px 14px; border: 1px solid #e2e8f0;"
                bodyStyle="width: 224px; min-width: 224px; padding: 10.5px 14px; border: 1px solid #e2e8f0;"
            />
            <Column
                header="Status"
                headerStyle="width: 160px; min-width: 160px; padding: 10.5px 14px; border: 1px solid #e2e8f0;"
                bodyStyle="width: 160px; min-width: 160px; padding: 10.5px 14px; border: 1px solid #e2e8f0;"
            >
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="data.severity" />
                </template>
            </Column>
            <Column
                field="dueDate"
                header="Fällig"
                headerStyle="width: 124px; min-width: 124px; padding: 10.5px 14px; border: 1px solid #e2e8f0;"
                bodyStyle="width: 124px; min-width: 124px; padding: 10.5px 14px; border: 1px solid #e2e8f0;"
            />
            <Column
                header="Aktionen"
                headerStyle="width: 92px; min-width: 92px; padding: 10.5px 14px; border: 1px solid #e2e8f0;"
                bodyStyle="width: 92px; min-width: 92px; padding: 10.5px 14px; border: 1px solid #e2e8f0;"
            >
                <template #body="{ data }">
                    <div class="flex justify-center">
                        <Button
                            icon="pi pi-ellipsis-h"
                            variant="text"
                            severity="secondary"
                            aria-label="Aktionen anzeigen"
                            class="h-7 w-[35px]"
                            @click="openActions($event, data)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover" aria-label="Projektaktionen">
            <div class="flex w-[169px] flex-col gap-2">
                <Button
                    label="Bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    variant="outlined"
                    fluid
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    variant="outlined"
                    fluid
                />
                <Button
                    label="Löschen"
                    icon="pi pi-trash"
                    severity="secondary"
                    variant="outlined"
                    fluid
                />
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Popover from 'primevue/popover';
import Tag from 'primevue/tag';

const actionsPopover = ref();
const selectedProject = ref(null);

const projects = ref([
    {
        project: 'Webseite Relaunch',
        status: 'Aktiv',
        severity: 'success',
        dueDate: '15.04.2026'
    },
    {
        project: 'Mobile App',
        status: 'In Prüfung',
        severity: 'warn',
        dueDate: '24.04.2026'
    },
    {
        project: 'Marketing Kampagne',
        status: 'Abgeschlossen',
        severity: 'secondary',
        dueDate: '09.05.2026'
    },
    {
        project: 'API Migration',
        status: 'Gestoppt',
        severity: 'danger',
        dueDate: '12.06.2026'
    }
]);

const openActions = (event, project) => {
    selectedProject.value = project;
    actionsPopover.value.toggle(event);
};
</script>