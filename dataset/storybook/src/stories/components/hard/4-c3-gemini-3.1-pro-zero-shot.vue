<template>
    <div class="p-8 bg-white">
        <DataTable :value="projects" tableStyle="min-width: 40rem">
            <Column field="name" header="Projekt" class="w-1/3">
                <template #body="{ data }">
                    <span class="text-surface-700 font-medium">{{ data.name }}</span>
                </template>
            </Column>
            <Column field="status" header="Status" class="w-1/4">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" class="!font-semibold" />
                </template>
            </Column>
            <Column field="date" header="Fällig" class="w-1/4">
                <template #body="{ data }">
                    <span class="text-surface-600">{{ data.date }}</span>
                </template>
            </Column>
            <Column header="Aktionen" class="w-1/6">
                <template #body="{ data, event }">
                    <Button icon="pi pi-ellipsis-h" text rounded class="!text-surface-500 hover:!bg-surface-100" @click="togglePopover($event, data)" />
                </template>
            </Column>
        </DataTable>

        <Popover ref="op" appendTo="body">
            <div class="flex flex-col gap-2 w-48 p-1">
                <Button label="Bearbeiten" icon="pi pi-file-edit" variant="outlined" class="w-full justify-start !text-surface-600 !border-surface-200 hover:!bg-surface-50" />
                <Button label="Duplizieren" icon="pi pi-copy" variant="outlined" class="w-full justify-start !text-surface-600 !border-surface-200 hover:!bg-surface-50" />
                <Button label="Löschen" icon="pi pi-trash" variant="outlined" class="w-full justify-start !text-surface-600 !border-surface-200 hover:!bg-surface-50" />
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const projects = ref([
    { id: 1, name: 'Webseite Relaunch', status: 'Aktiv', date: '15.04.2026' },
    { id: 2, name: 'Mobile App', status: 'In Prüfung', date: '24.04.2026' },
    { id: 3, name: 'Marketing Kampagne', status: 'Abgeschlossen', date: '09.05.2026' },
    { id: 4, name: 'API Migration', status: 'Gestoppt', date: '12.06.2026' }
]);

const op = ref();
const selectedProject = ref(null);

const togglePopover = (event, data) => {
    selectedProject.value = data;
    op.value.toggle(event);
};

const getSeverity = (status) => {
    switch (status) {
        case 'Aktiv':
            return 'success';
        case 'In Prüfung':
            return 'warn';
        case 'Abgeschlossen':
            return 'secondary';
        case 'Gestoppt':
            return 'danger';
        default:
            return 'info';
    }
};
</script>