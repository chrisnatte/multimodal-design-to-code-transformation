<template>
  <div class="min-h-[410px] bg-white p-6 font-sans text-[#34445f]">
    <DataTable
      :value="users"
      class="w-[728px] text-sm"
      table-style="width: 728px; table-layout: fixed"
    >
      <Column header="Nutzer" header-class="w-[256px]" body-class="w-[256px]">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.initial"
              shape="circle"
              class="h-7 w-7 !bg-[#e2e8f0] !text-sm !text-[#34445f]"
            />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status" header-class="w-[108px]" body-class="w-[108px]">
        <template #body="{ data }">
          <Tag
            :value="data.status"
            :severity="data.severity"
            class="!px-[7px] !py-[3px] !text-[12px] !font-bold"
          />
        </template>
      </Column>

      <Column header="Fortschritt" header-class="w-[256px]" body-class="w-[256px]">
        <template #body="{ data }">
          <div class="flex w-full flex-col gap-1">
            <div class="flex items-end justify-between">
              <span class="text-[10px] leading-3">{{ data.course }}</span>
              <span class="text-xs leading-[15px]">{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :show-value="false" class="h-[6px]" />
          </div>
        </template>
      </Column>

      <Column header="Aktion" header-class="w-[108px]" body-class="w-[108px]">
        <template #body="{ data }">
          <div class="flex justify-center">
            <Button
              :ref="data.id === 3 ? setLisaAction : undefined"
              icon="pi pi-ellipsis-h"
              text
              severity="secondary"
              size="small"
              :class="data.id === selectedUser ? '!bg-[#f1f5f9]' : ''"
              aria-label="Aktion anzeigen"
              @click="toggleActions($event, data.id)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsPopover" class="actions-popover">
      <div class="flex w-[169px] flex-col gap-2">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pencil"
          severity="secondary"
          outlined
          class="!h-[33px] !justify-start !text-sm"
          @click="performAction('Profil bearbeiten')"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          severity="secondary"
          outlined
          class="!h-[33px] !justify-start !text-sm"
          @click="performAction('Status ändern')"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          class="!h-[33px] !justify-start !text-sm"
          @click="performAction('Duplizieren')"
        />
        <Button
          label="Deaktiveren"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          class="!h-[33px] !justify-start !text-sm"
          @click="performAction('Deaktiveren')"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'
import Popover from 'primevue/popover'

const actionsPopover = ref()
const lisaAction = ref()
const selectedUser = ref(3)
const lastAction = ref('')

const users = ref([
  {
    id: 1,
    initial: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    severity: 'danger',
    course: 'Zertifizierung',
    progress: 45
  },
  {
    id: 2,
    initial: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    severity: 'success',
    course: 'Onboarding',
    progress: 87
  },
  {
    id: 3,
    initial: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    severity: 'warn',
    course: 'Onboarding',
    progress: 4
  },
  {
    id: 4,
    initial: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    severity: 'warn',
    course: 'Onboarding',
    progress: 11
  }
])

const setLisaAction = (element) => {
  lisaAction.value = element?.$el || element
}

const toggleActions = (event, id) => {
  selectedUser.value = id
  actionsPopover.value.toggle(event)
}

const performAction = (action) => {
  lastAction.value = action
  actionsPopover.value.hide()
}

onMounted(async () => {
  await nextTick()

  if (lisaAction.value) {
    actionsPopover.value.show({ currentTarget: lisaAction.value })
  }
})
</script>

<style scoped>
:deep(.p-datatable-table-container) {
  overflow: visible;
}

:deep(.p-datatable-thead > tr > th) {
  height: 39px;
  padding: 10px 14px;
  border-width: 0 0 1px;
  border-color: #e2e8f0;
  background: #ffffff;
  color: #34445f;
  font-size: 14px;
  font-weight: 600;
}

:deep(.p-datatable-tbody > tr > td) {
  height: 50px;
  padding: 10px 14px;
  border-width: 0 0 1px;
  border-color: #e2e8f0;
  background: #ffffff;
  color: #34445f;
  font-size: 14px;
}

:deep(.p-tag.p-tag-danger) {
  background: #fee2e2;
  color: #dc2626;
}

:deep(.p-tag.p-tag-success) {
  background: #dcfce7;
  color: #15803d;
}

:deep(.p-tag.p-tag-warn) {
  background: #ffedd5;
  color: #ea580c;
}

:deep(.p-progressbar) {
  background: #e2e8f0;
  border-radius: 999px;
}

:deep(.p-progressbar-value) {
  background: #10b981;
}

:deep(.p-popover.actions-popover) {
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  box-shadow: 0 3px 5px rgb(0 0 0 / 0.18);
}

:deep(.actions-popover .p-popover-content) {
  padding: 10px;
}

:deep(.actions-popover .p-popover-arrow) {
  display: none;
}

:deep(.actions-popover .p-button) {
  border-color: #e2e8f0;
  color: #61738f;
}

:deep(.actions-popover .p-button .p-button-icon) {
  font-size: 14px;
}
</style>