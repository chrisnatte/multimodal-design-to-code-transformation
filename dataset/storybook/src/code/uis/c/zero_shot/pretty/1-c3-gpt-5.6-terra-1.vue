<template>
    <div class="min-h-screen flex bg-slate-50 text-slate-700">
        <aside class="w-64 min-h-screen bg-slate-100 px-6 py-6">
            <div class="text-base font-medium mb-6">Navigation</div>

            <nav class="flex flex-col gap-4">
                <Button
                    label="Dashboard"
                    icon="pi pi-th-large"
                    severity="success"
                    class="justify-start !bg-emerald-100 !border-emerald-300 !text-emerald-500"
                />
                <Button
                    label="Kunden"
                    icon="pi pi-users"
                    severity="secondary"
                    outlined
                    class="justify-start !text-slate-500 !border-slate-500"
                />
                <Button
                    label="Berichte"
                    icon="pi pi-file"
                    severity="secondary"
                    outlined
                    class="justify-start !text-slate-500 !border-slate-500"
                />
                <Button
                    label="Einstellungen"
                    icon="pi pi-cog"
                    severity="secondary"
                    outlined
                    class="justify-start !text-slate-500 !border-slate-500"
                />
            </nav>
        </aside>

        <main class="flex-1 bg-white px-6 py-4">
            <section class="max-w-5xl">
                <h1 class="text-3xl font-bold text-slate-700 leading-tight">Dashboard</h1>
                <p class="mt-1 text-base text-slate-500">Bekomme eine Übersicht über die Projekte.</p>

                <div class="grid grid-cols-4 gap-5 mt-5">
                    <Card class="!bg-slate-100 !shadow-sm">
                        <template #content>
                            <div class="flex flex-col gap-1">
                                <div class="text-2xl font-medium">42.8 Tsd.</div>
                                <div class="text-sm text-slate-500">Umsatz in €</div>
                                <Tag value="+12 %" severity="success" class="w-fit !text-xs" />
                            </div>
                        </template>
                    </Card>

                    <Card class="!bg-slate-100 !shadow-sm">
                        <template #content>
                            <div class="flex flex-col gap-1">
                                <div class="text-2xl font-medium">1.247</div>
                                <div class="text-sm text-slate-500">Bestellungen</div>
                                <Tag value="+8 %" severity="success" class="w-fit !text-xs" />
                            </div>
                        </template>
                    </Card>

                    <Card class="!bg-slate-100 !shadow-sm">
                        <template #content>
                            <div class="flex flex-col gap-1">
                                <div class="text-2xl font-medium">3.891</div>
                                <div class="text-sm text-slate-500">Nutzer</div>
                                <Tag value="+2 %" severity="warn" class="w-fit !text-xs" />
                            </div>
                        </template>
                    </Card>

                    <Card class="!bg-slate-100 !shadow-sm">
                        <template #content>
                            <div class="flex flex-col gap-1">
                                <div class="text-2xl font-medium">89</div>
                                <div class="text-sm text-slate-500">Retouren</div>
                                <Tag value="+23 %" severity="danger" class="w-fit !text-xs" />
                            </div>
                        </template>
                    </Card>
                </div>

                <div class="flex gap-4 mt-6">
                    <Card class="w-[694px] !bg-slate-100 !shadow-none">
                        <template #content>
                            <div class="flex items-center justify-between mb-4">
                                <span class="font-semibold text-sm">Filter</span>
                                <i class="pi pi-angle-down text-sm"></i>
                            </div>

                            <div class="grid grid-cols-[1.35fr_1.35fr_.8fr] gap-5">
                                <div>
                                    <label class="block text-sm mb-2">Zeitraum</label>
                                    <InputText
                                        v-model="periodText"
                                        placeholder="Zeitraum wählen"
                                        class="w-full !border-emerald-500"
                                    />
                                    <div class="mt-0.5 bg-white rounded-md shadow-md overflow-hidden">
                                        <DatePicker
                                            v-model="selectedDate"
                                            inline
                                            class="w-full"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-sm mb-2">Status</label>
                                    <Select
                                        v-model="selectedStatus"
                                        :options="statusOptions"
                                        placeholder="Status auswählen"
                                        class="w-full !border-emerald-500"
                                    />
                                    <Card class="mt-0.5 !shadow-md !bg-white">
                                        <template #content>
                                            <InputText
                                                v-model="statusSearch"
                                                placeholder="Suche..."
                                                class="w-full !h-9"
                                            />
                                            <div class="flex flex-col mt-1 -mx-1">
                                                <Button
                                                    v-for="status in statusOptions"
                                                    :key="status"
                                                    :label="status"
                                                    text
                                                    severity="secondary"
                                                    class="!justify-start !px-2 !py-2 !text-sm !text-slate-700"
                                                    :class="{ '!bg-slate-100': status === 'Bezahlt' }"
                                                    @click="selectedStatus = status"
                                                />
                                            </div>
                                        </template>
                                    </Card>
                                </div>

                                <div>
                                    <label class="block text-sm mb-2">Zustand</label>
                                    <div class="flex items-center gap-4 pt-2">
                                        <div class="flex items-center gap-2">
                                            <Checkbox v-model="activeOnly" binary inputId="active" />
                                            <label for="active" class="text-sm">Aktiv</label>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <Checkbox v-model="archiveOnly" binary inputId="archive" />
                                            <label for="archive" class="text-sm">Archiv</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Card>

                    <div class="w-48">
                        <Button
                            label="Exportieren"
                            icon="pi pi-file-export"
                            iconPos="right"
                            severity="success"
                            class="!text-sm"
                            @click="exportOpen = !exportOpen"
                        />
                        <Card v-if="exportOpen" class="mt-3 !shadow-md">
                            <template #content>
                                <div class="flex flex-col gap-2">
                                    <Button
                                        label="Als CSV exportieren"
                                        severity="secondary"
                                        outlined
                                        class="!justify-start !text-sm !text-slate-500"
                                    />
                                    <Button
                                        label="Als PDF exportieren"
                                        severity="secondary"
                                        outlined
                                        class="!justify-start !text-sm !text-slate-500"
                                    />
                                </div>
                            </template>
                        </Card>
                    </div>
                </div>

                <DataTable
                    :value="orders"
                    class="mt-6"
                    tableStyle="min-width: 62rem"
                >
                    <Column field="product" header="Produkt" style="width: 38%"></Column>
                    <Column header="Status" style="width: 16%">
                        <template #body="{ data }">
                            <Tag :value="data.status" :severity="data.severity" class="!text-xs" />
                        </template>
                    </Column>
                    <Column field="date" header="Bestelldatum" style="width: 13%"></Column>
                    <Column field="amount" header="Summe" style="width: 12%"></Column>
                    <Column field="quantity" header="Stück" style="width: 10%"></Column>
                    <Column header="Aktionen" style="width: 11%">
                        <template #body="{ data }">
                            <div class="flex justify-center">
                                <Button
                                    icon="pi pi-ellipsis-h"
                                    text
                                    rounded
                                    severity="secondary"
                                    class="!w-8 !h-8"
                                    @click="selectedOrder = data.id"
                                />
                            </div>
                        </template>
                    </Column>
                </DataTable>

                <div class="flex justify-end -mt-14 mr-[-136px]">
                    <Card v-if="selectedOrder === 4" class="w-52 !shadow-md">
                        <template #content>
                            <div class="flex flex-col gap-2">
                                <Button
                                    label="Bearbeiten"
                                    icon="pi pi-pencil"
                                    severity="secondary"
                                    outlined
                                    class="!justify-start !text-sm !text-slate-500"
                                />
                                <Button
                                    label="Status aktualisieren"
                                    icon="pi pi-list-check"
                                    severity="secondary"
                                    outlined
                                    class="!justify-start !text-sm !text-slate-500"
                                />
                                <Button
                                    label="Löschen"
                                    icon="pi pi-trash"
                                    severity="secondary"
                                    outlined
                                    class="!justify-start !text-sm !text-slate-500"
                                />
                            </div>
                        </template>
                    </Card>
                </div>
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
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const periodText = ref('')
const selectedDate = ref(new Date(2024, 6, 1))
const selectedStatus = ref(null)
const statusSearch = ref('')
const activeOnly = ref(true)
const archiveOnly = ref(false)
const exportOpen = ref(true)
const selectedOrder = ref(4)

const statusOptions = ref([
    'Bezahlt',
    'In Bearbeitung',
    'Versendet',
    'Angekommen'
])

const orders = ref([
    {
        id: 1,
        product: 'Widget Pro',
        status: 'Angekommen',
        severity: 'success',
        date: '15.04.2026',
        amount: '12.400 €',
        quantity: '312'
    },
    {
        id: 2,
        product: 'Gadget Mini',
        status: 'In Bearbeitung',
        severity: 'warn',
        date: '24.04.2026',
        amount: '8.920 €',
        quantity: '485'
    },
    {
        id: 3,
        product: 'Sensor X1',
        status: 'Versendet',
        severity: 'secondary',
        date: '09.05.2026',
        amount: '6.100 €',
        quantity: '150'
    },
    {
        id: 4,
        product: 'System V5',
        status: 'Bezahlt',
        severity: 'info',
        date: '12.06.2026',
        amount: '10.250 €',
        quantity: '2'
    }
])
</script>