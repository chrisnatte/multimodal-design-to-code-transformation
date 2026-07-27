<template>
    <div class="relative flex h-[768px] w-[768px] items-center justify-center bg-black">
        <Dialog
            v-model:visible="visible"
            modal
            :closable="false"
            :draggable="false"
            :style="{ width: '384px' }"
            contentClass="!p-0"
            :pt="{
                root: { class: '!rounded-xl !border-[#e2e8f0] !shadow-none' },
                mask: { class: '!bg-black' }
            }"
        >
            <div class="flex flex-col overflow-hidden rounded-xl bg-white">
                <div class="flex items-center justify-between px-4 py-4">
                    <div class="flex items-center gap-3">
                        <Avatar
                            label="M"
                            shape="circle"
                            aria-label="Dr. Mustermann"
                            class="!h-[42px] !w-[42px] !bg-[#e2e8f0] !text-[21px] !text-surface-700"
                        />
                        <div class="flex w-[115px] flex-col">
                            <span class="text-sm font-normal leading-[17px] text-surface-900">Dr. Mustermann</span>
                            <span class="text-[10px] font-light leading-3 text-surface-600">Allgemeinmedizin</span>
                        </div>
                    </div>
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        variant="text"
                        aria-label="Dialog schließen"
                        class="!h-7 !w-[35px] !p-0"
                        @click="visible = false"
                    />
                </div>

                <Divider class="!m-0 !h-[9px]" />

                <div class="flex flex-col items-center gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Breadcrumb
                        :model="breadcrumbItems"
                        class="w-full !rounded-md !bg-white !px-[14px] !py-[14px]"
                    >
                        <template #separator>
                            <i class="pi pi-chevron-right text-sm text-surface-500" aria-hidden="true" />
                        </template>
                    </Breadcrumb>

                    <div class="flex w-full flex-col gap-4">
                        <div class="flex flex-col gap-[7px]">
                            <label for="appointment-date" class="text-sm font-normal leading-[21px] text-surface-900">Datum</label>
                            <DatePicker
                                id="appointment-date"
                                v-model="appointmentDate"
                                placeholder="Datum auswählen"
                                showIcon
                                iconDisplay="input"
                                fluid
                                inputClass="!h-[33px] !text-sm"
                            />
                        </div>

                        <div class="flex flex-col gap-[7px]">
                            <label for="appointment-time" class="text-sm font-normal leading-[21px] text-surface-900">Uhrzeit</label>
                            <DatePicker
                                id="appointment-time"
                                v-model="appointmentTime"
                                placeholder="Uhrzeit auswählen"
                                timeOnly
                                showIcon
                                iconDisplay="input"
                                fluid
                                inputClass="!h-[33px] !text-sm"
                            >
                                <template #inputicon="slotProps">
                                    <i class="pi pi-clock cursor-pointer" @click="slotProps.clickCallback" />
                                </template>
                            </DatePicker>
                        </div>

                        <Textarea
                            v-model="note"
                            placeholder="Anmerkung eingeben..."
                            rows="4"
                            fluid
                            class="!h-[101px] !resize-none !text-sm"
                        />
                    </div>
                </div>

                <div class="flex items-center justify-between gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Button
                        label="Zurück"
                        icon="pi pi-angle-left"
                        severity="secondary"
                        size="small"
                        class="!h-[33px] !bg-[#f1f5f9]"
                    />
                    <Button
                        label="Weiter"
                        icon="pi pi-angle-right"
                        iconPos="right"
                        size="small"
                        class="!h-[33px]"
                    />
                </div>
            </div>
        </Dialog>
    </div>
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
    { label: 'Termin wählen' },
    { label: 'Bestätigen' }
]);
</script>