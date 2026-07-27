<template>
    <div class="h-[323px] w-[777px] bg-white p-6">
        <DataTable
            :value="projects"
            dataKey="project"
            class="w-[600px]"
            tableClass="w-[600px]"
            tableStyle="width: 600px"
            :pt="{
                table: { class: 'border-collapse' },
                thead: { class: 'border border-surface-200' },
                tbody: { class: 'border-x border-b border-surface-200' }
            }"
        >
            <Column
                field="project"
                header="Projekt"
                headerClass="!h-[39px] !w-[224px] !px-3.5 !py-[10.5px] !text-sm !font-semibold"
                bodyClass="!h-[50px] !w-[224px] !px-3.5 !py-[10.5px] !text-sm"
            />
            <Column
                field="status"
                header="Status"
                headerClass="!h-[39px] !w-[160px] !px-3.5 !py-[10.5px] !text-sm !font-semibold"
                bodyClass="!h-[50px] !w-[160px] !px-3.5 !py-[10.5px]"
            >
                <template #body="slotProps">
                    <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" class="!text-xs !font-bold" />
                </template>
            </Column>
            <Column
                field="dueDate"
                header="Fällig"
                headerClass="!h-[39px] !w-[124px] !px-3.5 !py-[10.5px] !text-sm !font-semibold"
                bodyClass="!h-[50px] !w-[124px] !px-3.5 !py-[10.5px] !text-sm"
            />
            <Column
                header="Aktionen"
                headerClass="!h-[39px] !w-[92px] !px-3.5 !py-[10.5px] !text-sm !font-semibold"
                bodyClass="!h-[50px] !w-[92px] !px-3.5 !py-[10.5px]"
            >
                <template #body="slotProps">
                    <div class="flex items-center justify-center">
                        <Button
                            :ref="slotProps.data.project === 'Mobile App' ? setInitialActionButton : undefined"
                            type="button"
                            icon="pi pi-ellipsis-h"
                            text
                            :severity="slotProps.data.project === 'Webseite Relaunch' ? undefined : 'secondary'"
                            aria-label="Aktionen anzeigen"
                            class="!h-7 !w-[35px] !p-0"
                            :class="{ '!bg-surface-100': slotProps.data.project === 'Mobile App' }"
                            @click="toggleActions($event, slotProps.data)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover" appendTo="self">
            <div class="flex w-[192px] flex-col p-[10.5px]">
                <div class="flex flex-col gap-2">
                    <Button
                        label="Bearbeiten"
                        icon="pi pi-pen-to-square"
                        severity="secondary"
                        outlined
                        class="!h-[33px] !w-[169px] !justify-start !text-sm"
                    />
                    <Button
                        label="Duplizieren"
                        icon="pi pi-clone"
                        severity="secondary"
                        outlined
                        class="!h-[33px] !w-[169px] !justify-start !text-sm"
                    />
                    <Button
                        label="Löschen"
                        icon="pi pi-trash"
                        severity="secondary"
                        outlined
                        class="!h-[33px] !w-[169px] !justify-start !text-sm"
                    />
                </div>
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

const actionsPopover = ref(null)
const initialActionButton = ref(null)
const selectedProject = ref(null)

const projects = ref([
    { project: 'Webseite Relaunch', status: 'Aktiv', severity: undefined, dueDate: '15.04.2026' },
    { project: 'Mobile App', status: 'In Prüfung', severity: 'warn', dueDate: '24.04.2026' },
    { project: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', dueDate: '09.05.2026' },
    { project: 'API Migration', status: 'Gestoppt', severity: 'danger', dueDate: '12.06.2026' }
])

const setInitialActionButton = (component) => {
    initialActionButton.value = component
}

const toggleActions = (event, project) => {
    selectedProject.value = project
    actionsPopover.value?.toggle(event)
}

onMounted(async () => {
    await nextTick()

    if (initialActionButton.value?.$el) {
        selectedProject.value = projects.value[1]
        actionsPopover.value?.show({ currentTarget: initialActionButton.value.$el })
    }
})
</script>