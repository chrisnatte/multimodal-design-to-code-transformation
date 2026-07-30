<template>
    <main class="min-h-screen bg-white px-6 py-[88px] text-surface-900">
        <div class="mx-auto flex w-full max-w-[833px] flex-col gap-10">
            <header class="ml-[26px] flex items-center gap-4">
                <Button
                    icon="pi pi-times-circle"
                    severity="secondary"
                    rounded
                    aria-label="Schließen"
                    class="!h-[50px] !w-[50px] !bg-surface-100 !text-surface-700"
                    @click="confirmationVisible = false"
                />
                <div class="flex flex-col gap-1">
                    <h1 class="m-0 text-[32px] font-bold leading-tight">Termin buchen</h1>
                    <p class="m-0 text-base">Buche einen Termin für dich bei uns.</p>
                </div>
            </header>

            <section class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <Card class="h-[386px] !rounded-xl !bg-surface-100">
                    <template #content>
                        <div class="flex h-full flex-col gap-4 p-1">
                            <h2 class="m-0 text-[18px] font-medium">Datum wählen</h2>
                            <DatePicker
                                v-model="appointmentDate"
                                inline
                                showWeek
                                class="w-full"
                                input-class="w-full"
                            />
                        </div>
                    </template>
                </Card>

                <Card class="h-[386px] !rounded-xl !bg-surface-100">
                    <template #content>
                        <div class="flex h-full flex-col gap-4 p-1">
                            <h2 class="m-0 text-[18px] font-medium">Zeitslot wählen</h2>

                            <div class="flex flex-col gap-2">
                                <div v-for="time in timeSlots" :key="time" class="flex items-center gap-2">
                                    <RadioButton
                                        v-model="selectedTime"
                                        name="timeSlot"
                                        :input-id="`time-${time}`"
                                        :value="time"
                                    />
                                    <label :for="`time-${time}`" class="cursor-pointer text-sm">{{ time }}</label>
                                </div>
                            </div>

                            <div class="flex flex-col gap-2">
                                <label for="service" class="text-sm">Dienstleistung</label>
                                <Select
                                    id="service"
                                    v-model="selectedService"
                                    :options="services"
                                    option-label="label"
                                    option-value="value"
                                    class="w-full"
                                />
                            </div>
                        </div>
                    </template>
                </Card>

                <Card class="lg:col-span-2 !rounded-xl !bg-surface-100">
                    <template #content>
                        <div class="flex flex-col gap-3 p-1">
                            <h2 class="m-0 text-[18px] font-medium">Deine Daten</h2>

                            <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                                <div class="flex flex-col gap-2">
                                    <label for="name" class="text-sm">Name</label>
                                    <InputText id="name" v-model="name" class="w-full" />
                                </div>

                                <div class="flex flex-col gap-2">
                                    <label for="email" class="text-sm">E-Mail</label>
                                    <InputText id="email" v-model="email" type="email" class="w-full" />
                                </div>
                            </div>

                            <div class="flex flex-col gap-3">
                                <label for="notes" class="text-sm">Anmerkungen</label>
                                <Textarea
                                    id="notes"
                                    v-model="notes"
                                    rows="4"
                                    placeholder="Optionale Nachricht..."
                                    class="w-full"
                                />
                            </div>

                            <div class="flex items-center gap-3 px-1">
                                <ToggleSwitch v-model="sendReminder" input-id="reminder" />
                                <div class="flex flex-col">
                                    <label for="reminder" class="cursor-pointer text-sm font-semibold">Erinnerung senden</label>
                                    <span class="text-[10px] font-light">
                                        Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </template>
                </Card>
            </section>

            <div class="flex justify-end gap-3">
                <Button label="Abbrechen" severity="secondary" @click="confirmationVisible = false" />
                <Button label="Buchen" @click="confirmationVisible = true" />
            </div>
        </div>

        <Dialog
            v-model:visible="confirmationVisible"
            modal
            :draggable="false"
            :style="{ width: '350px' }"
            :pt="{ mask: { class: '!bg-black' } }"
        >
            <template #header>
                <div class="flex w-full items-center justify-between">
                    <span class="text-[18px] font-semibold">Buchung bestätigen</span>
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        variant="text"
                        aria-label="Dialog schließen"
                        @click="confirmationVisible = false"
                    />
                </div>
            </template>

            <div class="flex flex-col gap-2 py-1 text-sm">
                <div class="flex items-center justify-between gap-2">
                    <span>Datum:</span>
                    <strong>15. Juni 2029</strong>
                </div>
                <div class="flex items-center justify-between gap-2">
                    <span>Zeit</span>
                    <strong>{{ selectedTime }}</strong>
                </div>
                <div class="flex items-center justify-between gap-2">
                    <span>Dienstleistung</span>
                    <strong>{{ selectedService }}</strong>
                </div>
            </div>

            <template #footer>
                <div class="flex justify-end gap-2">
                    <Button label="Abbrechen" severity="secondary" @click="confirmationVisible = false" />
                    <Button label="Bestätigen" @click="confirmationVisible = false" />
                </div>
            </template>
        </Dialog>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const appointmentDate = ref(new Date(2026, 6, 15))
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)
const confirmationVisible = ref(true)

const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']

const services = [
    { label: 'Beratungsgespräch', value: 'Beratungsgespräch' },
    { label: 'Untersuchung', value: 'Untersuchung' }
]
</script>