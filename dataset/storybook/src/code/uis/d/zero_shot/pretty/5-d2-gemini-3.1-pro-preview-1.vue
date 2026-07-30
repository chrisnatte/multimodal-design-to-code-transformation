<template>
    <div class="min-h-screen bg-surface-50 p-8 flex justify-center font-sans text-surface-900">
        <div class="max-w-4xl w-full flex flex-col gap-6">
            <!-- Header -->
            <div class="flex items-center gap-4">
                <Button icon="pi pi-times" rounded severity="secondary" variant="text" class="bg-surface-200 hover:bg-surface-300 text-surface-600 w-12 h-12" aria-label="Close" />
                <div>
                    <h1 class="text-3xl font-bold m-0">Termin buchen</h1>
                    <p class="text-surface-600 m-0 mt-1">Buche einen Termin für dich bei uns.</p>
                </div>
            </div>

            <!-- Main Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Card 1: Datum wählen -->
                <Card class="bg-surface-200 shadow-none border-none !rounded-xl">
                    <template #title>
                        <span class="text-lg font-medium text-surface-900">Datum wählen</span>
                    </template>
                    <template #content>
                        <DatePicker v-model="selectedDate" inline class="w-full border-none shadow-none" />
                    </template>
                </Card>

                <!-- Card 2: Zeitslot wählen -->
                <Card class="bg-surface-200 shadow-none border-none !rounded-xl">
                    <template #title>
                        <span class="text-lg font-medium text-surface-900">Zeitslot wählen</span>
                    </template>
                    <template #content>
                        <div class="flex flex-col gap-3 mb-6">
                            <div class="flex items-center gap-2">
                                <RadioButton v-model="selectedTime" inputId="time1" value="09:00 - 10:30" />
                                <label for="time1" class="text-surface-700">09:00 - 10:30</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton v-model="selectedTime" inputId="time2" value="11:00 - 12:30" />
                                <label for="time2" class="text-surface-700">11:00 - 12:30</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton v-model="selectedTime" inputId="time3" value="14:00 - 15:30" />
                                <label for="time3" class="text-surface-700">14:00 - 15:30</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton v-model="selectedTime" inputId="time4" value="16:00 - 17:30" />
                                <label for="time4" class="text-surface-700">16:00 - 17:30</label>
                            </div>
                        </div>

                        <div class="flex flex-col gap-2">
                            <label class="text-sm text-surface-600">Dienstleistung</label>
                            <Select v-model="selectedService" :options="services" optionLabel="label" placeholder="Dienstleistung wählen" class="w-full" />
                        </div>
                    </template>
                </Card>

                <!-- Card 3: Deine Daten -->
                <Card class="bg-surface-200 shadow-none border-none !rounded-xl md:col-span-2">
                    <template #title>
                        <span class="text-lg font-medium text-surface-900">Deine Daten</span>
                    </template>
                    <template #content>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div class="flex flex-col gap-2">
                                <label for="name" class="text-sm text-surface-600">Name</label>
                                <InputText id="name" v-model="name" placeholder="Name eingeben" class="w-full bg-surface-0" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label for="email" class="text-sm text-surface-600">E-Mail</label>
                                <InputText id="email" v-model="email" placeholder="E-Mail eingeben" class="w-full bg-surface-0" />
                            </div>
                        </div>

                        <div class="flex flex-col gap-2 mb-6">
                            <label for="notes" class="text-sm text-surface-600">Anmerkungen</label>
                            <Textarea id="notes" v-model="notes" rows="3" placeholder="Optionale Nachricht..." class="w-full bg-surface-0 resize-none" />
                        </div>

                        <div class="flex items-center gap-3">
                            <ToggleSwitch v-model="sendReminder" />
                            <div>
                                <div class="font-semibold text-sm text-surface-900">Erinnerung senden</div>
                                <div class="text-xs text-surface-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</div>
                            </div>
                        </div>
                    </template>
                </Card>
            </div>

            <!-- Footer Actions -->
            <div class="flex justify-end gap-3 mt-2">
                <Button label="Abbrechen" severity="secondary" class="bg-surface-200 border-none text-surface-700 hover:bg-surface-300" />
                <Button label="Buchen" @click="showConfirmDialog = true" />
            </div>
        </div>

        <!-- Confirmation Dialog -->
        <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :style="{ width: '28rem' }" :closable="true">
            <div class="flex flex-col gap-4 py-2">
                <div class="flex justify-between items-center">
                    <span class="text-surface-600 text-sm">Datum:</span>
                    <span class="font-semibold text-sm">15. Juni 2029</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-surface-600 text-sm">Zeit</span>
                    <span class="font-semibold text-sm">11:00 - 12:30</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-surface-600 text-sm">Dienstleistung</span>
                    <span class="font-semibold text-sm">Untersuchung</span>
                </div>
            </div>
            <template #footer>
                <div class="flex justify-end gap-2 mt-4">
                    <Button label="Abbrechen" severity="secondary" variant="text" class="bg-surface-100 text-surface-700 hover:bg-surface-200" @click="showConfirmDialog = false" />
                    <Button label="Bestätigen" @click="showConfirmDialog = false" />
                </div>
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import DatePicker from 'primevue/datepicker';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Dialog from 'primevue/dialog';

const selectedDate = ref(new Date(2026, 6, 15)); // July 15, 2026
const selectedTime = ref('11:00 - 12:30');

const services = ref([
    { label: 'Untersuchung', value: 'Untersuchung' },
    { label: 'Beratungsgespräch', value: 'Beratungsgespräch' }
]);
const selectedService = ref(services.value[0]);

const name = ref('Max Mustermann');
const email = ref('max@example.com');
const notes = ref('');
const sendReminder = ref(true);

const showConfirmDialog = ref(true);
</script>