<template>
    <div class="p-8 flex justify-center bg-white">
        <div class="w-full max-w-4xl">
            <DataTable :value="projects" tableStyle="min-width: 40rem">
                <Column field="name" header="Projekt" class="w-1/4 font-medium text-surface-900"></Column>
                <Column field="status" header="Status" class="w-1/4">
                    <template #body="{ data }">
                        <Tag :value="data.status" :severity="getSeverity(data.status)" class="font-semibold" />
                    </template>
                </Column>
                <Column field="dueDate" header="Fällig" class="w-1/4 text-surface-600"></Column>
                <Column header="Aktionen" class="w-1/4">
                    <template #body="{ data }">
                        <Button 
                            icon="pi pi-ellipsis-h" 
                            variant="text" 
                            severity="secondary" 
                            rounded 
                            aria-label="Aktionen"
                            @click="togglePopover($event, data)"
                            :class="{ 'bg-surface-100': selectedProject?.id === data.id && isPopoverVisible }"
                        />
                    </template>
                </Column>
            </DataTable>

            <Popover ref="op" @hide="onPopoverHide">
                <div class="flex flex-col gap-2 p-1 w-48">
                    <Button 
                        label="Bearbeiten" 
                        icon="pi pi-file-edit" 
                        variant="outlined" 
                        severity="secondary" 
                        class="w-full justify-start border-surface-200 text-surface-700 hover:bg-surface-50" 
                    />
                    <Button 
                        label="Duplizieren" 
                        icon="pi pi-copy" 
                        variant="outlined" 
                        severity="secondary" 
                        class="w-full justify-start border-surface-200 text-surface-700 hover:bg-surface-50" 
                    />
                    <Button 
                        label="Löschen" 
                        icon="pi pi-trash" 
                        variant="outlined" 
                        severity="secondary" 
                        class="w-full justify-start border-surface-200 text-surface-700 hover:bg-surface-50" 
                    />
                </div>
            </Popover>
        </div>
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
    { id: 1, name: 'Webseite Relaunch', status: 'Aktiv', dueDate: '15.04.2026' },
    { id: 2, name: 'Mobile App', status: 'In Prüfung', dueDate: '24.04.2026' },
    { id: 3, name: 'Marketing Kampagne', status: 'Abgeschlossen', dueDate: '09.05.2026' },
    { id: 4, name: 'API Migration', status: 'Gestoppt', dueDate: '12.06.2026' }
]);

const op = ref();
const selectedProject = ref(null);
const isPopoverVisible = ref(false);

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

const togglePopover = (event, project) => {
    selectedProject.value = project;
    isPopoverVisible.value = true;
    op.value.toggle(event);
};

const onPopoverHide = () => {
    isPopoverVisible.value = false;
    selectedProject.value = null;
};
</script>