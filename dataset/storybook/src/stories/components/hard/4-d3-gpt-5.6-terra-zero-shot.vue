<template>
    <div class="min-h-[323px] w-[777px] bg-white p-6">
        <DataTable
            :value="projects"
            dataKey="project"
            class="w-[600px] text-sm"
            :tableStyle="{ width: '600px', tableLayout: 'fixed' }"
            :pt="dataTablePt"
        >
            <Column field="project" header="Projekt" style="width: 224px" />
            <Column header="Status" style="width: 160px">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="data.severity" class="!rounded !px-[7px] !py-[3px] !text-[12px] !font-bold !leading-[15px]" />
                </template>
            </Column>
            <Column field="dueDate" header="Fällig" style="width: 124px" />
            <Column header="Aktionen" style="width: 92px">
                <template #body="{ data, index }">
                    <div class="flex justify-center">
                        <Button
                            icon="pi pi-ellipsis-h"
                            text
                            plain
                            aria-label="Aktionen anzeigen"
                            class="!h-7 !w-[35px] !p-0"
                            :class="{ '!bg-slate-100': activeRow === index }"
                            @click="toggleActions($event, index)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover" class="!w-48" :pt="popoverPt">
            <div class="flex flex-col gap-2">
                <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined fluid class="!h-[33px] !justify-start !text-sm" />
                <Button label="Duplizieren" icon="pi pi-clone" severity="secondary" outlined fluid class="!h-[33px] !justify-start !text-sm" />
                <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined fluid class="!h-[33px] !justify-start !text-sm" />
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
const activeRow = ref(1)

const projects = [
    { project: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', dueDate: '15.04.2026' },
    { project: 'Mobile App', status: 'In Prüfung', severity: 'warn', dueDate: '24.04.2026' },
    { project: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', dueDate: '09.05.2026' },
    { project: 'API Migration', status: 'Gestoppt', severity: 'danger', dueDate: '12.06.2026' }
]

const dataTablePt = {
    headerCell: {
        class: '!border-x-0 !border-t-0 !border-b !border-slate-200 !bg-white !px-3.5 !py-[10.5px] !text-sm !font-semibold !text-slate-700'
    },
    bodyCell: {
        class: '!h-[50px] !border-x-0 !border-t-0 !border-b !border-slate-200 !bg-white !px-3.5 !py-[10.5px] !text-sm !text-slate-700'
    }
}

const popoverPt = {
    root: {
        class: '!rounded-md !border !border-slate-200 !shadow-md'
    },
    content: {
        class: '!p-[10.5px]'
    }
}

const toggleActions = (event, index) => {
    activeRow.value = index
    actionsPopover.value.toggle(event)
}
</script>