<template>
    <div class="relative min-h-screen w-full overflow-hidden bg-white font-sans text-slate-900">
        <aside class="absolute inset-y-0 left-0 w-64 bg-slate-100 px-6 py-6">
            <div class="flex flex-col gap-6">
                <span class="text-base">Navigation</span>

                <nav class="flex flex-col gap-4">
                    <Button label="Dashboard" icon="pi pi-home" class="justify-start !h-[33px] !border !border-emerald-200 !bg-emerald-100 !px-3 !text-sm !font-medium !text-slate-900" />
                    <Button label="Kunden" icon="pi pi-users" severity="secondary" variant="outlined" class="justify-start !h-[33px] !border-slate-500 !bg-transparent !px-3 !text-sm !font-medium !text-slate-900" />
                    <Button label="Berichte" icon="pi pi-chart-bar" severity="secondary" variant="outlined" class="justify-start !h-[33px] !border-slate-500 !bg-transparent !px-3 !text-sm !font-medium !text-slate-900" />
                    <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" variant="outlined" class="justify-start !h-[33px] !border-slate-500 !bg-transparent !px-3 !text-sm !font-medium !text-slate-900" />
                </nav>
            </div>
        </aside>

        <main class="ml-64 min-h-screen px-16 py-4">
            <section class="flex flex-col gap-1">
                <h1 class="m-0 text-[32px] font-bold leading-[39px]">Dashboard</h1>
                <p class="m-0 text-base leading-5">Bekomme eine Übersicht über die Projekte.</p>
            </section>

            <section class="mt-5 flex gap-5">
                <Card v-for="metric in metrics" :key="metric.label" class="h-[117px] w-48 !rounded-xl !bg-slate-100 !shadow-none">
                    <template #content>
                        <div class="flex h-full flex-col justify-between">
                            <div class="flex flex-col gap-1">
                                <span class="text-2xl font-medium leading-7">{{ metric.value }}</span>
                                <span class="text-sm">{{ metric.label }}</span>
                            </div>
                            <Tag :value="metric.change" :severity="metric.severity" class="w-fit !px-2 !py-1 !text-[12px] !font-bold" />
                        </div>
                    </template>
                </Card>
            </section>

            <div class="mt-6 flex items-start gap-4">
                <section class="w-[693px] overflow-hidden rounded-lg bg-slate-100">
                    <div class="flex h-[46px] items-center justify-between border border-slate-200 px-4">
                        <span class="text-sm font-semibold">Filter</span>
                        <i class="pi pi-chevron-up text-sm"></i>
                    </div>

                    <div class="flex gap-5 px-4 py-0">
                        <div class="w-[268px]">
                            <div class="flex flex-col gap-2">
                                <label class="pt-0 text-sm leading-5">Zeitraum</label>
                                <Button :label="periodLabel" icon="pi pi-chevron-down" icon-pos="right" severity="secondary" variant="outlined" class="!h-[33px] !w-[216px] !justify-between !border-emerald-500 !bg-white !px-3 !text-sm !font-normal !text-slate-900" @click="periodLabel = 'Zeitraum wählen'" />
                            </div>

                            <div class="mt-0 h-[270px] rounded-md border border-slate-200 bg-white p-[10px]">
                                <div class="flex h-[33px] items-center justify-between border-b border-slate-200">
                                    <Button icon="pi pi-chevron-left" severity="secondary" text rounded aria-label="Vorheriger Monat" class="!h-[35px] !w-[35px]" />
                                    <div class="flex items-center gap-2 text-sm font-medium">
                                        <span>July</span>
                                        <span>2024</span>
                                    </div>
                                    <Button icon="pi pi-chevron-right" severity="secondary" text rounded aria-label="Nächster Monat" class="!h-[35px] !w-[35px]" />
                                </div>

                                <div class="mt-2 grid grid-cols-7 text-center text-sm">
                                    <span v-for="weekday in weekdays" :key="weekday" class="h-6 font-medium">{{ weekday }}</span>
                                    <span
                                        v-for="day in calendarDays"
                                        :key="`${day.value}-${day.muted}`"
                                        :class="['flex h-[35px] items-center justify-center', day.muted ? 'text-slate-400' : 'text-slate-900']"
                                    >
                                        <span class="flex h-7 w-7 items-center justify-center rounded-full">{{ day.value }}</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="w-[216px]">
                            <div class="flex flex-col gap-2">
                                <label class="text-sm leading-5">Status</label>
                                <Button :label="statusLabel" icon="pi pi-chevron-down" icon-pos="right" severity="secondary" variant="outlined" class="!h-[33px] !w-[216px] !justify-between !border-emerald-500 !bg-white !px-3 !text-sm !font-normal !text-slate-900" @click="statusLabel = 'Status auswählen'" />
                            </div>

                            <div class="mt-0 h-[183px] rounded-md border border-slate-200 bg-white p-[10px]">
                                <div class="flex h-[33px] items-center rounded-md border border-slate-300 px-3">
                                    <span class="flex-1 text-sm text-slate-500">{{ statusSearch }}</span>
                                    <i class="pi pi-search text-sm text-slate-500"></i>
                                </div>
                                <div class="mt-1 flex flex-col">
                                    <button
                                        v-for="(status, index) in statusOptions"
                                        :key="status"
                                        type="button"
                                        :class="['h-[33px] rounded px-3 text-left text-sm', index === 0 ? 'bg-slate-100' : 'bg-white']"
                                        @click="statusLabel = status"
                                    >
                                        {{ status }}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="w-[137px]">
                            <span class="text-sm leading-5">Zustand</span>
                            <div class="mt-3 flex items-center gap-3">
                                <button type="button" class="flex items-center gap-2 text-sm" @click="activeOnly = !activeOnly">
                                    <span :class="['flex h-[18px] w-[18px] items-center justify-center rounded border', activeOnly ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300 bg-white']">
                                        <i v-if="activeOnly" class="pi pi-check text-[10px]"></i>
                                    </span>
                                    Aktiv
                                </button>
                                <button type="button" class="flex items-center gap-2 text-sm" @click="archived = !archived">
                                    <span :class="['flex h-[18px] w-[18px] items-center justify-center rounded border', archived ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300 bg-white']">
                                        <i v-if="archived" class="pi pi-check text-[10px]"></i>
                                    </span>
                                    Archiv
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="w-48">
                    <Button label="Exportieren" icon="pi pi-chevron-down" icon-pos="right" class="!h-[33px] !bg-emerald-500 !px-3 !text-sm !font-medium !text-white" />
                    <div class="mt-3 rounded-md border border-slate-200 bg-white p-[10px]">
                        <div class="flex flex-col gap-2">
                            <Button label="Als CSV exportieren" severity="secondary" variant="outlined" class="!h-[33px] !justify-start !px-3 !text-sm !font-medium !text-slate-900" />
                            <Button label="Als PDF exportieren" severity="secondary" variant="outlined" class="!h-[33px] !justify-start !px-3 !text-sm !font-medium !text-slate-900" />
                        </div>
                    </div>
                </section>
            </div>

            <section class="mt-5 w-[1008px]">
                <div class="grid h-[39px] grid-cols-[384px_160px_124px_124px_124px_92px]">
                    <div v-for="header in headers" :key="header" class="flex items-center border border-slate-200 px-[14px] text-sm font-semibold">
                        {{ header }}
                    </div>
                </div>

                <div v-for="order in orders" :key="order.product" class="grid h-[50px] grid-cols-[384px_160px_124px_124px_124px_92px]">
                    <div class="flex items-center border border-slate-200 px-[14px] text-sm">{{ order.product }}</div>
                    <div class="flex items-center border border-slate-200 px-[14px]">
                        <Tag :value="order.status" :severity="order.severity" class="!px-2 !py-1 !text-[12px] !font-bold" />
                    </div>
                    <div class="flex items-center border border-slate-200 px-[14px] text-sm">{{ order.date }}</div>
                    <div class="flex items-center border border-slate-200 px-[14px] text-sm">{{ order.sum }}</div>
                    <div class="flex items-center border border-slate-200 px-[14px] text-sm">{{ order.quantity }}</div>
                    <div class="flex items-center justify-center border border-slate-200">
                        <Button icon="pi pi-ellipsis-h" severity="secondary" text rounded aria-label="Aktionen" class="!h-7 !w-[35px]" />
                    </div>
                </div>
            </section>

            <div class="absolute left-[calc(16rem+1041px)] top-[838px] w-[200px] rounded-md border border-slate-200 bg-white p-[10px]">
                <div class="flex flex-col gap-2">
                    <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" class="!h-[33px] !justify-start !px-3 !text-sm !font-medium !text-slate-900" />
                    <Button label="Status aktualisieren" icon="pi pi-refresh" severity="secondary" variant="outlined" class="!h-[33px] !justify-start !px-3 !text-sm !font-medium !text-slate-900" />
                    <Button label="Löschen" icon="pi pi-trash" severity="secondary" variant="outlined" class="!h-[33px] !justify-start !px-3 !text-sm !font-medium !text-slate-900" />
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'

