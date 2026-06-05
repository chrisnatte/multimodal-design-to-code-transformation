<template>
  <div class="relative w-full bg-white p-6">
    <div class="w-full max-w-[760px]">
      <DataTable :value="state.users" class="text-sm" tableClass="w-full">
        <Column header="Nutzer" style="width: 36%">
          <template #body="{ data }">
            <div class="flex items-center gap-3 py-1">
              <Avatar :label="data.initials" shape="circle" class="bg-slate-200 text-slate-600" />
              <span class="text-slate-700">{{ data.name }}</span>
            </div>
          </template>
        </Column>

        <Column header="Status" style="width: 15%">
          <template #body="{ data }">
            <Tag
              :value="data.status"
              :severity="data.statusSeverity"
              :pt="{ root: { class: 'px-2 py-1 text-xs font-semibold' } }"
            />
          </template>
        </Column>

        <Column header="Fortschritt" style="width: 37%">
          <template #body="{ data }">
            <div class="flex w-full flex-col gap-1">
              <div class="flex items-center justify-between text-[12px] text-slate-500">
                <span>{{ data.track }}</span>
                <span class="text-slate-600">{{ data.progress }} %</span>
              </div>
              <ProgressBar
                :value="data.progress"
                :showValue="false"
                class="h-2"
                :pt="{
                  root: { class: 'bg-slate-200 rounded-full h-2' },
                  value: { class: 'bg-emerald-500 rounded-l-full' }
                }"
              />
            </div>
          </template>
        </Column>

        <Column header="Aktion" style="width: 12%">
          <template #body="{ data, index }">
            <Button
              icon="pi pi-ellipsis-h"
              text
              rounded
              size="small"
              class="text-slate-600"
              @click="toggleMenu($event, index)"
            />
          </template>
        </Column>
      </DataTable>
    </div>

    <OverlayPanel ref="menuRef" class="w-[250px]">
      <div class="flex flex-col gap-2 p-1">
        <Button label="Profil bearbeiten" icon="pi pi-pencil" outlined severity="secondary" class="justify-start" />
        <Button label="Status ändern" icon="pi pi-flag" outlined severity="secondary" class="justify-start" />
        <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" class="justify-start" />
        <Button label="Deaktivieren" icon="pi pi-trash" outlined severity="secondary" class="justify-start" />
      </div>
    </OverlayPanel>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'
import OverlayPanel from 'primevue/overlaypanel'

const menuRef = ref()
const state = reactive({
  activeRow: 2,
  users: [
    { initials: 'M', name: 'Max Mustermann', status: 'In Prüfung', statusSeverity: 'danger', track: 'Zertifizierung', progress: 45 },
    { initials: 'A', name: 'Anna Schmidt', status: 'Aktiv', statusSeverity: 'success', track: 'Onboarding', progress: 87 },
    { initials: 'L', name: 'Lisa Weber', status: 'Inaktiv', statusSeverity: 'warn', track: 'Onboarding', progress: 4 },
    { initials: 'P', name: 'Paul Müller', status: 'Inaktiv', statusSeverity: 'warn', track: 'Onboarding', progress: 11 }
  ]
})

const toggleMenu = (event, index) => {
  state.activeRow = index
  menuRef.value.toggle(event)
}
</script>