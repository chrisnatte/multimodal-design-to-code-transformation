<template>
    <div class="min-h-screen bg-white font-sans text-slate-700">
        <aside class="fixed inset-y-0 left-0 flex w-64 flex-col bg-slate-100 p-6">
            <div class="flex flex-col gap-6">
                <span class="text-base text-slate-700">Navigation</span>
                <nav class="flex flex-col gap-4">
                    <Button label="Dashboard" icon="pi pi-th-large" severity="success" outlined class="!h-8 !justify-start !border-emerald-200 !bg-emerald-100 !text-emerald-500" />
                    <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="!h-8 !justify-start" />
                    <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="!h-8 !justify-start" />
                    <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="!h-8 !justify-start" />
                </nav>
            </div>
        </aside>

        <main class="ml-64 min-h-screen px-8 py-4">
            <div class="w-[1008px]">
                <header class="mb-5 flex flex-col gap-1">
                    <h1 class="m-0 text-[32px] font-bold leading-[39px] text-slate-700">Dashboard</h1>
                    <p class="m-0 text-base text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
                </header>

                <section class="mb-6 flex gap-5">
                    <Card v-for="metric in metrics" :key="metric.label" class="h-[118px] w-48 !rounded-xl !bg-slate-100 !shadow-none">
                        <template #content>
                            <div class="flex flex-col gap-2">
                                <div class="flex flex-col gap-1">
                                    <span class="text-2xl font-medium text-slate-700">{{ metric.value }}</span>
                                    <span class="text-sm text-slate-500">{{ metric.label }}</span>
                                </div>
                                <Tag :value="metric.change" :severity="metric.severity" class="w-fit !text-xs" />
                            </div>
                        </template>
                    </Card>
                </section>

                <section class="mb-7 flex items-start gap-4">
                    <Accordion value="0" class="w-[693px]">
                        <AccordionPanel value="0" class="!rounded-lg !border-0 !bg-slate-100">
                            <AccordionHeader class="!border-slate-200 !bg-slate-100 !px-4 !py-3">
                                <span class="text-sm font-semibold">Filter</span>
                            </AccordionHeader>
                            <AccordionContent class="!bg-slate-100 !px-4 !pb-4">
                                <div class="flex gap-5">
                                    <div class="w-[268px]">
                                        <label class="mb-1 block text-sm">Zeitraum</label>
                                        <InputText v-model="periodText" placeholder="Zeitraum wählen" class="h-[34px] w-54 !border-emerald-500" />
                                        <div class="mt-0 w-[268px] rounded-md border border-slate-200 bg-white p-2.5 shadow-md">
                                            <DatePicker v-model="period" inline class="w-full" />
                                        </div>
                                    </div>

                                    <div class="w-[216px]">
                                        <label class="mb-1 block text-sm">Status</label>
                                        <Select v-model="status" :options="statusOptions" placeholder="Status auswählen" class="h-[34px] w-full !border-emerald-500" />
                                        <div class="mt-0 overflow-hidden rounded-md border border-slate-200 bg-white shadow-md">
                                            <div class="p-2 pb-1">
                                                <span class="p-input-icon-right block">
                                                    <i class="pi pi-search text-sm text-slate-400" />
                                                    <InputText v-model="searchStatus" placeholder="Suche..." class="h-[34px] w-full" />
                                                </span>
                                            </div>
                                            <div class="flex flex-col gap-0.5 p-1">
                                                <Button v-for="option in statusOptions" :key="option" :label="option" text severity="secondary" class="!h-[31px] !justify-start !px-2.5 !text-sm" :class="{ '!bg-slate-100': option === 'Bezahlt' }" @click="status = option" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-[137px]">
                                        <label class="mb-2 block text-sm">Zustand</label>
                                        <div class="flex items-center gap-3">
                                            <div class="flex items-center gap-2">
                                                <Checkbox v-model="active" inputId="active" binary />
                                                <label for="active" class="text-sm">Aktiv</label>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <Checkbox v-model="archive" inputId="archive" binary />
                                                <label for="archive" class="text-sm">Archiv</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>

                    <div class="flex flex-col gap-3">
                        <Button ref="exportButton" label="Exportieren" icon="pi pi-file-export" iconPos="right" severity="success" class="!h-[34px] !w-[122px]" @click="toggleExport" />
                    </div>
                </section>

                <DataTable :value="orders" tableStyle="min-width: 1008px" class="text-sm">
                    <Column field="product" header="Produkt" style="width: 384px"></Column>
                    <Column header="Status" style="width: 160px">
                        <template #body="{ data }">
                            <Tag :value="data.status" :severity="data.severity" class="!text-xs" />
                        </template>
                    </Column>
                    <Column field="date" header="Bestelldatum" style="width: 124px"></Column>
                    <Column field="total" header="Summe" style="width: 124px"></Column>
                    <Column field="quantity" header="Stück" style="width: 124px"></Column>
                    <Column header="Aktionen" style="width: 92px">
                        <template #body="{ data }">
                            <div class="flex justify-center">
                                <Button :ref="data.product === 'Sensor X1' ? 'actionButton' : undefined" icon="pi pi-ellipsis-h" text severity="secondary" class="!h-7 !w-9" @click="toggleActions" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </main>

        <Popover ref="exportPopover" class="!w-48">
            <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" severity="secondary" outlined class="!h-[34px] !w-full !justify-start" />
                <Button label="Als PDF exportieren" severity="secondary" outlined class="!h-[34px] !w-full !justify-start" />
            </div>
        </Popover>

        <Popover ref="actionsPopover" class="!w-[200px]">
            <div class="flex flex-col gap-2">
                <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined class="!h-[34px] !w-full !justify-start" />
                <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="!h-[34px] !w-full !justify-start" />
                <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="!h-[34px] !w-full !justify-start" />
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import DatePicker from 'primevue/datepicker'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Popover from 'primevue/popover'

const period = ref(new Date(2024, 6, 1))
const periodText = ref('')
const status = ref(null)
const searchStatus = ref('')
const active = ref(true)
const archive = ref(false)
const exportButton = ref()
const exportPopover = ref()
const actionsPopover = ref()
const actionButton = ref()

const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']

const metrics = [
    { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
    { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
    { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
    { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
]

const orders = [
    { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', total: '12.400 €', quantity: '312' },
    { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', total: '8.920 €', quantity: '485' },
    { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', total: '6.100 €', quantity: '150' },
    { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', total: '10.250 €', quantity: '2' }
]

const toggleExport = (event) => {
    exportPopover.value.toggle(event)
}

const toggleActions = (event) => {
    actionsPopover.value.toggle(event)
}
</script>