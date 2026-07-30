<template>
    <div class="min-h-screen bg-white font-sans text-slate-700">
        <aside class="fixed inset-y-0 left-0 w-64 bg-slate-100 p-6">
            <div class="flex flex-col gap-6">
                <span class="text-base">Navigation</span>
                <nav class="flex flex-col gap-4">
                    <Button
                        label="Dashboard"
                        icon="pi pi-chart-bar"
                        severity="success"
                        class="!justify-start"
                        :class="{ '!bg-emerald-100 !border-emerald-200 !text-slate-700': selectedNav === 'dashboard' }"
                        @click="selectedNav = 'dashboard'"
                    />
                    <Button
                        label="Kunden"
                        icon="pi pi-users"
                        severity="secondary"
                        variant="outlined"
                        class="!justify-start"
                        @click="selectedNav = 'customers'"
                    />
                    <Button
                        label="Berichte"
                        icon="pi pi-file"
                        severity="secondary"
                        variant="outlined"
                        class="!justify-start"
                        @click="selectedNav = 'reports'"
                    />
                    <Button
                        label="Einstellungen"
                        icon="pi pi-cog"
                        severity="secondary"
                        variant="outlined"
                        class="!justify-start"
                        @click="selectedNav = 'settings'"
                    />
                </nav>
            </div>
        </aside>

        <main class="ml-64 min-h-screen px-8 py-4">
            <header class="mb-6">
                <h1 class="m-0 text-[32px] font-bold leading-tight text-slate-800">Dashboard</h1>
                <p class="mt-1 text-base">Bekomme eine Übersicht über die Projekte.</p>
            </header>

            <section class="mb-6 flex flex-wrap gap-5">
                <Card v-for="metric in metrics" :key="metric.label" class="w-48 !bg-slate-100 !shadow-none">
                    <template #content>
                        <div class="flex flex-col gap-1">
                            <span class="text-2xl font-medium text-slate-800">{{ metric.value }}</span>
                            <span class="text-sm">{{ metric.label }}</span>
                            <Tag :value="metric.change" :severity="metric.severity" class="mt-4 w-fit !text-xs" />
                        </div>
                    </template>
                </Card>
            </section>

            <section class="mb-5 flex items-start gap-4">
                <Card class="w-[693px] !bg-slate-100 !shadow-none">
                    <template #content>
                        <div class="-m-1">
                            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
                                <span class="font-semibold text-slate-800">Filter</span>
                                <Button
                                    icon="pi pi-chevron-up"
                                    severity="secondary"
                                    variant="text"
                                    rounded
                                    aria-label="Filter einklappen"
                                    @click="filtersOpen = !filtersOpen"
                                />
                            </div>

                            <div v-if="filtersOpen" class="flex gap-5 pt-4">
                                <div class="w-[268px]">
                                    <label class="mb-2 block text-sm">Zeitraum</label>
                                    <Button
                                        :label="selectedDate || 'Zeitraum wählen'"
                                        icon="pi pi-calendar"
                                        icon-pos="right"
                                        variant="outlined"
                                        class="w-[216px] !justify-between"
                                        @click="selectedDate = 'Januar 2024'"
                                    />

                                    <div class="mt-0.5 rounded-md border border-slate-200 bg-white p-2.5">
                                        <div class="mb-2 flex items-center justify-between border-b border-slate-200 pb-2">
                                            <Button
                                                icon="pi pi-chevron-left"
                                                severity="secondary"
                                                variant="text"
                                                rounded
                                                aria-label="Vorheriger Monat"
                                            />
                                            <div class="flex items-center gap-2 text-sm font-medium">
                                                <span>July</span>
                                                <span>2024</span>
                                            </div>
                                            <Button
                                                icon="pi pi-chevron-right"
                                                severity="secondary"
                                                variant="text"
                                                rounded
                                                aria-label="Nächster Monat"
                                            />
                                        </div>

                                        <div class="grid grid-cols-7 text-center text-sm font-medium">
                                            <span v-for="weekday in weekdays" :key="weekday" class="flex h-6 items-center justify-center">{{ weekday }}</span>
                                        </div>
                                        <div class="grid grid-cols-7 text-center text-sm">
                                            <Button
                                                v-for="(day, index) in calendarDays"
                                                :key="`${day}-${index}`"
                                                :label="day"
                                                severity="secondary"
                                                variant="text"
                                                rounded
                                                class="!h-8 !w-8 !p-0"
                                                :class="{ '!text-slate-400': index < 2 || index > 32 }"
                                                @click="selectedDate = `${day}.01.2024`"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="w-[216px]">
                                    <label class="mb-2 block text-sm">Status</label>
                                    <Button
                                        :label="selectedStatus || 'Status auswählen'"
                                        icon="pi pi-chevron-down"
                                        icon-pos="right"
                                        variant="outlined"
                                        class="w-full !justify-between"
                                        @click="statusOpen = !statusOpen"
                                    />
                                    <div v-if="statusOpen" class="mt-0.5 rounded-md border border-slate-200 bg-white p-2">
                                        <div class="mb-1 flex items-center rounded-md border border-slate-300 px-3 py-2">
                                            <i class="pi pi-search mr-2 text-sm text-slate-500"></i>
                                            <input v-model="statusSearch" class="w-full border-0 bg-transparent p-0 text-sm outline-none" placeholder="Suche..." />
                                        </div>
                                        <div class="flex flex-col">
                                            <Button
                                                v-for="status in filteredStatuses"
                                                :key="status"
                                                :label="status"
                                                severity="secondary"
                                                variant="text"
                                                class="!justify-start"
                                                :class="{ '!bg-slate-100': selectedStatus === status }"
                                                @click="selectedStatus = status; statusOpen = false"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="w-[137px]">
                                    <span class="mb-2 block text-sm">Zustand</span>
                                    <div class="flex items-center gap-3 pt-2">
                                        <Button
                                            label="Aktiv"
                                            icon="pi pi-check-square"
                                            severity="success"
                                            variant="text"
                                            class="!p-0 !text-slate-700"
                                            @click="activeOnly = !activeOnly"
                                        />
                                        <Button
                                            label="Archiv"
                                            icon="pi pi-stop"
                                            severity="secondary"
                                            variant="text"
                                            class="!p-0 !text-slate-700"
                                            @click="activeOnly = false"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Card>

                <div class="w-48">
                    <Button
                        label="Exportieren"
                        icon="pi pi-download"
                        icon-pos="right"
                        severity="success"
                        class="w-[122px]"
                        @click="exportOpen = !exportOpen"
                    />
                    <Card v-if="exportOpen" class="mt-3 !shadow-none" style="border: 1px solid var(--p-content-border-color)">
                        <template #content>
                            <div class="flex flex-col gap-2">
                                <Button label="Als CSV exportieren" severity="secondary" variant="outlined" size="small" />
                                <Button label="Als PDF exportieren" severity="secondary" variant="outlined" size="small" />
                            </div>
                        </template>
                    </Card>
                </div>
            </section>

            <section class="relative w-[1008px]">
                <div class="grid grid-cols-[384px_160px_124px_124px_124px_92px] text-sm">
                    <div v-for="header in headers" :key="header" class="flex h-[39px] items-center border border-slate-200 px-3.5 font-semibold text-slate-800">
                        {{ header }}
                    </div>
                </div>

                <div v-for="(order, index) in orders" :key="order.product" class="grid grid-cols-[384px_160px_124px_124px_124px_92px] text-sm">
                    <div class="flex h-[50px] items-center border border-slate-200 px-3.5">{{ order.product }}</div>
                    <div class="flex h-[50px] items-center border border-slate-200 px-3.5">
                        <Tag :value="order.status" :severity="order.severity" class="!text-xs" />
                    </div>
                    <div class="flex h-[50px] items-center border border-slate-200 px-3.5">{{ order.date }}</div>
                    <div class="flex h-[50px] items-center border border-slate-200 px-3.5">{{ order.total }}</div>
                    <div class="flex h-[50px] items-center border border-slate-200 px-3.5">{{ order.quantity }}</div>
                    <div class="flex h-[50px] items-center justify-center border border-slate-200">
                        <Button
                            icon="pi pi-ellipsis-h"
                            severity="secondary"
                            variant="text"
                            size="small"
                            aria-label="Aktionen"
                            @click="activeAction = activeAction === index ? null : index"
                        />
                    </div>
                </div>

                <Card v-if="activeAction !== null" class="absolute right-[-137px] top-[186px] w-[200px] !shadow-none" style="border: 1px solid var(--p-content-border-color)">
                    <template #content>
                        <div class="flex flex-col gap-2">
                            <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" size="small" class="!justify-start" />
                            <Button label="Status aktualisieren" icon="pi pi-refresh" severity="secondary" variant="outlined" size="small" class="!justify-start" />
                            <Button label="Löschen" icon="pi pi-trash" severity="secondary" variant="outlined" size="small" class="!justify-start" />
                        </div>
                    </template>
                </Card>
            </section>
        </main>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Tag from 'primevue/tag';

const selectedNav = ref('dashboard');
const filtersOpen = ref(true);
const exportOpen = ref(true);
const statusOpen = ref(true);
const selectedDate = ref('');
const selectedStatus = ref('');
const statusSearch = ref('');
const activeOnly = ref(true);
const activeAction = ref(3);

const metrics = [
    { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
    { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
    { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
    { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
];

const headers = ['Produkt', 'Status', 'Bestelldatum', 'Summe', 'Stück', 'Aktionen'];

const orders = [
    { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', total: '12.400 €', quantity: '312' },
    { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', total: '8.920 €', quantity: '485' },
    { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', total: '6.100 €', quantity: '150' },
    { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', total: '10.250 €', quantity: '2' }
];

const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);
const filteredStatuses = computed(() =>
    statuses.value.filter((status) => status.toLowerCase().includes(statusSearch.value.toLowerCase()))
);

const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const calendarDays = [
    '27', '28', '1', '2', '3', '4', '5',
    '6', '7', '8', '9', '10', '11', '12',
    '13', '14', '15', '16', '17', '18', '19',
    '20', '21', '22', '23', '24', '25', '26',
    '27', '28', '29', '30', '31', '1', '2'
];
</script>