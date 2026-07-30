<template>
    <main class="min-h-screen bg-surface-50 px-6 py-5 text-surface-700">
        <div class="mx-auto w-full max-w-[594px]">
            <header class="mb-9 flex items-start gap-3">
                <Button
                    icon="pi pi-times"
                    severity="secondary"
                    variant="text"
                    rounded
                    aria-label="Schließen"
                    class="!mt-0.5 !h-9 !w-9 !border !border-surface-300"
                />
                <div>
                    <h1 class="m-0 text-2xl font-bold leading-7 text-surface-900">Termin buchen</h1>
                    <p class="m-0 mt-1 text-sm text-surface-500">Buche einen Termin für dich bei uns.</p>
                </div>
            </header>

            <section class="grid grid-cols-1 gap-3 md:grid-cols-2">
                <Card>
                    <template #title>
                        <span class="text-sm font-semibold">Datum wählen</span>
                    </template>
                    <template #content>
                        <DatePicker
                            v-model="appointmentDate"
                            inline
                            class="w-full"
                            :manual-input="false"
                        />
                    </template>
                </Card>

                <Card>
                    <template #title>
                        <span class="text-sm font-semibold">Zeitslot wählen</span>
                    </template>
                    <template #content>
                        <div class="flex flex-col gap-2">
                            <label class="flex items-center gap-2 text-sm">
                                <RadioButton v-model="selectedTime" input-id="time-one" name="appointment-time" value="09:00 - 10:30" />
                                <span>09:00 - 10:30</span>
                            </label>
                            <label class="flex items-center gap-2 text-sm">
                                <RadioButton v-model="selectedTime" input-id="time-two" name="appointment-time" value="11:00 - 12:30" />
                                <span>11:00 - 12:30</span>
                            </label>
                            <label class="flex items-center gap-2 text-sm">
                                <RadioButton v-model="selectedTime" input-id="time-three" name="appointment-time" value="14:00 - 15:30" />
                                <span>14:00 - 15:30</span>
                            </label>
                            <label class="flex items-center gap-2 text-sm">
                                <RadioButton v-model="selectedTime" input-id="time-four" name="appointment-time" value="16:00 - 17:30" />
                                <span>16:00 - 17:30</span>
                            </label>
                        </div>

                        <div class="mt-4">
                            <label for="service" class="mb-1 block text-xs font-medium">Dienstleistung</label>
                            <Select
                                v-model="selectedService"
                                input-id="service"
                                :options="services"
                                option-label="label"
                                option-value="value"
                                fluid
                            />
                        </div>
                    </template>
                </Card>
            </section>

            <Card class="mt-3">
                <template #title>
                    <span class="text-sm font-semibold">Deine Daten</span>
                </template>
                <template #content>
                    <div class="flex flex-col gap-3">
                        <div>
                            <label for="name" class="mb-1 block text-xs font-medium">Name</label>
                            <InputText id="name" v-model="name" fluid />
                        </div>
                        <div>
                            <label for="notes" class="mb-1 block text-xs font-medium">Anmerkungen</label>
                            <Textarea
                                id="notes"
                                v-model="notes"
                                rows="3"
                                placeholder="Optionale Nachricht..."
                                fluid
                            />
                        </div>
                        <div class="flex items-start gap-2">
                            <ToggleSwitch v-model="sendReminder" input-id="reminder" class="mt-0.5" />
                            <label for="reminder" class="cursor-pointer">
                                <span class="block text-sm font-medium">Erinnerung senden</span>
                                <span class="block text-[10px] leading-3 text-surface-500">
                                    Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                                </span>
                            </label>
                        </div>
                    </div>
                </template>
            </Card>

            <div class="mt-12 flex justify-end gap-3">
                <Button label="Abbrechen" severity="secondary" variant="text" />
                <Button label="Buchen" />
            </div>
        </div>

        <Dialog
            v-model:visible="confirmationVisible"
            modal
            :closable="false"
            :draggable="false"
            :style="{ width: '250px' }"
            content-class="!pt-3"
        >
            <template #header>
                <div class="flex w-full items-center justify-between">
                    <span class="text-sm font-bold text-surface-700">Buchung bestätigen</span>
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        variant="text"
                        rounded
                        size="small"
                        aria-label="Dialog schließen"
                        @click="confirmationVisible = false"
                    />
                </div>
            </template>

            <div class="grid grid-cols-[1fr_auto] gap-y-2 text-xs">
                <span class="text-surface-600">Datum:</span>
                <strong class="font-semibold">15. Juni 2029</strong>
                <span class="text-surface-600">Zeit</span>
                <strong class="font-semibold">11:00 - 12:30</strong>
                <span class="text-surface-600">Dienstleistung</span>
                <strong class="font-semibold">Untersuchung</strong>
            </div>

            <template #footer>
                <div class="flex justify-end gap-2">
                    <Button
                        label="Abbrechen"
                        severity="secondary"
                        variant="text"
                        size="small"
                        @click="confirmationVisible = false"
                    />
                    <Button
                        label="Bestätigen"
                        size="small"
                        @click="confirmationVisible = false"
                    />
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

const appointmentDate = ref(new Date(2029, 5, 15))
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const notes = ref('')
const sendReminder = ref(true)
const confirmationVisible = ref(true)

const services = ref([
    { label: 'Beratungsgespräch', value: 'Beratungsgespräch' },
    { label: 'Untersuchung', value: 'Untersuchung' }
])
</script>