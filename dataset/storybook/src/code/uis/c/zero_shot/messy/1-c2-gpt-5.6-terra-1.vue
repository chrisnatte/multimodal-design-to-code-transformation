<template>
    <div class="flex min-h-screen bg-white font-sans text-slate-600">
        <aside class="w-44 shrink-0 bg-slate-100 px-4 py-4">
            <p class="mb-4 text-xs text-slate-600">Navigation</p>
            <nav class="flex flex-col gap-3">
                <Button
                    label="Dashboard"
                    icon="pi pi-th-large"
                    size="small"
                    class="justify-start"
                    :class="activeNavigation === 'Dashboard' ? '' : 'p-button-outlined'"
                    @click="activeNavigation = 'Dashboard'"
                />
                <Button
                    label="Kunden"
                    icon="pi pi-users"
                    size="small"
                    outlined
                    severity="secondary"
                    class="justify-start"
                    @click="activeNavigation = 'Kunden'"
                />
                <Button
                    label="Berichte"
                    icon="pi pi-file"
                    size="small"
                    outlined
                    severity="secondary"
                    class="justify-start"
                    @click="activeNavigation = 'Berichte'"
                />
                <Button
                    label="Einstellungen"
                    icon="pi pi-cog"
                    size="small"
                    outlined
                    severity="secondary"
                    class="justify-start"
                    @click="activeNavigation = 'Einstellungen'"
                />
            </nav>
        </aside>

        <main class="w-[720px] px-5 py-3">
            <header class="mb-3">
                <h1 class="m-0 text-2xl font-bold leading-7 text-slate-700">Dashboard</h1>
                <p class="mt-0.5 text-xs text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
            </header>

            <section class="mb-4 flex gap-3">
                <Card class="w-[139px] bg-slate-100 shadow-none">
                    <template #content>
                        <div class="flex flex-col gap-1">
                            <span class="text-lg font-medium leading-5 text-slate-700">42.8 Tsd.</span>
                            <span class="text-[10px] text-slate-500">Umsatz in €</span>
                            <Tag value="+12 %" severity="success" class="w-fit text-[9px]" />
                        </div>
                    </template>
                </Card>
                <Card class="w-[139px] bg-slate-100 shadow-none">
                    <template #content>
                        <div class="flex flex-col gap-1">
                            <span class="text-lg font-medium leading-5 text-slate-700">1247</span>
                            <span class="text-[10px] text-slate-500">Bestellungen</span>
                            <Tag value="+8 %" severity="success" class="w-fit text-[9px]" />
                        </div>
                    </template>
                </Card>
                <Card class="w-[139px] bg-slate-100 shadow-none">
                    <template #content>
                        <div class="flex flex-col gap-1">
                            <span class="text-lg font-medium leading-5 text-slate-700">3.891</span>
                            <span class="text-[10px] text-slate-500">Nutzer</span>
                            <Tag value="+2 %" severity="warn" class="w-fit text-[9px]" />
                        </div>
                    </template>
                </Card>
                <Card class="w-[139px] bg-slate-100 shadow-none">
                    <template #content>
                        <div class="flex flex-col gap-1">
                            <span class="text-lg font-medium leading-5 text-slate-700">89</span>
                            <span class="text-[10px] text-slate-500">Retouren</span>
                            <Tag value="+23 %" severity="danger" class="w-fit text-[9px]" />
                        </div>
                    </template>
                </Card>
            </section>

            <section class="mb-4 flex items-start gap-3">
                <Card class="w-[493px] bg-slate-100 shadow-none">
                    <template #title>
                        <div class="flex items-center justify-between text-[10px] font-semibold text-slate-600">
                            <span>Filter</span>
                            <i class="pi pi-chevron-down text-[10px]"></i>
                        </div>
                    </template>
                    <template #content>
                        <div class="flex gap-3">
                            <div class="w-[193px]">
                                <label class="mb-1 block text-[10px] text-slate-600">Zeitraum</label>
                                <InputText
                                    v-model="dateText"
                                    placeholder="Zeitraum wählen"
                                    class="h-6 w-full text-[10px]"
                                />
                                <DatePicker
                                    v-model="selectedDate"
                                    inline
                                    class="mt-1 w-full text-[10px]"
                                />
                            </div>

                            <div class="w-[155px]">
                                <label class="mb-1 block text-[10px] text-slate-600">Status</label>
                                <Select
                                    v-model="selectedStatus"
                                    :options="statuses"
                                    placeholder="Status auswählen"
                                    class="h-6 w-full text-[10px]"
                                />
                                <div class="mt-1 rounded border border-slate-200 bg-white p-1 shadow-md">
                                    <div class="relative mb-1">
                                        <InputText
                                            v-model="statusSearch"
                                            placeholder="Suche..."
                                            class="h-6 w-full pr-6 text-[10px]"
                                        />
                                        <i class="pi pi-search absolute right-2 top-2 text-[10px] text-slate-400"></i>
                                    </div>
                                    <Listbox
                                        v-model="selectedStatus"
                                        :options="statuses"
                                        class="border-0 text-[10px]"
                                        list-style="max-height: 94px"
                                    />
                                </div>
                            </div>

                            <div class="w-[105px]">
                                <label class="mb-1 block text-[10px] text-slate-600">Zustand</label>
                                <div class="flex items-center gap-2 pt-1">
                                    <div class="flex items-center gap-1">
                                        <Checkbox v-model="isActive" input-id="active" binary />
                                        <label for="active" class="text-[10px]">Aktiv</label>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <Checkbox v-model="isArchived" input-id="archiv" binary />
                                        <label for="archiv" class="text-[10px]">Archiv</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Card>

                <div class="flex w-[137px] flex-col gap-2">
                    <Button label="Exportieren" icon="pi pi-file-export" icon-pos="right" size="small" />
                    <Card class="shadow-sm">
                        <template #content>
                            <div class="flex flex-col gap-1">
                                <Button label="Als CSV exportieren" size="small" outlined severity="secondary" class="justify-start" />
                                <Button label="Als PDF exportieren" size="small" outlined severity="secondary" class="justify-start" />
                            </div>
                        </template>
                    </Card>
                </div>
            </section>

            <section class="relative">
                <DataTable :value="orders" size="small" class="text-[10px]">
                    <Column field="product" header="Produkt" class="w-[273px]" />
                    <Column header="Status" class="w-[113px]">
                        <template #body="{ data }">
                            <Tag :value="data.status" :severity="data.severity" class="text-[9px]" />
                        </template>
                    </Column>
                    <Column field="date" header="Bestelldatum" class="w-[91px]" />
                    <Column field="amount" header="Summe" class="w-[89px]" />
                    <Column field="quantity" header="Stück" class="w-[87px]" />
                    <Column header="Aktionen" class="w-[60px]">
                        <template #body="{ data }">
                            <Button
                                icon="pi pi-ellipsis-h"
                                text
                                rounded
                                size="small"
                                :severity="data.product === 'Widget Pro' ? 'success' : 'secondary'"
                                @click="selectedAction = data.product"
                            />
                        </template>
                    </Column>
                </DataTable>

                <Card v-if="selectedAction === 'Sensor X1'" class="absolute right-[-97px] top-[146px] w-[142px] shadow-md">
                    <template #content>
                        <div class="flex flex-col gap-1">
                            <Button label="Bearbeiten" icon="pi pi-pencil" size="small" outlined severity="secondary" class="justify-start" />
                            <Button label="Status aktualisieren" icon="pi pi-list" size="small" outlined severity="secondary" class="justify-start" />
                            <Button label="Löschen" icon="pi pi-trash" size="small" outlined severity="secondary" class="justify-start" />
                        </div>
                    </template>
                </Card>
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
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const activeNavigation = ref('Dashboard')
const dateText = ref('')
const selectedDate = ref(new Date(2024, 6, 15))
const selectedStatus = ref(null)
const statusSearch = ref('')
const isActive = ref(true)
const isArchived = ref(false)
const selectedAction = ref('Sensor X1')

const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])

const orders = ref([
    { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', amount: '12.400 €', quantity: '312' },
    { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', amount: '8.920 €', quantity: '485' },
    { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', amount: '6.100 €', quantity: '150' },
    { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', amount: '10.250 €', quantity: '2' }
])
</script>