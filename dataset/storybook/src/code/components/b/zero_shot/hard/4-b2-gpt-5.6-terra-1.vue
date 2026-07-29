<template>
    <div class="min-h-[323px] w-[777px] bg-white p-6">
        <DataTable
            :value="projects"
            showGridlines
            tableStyle="width: 600px"
            tableClass="text-sm"
            :pt="{
                headerCell: { class: 'h-[39px] !px-3.5 !py-2.5 font-semibold' },
                bodyCell: { class: 'h-[50px] !px-3.5 !py-2.5' }
            }"
        >
            <Column field="project" header="Projekt" style="width: 224px" />
            <Column header="Status" style="width: 160px">
                <template #body="{ data }">
                    <Tag
                        :value="data.status"
                        :severity="data.severity"
                        class="!px-[7px] !py-[3px] !text-[12px] !font-bold"
                    />
                </template>
            </Column>
            <Column field="dueDate" header="Fällig" style="width: 124px" />
            <Column header="Aktionen" style="width: 92px">
                <template #body="{ data }">
                    <div class="flex justify-center">
                        <Button
                            icon="pi pi-ellipsis-h"
                            variant="text"
                            severity="secondary"
                            size="small"
                            aria-label="Aktionen anzeigen"
                            @click="toggleActions($event, data)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover" aria-label="Projektaktionen">
            <div class="flex w-[169px] flex-col gap-2">
                <Button
                    label="Bearbeiten"
                    icon="pi pi-pen-to-square"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="justify-start"
                    @click="actionsPopover?.hide()"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="justify-start"
                    @click="actionsPopover?.hide()"
                />
                <Button
                    label="Löschen"
                    icon="pi pi-trash"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="justify-start"
                    @click="actionsPopover?.hide()"
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

const toggleActions = (event, project) => {
    selectedProject.value = project;
    actionsPopover.value.toggle(event);
};
</script>