<template>
    <div class="min-h-screen bg-white font-sans text-slate-700">
        <div class="flex min-h-screen">
            <aside class="w-48 shrink-0 bg-slate-100 p-4">
                <div class="flex flex-col gap-5">
                    <span class="text-sm text-slate-600">Navigation</span>
                    <nav class="flex flex-col gap-3">
                        <Button label="Dashboard" icon="pi pi-th-large" size="small" fluid class="!justify-start !bg-emerald-100 !border-emerald-200 !text-emerald-600" />
                        <Button label="Kunden" icon="pi pi-users" severity="secondary" variant="outlined" size="small" fluid class="!justify-start" />
                        <Button label="Berichte" icon="pi pi-file" severity="secondary" variant="outlined" size="small" fluid class="!justify-start" />
                        <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" variant="outlined" size="small" fluid class="!justify-start" />
                    </nav>
                </div>
            </aside>

            <main class="w-full max-w-[850px] px-6 py-3">
                <header class="mb-4">
                    <h1 class="m-0 text-2xl font-bold text-slate-700">Dashboard</h1>
                    <p class="m-0 text-sm text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
                </header>

                <section class="mb-4 flex flex-wrap gap-3">
                    <Card v-for="metric in metrics" :key="metric.label" class="w-[138px] !bg-slate-100 !shadow-none">
                        <template #content>
                            <div class="flex flex-col gap-1">
                                <span class="text-lg font-medium text-slate-700">{{ metric.value }}</span>
                                <span class="text-xs text-slate-500">{{ metric.label }}</span>
                                <Tag :value="metric.change" :severity="metric.severity" class="w-fit !text-[10px]" />
                            </div>
                        </template>
                    </Card>
                </section>

                <section class="mb-5 flex items-start gap-3">
                    <Accordion v-model:value="activeFilter" class="w-[494px] shrink-0">
                        <AccordionPanel value="0">
                            <AccordionHeader>Filter</AccordionHeader>
                            <AccordionContent>
                                <div class="flex gap-3">
                                    <div class="w-48">
                                        <label class="mb-1 block text-xs text-slate-600">Zeitraum</label>
                                        <InputText v-model="dateText" placeholder="Zeitraum wählen" class="w-full !h-6 !text-xs" />
                                        <div class="mt-1 overflow-hidden rounded-md border border-slate-200 bg-white shadow-md">
                                            <DatePicker v-model="selectedDate" inline class="!border-0" />
                                        </div>
                                    </div>

                                    <div class="w-40">
                                        <label class="mb-1 block text-xs text-slate-600">Status</label>
                                        <Select v-model="selectedStatus" :options="statuses" placeholder="Status auswählen" class="w-full !h-6 !text-xs" />
                                        <Card class="mt-1 !shadow-md">
                                            <template #content>
                                                <div class="flex flex-col gap-1">
                                                    <div class="relative">
                                                        <InputText v-model="statusSearch" placeholder="Suche..." class="w-full !h-6 !text-xs" />
                                                        <i class="pi pi-search absolute right-2 top-2 text-xs text-slate-400"></i>
                                                    </div>
                                                    <Button
                                                        v-for="status in statuses"
                                                        :key="status"
                                                        :label="status"
                                                        variant="text"
                                                        severity="secondary"
                                                        size="small"
                                                        class="!justify-start !px-2 !py-1 !text-xs"
                                                        :class="{ '!bg-slate-100': status === 'Bezahlt' }"
                                                        @click="selectedStatus = status"
                                                    />
                                                </div>
                                            </template>
                                        </Card>
                                    </div>

                                    <div class="w-28">
                                        <label class="mb-2 block text-xs text-slate-600">Zustand</label>
                                        <div class="flex items-center gap-3">
                                            <div class="flex items-center gap-1">
                                                <Checkbox v-model="activeOnly" inputId="active" binary />
                                                <label for="active" class="text-xs">Aktiv</label>
                                            </div>
                                            <div class="flex items-center gap-1">
                                                <Checkbox v-model="archived" inputId="archived" binary />
                                                <label for="archived" class="text-xs">Archiv</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>

                    <div class="flex flex-col gap-2">
                        <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" size="small" class="!bg-emerald-500 !border-emerald-500" />
                        <Card class="w-[137px] !shadow-md">
                            <template #content>
                                <div class="flex flex-col gap-1">
                                    <Button label="Als CSV exportieren" severity="secondary" variant="outlined" size="small" class="!justify-start !text-xs" />
                                    <Button label="Als PDF exportieren" severity="secondary" variant="outlined" size="small" class="!justify-start !text-xs" />
                                </div>
                            </template>
                        </Card>
                    </div>
                </section>

                <section class="relative">
                    <DataTable :value="orders" size="small" tableStyle="min-width: 44rem" class="text-xs">
                        <Column field="product" header="Produkt" style="width: 38%" />
                        <Column header="Status" style="width: 16%">
                            <template #body="{ data }">
                                <Tag :value="data.status" :severity="data.severity" class="!text-[10px]" />
                            </template>
                        </Column>
                        <Column field="date" header="Bestelldatum" style="width: 13%" />
                        <Column field="amount" header="Summe" style="width: 13%" />
                        <Column field="pieces" header="Stück" style="width: 10%" />
                        <Column header="Aktionen" style="width: 10%">
                            <template #body="{ data }">
                                <Button
                                    icon="pi pi-ellipsis-h"
                                    variant="text"
                                    severity="secondary"
                                    size="small"
                                    aria-label="Aktionen"
                                    @click="selectedOrder = data"
                                    :class="{ '!bg-slate-100': data.product === 'Sensor X1' }"
                                />
                            </template>
                        </Column>
                    </DataTable>

                    <Card v-if="selectedOrder" class="absolute right-[-98px] top-[146px] z-10 w-36 !shadow-md">
                        <template #content>
                            <div class="flex flex-col gap-1">
                                <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" size="small" class="!justify-start !text-xs" />
                                <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" variant="outlined" size="small" class="!justify-start !text-xs" />
                                <Button label="Löschen" icon="pi pi-trash" severity="secondary" variant="outlined" size="small" class="!justify-start !text-xs" @click="selectedOrder = null" />
                            </div>
                        </template>
                    </Card>
                </section>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import DatePicker from 'primevue/datepicker';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Tag from 'primevue/tag';

const activeFilter = ref('0');
const dateText = ref('');
const selectedDate = ref(new Date(2024, 6, 1));
const selectedStatus = ref(null);
const statusSearch = ref('');
const activeOnly = ref(true);
const archived = ref(false);

const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);

const metrics = ref([
    { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
    { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
    { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
    { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
]);

const orders = ref([
    { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', amount: '12.400 €', pieces: '312' },
    { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', amount: '8.920 €', pieces: '485' },
    { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', amount: '6.100 €', pieces: '150' },
    { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', amount: '10.250 €', pieces: '2' }
]);

const selectedOrder = ref(orders.value[2]);
</script>