<template>
  <div class="min-h-screen bg-white font-sans text-slate-700">
    <aside class="fixed inset-y-0 left-0 w-64 bg-slate-100 px-6 py-6">
      <div class="mb-6 text-base font-medium text-slate-700">Navigation</div>

      <nav class="flex flex-col gap-4">
        <Button
          label="Dashboard"
          icon="pi pi-th-large"
          severity="success"
          class="h-8 justify-start !border-emerald-200 !bg-emerald-100 !text-emerald-500"
        />
        <Button
          label="Kunden"
          icon="pi pi-users"
          outlined
          severity="secondary"
          class="h-8 justify-start !border-slate-500 !text-slate-500"
        />
        <Button
          label="Berichte"
          icon="pi pi-file"
          outlined
          severity="secondary"
          class="h-8 justify-start !border-slate-500 !text-slate-500"
        />
        <Button
          label="Einstellungen"
          icon="pi pi-cog"
          outlined
          severity="secondary"
          class="h-8 justify-start !border-slate-500 !text-slate-500"
        />
      </nav>
    </aside>

    <main class="ml-64 px-6 py-4">
      <div class="mx-auto max-w-[1010px]">
        <header class="mb-4">
          <h1 class="text-[34px] font-bold leading-10 text-slate-700">Dashboard</h1>
          <p class="text-base text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
        </header>

        <section class="mb-6 flex gap-5">
          <Card class="w-48 !bg-slate-100 shadow-sm">
            <template #content>
              <div class="-my-1">
                <div class="text-[26px] font-medium text-slate-700">42.8 Tsd.</div>
                <div class="mt-1 text-sm text-slate-500">Umsatz in €</div>
                <Tag value="+12 %" severity="success" class="mt-2 !text-xs" />
              </div>
            </template>
          </Card>

          <Card class="w-48 !bg-slate-100 shadow-sm">
            <template #content>
              <div class="-my-1">
                <div class="text-[26px] font-medium text-slate-700">1.247</div>
                <div class="mt-1 text-sm text-slate-500">Bestellungen</div>
                <Tag value="+8 %" severity="success" class="mt-2 !text-xs" />
              </div>
            </template>
          </Card>

          <Card class="w-48 !bg-slate-100 shadow-sm">
            <template #content>
              <div class="-my-1">
                <div class="text-[26px] font-medium text-slate-700">3.891</div>
                <div class="mt-1 text-sm text-slate-500">Nutzer</div>
                <Tag value="+2 %" severity="warning" class="mt-2 !text-xs" />
              </div>
            </template>
          </Card>

          <Card class="w-48 !bg-slate-100 shadow-sm">
            <template #content>
              <div class="-my-1">
                <div class="text-[26px] font-medium text-slate-700">89</div>
                <div class="mt-1 text-sm text-slate-500">Retouren</div>
                <Tag value="+23 %" severity="danger" class="mt-2 !text-xs" />
              </div>
            </template>
          </Card>
        </section>

        <section class="mb-6 flex items-start gap-4">
          <div class="h-[395px] w-[693px] rounded-lg bg-slate-100 p-4">
            <div class="mb-4 flex items-center justify-between">
              <span class="text-sm font-semibold">Filter</span>
              <i class="pi pi-angle-down text-sm"></i>
            </div>

            <div class="flex gap-[72px]">
              <div class="w-[216px]">
                <label class="mb-1 block text-sm">Zeitraum</label>
                <InputText
                  v-model="dateText"
                  class="h-8 w-full !border-emerald-500 !text-sm"
                  placeholder="Zeitraum wählen"
                />
                <div class="mt-0.5 overflow-hidden rounded-b-lg bg-white shadow-md">
                  <DatePicker
                    v-model="selectedDate"
                    inline
                    class="w-full"
                  />
                </div>
              </div>

              <div class="w-[216px]">
                <label class="mb-1 block text-sm">Status</label>
                <Select
                  v-model="selectedStatus"
                  :options="statuses"
                  optionLabel="label"
                  placeholder="Status auswählen"
                  class="h-8 w-full !border-emerald-500 !text-sm"
                />
                <Card class="mt-0.5 !border !border-slate-200 shadow-md">
                  <template #content>
                    <IconField class="-mt-2 mb-1">
                      <InputText
                        v-model="statusSearch"
                        placeholder="Suche..."
                        class="h-8 w-full !text-sm"
                      />
                      <InputIcon class="pi pi-search text-sm" />
                    </IconField>
                    <Listbox
                      v-model="selectedStatus"
                      :options="statuses"
                      optionLabel="label"
                      class="-mx-2 -mb-2 border-0 !text-sm"
                    />
                  </template>
                </Card>
              </div>

              <div class="w-36">
                <label class="mb-3 block text-sm">Zustand</label>
                <div class="flex items-center gap-4">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="active" binary inputId="active" />
                    <label for="active" class="text-sm">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archive" binary inputId="archive" />
                    <label for="archive" class="text-sm">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" severity="success" class="h-8 !text-sm" />
            <Card class="w-48 !border !border-slate-200 shadow-md">
              <template #content>
                <div class="-my-2 flex flex-col gap-2">
                  <Button label="Als CSV exportieren" outlined severity="secondary" class="h-8 justify-start !text-sm" />
                  <Button label="Als PDF exportieren" outlined severity="secondary" class="h-8 justify-start !text-sm" />
                </div>
              </template>
            </Card>
          </div>
        </section>

        <section class="w-[1008px]">
          <DataTable :value="orders" class="text-sm">
            <Column field="product" header="Produkt" class="w-[38%]" />
            <Column header="Status" class="w-[16%]">
              <template #body="{ data }">
                <Tag :value="data.status" :severity="data.severity" class="!text-xs" />
              </template>
            </Column>
            <Column field="date" header="Bestelldatum" class="w-[12%]" />
            <Column field="amount" header="Summe" class="w-[12%]" />
            <Column field="quantity" header="Stück" class="w-[12%]" />
            <Column header="Aktionen" class="w-[10%]">
              <template #body="{ index }">
                <Button
                  icon="pi pi-ellipsis-h"
                  text
                  rounded
                  :severity="index === 0 ? 'success' : 'secondary'"
                  class="h-7 w-7"
                />
              </template>
            </Column>
          </DataTable>

          <Card class="ml-[930px] -mt-[53px] w-48 !border !border-slate-200 shadow-md">
            <template #content>
              <div class="-my-2 flex flex-col gap-2">
                <Button label="Bearbeiten" icon="pi pi-pen-to-square" outlined severity="secondary" class="h-8 justify-start !text-sm" />
                <Button label="Status aktualisieren" icon="pi pi-list-check" outlined severity="secondary" class="h-8 justify-start !text-sm" />
                <Button label="Löschen" icon="pi pi-trash" outlined severity="secondary" class="h-8 justify-start !text-sm" />
              </div>
            </template>
          </Card>
        </section>
      </div>
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
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const dateText = ref('')
const selectedDate = ref(new Date(2024, 6, 1))
const statusSearch = ref('')
const active = ref(true)
const archive = ref(false)

const statuses = ref([
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' }
])

const selectedStatus = ref(statuses.value[0])

const orders = ref([
  { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', amount: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warning', date: '24.04.2026', amount: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', amount: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', amount: '10.250 €', quantity: '2' }
])
</script>