<template>
  <div class="w-full max-w-4xl bg-white p-6">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer" class="w-1/3">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initial" shape="circle" class="bg-slate-100 text-slate-700" />
            <span class="text-sm font-normal text-slate-800">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="status" header="Status" class="w-1/6">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
      </Column>
      
      <Column field="progress" header="Fortschritt" class="w-1/3">
        <template #body="{ data }">
          <div class="flex w-60 flex-col gap-1">
            <div class="flex items-center justify-between text-xs text-slate-600">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progress }} %</span>
            </div>
            <ProgressBar 
              :value="data.progress" 
              :show-value="false" 
              class="!h-1.5" 
              :pt="{ value: { class: 'bg-emerald-500' } }" 
            />
          </div>
        </template>
      </Column>
      
      <Column header="Aktion" class="w-1/6">
        <template #body="{ event }">
          <Button 
            icon="pi pi-ellipsis-h" 
            severity="secondary" 
            text 
            aria-haspopup="true" 
            aria-controls="action_menu" 
            @click="toggleMenu" 
          />
        </template>
      </Column>
    </DataTable>

    <Menu 
      ref="menu" 
      id="action_menu" 
      :model="menuItems" 
      :popup="true" 
      :pt="{ list: 'flex flex-col gap-2 p-2.5' }"
    >
      <template #item="{ item }">
        <Button 
          :label="item.label" 
          :icon="item.icon" 
          severity="secondary" 
          outlined 
          class="w-full !justify-start" 
        />
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const users = ref([
  { initial: 'M', name: 'Max Mustermann', status: 'In Prüfung', progressLabel: 'Zertifizierung', progress: 45 },
  { initial: 'A', name: 'Anna Schmidt', status: 'Aktiv', progressLabel: 'Onboarding', progress: 87 },
  { initial: 'L', name: 'Lisa Weber', status: 'Inaktiv', progressLabel: 'Onboarding', progress: 4 },
  { initial: 'P', name: 'Paul Müller', status: 'Inaktiv', progressLabel: 'Onboarding', progress: 11 },
])

const getSeverity = (status: string) => {
  switch (status) {
    case 'In Prüfung': return 'danger'
    case 'Aktiv': return 'success'
    case 'Inaktiv': return 'warn'
    default: return 'info'
  }
}

const menu = ref()
const toggleMenu = (event: Event) => {
  menu.value.toggle(event)
}

const menuItems = ref([
  { label: 'Profil bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Status ändern', icon: 'pi pi-flag' },
  { label: 'Duplizieren', icon: 'pi pi-clone' },
  { label: 'Deaktiveren', icon: 'pi pi-trash' }
])
</script>