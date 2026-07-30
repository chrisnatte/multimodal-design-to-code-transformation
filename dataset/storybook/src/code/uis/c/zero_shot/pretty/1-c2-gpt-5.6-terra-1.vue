<template>
    <div class="min-h-screen bg-surface-0 text-surface-700">
        <div class="flex min-h-screen">
            <aside class="w-64 shrink-0 bg-surface-100 px-6 py-6">
                <div class="mb-6 text-base font-medium text-surface-700">Navigation</div>

                <nav class="flex flex-col gap-4">
                    <Button label="Dashboard" icon="pi pi-th-large" size="small" class="justify-start" />
                    <Button label="Kunden" icon="pi pi-users" severity="secondary" variant="outlined" size="small" class="justify-start" />
                    <Button label="Berichte" icon="pi pi-file" severity="secondary" variant="outlined" size="small" class="justify-start" />
                    <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" variant="outlined" size="small" class="justify-start" />
                </nav>
            </aside>

            <main class="w-full max-w-7xl px-14 py-4">
                <header class="mb-5">
                    <h1 class="m-0 text-3xl font-bold text-surface-800">Dashboard</h1>
                    <p class="mt-1 text-base text-surface-500">Bekomme eine Übersicht über die Projekte.</p>
                </header>

                <section class="mb-6 grid max-w-4xl grid-cols-4 gap-5">
                    <Card>
                        <template #content>
                            <div class="flex flex-col gap-1">
                                <span class="text-2xl font-medium text-surface-700">42.8 Tsd.</span>
                                <span class="text-sm text-surface-500">Umsatz in €</span>
                                <Tag value="+12 %" severity="success" class="w-fit text-xs" />
                            </div>
                        </template>
                    </Card>

                    <Card>
                        <template #content>
                            <div class="flex flex-col gap-1">
                                <span class="text-2xl font-medium text-surface-700">1.247</span>
                                <span class="text-sm text-surface-500">Bestellungen</span>
                                <Tag value="+8 %" severity="success" class="w-fit text-xs" />
                            </div>
                        </template>
                    </Card>

                    <Card>
                        <template #content>
                            <div class="flex flex-col gap-1">
                                <span class="text-2xl font-medium text-surface-700">3.891</span>
                                <span class="text-sm text-surface-500">Nutzer</span>
                                <Tag value="+2 %" severity="warn" class="w-fit text-xs" />
                            </div>
                        </template>
                    </Card>

                    <Card>
                        <template #content>
                            <div class="flex flex-col gap-1">
                                <span class="text-2xl font-medium text-surface-700">89</span>
                                <span class="text-sm text-surface-500">Retouren</span>
                                <Tag value="+23 %" severity="danger" class="w-fit text-xs" />
                            </div>
                        </template>
                    </Card>
                </section>

                <section class="mb-6 flex items-start gap-4">
                    <Accordion v-model:value="activeFilter" class="w-[694px]">
                        <AccordionPanel value="0">
                            <AccordionHeader>
                                <span class="font-semibold">Filter</span>
                            </AccordionHeader>
                            <AccordionContent>
                                <div class="grid grid-cols-[1.15fr_1.15fr_0.8fr] gap-5">
                                    <div class="relative flex flex-col gap-2">
                                        <label for="period" class="text-sm font-medium text-surface-600">Zeitraum</label>
                                        <InputText id="period" v-model="periodText" placeholder="Zeitraum wählen" class="w-full" />
                                        <Card class="absolute left-0 top-[4.5rem] z-10 w-[270px] shadow-md">
                                            <template #content>
                                                <DatePicker v-model="calendarDate" inline />
                                            </template>
                                        </Card>
                                    </div>

                                    <div class="relative flex flex-col gap-2">
                                        <label for="status" class="text-sm font-medium text-surface-600">Status</label>
                                        <Select id="status" v-model="status" :options="statusOptions" placeholder="Status auswählen" class="w-full" />
                                        <Card class="absolute left-0 top-[4.5rem] z-10 w-[216px] shadow-md">
                                            <template #content>
                                                <div class="flex flex-col gap-2">
                                                    <InputText v-model="statusSearch" placeholder="Suche..." class="w-full" />
                                                    <div class="flex flex-col gap-1">
                                                        <Button
                                                            v-for="option in filteredStatusOptions"
                                                            :key="option"
                                                            :label="option"
                                                            severity="secondary"
                                                            variant="text"
                                                            size="small"
                                                            class="justify-start"
                                                            @click="status = option"
                                                        />
                                                    </div>
                                                </div>
                                            </template>
                                        </Card>
                                    </div>

                                    <div class="flex flex-col gap-2">
                                        <span class="text-sm font-medium text-surface-600">Zustand</span>
                                        <div class="flex items-center gap-4 pt-1">
                                            <div class="flex items-center gap-2">
                                                <Checkbox v-model="activeOnly" inputId="active" binary />
                                                <label for="active" class="text-sm">Aktiv</label>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <Checkbox v-model="archiveOnly" inputId="archive" binary />
                                                <label for="archive" class="text-sm">Archiv</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>

                    <div class="flex flex-col gap-3">
                        <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" size="small" />
                        <Card class="w-48 shadow-md">
                            <template #content>
                                <div class="flex flex-col gap-2">
                                    <Button label="Als CSV exportieren" severity="secondary" variant="outlined" size="small" class="justify-start" />
                                    <Button label="Als PDF exportieren" severity="secondary" variant="outlined" size="small" class="justify-start" />
                                </div>
                            </template>
                        </Card>
                    </div>
                </section>

                <section class="relative max-w-5xl">
                    <DataTable :value="orders" tableStyle="min-width: 62rem" size="small">
                        <Column field="product" header="Produkt" style="width: 38%" />
                        <Column header="Status" style="width: 16%">
                            <template #body="{ data }">
                                <Tag :value="data.status" :severity="data.severity" class="text-xs" />
                            </template>
                        </Column>
                        <Column field="date" header="Bestelldatum" style="width: 13%" />
                        <Column field="amount" header="Summe" style="width: 12%" />
                        <Column field="quantity" header="Stück" style="width: 10%" />
                        <Column header="Aktionen" style="width: 11%">
                            <template #body="{ data }">
                                <Button
                                    icon="pi pi-ellipsis-h"
                                    severity="secondary"
                                    variant="text"
                                    rounded
                                    size="small"
                                    :aria-label="`Aktionen für ${data.product}`"
                                    @click="selectedOrder = data"
                                />
                            </template>
                        </Column>
                    </DataTable>

                    <Card v-if="selectedOrder" class="absolute right-[-8.5rem] top-[11rem] z-20 w-52 shadow-md">
                        <template #content>
                            <div class="flex flex-col gap-2">
                                <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" size="small" class="justify-start" />
                                <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" variant="outlined" size="small" class="justify-start" />
                                <Button label="Löschen" icon="pi pi-trash" severity="secondary" variant="outlined" size="small" class="justify-start" />
                            </div>
                        </template>
                    </Card>
                </section>
            </main>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
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
const periodText = ref('');
const calendarDate = ref(new Date(2024, 6, 1));
const status = ref(null);
const statusSearch = ref('');
const activeOnly = ref(true);
const archiveOnly = ref(false);
const selectedOrder = ref(null);

const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);

const filteredStatusOptions = computed(() => {
    const search = statusSearch.value.toLowerCase();

    return statusOptions.value.filter((option) => option.toLowerCase().includes(search));
});

const orders = ref([
    { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', amount: '12.400 €', quantity: '312' },
    { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', amount: '8.920 €', quantity: '485' },
    { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', amount: '6.100 €', quantity: '150' },
    { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', amount: '10.250 €', quantity: '2' }
]);
</script>