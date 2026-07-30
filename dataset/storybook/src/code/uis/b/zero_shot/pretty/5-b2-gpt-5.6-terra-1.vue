<template>
    <main class="min-h-screen bg-white px-6 py-[88px] text-slate-900">
        <div class="mx-auto flex w-full max-w-[833px] flex-col gap-9">
            <header class="flex items-center gap-4">
                <Button
                    icon="pi pi-times-circle"
                    severity="secondary"
                    rounded
                    aria-label="Buchung schließen"
                    class="!h-[50px] !w-[50px] !border-slate-100 !bg-slate-100 !text-slate-700"
                />
                <div class="flex flex-col gap-1">
                    <h1 class="m-0 text-[32px] font-bold leading-[39px]">Termin buchen</h1>
                    <p class="m-0 text-base">Buche einen Termin für dich bei uns.</p>
                </div>
            </header>

            <section class="grid grid-cols-1 gap-4 lg:grid-cols-2" aria-label="Terminbuchung">
                <Card class="h-[386px] !bg-slate-100" :pt="{ body: { class: '!p-[18px]' }, content: { class: '!p-0' } }">
                    <template #title>
                        <h2 class="m-0 text-[18px] font-medium">Datum wählen</h2>
                    </template>
                    <template #content>
                        <div class="mt-4">
                            <DatePicker
                                v-model="selectedDate"
                                inline
                                showWeek
                                class="!w-[292px]"
                                aria-label="Datum wählen"
                            />
                        </div>
                    </template>
                </Card>

                <Card class="h-[386px] !bg-slate-100" :pt="{ body: { class: '!p-[18px]' }, content: { class: '!p-0' } }">
                    <template #title>
                        <h2 class="m-0 text-[18px] font-medium">Zeitslot wählen</h2>
                    </template>
                    <template #content>
                        <div class="mt-4 flex flex-col gap-4">
                            <div class="flex flex-col gap-2">
                                <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                                    <RadioButton
                                        v-model="selectedSlot"
                                        :inputId="`slot-${slot}`"
                                        name="appointment-slot"
                                        :value="slot"
                                    />
                                    <label :for="`slot-${slot}`" class="text-sm">{{ slot }}</label>
                                </div>
                            </div>

                            <div class="flex flex-col gap-2">
                                <label for="service" class="text-sm">Dienstleistung</label>
                                <Select
                                    v-model="selectedService"
                                    inputId="service"
                                    :options="services"
                                    optionLabel="label"
                                    optionValue="value"
                                    fluid
                                    aria-label="Dienstleistung"
                                />
                            </div>
                        </div>
                    </template>
                </Card>

                <Card class="lg:col-span-2 !bg-slate-100" :pt="{ body: { class: '!p-[18px]' }, content: { class: '!p-0' } }">
                    <template #title>
                        <h2 class="m-0 text-[18px] font-medium">Deine Daten</h2>
                    </template>
                    <template #content>
                        <div class="mt-4 flex flex-col gap-3">
                            <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                                <div class="flex flex-col gap-2">
                                    <label for="name" class="text-sm">Name</label>
                                    <InputText
                                        id="name"
                                        v-model="name"
                                        placeholder="Name eingeben"
                                        fluid
                                    />
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label for="email" class="text-sm">E-Mail</label>
                                    <InputText
                                        id="email"
                                        v-model="email"
                                        type="email"
                                        placeholder="E-Mail eingeben"
                                        fluid
                                    />
                                </div>
                            </div>

                            <div class="flex flex-col gap-3">
                                <label for="notes" class="text-sm">Anmerkungen</label>
                                <Textarea
                                    id="notes"
                                    v-model="notes"
                                    placeholder="Optionale Nachricht..."
                                    :rows="4"
                                    fluid
                                    class="!h-[101px] !resize-none"
                                />
                            </div>

                            <div class="flex items-center gap-3 px-1">
                                <ToggleSwitch
                                    v-model="sendReminder"
                                    inputId="reminder"
                                    aria-label="Erinnerung senden"
                                />
                                <label for="reminder" class="flex flex-col">
                                    <span class="text-sm font-semibold">Erinnerung senden</span>
                                    <span class="text-[10px] font-light">
                                        Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                                    </span>
                                </label>
                            </div>
                        </div>
                    </template>
                </Card>
            </section>

            <footer class="flex justify-end gap-3">
                <Button
                    label="Abbrechen"
                    severity="secondary"
                    class="!bg-slate-100 !border-slate-100 !text-slate-700"
                />
                <Button
                    label="Buchen"
                    class="!border-emerald-500 !bg-emerald-500 hover:!border-emerald-600 hover:!bg-emerald-600"
                    @click="confirmationVisible = true"
                />
            </footer>
        </div>

        <Dialog
            v-model:visible="confirmationVisible"
            modal
            :draggable="false"
            :style="{ width: '350px' }"
            :pt="{
                root: { class: '!border-slate-200 !shadow-none' },
                mask: { class: '!bg-black' },
                header: { class: '!px-[18px] !py-[18px]' },
                content: { class: '!px-[18px] !pb-[18px] !pt-0' },
                footer: { class: '!px-[18px] !pb-[18px] !pt-0' }
            }"
        >
            <template #header>
                <span class="text-[18px] font-semibold">Buchung bestätigen</span>
            </template>

            <div class="flex flex-col gap-2 text-sm">
                <div class="flex items-center justify-between gap-2">
                    <span>Datum:</span>
                    <strong>15. Juni 2029</strong>
                </div>
                <div class="flex items-center justify-between gap-2">
                    <span>Zeit</span>
                    <strong>{{ selectedSlot }}</strong>
                </div>
                <div class="flex items-center justify-between gap-2">
                    <span>Dienstleistung</span>
                    <strong>{{ selectedService }}</strong>
                </div>
            </div>

            <template #footer>
                <div class="flex justify-end gap-2">
                    <Button
                        label="Abbrechen"
                        severity="secondary"
                        class="!bg-slate-100 !border-slate-100 !text-slate-700"
                        @click="confirmationVisible = false"
                    />
                    <Button
                        label="Bestätigen"
                        class="!border-emerald-500 !bg-emerald-500 hover:!border-emerald-600 hover:!bg-emerald-600"
                        @click="confirmationVisible = false"
                    />
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

const selectedDate = ref(new Date(2026, 6, 15));
const selectedSlot = ref('11:00 - 12:30');
const selectedService = ref('Untersuchung');
const name = ref('Max Mustermann');
const email = ref('max@example.com');
const notes = ref('');
const sendReminder = ref(true);
const confirmationVisible = ref(true);

const timeSlots = ref([
    '09:00 - 10:30',
    '11:00 - 12:30',
    '14:00 - 15:30',
    '16:00 - 17:30'
]);

const services = ref([
    { label: 'Beratungsgespräch', value: 'Beratungsgespräch' },
    { label: 'Untersuchung', value: 'Untersuchung' }
]);
</script>