<template>
    <main class="flex min-h-screen items-center justify-center bg-white">
        <Dialog
            v-model:visible="visible"
            modal
            :draggable="false"
            :dismissableMask="false"
            :closeButtonProps="{ severity: 'secondary', variant: 'text', size: 'small', 'aria-label': 'Schließen' }"
            class="!w-[384px] !max-w-[calc(100vw-2rem)] !rounded-xl"
            contentClass="!p-0"
            pt:header:class="!px-4 !py-4 !border-b-0"
            pt:content:class="!p-0"
            pt:footer:class="!px-[17.5px] !pt-0 !pb-[17.5px]"
        >
            <template #header>
                <div class="flex items-center gap-3">
                    <Avatar
                        label="M"
                        shape="circle"
                        class="!h-[42px] !w-[42px] !text-[21px]"
                        style="background-color: #e2e8f0; color: #3c4d68"
                        aria-label="Dr. Mustermann"
                    />
                    <div class="flex flex-col">
                        <span class="text-sm leading-[17px] text-surface-700">Dr. Mustermann</span>
                        <span class="text-[10px] font-light leading-3 text-surface-500">Allgemeinmedizin</span>
                    </div>
                </div>
            </template>

            <Divider class="!m-0" />

            <section class="flex flex-col gap-[7px] px-[17.5px] pb-[17.5px]">
                <Breadcrumb :model="breadcrumbItems" class="!border-0 !bg-white !p-[14px]">
                    <template #item="{ item }">
                        <span
                            :class="[
                                'whitespace-nowrap text-sm leading-[14px] text-surface-500',
                                item.current ? 'rounded-md border border-emerald-500 px-1 text-surface-600' : ''
                            ]"
                        >
                            {{ item.label }}
                        </span>
                    </template>
                    <template #separator>
                        <i class="pi pi-chevron-right text-xs text-surface-400" aria-hidden="true" />
                    </template>
                </Breadcrumb>

                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-[7px]">
                        <label for="appointment-date" class="text-sm leading-[21px] text-surface-700">Datum</label>
                        <DatePicker
                            v-model="appointmentDate"
                            inputId="appointment-date"
                            placeholder="Datum auswählen"
                            showIcon
                            iconDisplay="input"
                            fluid
                            inputClass="!h-[34px] !py-[7px] !text-sm"
                        >
                            <template #inputicon="slotProps">
                                <i class="pi pi-calendar text-sm text-surface-400" @click="slotProps.clickCallback" />
                            </template>
                        </DatePicker>
                    </div>

                    <div class="flex flex-col gap-[7px]">
                        <label for="appointment-time" class="text-sm leading-[21px] text-surface-700">Uhrzeit</label>
                        <DatePicker
                            v-model="appointmentTime"
                            inputId="appointment-time"
                            placeholder="Uhrzeit auswählen"
                            timeOnly
                            showIcon
                            iconDisplay="input"
                            fluid
                            inputClass="!h-[34px] !py-[7px] !text-sm"
                        >
                            <template #inputicon="slotProps">
                                <i class="pi pi-clock text-sm text-surface-400" @click="slotProps.clickCallback" />
                            </template>
                        </DatePicker>
                    </div>

                    <Textarea
                        v-model="note"
                        aria-label="Anmerkung"
                        placeholder="Anmerkung eingeben..."
                        rows="5"
                        fluid
                        class="!h-[101px] !resize-none !px-[10.5px] !py-[7px] !text-sm"
                    />
                </div>
            </section>

            <template #footer>
                <div class="flex items-center justify-between">
                    <Button
                        label="Zurück"
                        icon="pi pi-angle-left"
                        severity="secondary"
                        size="small"
                        @click="visible = false"
                    />
                    <Button
                        label="Weiter"
                        icon="pi pi-angle-right"
                        iconPos="right"
                        size="small"
                        @click="visible = false"
                    />
                </div>
            </template>
        </Dialog>
    </main>
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
const breadcrumbItems = ref([
    { label: 'Arzt wählen' },
    { label: 'Termin wählen', current: true },
    { label: 'Bestätigen' }
]);
</script>