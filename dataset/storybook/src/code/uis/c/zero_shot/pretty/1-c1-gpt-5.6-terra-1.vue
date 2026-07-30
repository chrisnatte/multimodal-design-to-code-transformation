<template>
  <div class="flex min-h-screen bg-white font-sans text-[#34445e]">
    <aside class="w-64 bg-slate-100 px-6 py-6">
      <p class="mb-6 text-base font-medium">Navigation</p>

      <nav class="flex flex-col gap-4">
        <Button label="Dashboard" icon="pi pi-th-large" class="justify-start !border-emerald-200 !bg-emerald-100 !text-emerald-500" />
        <Button label="Kunden" icon="pi pi-users" outlined class="justify-start !border-slate-500 !text-slate-500" />
        <Button label="Berichte" icon="pi pi-file" outlined class="justify-start !border-slate-500 !text-slate-500" />
        <Button label="Einstellungen" icon="pi pi-cog" outlined class="justify-start !border-slate-500 !text-slate-500" />
      </nav>
    </aside>

    <main class="w-full max-w-[1160px] px-6 py-4">
      <header class="mb-5">
        <h1 class="text-[34px] font-bold leading-tight text-[#344056]">Dashboard</h1>
        <p class="text-base text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <section class="mb-6 flex gap-4">
        <Card v-for="metric in metrics" :key="metric.label" class="w-[194px] !bg-slate-100 shadow-sm">
          <template #content>
            <div class="-my-2">
              <p class="text-[26px] font-medium text-[#344056]">{{ metric.value }}</p>
              <p class="mt-1 text-sm text-slate-500">{{ metric.label }}</p>
              <Tag :value="metric.change" :severity="metric.severity" class="mt-2 !text-xs" />
            </div>
          </template>
        </Card>
      </section>

      <section class="mb-6 flex items-start gap-4">
        <Card class="h-[395px] w-[693px] !bg-slate-100 shadow-none">
          <template #content>
            <div class="-my-2">
              <div class="mb-4 flex items-center justify-between">
                <span class="text-sm font-semibold">Filter</span>
                <i class="pi pi-angle-down text-sm"></i>
              </div>

              <div class="flex gap-[72px]">
                <div class="w-[216px]">
                  <label class="mb-1 block text-sm">Zeitraum</label>
                  <InputText v-model="period" placeholder="Zeitraum wählen" class="h-[34px] w-full !border-emerald-500 !text-sm" />
                  <div class="mt-0.5 rounded-md bg-white p-3 shadow-md">
                    <DatePicker v-model="selectedDate" inline class="w-full" />
                  </div>
                </div>

                <div class="w-[216px]">
                  <label class="mb-1 block text-sm">Status</label>
                  <Select
                    v-model="status"
                    :options="statusOptions"
                    optionLabel="label"
                    placeholder="Status auswählen"
                    class="h-[34px] w-full !border-emerald-500 !text-sm"
                  />
                  <div class="mt-0.5 rounded-md bg-white p-1 shadow-md">
                    <div class="relative mb-1">
                      <InputText v-model="search" placeholder="Suche..." class="h-[36px] w-full !pr-8 !text-sm" />
                      <i class="pi pi-search absolute right-3 top-3 text-sm text-slate-400"></i>
                    </div>
                    <Listbox v-model="status" :options="statusOptions" optionLabel="label" class="border-0 !text-sm" />
                  </div>
                </div>

                <div class="w-[145px]">
                  <label class="mb-3 block text-sm">Zustand</label>
                  <div class="flex items-center gap-3">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="active" binary inputId="active" />
                      <label for="active" class="text-sm">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="archived" binary inputId="archived" />
                      <label for="archived" class="text-sm">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <div class="pt-px">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" class="h-[34px] !bg-emerald-500 !border-emerald-500 !text-sm" />
          <Menu :model="exportItems" class="mt-3 w-[192px] !rounded-md !shadow-md" />
        </div>
      </section>

      <section class="w-[1008px]">
        <DataTable :value="orders" class="text-sm" tableStyle="min-width: 100%">
          <Column field="product" header="Produkt" headerClass="!font-semibold" class="w-[38%]" />
          <Column header="Status" headerClass="!font-semibold" class="w-[16%]">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" class="!text-xs" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" headerClass="!font-semibold" class="w-[13%]" />
          <Column field="sum" header="Summe" headerClass="!font-semibold" class="w-[12%]" />
          <Column field="quantity" header="Stück" headerClass="!font-semibold" class="w-[12%]" />
          <Column header="Aktionen" headerClass="!font-semibold" class="w-[9%]">
            <template #body="{ index }">
              <div class="relative">
                <Button icon="pi pi-ellipsis-h" text rounded size="small" :class="index === 2 ? '!bg-slate-100' : ''" />
                <Menu v-if="index === 2" :model="actionItems" class="absolute right-[-166px] top-[36px] z-10 w-[200px] !rounded-md !shadow-md" />
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
const selectedDate = ref(new Date(2024, 6, 15))
const status = ref(null)
const search = ref('')
const active = ref(true)
const archived = ref(false)

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
]

const statusOptions = [
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' }
]

const orders = [
  { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', sum: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', sum: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', sum: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', sum: '10.250 €', quantity: '2' }
]

const exportItems = ref([
  { label: 'Als CSV exportieren' },
  { label: 'Als PDF exportieren' }
])

const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])
</script>