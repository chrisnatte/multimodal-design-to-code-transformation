<template>
  <div class="min-h-screen flex bg-white text-slate-700 text-xs">
    <aside class="w-[182px] min-h-screen bg-slate-100 px-4 py-4 shrink-0">
      <p class="mb-4 text-slate-600">Navigation</p>

      <nav class="flex flex-col gap-3">
        <Button label="Dashboard" icon="pi pi-th-large" size="small" class="justify-start !bg-emerald-100 !border-emerald-200 !text-emerald-500" />
        <Button label="Kunden" icon="pi pi-users" outlined size="small" class="justify-start !text-slate-500 !border-slate-400" />
        <Button label="Berichte" icon="pi pi-file" outlined size="small" class="justify-start !text-slate-500 !border-slate-400" />
        <Button label="Einstellungen" icon="pi pi-cog" outlined size="small" class="justify-start !text-slate-500 !border-slate-400" />
      </nav>
    </aside>

    <main class="w-[820px] px-6 py-3">
      <header class="mb-3">
        <h1 class="m-0 text-2xl font-bold text-slate-700">Dashboard</h1>
        <p class="m-0 mt-1 text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <section class="mb-4 flex gap-3">
        <Card class="w-[139px] !bg-slate-100 !shadow-none">
          <template #content>
            <div class="-m-1">
              <div class="text-lg font-medium">42,8 Tsd.</div>
              <div class="mt-1 text-[10px] text-slate-500">Umsatz in €</div>
              <Tag value="+12 %" severity="success" class="mt-1 !text-[9px]" />
            </div>
          </template>
        </Card>

        <Card class="w-[139px] !bg-slate-100 !shadow-none">
          <template #content>
            <div class="-m-1">
              <div class="text-lg font-medium">1247</div>
              <div class="mt-1 text-[10px] text-slate-500">Bestellungen</div>
              <Tag value="+8 %" severity="success" class="mt-1 !text-[9px]" />
            </div>
          </template>
        </Card>

        <Card class="w-[139px] !bg-slate-100 !shadow-none">
          <template #content>
            <div class="-m-1">
              <div class="text-lg font-medium">3.891</div>
              <div class="mt-1 text-[10px] text-slate-500">Nutzer</div>
              <Tag value="+2 %" severity="warning" class="mt-1 !text-[9px]" />
            </div>
          </template>
        </Card>

        <Card class="w-[139px] !bg-slate-100 !shadow-none">
          <template #content>
            <div class="-m-1">
              <div class="text-lg font-medium">89</div>
              <div class="mt-1 text-[10px] text-slate-500">Retouren</div>
              <Tag value="+23 %" severity="danger" class="mt-1 !text-[9px]" />
            </div>
          </template>
        </Card>
      </section>

      <section class="mb-4 flex items-start gap-3">
        <div class="w-[493px] rounded-lg bg-slate-100 p-3">
          <div class="mb-3 flex items-center justify-between">
            <span class="font-semibold">Filter</span>
            <i class="pi pi-chevron-down text-[10px] text-slate-500"></i>
          </div>

          <div class="flex gap-3">
            <div class="w-[193px]">
              <label class="mb-1 block text-[10px]">Zeitraum</label>
              <InputText v-model="period" placeholder="Zeitraum wählen" size="small" class="w-full !border-emerald-400" />
              <div class="mt-1 rounded-md bg-white p-1 shadow-md">
                <DatePicker v-model="selectedDate" inline class="w-full" />
              </div>
            </div>

            <div class="w-[155px]">
              <label class="mb-1 block text-[10px]">Status</label>
              <Select v-model="selectedStatus" :options="statuses" placeholder="Status auswählen" size="small" class="w-full !border-emerald-400" />
              <div class="mt-1 rounded-md bg-white p-1 shadow-md">
                <div class="relative mb-1">
                  <InputText v-model="statusSearch" placeholder="Suche..." size="small" class="w-full !pr-7" />
                  <i class="pi pi-search absolute right-2 top-2 text-[10px] text-slate-400"></i>
                </div>
                <Listbox v-model="selectedStatus" :options="statuses" class="border-0 !text-[10px]" />
              </div>
            </div>

            <div class="w-[115px]">
              <label class="mb-2 block text-[10px]">Zustand</label>
              <div class="flex items-center gap-3 whitespace-nowrap">
                <div class="flex items-center gap-1">
                  <Checkbox v-model="active" binary inputId="active" />
                  <label for="active" class="text-[10px]">Aktiv</label>
                </div>
                <div class="flex items-center gap-1">
                  <Checkbox v-model="archive" binary inputId="archive" />
                  <label for="archive" class="text-[10px]">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" severity="success" size="small" />
          <Menu :model="exportItems" class="w-[137px] !text-[10px] !shadow-md" />
        </div>
      </section>

      <section>
        <DataTable :value="orders" size="small" class="text-[10px]">
          <Column field="product" header="Produkt" class="w-[275px]" />
          <Column header="Status" class="w-[113px]">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" class="!text-[9px]" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" class="w-[90px]" />
          <Column field="sum" header="Summe" class="w-[88px]" />
          <Column field="quantity" header="Stück" class="w-[88px]" />
          <Column header="Aktionen" class="w-[60px]">
            <template #body="{ index }">
              <Button v-if="index !== 2" icon="pi pi-ellipsis-h" text size="small" :class="index === 3 ? '!bg-slate-100' : ''" />
              <div v-else>
                <Button icon="pi pi-ellipsis-h" text size="small" class="!bg-slate-100" />
                <Menu :model="actionItems" class="absolute z-10 mt-1 w-[142px] !text-[10px] !shadow-md" />
              </div>
            </template>
          </Column>
        </DataTable>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import DatePicker from 'primevue/datepicker'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Menu from 'primevue/menu'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const period = ref('')
const selectedDate = ref(new Date(2024, 6, 1))
const selectedStatus = ref(null)
const statusSearch = ref('')
const active = ref(true)
const archive = ref(false)

const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])

const exportItems = ref([
  { label: 'Als CSV exportieren' },
  { label: 'Als PDF exportieren' }
])

const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

const orders = ref([
  { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', sum: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warning', date: '24.04.2026', sum: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', sum: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', sum: '10.250 €', quantity: '2' }
])
</script>