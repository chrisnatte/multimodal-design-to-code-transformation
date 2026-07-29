<template>
    <div class="relative h-[323px] w-[777px] bg-white p-6 font-[Inter]">
        <DataTable
            :value="projects"
            dataKey="project"
            showGridlines
            class="w-[600px] text-sm"
            tableClass="w-[600px] table-fixed"
            :pt="{
                headerCell: { class: 'h-[39px] !bg-white !px-[14px] !py-[10px] !text-sm !font-semibold !text-surface-900' },
                bodyCell: { class: 'h-[50px] !bg-white !px-[14px] !py-[10px] !text-sm !text-surface-900' },
                bodyRow: { class: '!bg-white' }
            }"
        >
            <Column field="project" header="Projekt" headerStyle="width: 224px" bodyStyle="width: 224px">
                <template #body="{ data }">
                    <span class="block whitespace-nowrap">{{ data.project }}</span>
                </template>
            </Column>

            <Column field="status" header="Status" headerStyle="width: 160px" bodyStyle="width: 160px">
                <template #body="{ data }">
                    <Tag
                        :value="data.status"
                        :severity="data.severity"
                        class="!rounded-none !px-[7px] !py-[3px] !text-[12px] !font-bold"
                    />
                </template>
            </Column>

            <Column field="dueDate" header="Fällig" headerStyle="width: 124px" bodyStyle="width: 124px">
                <template #body="{ data }">
                    <span class="block whitespace-nowrap">{{ data.dueDate }}</span>
                </template>
            </Column>

            <Column header="Aktionen" headerStyle="width: 92px" bodyStyle="width: 92px">
                <template #body="{ data }">
                    <div class="flex items-center justify-center">
                        <Button
                            type="button"
                            icon="pi pi-ellipsis-h"
                            text
                            plain
                            aria-label="Aktionen anzeigen"
                            class="!h-7 !w-[35px] !p-0"
                            :class="{ '!bg-surface-100': data.project === 'Mobile App' }"
                            @click="toggleActions($event, data)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover" appendTo="self">
            <div class="flex w-[169px] flex-col gap-2">
                <Button
                    label="Bearbeiten"
                    icon="pi pi-pen-to-square"
                    severity="secondary"
                    outlined
                    class="!h-[33px] !justify-start !text-sm"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    outlined
                    class="!h-[33px] !justify-start !text-sm"
                />
                <Button
                    label="Löschen"
                    icon="pi pi-trash"
                    severity="secondary"
                    outlined
                    class="!h-[33px] !justify-start !text-sm"
                />
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Popover from 'primevue/popover'
import Tag from 'primevue/tag'

const actionsPopover = ref()
const selectedProject = ref(null)

const projects = [
    { project: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', dueDate: '15.04.2026' },
    { project: 'Mobile App', status: 'In Prüfung', severity: 'warn', dueDate: '24.04.2026' },
    { project: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', dueDate: '09.05.2026' },
    { project: 'API Migration', status: 'Gestoppt', severity: 'danger', dueDate: '12.06.2026' }
]

const toggleActions = (event, project) => {
    selectedProject.value = project
    actionsPopover.value.toggle(event)
}
</script>