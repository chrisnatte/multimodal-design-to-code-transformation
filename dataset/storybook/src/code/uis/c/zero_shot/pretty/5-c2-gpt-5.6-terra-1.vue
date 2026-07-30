<template>
    <main class="min-h-screen bg-surface-50 px-6 py-5 text-surface-700">
        <div class="mx-auto w-full max-w-[594px]">
            <header class="mb-9 flex items-start gap-3">
                <Button icon="pi pi-times" severity="secondary" variant="text" rounded aria-label="Schließen" class="!h-9 !w-9 !border !border-surface-300" />
                <div>
                    <h1 class="m-0 text-2xl font-bold leading-7 text-surface-900">Termin buchen</h1>
                    <p class="m-0 mt-1 text-sm text-surface-500">Buche einen Termin für dich bei uns.</p>
                </div>
            </header>

            <section class="grid grid-cols-1 gap-3 md:grid-cols-2">
                <Card class="h-[276px]" pt:body:class="!p-3" pt:content:class="!p-0">
                    <template #content>
                        <h2 class="mb-3 text-sm font-semibold text-surface-800">Datum wählen</h2>
                        <DatePicker v-model="appointmentDate" inline class="w-full" />
                    </template>
                </Card>

                <Card class="h-[276px]" pt:body:class="!p-3" pt:content:class="!p-0">
                    <template #content>
                        <h2 class="mb-3 text-sm font-semibold text-surface-800">Zeitslot wählen</h2>

                        <div class="flex flex-col gap-2 text-xs">
                            <div class="flex items-center gap-1">
                                <RadioButton v-model="selectedTime" inputId="time-1" name="appointment-time" value="09:00 - 10:30" size="small" />
                                <label for="time-1">09:00 - 10:30</label>
                            </div>
                            <div class="flex items-center gap-1">
                                <RadioButton v-model="selectedTime" inputId="time-2" name="appointment-time" value="11:00 - 12:30" size="small" />
                                <label for="time-2">11:00 - 12:30</label>
                            </div>
                            <div class="flex items-center gap-1">
                                <RadioButton v-model="selectedTime" inputId="time-3" name="appointment-time" value="14:00 - 15:30" size="small" />
                                <label for="time-3">14:00 - 15:30</label>
                            </div>
                            <div class="flex items-center gap-1">
                                <RadioButton v-model="selectedTime" inputId="time-4" name="appointment-time" value="16:00 - 17:30" size="small" />
                                <label for="time-4">16:00 - 17:30</label>
                            </div>
                        </div>

                        <div class="mt-3">
                            <label for="service" class="mb-1 block text-xs">Dienstleistung</label>
                            <Select
                                v-model="selectedService"
                                inputId="service"
                                :options="services"
                                placeholder="Dienstleistung wählen"
                                class="w-full"
                                size="small"
                            />
                        </div>
                    </template>
                </Card>
            </section>

            <Card class="mt-3" pt:body:class="!p-3" pt:content:class="!p-0">
                <template #content>
                    <h2 class="mb-2 text-sm font-semibold text-surface-800">Deine Daten</h2>

                    <div class="flex flex-col gap-2">
                        <div>
                            <label for="name" class="mb-1 block text-xs">Name</label>
                            <InputText id="name" v-model="name" size="small" fluid />
                        </div>

                        <div>
                            <label for="notes" class="mb-1 block text-xs">Anmerkungen</label>
                            <Textarea
                                id="notes"
                                v-model="notes"
                                rows="3"
                                fluid
                                size="small"
                                placeholder="Optionale Nachricht..."
                                class="resize-none"
                            />
                        </div>

                        <div class="flex items-start gap-2 pt-1">
                            <ToggleSwitch v-model="sendReminder" inputId="reminder" class="mt-0.5" />
                            <label for="reminder" class="cursor-pointer">
                                <span class="block text-xs font-semibold text-surface-800">Erinnerung senden</span>
                                <span class="block text-[9px] text-surface-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
                            </label>
                        </div>
                    </div>
                </template>
            </Card>

            <div class="mt-12 flex justify-end gap-2">
                <Button label="Abbrechen" severity="secondary" variant="text" size="small" />
                <Button label="Buchen" size="small" @click="confirmationVisible = true" />
            </div>
        </div>

        <Dialog
            v-model:visible="confirmationVisible"
            modal
            header="Buchung bestätigen"
            :draggable="false"
            :style="{ width: '15.6rem' }"
            pt:mask:class="!bg-black/40"
            pt:header:class="!px-3 !pt-3 !pb-2"
            pt:title:class="!text-sm"
            pt:content:class="!px-3 !py-1"
            pt:footer:class="!px-3 !pt-2 !pb-3"
        >
            <div class="grid grid-cols-[1fr_auto] gap-y-2 text-xs">
                <span class="text-surface-600">Datum:</span>
                <strong class="font-semibold text-surface-700">15. Juni 2029</strong>

                <span class="text-surface-600">Zeit</span>
                <strong class="font-semibold text-surface-700">11:00 - 12:30</strong>

                <span class="text-surface-600">Dienstleistung</span>
                <strong class="font-semibold text-surface-700">{{ selectedService }}</strong>
            </div>

            <template #footer>
                <div class="flex justify-end gap-2">
                    <Button label="Abbrechen" severity="secondary" variant="text" size="small" @click="confirmationVisible = false" />
                    <Button label="Bestätigen" size="small" @click="confirmationVisible = false" />
                </div>
            </template>
        </Dialog>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import DatePicker from 'primevue/datepicker';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';

const appointmentDate = ref(new Date(2026, 6, 15));
const selectedTime = ref('11:00 - 12:30');
const selectedService = ref('Untersuchung');
const name = ref('Max Mustermann');
const notes = ref('');
const sendReminder = ref(true);
const confirmationVisible = ref(true);

const services = ref([
    'Beratungsgespräch',
    'Untersuchung'
]);
</script>