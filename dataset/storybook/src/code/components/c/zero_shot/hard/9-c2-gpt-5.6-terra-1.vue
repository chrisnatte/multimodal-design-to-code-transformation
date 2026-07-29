<template>
    <Dialog
        v-model:visible="dialogVisible"
        modal
        :draggable="false"
        :style="{ width: '24rem' }"
        contentClass="!px-5 !pt-4 !pb-5"
    >
        <template #header>
            <div class="flex items-center gap-3">
                <Avatar label="M" shape="circle" class="!bg-slate-100 !text-slate-600" />
                <div class="flex flex-col">
                    <span class="text-sm font-medium text-slate-700">Dr. Mustermann</span>
                    <span class="text-[11px] text-slate-500">Allgemeinmedizin</span>
                </div>
            </div>
        </template>

        <Divider class="!mt-0 !mb-5 !-mx-5" />

        <Breadcrumb :model="steps" class="!border-0 !bg-transparent !p-0 !mb-5">
            <template #item="{ item }">
                <a
                    href="#"
                    class="text-sm no-underline"
                    :class="item.label === currentStep ? 'rounded-xl border border-emerald-500 px-2 py-0.5 text-slate-500' : 'text-slate-500'"
                    @click.prevent="currentStep = item.label"
                >
                    {{ item.label }}
                </a>
            </template>
            <template #separator>
                <i class="pi pi-angle-right text-xs text-slate-400" />
            </template>
        </Breadcrumb>

        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <label for="appointment-date" class="text-sm text-slate-700">Datum</label>
                <DatePicker
                    v-model="appointmentDate"
                    inputId="appointment-date"
                    placeholder="Datum auswählen"
                    showIcon
                    iconDisplay="input"
                    size="small"
                    fluid
                />
            </div>

            <div class="flex flex-col gap-2">
                <label for="appointment-time" class="text-sm text-slate-700">Uhrzeit</label>
                <DatePicker
                    v-model="appointmentTime"
                    inputId="appointment-time"
                    placeholder="Uhrzeit auswählen"
                    timeOnly
                    showIcon
                    iconDisplay="input"
                    size="small"
                    fluid
                >
                    <template #inputicon="slotProps">
                        <i class="pi pi-clock cursor-pointer" @click="slotProps.clickCallback" />
                    </template>
                </DatePicker>
            </div>

            <Textarea
                v-model="note"
                aria-label="Anmerkung"
                placeholder="Anmerkung eingeben..."
                rows="4"
                fluid
                class="!resize-none"
            />
        </div>

        <Divider class="!my-4" />

        <div class="flex items-center justify-between">
            <Button
                label="Zurück"
                icon="pi pi-angle-left"
                severity="secondary"
                size="small"
                @click="currentStep = 'Arzt wählen'"
            />
            <Button
                label="Weiter"
                icon="pi pi-angle-right"
                iconPos="right"
                severity="success"
                size="small"
                @click="currentStep = 'Bestätigen'"
            />
        </div>
    </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Textarea from 'primevue/textarea';

const dialogVisible = ref(true);
const currentStep = ref('Termin wählen');
const appointmentDate = ref(null);
const appointmentTime = ref(null);
const note = ref('');

const steps = ref([
    { label: 'Arzt wählen' },
    { label: 'Termin wählen' },
    { label: 'Bestätigen' }
]);
</script>