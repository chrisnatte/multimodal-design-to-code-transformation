<template>
    <div class="min-h-screen">
        <Dialog
            v-model:visible="visible"
            modal
            :closable="false"
            :draggable="false"
            :style="{ width: '24rem' }"
            content-class="!p-0"
        >
            <div class="flex items-center justify-between border-b border-surface-200 px-4 py-4">
                <div class="flex items-center gap-3">
                    <Avatar label="M" shape="circle" class="!h-11 !w-11 !bg-surface-200 !text-xl !text-surface-600" />
                    <div class="flex flex-col">
                        <span class="text-sm font-medium text-surface-700">Dr. Mustermann</span>
                        <span class="text-[10px] text-surface-500">Allgemeinmedizin</span>
                    </div>
                </div>
                <Button
                    icon="pi pi-times"
                    text
                    rounded
                    severity="secondary"
                    aria-label="Schließen"
                    class="!h-8 !w-8"
                    @click="visible = false"
                />
            </div>

            <div class="px-4 py-5">
                <div class="mb-5 flex items-center justify-center gap-2 whitespace-nowrap text-sm text-surface-500">
                    <span>Arzt wählen</span>
                    <i class="pi pi-chevron-right text-xs"></i>
                    <span class="rounded-full border border-emerald-500 px-2 py-0.5 text-surface-500">Termin wählen</span>
                    <i class="pi pi-chevron-right text-xs"></i>
                    <span>Bestätigen</span>
                </div>

                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                        <label for="date" class="text-sm font-medium text-surface-700">Datum</label>
                        <DatePicker
                            id="date"
                            v-model="date"
                            placeholder="Datum auswählen"
                            show-icon
                            icon-display="input"
                            date-format="dd.mm.yy"
                            fluid
                            input-class="!text-sm"
                        />
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="time" class="text-sm font-medium text-surface-700">Uhrzeit</label>
                        <IconField>
                            <InputIcon class="pi pi-clock" />
                            <InputText
                                id="time"
                                v-model="time"
                                placeholder="Uhrzeit auswählen"
                                fluid
                                class="!text-sm"
                            />
                        </IconField>
                    </div>

                    <Textarea
                        v-model="note"
                        placeholder="Anmerkung eingeben..."
                        rows="4"
                        fluid
                        class="!resize-none !text-sm"
                    />
                </div>

                <Divider class="!my-4" />

                <div class="flex items-center justify-between">
                    <Button
                        label="Zurück"
                        icon="pi pi-angle-left"
                        severity="secondary"
                        class="!px-3 !py-2 !text-sm"
                        @click="goBack"
                    />
                    <Button
                        label="Weiter"
                        icon="pi pi-angle-right"
                        icon-pos="right"
                        class="!bg-emerald-500 !px-3 !py-2 !text-sm !border-emerald-500"
                        @click="goNext"
                    />
                </div>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

const visible = ref(true);
const date = ref(null);
const time = ref('');
const note = ref('');

const goBack = () => {};
const goNext = () => {};
</script>