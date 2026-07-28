<template>
    <Dialog
        v-model:visible="visible"
        modal
        :draggable="false"
        :dismissableMask="false"
        :style="{ width: '24rem' }"
        contentClass="!px-4 !pt-3 !pb-0"
        pt:header:class="!px-4 !py-4"
        pt:footer:class="!px-4 !pt-2 !pb-4"
    >
        <template #header>
            <div class="flex items-center gap-3">
                <Avatar label="M" shape="circle" class="!h-11 !w-11 !bg-slate-100 !text-slate-600" />
                <div class="flex flex-col leading-tight">
                    <span class="text-sm font-medium text-slate-700">Dr. Mustermann</span>
                    <span class="text-[11px] text-slate-500">Allgemeinmedizin</span>
                </div>
            </div>
        </template>

        <Divider class="!my-0" />

        <div class="flex flex-col gap-4 pt-4">
            <Breadcrumb :model="steps" class="!border-0 !bg-transparent !p-0">
                <template #item="{ item, props }">
                    <a v-bind="props.action" class="flex items-center text-sm text-slate-500">
                        <span
                            :class="[
                                item.active
                                    ? 'rounded-lg border border-emerald-500 px-2 py-0.5 text-emerald-600'
                                    : 'text-slate-500'
                            ]"
                        >
                            {{ item.label }}
                        </span>
                    </a>
                </template>
            </Breadcrumb>

            <div class="flex flex-col gap-2">
                <label for="appointment-date" class="text-sm text-slate-700">Datum</label>
                <DatePicker
                    v-model="appointmentDate"
                    inputId="appointment-date"
                    placeholder="Datum auswählen"
                    showIcon
                    iconDisplay="input"
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
                    fluid
                >
                    <template #inputicon="slotProps">
                        <i class="pi pi-clock text-slate-400" @click="slotProps.clickCallback" />
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

        <template #footer>
            <Divider class="!my-2" />
            <div class="flex items-center justify-between">
                <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" variant="text" size="small" />
                <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" severity="success" size="small" />
            </div>
        </template>
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

const visible = ref(true);
const appointmentDate = ref(null);
const appointmentTime = ref(null);
const note = ref('');

const steps = ref([
    { label: 'Arzt wählen' },
    { label: 'Termin wählen', active: true },
    { label: 'Bestätigen' }
]);
</script>