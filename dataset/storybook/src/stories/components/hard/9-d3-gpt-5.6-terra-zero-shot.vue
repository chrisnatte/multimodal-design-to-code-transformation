<template>
    <main class="min-h-screen">
        <Dialog
            v-model:visible="visible"
            modal
            :closable="false"
            :draggable="false"
            :dismissableMask="false"
            :style="{ width: '384px' }"
            :pt="{
                root: { class: '!rounded-xl !border !border-slate-200 !shadow-2xl' },
                header: { class: '!p-4' },
                content: { class: '!p-0' },
                footer: { class: '!p-0' }
            }"
        >
            <template #header>
                <div class="flex w-full items-center justify-between">
                    <div class="flex items-center gap-3">
                        <Avatar
                            label="M"
                            size="large"
                            shape="circle"
                            class="!h-[42px] !w-[42px] !bg-slate-200 !text-[21px] !text-slate-600"
                        />
                        <div class="flex flex-col">
                            <span class="text-sm font-normal text-slate-700">Dr. Mustermann</span>
                            <span class="text-[10px] font-light text-slate-500">Allgemeinmedizin</span>
                        </div>
                    </div>
                    <Button
                        icon="pi pi-times"
                        text
                        severity="secondary"
                        aria-label="Schließen"
                        class="!h-7 !w-[35px]"
                        @click="visible = false"
                    />
                </div>
            </template>

            <Divider class="!my-0" />

            <div class="flex flex-col gap-[7px] px-[18px] pb-[18px]">
                <Breadcrumb :model="steps" class="!h-[42px] !border-0 !bg-white !px-[14px] !py-[14px]">
                    <template #item="{ item }">
                        <span
                            :class="[
                                'whitespace-nowrap text-sm font-normal text-slate-500',
                                item.active ? 'rounded-md border border-emerald-500 px-1 text-slate-500' : ''
                            ]"
                        >
                            {{ item.label }}
                        </span>
                    </template>
                    <template #separator>
                        <i class="pi pi-chevron-right text-xs text-slate-400"></i>
                    </template>
                </Breadcrumb>

                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-[7px]">
                        <label for="appointment-date" class="text-sm font-normal text-slate-700">Datum</label>
                        <div class="relative">
                            <i class="pi pi-calendar pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-slate-400"></i>
                            <DatePicker
                                input-id="appointment-date"
                                v-model="appointmentDate"
                                placeholder="Datum auswählen"
                                :manual-input="false"
                                class="w-full"
                                input-class="!h-[34px] !w-full !pl-9 !text-sm"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col gap-[7px]">
                        <label for="appointment-time" class="text-sm font-normal text-slate-700">Uhrzeit</label>
                        <div class="relative">
                            <i class="pi pi-clock pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-slate-400"></i>
                            <DatePicker
                                input-id="appointment-time"
                                v-model="appointmentTime"
                                time-only
                                hour-format="24"
                                placeholder="Uhrzeit auswählen"
                                :manual-input="false"
                                class="w-full"
                                input-class="!h-[34px] !w-full !pl-9 !text-sm"
                            />
                        </div>
                    </div>

                    <Textarea
                        v-model="note"
                        placeholder="Anmerkung eingeben..."
                        rows="5"
                        class="!h-[101px] !w-full !resize-none !text-sm"
                    />
                </div>
            </div>

            <template #footer>
                <div class="flex items-center justify-between px-[18px] pb-[18px]">
                    <Button
                        label="Zurück"
                        icon="pi pi-angle-left"
                        severity="secondary"
                        class="!h-[34px] !bg-slate-100 !px-3 !text-sm !text-slate-600"
                    />
                    <Button
                        label="Weiter"
                        icon="pi pi-angle-right"
                        icon-pos="right"
                        class="!h-[34px] !px-3 !text-sm"
                    />
                </div>
            </template>
        </Dialog>
    </main>
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

const steps = [
    { label: 'Arzt wählen' },
    { label: 'Termin wählen', active: true },
    { label: 'Bestätigen' }
]
</script>