<template>
    <div class="min-h-screen bg-white font-sans text-surface-900">
        <aside class="fixed inset-y-0 left-0 flex w-64 flex-col bg-slate-100 p-6">
            <div class="flex flex-col gap-6">
                <span class="text-base">Navigation</span>
                <nav class="flex flex-col gap-4">
                    <Button label="Dashboard" icon="pi pi-th-large" variant="outlined" class="w-full !justify-start !border-primary !bg-green-100" />
                    <Button label="Kunden" icon="pi pi-users" severity="secondary" variant="outlined" class="w-full !justify-start" />
                    <Button label="Berichte" icon="pi pi-file" severity="secondary" variant="outlined" class="w-full !justify-start" />
                    <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" variant="outlined" class="w-full !justify-start" />
                </nav>
            </div>
        </aside>

        <main class="ml-64 min-h-screen px-8 py-4">
            <div class="max-w-[1008px]">
                <header class="flex flex-col gap-1">
                    <h1 class="m-0 text-[32px] font-bold leading-tight">Dashboard</h1>
                    <p class="m-0 text-base">Bekomme eine Übersicht über die Projekte.</p>
                </header>

                <section class="mt-5 flex gap-5">
                    <Card v-for="metric in metrics" :key="metric.label" class="h-[117px] w-48 !bg-slate-100 !shadow-none">
                        <template #content>
                            <div class="flex flex-col gap-4">
                                <div class="flex flex-col gap-1">
                                    <span class="text-2xl font-medium">{{ metric.value }}</span>
                                    <span class="text-sm">{{ metric.label }}</span>
                                </div>
                                <Tag :value="metric.change" :severity="metric.severity" class="w-fit" />
                            </div>
                        </template>
                    </Card>
                </section>

                <section class="mt-6 flex items-start justify-between gap-4">
                    <Accordion v-model:value="activePanel" class="w-[693px]">
                        <AccordionPanel value="filter">
                            <AccordionHeader>Filter</AccordionHeader>
                            <AccordionContent>
                                <div class="flex gap-5">
                                    <div class="w-[268px]">
                                        <label class="mb-2 block text-sm">Zeitraum</label>
                                        <DatePicker
                                            v-model="dateRange"
                                            selectionMode="range"
                                            placeholder="Zeitraum wählen"
                                            class="w-[216px]"
                                            inputClass="w-[216px]"
                                        />
                                        <DatePicker v-model="calendarDate" inline class="mt-2 w-[268px]" />
                                    </div>

                                    <div class="w-[216px]">
                                        <label class="mb-2 block text-sm">Status</label>
                                        <Select
                                            v-model="selectedStatus"
                                            :options="statusOptions"
                                            placeholder="Status auswählen"
                                            filter
                                            filterPlaceholder="Suche..."
                                            class="w-[216px]"
                                        />
                                    </div>

                                    <div class="flex flex-col">
                                        <span class="mb-2 text-sm">Zustand</span>
                                        <div class="flex items-center gap-3 pt-2">
                                            <Checkbox v-model="activeOnly" inputId="active" binary />
                                            <label for="active" class="text-sm">Aktiv</label>
                                            <Checkbox v-model="archived" inputId="archived" binary />
                                            <label for="archived" class="text-sm">Archiv</label>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>

                    <div class="flex flex-col gap-3">
                        <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" @click="toggleExport" />
                        <div class="w-48 rounded-md border border-slate-200 bg-white p-3">
                            <div class="flex flex-col gap-2">
                                <Button label="Als CSV exportieren" severity="secondary" variant="outlined" class="w-full" />
                                <Button label="Als PDF exportieren" severity="secondary" variant="outlined" class="w-full" />
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mt-5">
                    <DataTable
                        :value="orders"
                        tableStyle="min-width: 1008px"
                        class="text-sm"
                        :pt="{
                            table: { class: 'border-collapse' }
                        }"
                    >
                        <Column field="product" header="Produkt" style="width: 384px" />
                        <Column header="Status" style="width: 160px">
                            <template #body="{ data }">
                                <Tag :value="data.status" :severity="data.severity" />
                            </template>
                        </Column>
                        <Column field="date" header="Bestelldatum" style="width: 124px" />
                        <Column field="total" header="Summe" style="width: 124px" />
                        <Column field="quantity" header="Stück" style="width: 124px" />
                        <Column header="Aktionen" style="width: 92px">
                            <template #body="{ data }">
                                <div class="flex justify-center">
                                    <Button
                                        icon="pi pi-ellipsis-h"
                                        variant="text"
                                        severity="secondary"
                                        aria-label="Aktionen"
                                        @click="toggleActions($event, data)"
                                    />
                                </div>
                            </template>
                        </Column>
                    </DataTable>
                </section>
            </div>
        </main>

        <Popover ref="exportPopover">
            <div class="flex w-48 flex-col gap-2">
                <Button label="Als CSV exportieren" severity="secondary" variant="outlined" class="w-full" />
                <Button label="Als PDF exportieren" severity="secondary" variant="outlined" class="w-full" />
            </div>
        </Popover>

        <Popover ref="actionsPopover">
            <div class="flex w-44 flex-col gap-2">
                <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" class="w-full !justify-start" />
                <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" variant="outlined" class="w-full !justify-start" />
                <Button label="Löschen" icon="pi pi-trash" severity="secondary" variant="outlined" class="w-full !justify-start" />
            </div>
        </Popover>
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
import Tag from 'primevue/tag';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Popover from 'primevue/popover';

const activePanel = ref('filter');
const dateRange = ref(null);
const calendarDate = ref(new Date(2024, 6, 1));
const selectedStatus = ref(null);
const activeOnly = ref(true);
const archived = ref(false);
const exportPopover = ref();
const actionsPopover = ref();
const selectedOrder = ref(null);

const metrics = ref([
    { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
    { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
    { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
    { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
]);

const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);

const orders = ref([
    { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', total: '12.400 €', quantity: '312' },
    { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', total: '8.920 €', quantity: '485' },
    { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', total: '6.100 €', quantity: '150' },
    { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', total: '10.250 €', quantity: '2' }
]);

const toggleExport = (event) => {
    exportPopover.value.toggle(event);
};

const toggleActions = (event, order) => {
    selectedOrder.value = order;
    actionsPopover.value.toggle(event);
};
</script>