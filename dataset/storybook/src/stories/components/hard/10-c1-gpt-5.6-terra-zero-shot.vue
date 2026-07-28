<template>
  <main class="min-h-screen bg-white px-6 py-6 font-sans text-slate-700">
    <section class="relative w-[728px]">
      <DataTable :value="users" class="w-full text-sm">
        <Column header="Nutzer" headerClass="w-[36%]">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <Avatar :label="data.initials" shape="circle" class="bg-slate-200 text-slate-600" />
              <span>{{ data.name }}</span>
            </div>
          </template>
        </Column>

        <Column header="Status" headerClass="w-[15%]">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.statusSeverity" />
          </template>
        </Column>

        <Column header="Fortschritt" headerClass="w-[37%]">
          <template #body="{ data }">
            <div class="flex w-[240px] flex-col gap-1">
              <div class="flex items-center justify-between text-[10px] text-slate-600">
                <span>{{ data.progressLabel }}</span>
                <span>{{ data.progress }} %</span>
              </div>
              <ProgressBar :value="data.progress" :showValue="false" class="h-1.5" />
            </div>
          </template>
        </Column>

        <Column header="Aktion" headerClass="w-[12%]">
          <template #body="{ data, index }">
            <Button
              icon="pi pi-ellipsis-h"
              text
              rounded
              severity="secondary"
              size="small"
              :class="index === 2 ? 'bg-slate-100' : ''"
              :aria-label="`Aktionen für ${data.name}`"
            />
          </template>
        </Column>
      </DataTable>

      <Menu
        :model="actionItems"
        class="absolute right-0 top-[183px] z-10 w-[216px] rounded-md border border-slate-200 bg-white p-2 shadow-md"
      />
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Menu from 'primevue/menu'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const users = ref([
  {
    initials: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    statusSeverity: 'danger',
    progressLabel: 'Zertifizierung',
    progress: 45
  },
  {
    initials: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    statusSeverity: 'success',
    progressLabel: 'Onboarding',
    progress: 87
  },
  {
    initials: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progress: 4
  },
  {
    initials: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progress: 11
  }
])

const actionItems = ref([
  {
    label: 'Profil bearbeiten',
    icon: 'pi pi-pencil'
  },
  {
    label: 'Status ändern',
    icon: 'pi pi-flag'
  },
  {
    label: 'Duplizieren',
    icon: 'pi pi-clone'
  },
  {
    label: 'Deaktivieren',
    icon: 'pi pi-trash'
  }
])
</script>