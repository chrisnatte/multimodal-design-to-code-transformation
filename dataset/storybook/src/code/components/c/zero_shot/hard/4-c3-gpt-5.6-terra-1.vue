<template>
    <div class="p-6">
        <DataTable
            :value="projects"
            class="w-[600px]"
            tableStyle="min-width: 600px"
            size="small"
        >
            <Column field="project" header="Projekt" class="w-[230px]">
                <template #body="{ data }">
                    <span class="text-sm text-surface-700">{{ data.project }}</span>
                </template>
            </Column>

            <Column field="status" header="Status" class="w-[160px]">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="data.severity" class="text-xs" />
                </template>
            </Column>

            <Column field="dueDate" header="Fällig" class="w-[125px]">
                <template #body="{ data }">
                    <span class="text-sm text-surface-700">{{ data.dueDate }}</span>
                </template>
            </Column>

            <Column header="Aktionen" class="w-[85px]">
                <template #body="{ data }">
                    <Button
                        v-if="data.project === 'Mobile App'"
                        ref="actionTarget"
                        icon="pi pi-ellipsis-h"
                        severity="secondary"
                        text
                        rounded
                        aria-label="Aktionen für Mobile App"
                        @click="toggleActions"
                    />
                    <Button
                        v-else
                        icon="pi pi-ellipsis-h"
                        severity="secondary"
                        text
                        rounded
                        :aria-label="`Aktionen für ${data.project}`"
                    />
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover" appendTo="self" class="w-[190px]">
            <div class="flex flex-col gap-2">
                <Button
                    label="Bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    class="justify-start"
                    fluid
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    class="justify-start"
                    fluid
                />
                <Button
                    label="Löschen"
                    icon="pi pi-trash"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    class="justify-start"
                    fluid
                />
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Popover from 'primevue/popover';
import Tag from 'primevue/tag';

const actionsPopover = ref();
const actionTarget = ref();

const projects = ref([
    { project: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', dueDate: '15.04.2026' },
    { project: 'Mobile App', status: 'In Prüfung', severity: 'warn', dueDate: '24.04.2026' },
    { project: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', dueDate: '09.05.2026' },
    { project: 'API Migration', status: 'Gestoppt', severity: 'danger', dueDate: '12.06.2026' }
]);

const toggleActions = (event) => {
    actionsPopover.value.toggle(event);
};

onMounted(() => {
    if (actionTarget.value?.$el) {
        actionsPopover.value.show({ currentTarget: actionTarget.value.$el });
    }
});
</script>