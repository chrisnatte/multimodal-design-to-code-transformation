<template>
  <div class="relative h-[323px] w-[777px] bg-white p-6">
    <DataTable
      :value="projects"
      class="w-[600px]"
      dataKey="project"
      :pt="{
        table: { class: 'w-[600px] border-collapse' },
        thead: { class: 'border-y border-slate-200' },
        tbody: { class: 'divide-y divide-slate-200' }
      }"
    >
      <Column field="project" style="width: 224px" headerClass="!p-0" bodyClass="!p-0">
        <template #header>
          <div class="flex h-[39px] items-center px-3.5 text-sm font-semibold text-slate-900">
            Projekt
          </div>
        </template>
        <template #body="{ data }">
          <div class="flex h-[50px] items-center px-3.5 text-sm text-slate-900">
            {{ data.project }}
          </div>
        </template>
      </Column>

      <Column field="status" style="width: 160px" headerClass="!p-0" bodyClass="!p-0">
        <template #header>
          <div class="flex h-[39px] items-center px-3.5 text-sm font-semibold text-slate-900">
            Status
          </div>
        </template>
        <template #body="{ data }">
          <div class="flex h-[50px] items-center px-3.5">
            <Tag :value="data.status" :severity="data.severity" class="text-xs font-bold" />
          </div>
        </template>
      </Column>

      <Column field="dueDate" style="width: 124px" headerClass="!p-0" bodyClass="!p-0">
        <template #header>
          <div class="flex h-[39px] items-center px-3.5 text-sm font-semibold text-slate-900">
            Fällig
          </div>
        </template>
        <template #body="{ data }">
          <div class="flex h-[50px] items-center px-3.5 text-sm text-slate-900">
            {{ data.dueDate }}
          </div>
        </template>
      </Column>

      <Column style="width: 92px" headerClass="!p-0" bodyClass="!p-0">
        <template #header>
          <div class="flex h-[39px] items-center px-3.5 text-sm font-semibold text-slate-900">
            Aktionen
          </div>
        </template>
        <template #body="{ index }">
          <div class="flex h-[50px] items-center justify-center px-3.5">
            <Button
              :ref="(element) => setActionButton(element, index)"
              icon="pi pi-ellipsis-h"
              :severity="index === 0 ? 'primary' : 'secondary'"
              :text="index !== 1"
              size="small"
              aria-label="Aktionen anzeigen"
              @click="toggleActions($event, index)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsPopover" appendTo="self">
      <div class="flex w-[192px] flex-col gap-2 border border-slate-200 bg-white p-2.5">
        <Button
          label="Bearbeiten"
          icon="pi pi-pencil"
          severity="secondary"
          outlined
          size="small"
          class="w-full !justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          size="small"
          class="w-full !justify-start"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          size="small"
          class="w-full !justify-start"
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
const actionButtons = ref([])
const activeAction = ref(1)

const projects = [
  {
    project: 'Webseite Relaunch',
    status: 'Aktiv',
    severity: 'success',
    dueDate: '15.04.2026'
  },
  {
    project: 'Mobile App',
    status: 'In Prüfung',
    severity: 'warn',
    dueDate: '24.04.2026'
  },
  {
    project: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    severity: 'secondary',
    dueDate: '09.05.2026'
  },
  {
    project: 'API Migration',
    status: 'Gestoppt',
    severity: 'danger',
    dueDate: '12.06.2026'
  }
]

const setActionButton = (element, index) => {
  actionButtons.value[index] = element?.$el ?? element
}

const toggleActions = (event, index) => {
  activeAction.value = index
  actionsPopover.value.toggle(event)
}

onMounted(async () => {
  await nextTick()

  const target = actionButtons.value[activeAction.value]

  if (target) {
    actionsPopover.value.show({ currentTarget: target })
  }
})
</script>