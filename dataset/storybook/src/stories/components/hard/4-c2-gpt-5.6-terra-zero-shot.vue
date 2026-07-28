<template>
    <div class="min-h-screen bg-white px-6 pt-8">
        <DataTable
            :value="projects"
            dataKey="project"
            class="w-[600px]"
            tableStyle="width: 600px"
            :pt="{
                table: { class: 'text-sm' }
            }"
        >
            <Column field="project" header="Projekt" style="width: 38%"></Column>

            <Column header="Status" style="width: 27%">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="data.severity" class="text-xs" />
                </template>
            </Column>

            <Column field="dueDate" header="Fällig" style="width: 21%"></Column>

            <Column header="Aktionen" style="width: 14%">
                <template #body="{ data, index }">
                    <Button
                        :ref="index === 1 ? 'activeActionButton' : undefined"
                        icon="pi pi-ellipsis-h"
                        variant="text"
                        severity="secondary"
                        size="small"
                        :aria-label="`Aktionen für ${data.project}`"
                        @click="toggleActions($event)"
                    />
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover" :dismissable="false">
            <div class="flex w-44 flex-col gap-2">
                <Button
                    label="Bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="justify-start"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="justify-start"
                />
                <Button
                    label="Löschen"
                    icon="pi pi-trash"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="justify-start"
                />
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Popover from 'primevue/popover';
import Tag from 'primevue/tag';

const actionsPopover = ref();
const activeActionButton = ref();

const projects = ref([
    { project: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', dueDate: '15.04.2026' },
    { project: 'Mobile App', status: 'In Prüfung', severity: 'warn', dueDate: '24.04.2026' },
    { project: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', dueDate: '09.05.2026' },
    { project: 'API Migration', status: 'Gestoppt', severity: 'danger', dueDate: '12.06.2026' }
]);

const toggleActions = (event) => {
    actionsPopover.value.toggle(event);
};

onMounted(async () => {
    await nextTick();

    if (activeActionButton.value?.$el) {
        actionsPopover.value.show({ currentTarget: activeActionButton.value.$el });
    }
});
</script>