<template>
  <main class="min-h-screen bg-white px-[58px] py-[16px] font-sans text-slate-600">
    <header class="flex items-start gap-3">
      <Button
        icon="pi pi-arrow-left"
        rounded
        text
        aria-label="Zurück"
        class="!mt-0 !h-8 !w-8 !bg-slate-100 !text-slate-500"
      />
      <div>
        <h1 class="m-0 text-[23px] font-bold leading-7 text-slate-700">Projektaufgaben</h1>
        <p class="m-0 mt-0.5 text-[12px] text-slate-500">
          Hier werden alle Aufgaben des Projekts <strong class="font-semibold">Projekt 1</strong> aufgelistet.
        </p>
      </div>
    </header>

    <Breadcrumb :model="breadcrumbItems" class="!mt-4 !border-0 !bg-transparent !p-0 !text-[11px]" />

    <section class="mt-5 flex items-start gap-3">
      <div class="flex w-[153px] flex-col gap-1">
        <label for="search" class="text-[10px] text-slate-600">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search !text-[10px]" />
          <InputText
            id="search"
            v-model="searchQuery"
            placeholder="Suche..."
            class="!h-6 !w-[153px] !text-[10px]"
          />
        </IconField>
      </div>

      <div class="relative z-20 flex w-[154px] flex-col gap-1">
        <label for="status" class="text-[10px] text-slate-600">Status</label>
        <Select
          id="status"
          ref="statusSelect"
          v-model="selectedStatus"
          :options="statusOptions"
          placeholder="Status auswählen"
          class="!h-6 !w-[154px] !text-[10px]"
        />
      </div>
    </section>

    <section class="relative mt-10 w-[1048px]">
      <DataTable :value="tasks" class="!text-[10px]" table-style="min-width: 1048px">
        <Column header-style="width: 48px" body-style="width: 48px" class="!px-3">
          <template #header>
            <Checkbox v-model="allSelected" binary aria-label="Alle Aufgaben auswählen" />
          </template>
          <template #body="{ data }">
            <Checkbox v-model="data.selected" binary :aria-label="`${data.task} auswählen`" />
          </template>
        </Column>

        <Column field="task" header="Aufgabe" header-style="width: 364px" body-style="width: 364px" />
        <Column header="Verantwortlicher" header-style="width: 182px" body-style="width: 182px">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <Avatar :label="data.initials" shape="circle" class="!h-5 !w-5 !bg-slate-200 !text-[9px] !text-slate-500" />
              <span>{{ data.owner }}</span>
            </div>
          </template>
        </Column>

        <Column header="Status" header-style="width: 182px" body-style="width: 182px">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <ProgressBar
                :value="data.progress"
                :show-value="false"
                class="!h-1.5 !w-[129px] !bg-slate-200"
              />
              <span class="w-6 text-[9px]">{{ data.progress }} %</span>
            </div>
          </template>
        </Column>

        <Column header="Status" header-style="width: 114px" body-style="width: 114px">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.severity" class="!px-1.5 !py-0 !text-[9px]" />
          </template>
        </Column>

        <Column header="Fällig" header-style="width: 88px" body-style="width: 88px">
          <template #body="{ data }">
            <span :class="{ 'text-red-500': data.overdue }">{{ data.due }}</span>
          </template>
        </Column>

        <Column header="Aktionen" header-style="width: 70px" body-style="width: 70px">
          <template #body="{ data, index }">
            <Button
              icon="pi pi-ellipsis-h"
              text
              rounded
              size="small"
              :aria-label="`Aktionen für ${data.task}`"
              class="!h-6 !w-6 !text-slate-500"
              :class="{ '!bg-slate-100': index === 1 }"
              @click="activeAction = index"
            />
          </template>
        </Column>
      </DataTable>

      <Menu
        v-if="activeAction === 3"
        :model="actionItems"
        class="absolute right-[-97px] top-[69px] z-30 !w-[142px] !p-2 !text-[10px] shadow-md"
      />
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Menu from 'primevue/menu'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const searchQuery = ref('')
const selectedStatus = ref(null)
const allSelected = ref(false)
const activeAction = ref(3)
const statusSelect = ref(null)

const breadcrumbItems = ref([
  { icon: 'pi pi-home' },
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const statusOptions = ref([
  'Offen',
  'In Arbeit',
  'Blockiert',
  'Fertig'
])

const tasks = ref([
  {
    task: 'Webseite Relaunch',
    initials: 'M',
    owner: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    due: '03.06.2026',
    overdue: false,
    selected: true
  },
  {
    task: 'Mobile App',
    initials: 'A',
    owner: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    due: '10.06.2026',
    overdue: false,
    selected: false
  },
  {
    task: 'Marketing Kampagne',
    initials: 'L',
    owner: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    due: '18.05.2026',
    overdue: false,
    selected: false
  },
  {
    task: 'API Migration',
    initials: 'P',
    owner: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    severity: 'danger',
    due: '12.05.2026',
    overdue: true,
    selected: false
  }
])

const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])
</script>