<template>
    <div class="min-h-[323px] w-full bg-white p-6">
        <DataTable
            :value="projects"
            dataKey="project"
            class="w-[600px] text-sm"
            :tableStyle="{ width: '600px', tableLayout: 'fixed' }"
            :pt="{
                table: { class: 'border-collapse' },
                headerRow: { class: 'border-b border-surface-200' },
                headerCell: { class: '!border-0 !bg-white !px-3.5 !py-2.5 !text-left !text-sm !font-semibold !text-surface-700' },
                bodyRow: { class: 'border-b border-surface-200 !bg-white' },
                bodyCell: { class: '!border-0 !px-3.5 !py-2.5 !text-sm !text-surface-700' }
            }"
        >
            <Column field="project" header="Projekt" :headerStyle="{ width: '224px' }" :bodyStyle="{ width: '224px' }" />
            <Column field="status" header="Status" :headerStyle="{ width: '160px' }" :bodyStyle="{ width: '160px' }">
                <template #body="{ data }">
                    <Tag
                        :value="data.status"
                        :severity="data.severity"
                        class="!rounded !px-2 !py-0.5 !text-[12px] !font-bold"
                    />
                </template>
            </Column>
            <Column field="dueDate" header="Fällig" :headerStyle="{ width: '124px' }" :bodyStyle="{ width: '124px' }" />
            <Column header="Aktionen" :headerStyle="{ width: '92px' }" :bodyStyle="{ width: '92px' }">
                <template #body="{ data }">
                    <div class="flex justify-center">
                        <Button
                            :ref="data.project === 'Mobile App' ? 'actionButton' : undefined"
                            icon="pi pi-ellipsis-h"
                            text
                            :severity="activeProject === data.project ? 'secondary' : undefined"
                            class="!h-7 !w-[35px] !p-0"
                            :aria-label="`Aktionen für ${data.project}`"
                            @click="toggleActions($event, data.project)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover" :dismissable="true">
            <div class="flex w-[190px] flex-col gap-2 p-2.5">
                <Button
                    label="Bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    outlined
                    class="!h-[33px] !justify-start !text-sm"
                    @click="actionsPopover?.hide()"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    outlined
                    class="!h-[33px] !justify-start !text-sm"
                    @click="actionsPopover?.hide()"
                />
                <Button
                    label="Löschen"
                    icon="pi pi-trash"
                    severity="secondary"
                    outlined
                    class="!h-[33px] !justify-start !text-sm"
                    @click="actionsPopover?.hide()"
                />
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Popover from 'primevue/popover'
import Tag from 'primevue/tag'

const actionsPopover = ref()
const actionButton = ref()
const activeProject = ref('Mobile App')

const projects = ref([
    { project: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', dueDate: '15.04.2026' },
    { project: 'Mobile App', status: 'In Prüfung', severity: 'warn', dueDate: '24.04.2026' },
    { project: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', dueDate: '09.05.2026' },
    { project: 'API Migration', status: 'Gestoppt', severity: 'danger', dueDate: '12.06.2026' }
])

const toggleActions = (event, project) => {
    activeProject.value = project
    actionsPopover.value.toggle(event)
}

onMounted(async () => {
    await nextTick()

    if (actionButton.value) {
        actionsPopover.value.show({ currentTarget: actionButton.value })
    }
})
</script>