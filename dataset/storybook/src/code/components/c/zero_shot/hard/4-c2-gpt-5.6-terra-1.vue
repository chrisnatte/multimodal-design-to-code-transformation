<template>
    <div class="min-h-[323px] bg-surface-0 px-6 pt-7 text-surface-700">
        <DataTable
            :value="projects"
            dataKey="project"
            size="small"
            class="w-[600px]"
            tableStyle="min-width: 600px"
            :pt="{
                table: { class: 'text-sm' },
                headerCell: { class: 'font-semibold text-surface-700' }
            }"
        >
            <Column field="project" header="Projekt" style="width: 38%"></Column>

            <Column header="Status" style="width: 27%">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="data.severity" class="text-xs font-semibold" />
                </template>
            </Column>

            <Column field="dueDate" header="Fällig" style="width: 21%"></Column>

            <Column header="Aktionen" style="width: 14%">
                <template #body="{ data }">
                    <Button
                        v-if="data.project === 'Mobile App'"
                        ref="activeActionButton"
                        icon="pi pi-ellipsis-h"
                        severity="secondary"
                        variant="text"
                        rounded
                        aria-label="Aktionen für Mobile App"
                        class="!bg-surface-100"
                        @click="toggleActions"
                    />
                    <Button
                        v-else
                        icon="pi pi-ellipsis-h"
                        severity="secondary"
                        variant="text"
                        rounded
                        :aria-label="`Aktionen für ${data.project}`"
                        @click="toggleActions"
                    />
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover" :dismissable="true" class="!mt-1">
            <div class="flex w-[170px] flex-col gap-2">
                <Button
                    label="Bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="!justify-start"
                    @click="hideActions"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="!justify-start"
                    @click="hideActions"
                />
                <Button
                    label="Löschen"
                    icon="pi pi-trash"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="!justify-start"
                    @click="hideActions"
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

const hideActions = () => {
    actionsPopover.value.hide();
};

onMounted(async () => {
    await nextTick();

    const buttonElement = activeActionButton.value?.$el;

    if (buttonElement) {
        actionsPopover.value.show({ currentTarget: buttonElement });
    }
});
</script>