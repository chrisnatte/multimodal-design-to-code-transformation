<template>
    <div class="flex h-[768px] w-[768px] items-center justify-center bg-black">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            appendTo="self"
            :draggable="false"
            :closable="false"
            :showHeader="false"
            :dismissableMask="false"
            :style="{ width: '384px' }"
            contentClass="!p-0"
            pt:mask:class="!absolute !bg-transparent"
            pt:root:class="!m-0 !border !border-[#e2e8f0] !rounded-xl !shadow-none"
        >
            <div class="flex flex-col">
                <header class="flex items-center justify-between px-4 py-4">
                    <div class="flex items-center gap-3">
                        <Avatar
                            label="M"
                            size="large"
                            shape="circle"
                            aria-label="Dr. Mustermann"
                            class="!h-[42px] !w-[42px] !bg-[#e2e8f0] !text-[21px] !text-surface-700"
                        />
                        <div class="flex flex-col">
                            <span class="text-sm leading-[17px] text-surface-900">Dr. Mustermann</span>
                            <span class="text-[10px] font-light leading-3 text-surface-600">Allgemeinmedizin</span>
                        </div>
                    </div>
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        variant="text"
                        aria-label="Dialog schließen"
                        class="!h-7 !w-[35px] !p-0"
                        @click="dialogVisible = false"
                    />
                </header>

                <Divider class="!my-0" />

                <main class="flex flex-col gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Breadcrumb :model="breadcrumbItems" class="!rounded-md !bg-white !px-3.5 !py-3.5">
                        <template #item="{ item }">
                            <span
                                :class="[
                                    'whitespace-nowrap text-sm leading-[14px]',
                                    item.active ? 'px-1 text-surface-900' : 'text-surface-700'
                                ]"
                            >
                                {{ item.label }}
                            </span>
                        </template>
                        <template #separator>
                            <i class="pi pi-chevron-right text-[14px] text-surface-500" aria-hidden="true"></i>
                        </template>
                    </Breadcrumb>

                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col gap-[7px]">
                            <label for="appointment-date" class="text-sm leading-[21px] text-surface-900">Datum</label>
                            <DatePicker
                                id="appointment-date"
                                v-model="appointmentDate"
                                showIcon
                                iconDisplay="input"
                                placeholder="Datum auswählen"
                                aria-label="Datum auswählen"
                                fluid
                                inputClass="!h-[33px] !py-[7px] !pl-[10.5px] !text-sm"
                            />
                        </div>

                        <div class="flex flex-col gap-[7px]">
                            <label for="appointment-time" class="text-sm leading-[21px] text-surface-900">Uhrzeit</label>
                            <DatePicker
                                id="appointment-time"
                                v-model="appointmentTime"
                                timeOnly
                                showIcon
                                iconDisplay="input"
                                placeholder="Uhrzeit auswählen"
                                aria-label="Uhrzeit auswählen"
                                fluid
                                inputClass="!h-[33px] !py-[7px] !pl-[10.5px] !text-sm"
                            >
                                <template #inputicon="slotProps">
                                    <i class="pi pi-clock cursor-pointer" @click="slotProps.clickCallback" />
                                </template>
                            </DatePicker>
                        </div>

                        <Textarea
                            id="appointment-note"
                            v-model="appointmentNote"
                            placeholder="Anmerkung eingeben..."
                            aria-label="Anmerkung eingeben"
                            rows="4"
                            fluid
                            class="!h-[101px] !resize-none !p-[10.5px] !text-sm"
                        />
                    </div>
                </main>

                <footer class="flex items-center justify-between gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Button
                        label="Zurück"
                        icon="pi pi-angle-left"
                        severity="secondary"
                        class="!h-[33px] !bg-[#f1f5f9] !px-[10.5px] !py-[7px]"
                    />
                    <Button
                        label="Weiter"
                        icon="pi pi-angle-right"
                        iconPos="right"
                        class="!h-[33px] !bg-[#10b981] !border-[#10b981] !px-[10.5px] !py-[7px]"
                    />
                </footer>
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

const dialogVisible = ref(true);
const appointmentDate = ref(null);
const appointmentTime = ref(null);
const appointmentNote = ref('');
const breadcrumbItems = ref([
    { label: 'Arzt wählen' },
    { label: 'Termin wählen', active: true },
    { label: 'Bestätigen' }
]);
</script>