const periodLabel = ref('Zeitraum wählen')
const statusLabel = ref('Status auswählen')
const statusSearch = ref('Suche...')
const activeOnly = ref(true)
const archived = ref(false)

const metrics = [
    { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
    { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
    { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
    { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
]

const headers = ['Produkt', 'Status', 'Bestelldatum', 'Summe', 'Stück', 'Aktionen']

const orders = [
    { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', sum: '12.400 €', quantity: '312' },
    { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', sum: '8.920 €', quantity: '485' },
    { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', sum: '6.100 €', quantity: '150' },
    { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', sum: '10.250 €', quantity: '2' }
]

const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']
const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const calendarDays = [
    { value: 27, muted: true }, { value: 28, muted: true }, { value: 1, muted: false }, { value: 2, muted: false }, { value: 3, muted: false }, { value: 4, muted: false }, { value: 5, muted: false },
    { value: 6, muted: false }, { value: 7, muted: false }, { value: 8, muted: false }, { value: 9, muted: false }, { value: 10, muted: false }, { value: 11, muted: false }, { value: 12, muted: false },
    { value: 13, muted: false }, { value: 14, muted: false }, { value: 15, muted: false }, { value: 16, muted: false }, { value: 17, muted: false }, { value: 18, muted: false }, { value: 19, muted: false },
    { value: 20, muted: false }, { value: 21, muted: false }, { value: 22, muted: false }, { value: 23, muted: false }, { value: 24, muted: false }, { value: 25, muted: false }, { value: 26, muted: false },
    { value: 27, muted: false }, { value: 28, muted: false }, { value: 29, muted: false }, { value: 30, muted: false }, { value: 31, muted: false }, { value: 1, muted: true }, { value: 2, muted: true }
]
</script>