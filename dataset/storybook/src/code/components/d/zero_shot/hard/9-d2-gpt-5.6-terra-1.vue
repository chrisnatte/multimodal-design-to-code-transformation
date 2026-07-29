<template>
    <main class="flex min-h-screen items-center justify-center bg-black/40 p-4">
        <Dialog
            v-model:visible="visible"
            modal
            appendTo="self"
            :closable="false"
            :draggable="false"
            :dismissableMask="false"
            :style="{ width: '24rem' }"
            pt:root:class="overflow-hidden !rounded-xl !border !border-slate-200 !shadow-2xl"
            pt:content:class="!p-0"
            pt:mask:class="!absolute !inset-0 !bg-transparent"
        >
            <template #header>
                <div class="flex w-full items-center justify-between px-4 py-4">
                    <div class="flex items-center gap-3">
                        <Avatar
                            label="M"
                            size="large"
                            shape="circle"
                            class="!h-[42px] !w-[42px] !bg-slate-200 !text-[21px] !text-slate-600"
                            aria-label="Dr. Mustermann"
                        />
                        <div class="flex flex-col">
                            <span class="text-sm font-normal leading-[17px] text-slate-700">Dr. Mustermann</span>
                            <span class="text-[10px] font-light leading-3 text-slate-500">Allgemeinmedizin</span>
                        </div>
                    </div>
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        variant="text"
                        aria-label="Schließen"
                        class="!h-7 !w-[35px] !p-0 !text-slate-500"
                        @click="visible = false"
                    />
                </div>
            </template>

            <Divider class="!my-0" />

            <section class="flex flex-col gap-[7px] px-[17.5px] pb-[17.5px]">
                <Breadcrumb :model="breadcrumbItems" class="!bg-transparent !p-[14px]">
                    <template #item="{ item }">
                        <span
                            :class="[
                                'whitespace-nowrap text-sm font-normal text-slate-500',
                                item.active ? 'rounded-md border border-emerald-500 px-1 text-slate-500' : ''
                            ]"
                        >
                            {{ item.label }}
                        </span>
                    </template>
                    <template #separator>
                        <i class="pi pi-chevron-right text-xs text-slate-400" />
                    </template>
                </Breadcrumb>

                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-[7px]">
                        <label for="appointment-date" class="text-sm font-normal text-slate-700">Datum</label>
                        <DatePicker
                            v-model="appointmentDate"
                            inputId="appointment-date"
                            placeholder="Datum auswählen"
                            showIcon
                            iconDisplay="input"
                            fluid
                            inputClass="!h-[33px] !rounded-md !border-slate-300 !py-[7px] !pl-9 !pr-[10.5px] !text-sm"
                            class="w-full"
                        />
                    </div>

                    <div class="flex flex-col gap-[7px]">
                        <label for="appointment-time" class="text-sm font-normal text-slate-700">Uhrzeit</label>
                        <DatePicker
                            v-model="appointmentTime"
                            inputId="appointment-time"
                            timeOnly
                            placeholder="Uhrzeit auswählen"
                            showIcon
                            iconDisplay="input"
                            fluid
                            inputClass="!h-[33px] !rounded-md !border-slate-300 !py-[7px] !pl-9 !pr-[10.5px] !text-sm"
                            class="w-full"
                        >
                            <template #inputicon="slotProps">
                                <i class="pi pi-clock cursor-pointer text-sm text-slate-400" @click="slotProps.clickCallback" />
                            </template>
                        </DatePicker>
                    </div>

                    <Textarea
                        v-model="note"
                        placeholder="Anmerkung eingeben..."
                        rows="4"
                        fluid
                        class="!h-[101px] !resize-none !rounded-md !border-slate-300 !px-[10.5px] !py-[7px] !text-sm"
                        aria-label="Anmerkung"
                    />
                </div>
            </section>

            <footer class="flex items-center justify-between px-[17.5px] pb-[17.5px]">
                <Button
                    label="Zurück"
                    icon="pi pi-angle-left"
                    severity="secondary"
                    class="!h-[33px] !border-0 !bg-slate-100 !px-[10.5px] !py-[7px] !text-sm !font-medium !text-slate-600"
                />
                <Button
                    label="Weiter"
                    icon="pi pi-angle-right"
                    iconPos="right"
                    class="!h-[33px] !border-0 !bg-emerald-500 !px-[10.5px] !py-[7px] !text-sm !font-medium !text-white"
                />
            </footer>
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
    { label: 'Termin wählen', active: true },
    { label: 'Bestätigen' }
]);
</script>