<template>
    <div class="min-h-screen">
        <Dialog
            v-model:visible="visible"
            modal
            :draggable="false"
            :style="{ width: '24rem' }"
            content-class="!px-4 !pb-4 !pt-4"
        >
            <template #header>
                <div class="flex items-center gap-3">
                    <Avatar label="M" shape="circle" class="!bg-slate-100 !text-slate-600" />
                    <div class="flex flex-col">
                        <span class="text-sm font-medium text-slate-700">Dr. Mustermann</span>
                        <span class="text-[10px] text-slate-500">Allgemeinmedizin</span>
                    </div>
                </div>
            </template>

            <Breadcrumb :model="steps" class="!border-0 !bg-transparent !p-0">
                <template #item="{ item }">
                    <span
                        :class="[
                            'whitespace-nowrap text-sm text-slate-500',
                            item.label === 'Termin wählen'
                                ? 'rounded-lg border border-emerald-500 px-1.5 py-0.5'
                                : ''
                        ]"
                    >
                        {{ item.label }}
                    </span>
                </template>
                <template #separator>
                    <i class="pi pi-chevron-right text-xs text-slate-400"></i>
                </template>
            </Breadcrumb>

            <div class="mt-5 flex flex-col gap-4">
                <div class="flex flex-col gap-1.5">
                    <label for="appointment-date" class="text-sm text-slate-700">Datum</label>
                    <DatePicker
                        id="appointment-date"
                        v-model="appointmentDate"
                        show-icon
                        icon-display="input"
                        icon="pi pi-calendar"
                        placeholder="Datum auswählen"
                        date-format="dd.mm.yy"
                        fluid
                        input-class="!text-sm"
                    />
                </div>

                <div class="flex flex-col gap-1.5">
                    <label for="appointment-time" class="text-sm text-slate-700">Uhrzeit</label>
                    <DatePicker
                        id="appointment-time"
                        v-model="appointmentTime"
                        time-only
                        show-icon
                        icon-display="input"
                        icon="pi pi-clock"
                        placeholder="Uhrzeit auswählen"
                        fluid
                        input-class="!text-sm"
                    />
                </div>

                <Textarea
                    v-model="note"
                    rows="4"
                    placeholder="Anmerkung eingeben..."
                    fluid
                    class="!resize-none !text-sm"
                />
            </div>

            <Divider class="!my-4" />

            <div class="flex items-center justify-between">
                <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" size="small" />
                <Button label="Weiter" icon="pi pi-angle-right" icon-pos="right" size="small" />
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Textarea from 'primevue/textarea'

const visible = ref(true)
const appointmentDate = ref(null)
const appointmentTime = ref(null)
const note = ref('')

const steps = ref([
    { label: 'Arzt wählen' },
    { label: 'Termin wählen' },
    { label: 'Bestätigen' }
])
</script>