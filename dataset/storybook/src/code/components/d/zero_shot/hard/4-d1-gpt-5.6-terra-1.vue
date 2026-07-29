<template>
  <div class="relative min-h-[323px] w-[777px] bg-white p-6 font-sans">
    <DataTable
      :value="projects"
      class="w-[600px] text-sm"
      tableStyle="width: 600px; table-layout: fixed"
      :pt="{
        table: { class: 'border-collapse' },
        thead: { class: 'border-b border-slate-200' },
        tbody: { class: 'divide-y divide-slate-200' }
      }"
    >
      <Column
        field="project"
        header="Projekt"
        style="width: 224px"
        headerClass="!px-3.5 !py-2.5 !font-semibold !text-slate-700"
        bodyClass="!h-[50px] !px-3.5 !py-2.5 !text-slate-700"
      />
      <Column
        header="Status"
        style="width: 160px"
        headerClass="!px-3.5 !py-2.5 !font-semibold !text-slate-700"
        bodyClass="!h-[50px] !px-3.5 !py-2.5"
      >
        <template #body="{ data }">
          <Tag
            :value="data.status"
            :severity="data.severity"
            class="!px-[7px] !py-[3px] !text-[12px] !font-bold"
          />
        </template>
      </Column>
      <Column
        field="dueDate"
        header="Fällig"
        style="width: 124px"
        headerClass="!px-3.5 !py-2.5 !font-semibold !text-slate-700"
        bodyClass="!h-[50px] !px-3.5 !py-2.5 !text-slate-700"
      />
      <Column
        header="Aktionen"
        style="width: 92px"
        headerClass="!px-3.5 !py-2.5 !font-semibold !text-slate-700"
        bodyClass="!h-[50px] !px-3.5 !py-2.5"
      >
        <template #body="{ index }">
          <div class="flex justify-center">
            <Button
              :ref="(element) => setActionButton(element, index)"
              icon="pi pi-ellipsis-h"
              text
              severity="secondary"
              size="small"
              aria-label="Aktionen anzeigen"
              class="!h-7 !w-[35px] !p-0"
              :class="selectedIndex === index ? '!bg-slate-100' : ''"
              @click="openActions($event, index)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover
      ref="actionsPopover"
      :pt="{
        root: { class: '!w-48 !rounded-md !border !border-slate-200 !shadow-md' },
        content: { class: '!p-2.5' },
        arrow: { class: '!hidden' }
      }"
    >
      <div class="flex flex-col gap-2">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          outlined
          severity="secondary"
          size="small"
          class="!h-[33px] !w-full !justify-start !text-sm"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          outlined
          severity="secondary"
          size="small"
          class="!h-[33px] !w-full !justify-start !text-sm"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          outlined
          severity="secondary"
          size="small"
          class="!h-[33px] !w-full !justify-start !text-sm"
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

const projects = ref([
  { project: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', dueDate: '15.04.2026' },
  { project: 'Mobile App', status: 'In Prüfung', severity: 'warn', dueDate: '24.04.2026' },
  { project: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', dueDate: '09.05.2026' },
  { project: 'API Migration', status: 'Gestoppt', severity: 'danger', dueDate: '12.06.2026' }
])

const actionsPopover = ref()
const actionButtons = ref([])
const selectedIndex = ref(1)

const setActionButton = (element, index) => {
  actionButtons.value[index] = element?.$el ?? element
}

const openActions = (event, index) => {
  selectedIndex.value = index
  actionsPopover.value.show(event)
}

onMounted(async () => {
  await nextTick()

  if (actionButtons.value[1]) {
    actionsPopover.value.show({ currentTarget: actionButtons.value[1] })
  }
})
</script>