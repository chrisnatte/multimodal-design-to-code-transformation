<template>
    <main class="min-h-screen bg-white px-6 py-16 text-slate-700">
        <div class="mx-auto w-full max-w-[834px]">
            <header class="mb-12 flex items-center gap-4">
                <Button
                    icon="pi pi-times-circle"
                    aria-label="Schließen"
                    rounded
                    severity="secondary"
                    variant="text"
                    class="!h-12 !w-12 !bg-slate-100 !text-slate-600"
                />
                <div class="flex flex-col gap-1">
                    <h1 class="m-0 text-[32px] font-bold leading-none text-slate-800">Termin buchen</h1>
                    <p class="m-0 text-base text-slate-600">Buche einen Termin für dich bei uns.</p>
                </div>
            </header>

            <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Card class="!bg-slate-100 !shadow-none">
                    <template #title>
                        <span class="text-[17px] font-medium text-slate-700">Datum wählen</span>
                    </template>
                    <template #content>
                        <DatePicker
                            v-model="appointmentDate"
                            inline
                            showWeek
                            class="w-full"
                            :manualInput="false"
                        />
                    </template>
                </Card>

                <Card class="!bg-slate-100 !shadow-none">
                    <template #title>
                        <span class="text-[17px] font-medium text-slate-700">Zeitslot wählen</span>
                    </template>
                    <template #content>
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-2">
                                <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                                    <RadioButton
                                        v-model="selectedTime"
                                        :inputId="`time-${slot}`"
                                        name="time"
                                        :value="slot"
                                    />
                                    <label :for="`time-${slot}`" class="text-sm text-slate-600">{{ slot }}</label>
                                </div>
                            </div>

                            <div class="flex flex-col gap-2">
                                <label for="service" class="text-sm text-slate-600">Dienstleistung</label>
                                <Select
                                    v-model="selectedService"
                                    inputId="service"
                                    :options="services"
                                    optionLabel="name"
                                    class="w-full"
                                />
                            </div>
                        </div>
                    </template>
                </Card>

                <Card class="md:col-span-2 !bg-slate-100 !shadow-none">
                    <template #title>
                        <span class="text-[17px] font-medium text-slate-700">Deine Daten</span>
                    </template>
                    <template #content>
                        <div class="flex flex-col gap-3">
                            <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                                <div class="flex flex-col gap-2">
                                    <label for="name" class="text-sm text-slate-600">Name</label>
                                    <InputText id="name" v-model="name" fluid />
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label for="email" class="text-sm text-slate-600">E-Mail</label>
                                    <InputText id="email" v-model="email" type="email" fluid />
                                </div>
                            </div>

                            <div class="flex flex-col gap-3">
                                <label for="notes" class="text-sm text-slate-600">Anmerkungen</label>
                                <Textarea
                                    id="notes"
                                    v-model="notes"
                                    placeholder="Optionale Nachricht..."
                                    :rows="4"
                                    fluid
                                    class="!resize-none"
                                />
                            </div>

                            <div class="flex items-center gap-3 px-1">
                                <ToggleSwitch v-model="sendReminder" inputId="reminder" />
                                <label for="reminder" class="flex cursor-pointer flex-col">
                                    <span class="text-sm font-semibold text-slate-700">Erinnerung senden</span>
                                    <span class="text-[10px] font-light text-slate-500">
                                        Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                                    </span>
                                </label>
                            </div>
                        </div>
                    </template>
                </Card>
            </section>

            <div class="mt-16 flex justify-end gap-3">
                <Button label="Abbrechen" severity="secondary" @click="visible = false" />
                <Button
                    label="Buchen"
                    class="!border-emerald-600 !bg-emerald-600 hover:!border-emerald-700 hover:!bg-emerald-700"
                    @click="visible = true"
                />
            </div>
        </div>

        <Dialog
            v-model:visible="visible"
            modal
            :draggable="false"
            :style="{ width: '350px' }"
            :breakpoints="{ '575px': '92vw' }"
            contentClass="!pt-0"
            pt:mask:class="!bg-black/40"
        >
            <template #header>
                <div class="flex w-full items-center justify-between">
                    <span class="text-[17px] font-semibold text-slate-700">Buchung bestätigen</span>
                    <Button
                        icon="pi pi-times"
                        aria-label="Dialog schließen"
                        severity="secondary"
                        variant="text"
                        size="small"
                        @click="visible = false"
                    />
                </div>
            </template>

            <div class="flex flex-col gap-2 pb-1 text-sm">
                <div class="flex items-center justify-between gap-4">
                    <span>Datum:</span>
                    <strong class="font-semibold">15. Juni 2029</strong>
                </div>
                <div class="flex items-center justify-between gap-4">
                    <span>Zeit</span>
                    <strong class="font-semibold">{{ selectedTime }}</strong>
                </div>
                <div class="flex items-center justify-between gap-4">
                    <span>Dienstleistung</span>
                    <strong class="font-semibold">{{ selectedService.name }}</strong>
                </div>
            </div>

            <template #footer>
                <Button label="Abbrechen" severity="secondary" @click="visible = false" />
                <Button
                    label="Bestätigen"
                    class="!border-emerald-600 !bg-emerald-600 hover:!border-emerald-700 hover:!bg-emerald-700"
                    @click="visible = false"
                />
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

const visible = ref(true);
const appointmentDate = ref(new Date(2026, 6, 15));
const selectedTime = ref('11:00 - 12:30');
const selectedService = ref({ name: 'Untersuchung' });
const name = ref('Max Mustermann');
const email = ref('max@example.com');
const notes = ref('');
const sendReminder = ref(true);

const timeSlots = ref([
    '09:00 - 10:30',
    '11:00 - 12:30',
    '14:00 - 15:30',
    '16:00 - 17:30'
]);

const services = ref([
    { name: 'Beratungsgespräch' },
    { name: 'Untersuchung' }
]);
</script>