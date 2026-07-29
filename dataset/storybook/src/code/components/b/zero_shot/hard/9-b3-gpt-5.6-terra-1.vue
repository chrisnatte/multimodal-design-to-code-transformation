<template>
    <div class="relative flex h-[768px] w-[768px] items-center justify-center overflow-hidden bg-black">
        <Dialog
            v-model:visible="visible"
            modal
            appendTo="self"
            :draggable="false"
            :closable="false"
            :style="{ width: '384px' }"
            contentClass="!p-0"
            class="overflow-hidden"
        >
            <div class="flex h-[74px] items-center justify-between px-4 py-4">
                <div class="flex items-center gap-3">
                    <Avatar label="M" size="large" shape="circle" />
                    <div class="flex flex-col">
                        <span class="text-sm font-normal">Dr. Mustermann</span>
                        <span class="text-[10px] font-light">Allgemeinmedizin</span>
                    </div>
                </div>
                <Button
                    icon="pi pi-times"
                    severity="secondary"
                    variant="text"
                    aria-label="Dialog schließen"
                    class="!h-7 !w-[35px]"
                    @click="visible = false"
                />
            </div>

            <Divider class="!my-0" />

            <div class="flex flex-col gap-[7px] px-[17.5px] pb-[17.5px]">
                <Breadcrumb :model="breadcrumbItems" class="!h-[42px] !w-full !rounded-md !bg-white !px-[14px] !py-[14px]">
                    <template #item="{ item }">
                        <span class="whitespace-nowrap text-sm">{{ item.label }}</span>
                    </template>
                    <template #separator>
                        <span class="pi pi-chevron-right text-xs"></span>
                    </template>
                </Breadcrumb>

                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-[7px]">
                        <label for="appointment-date" class="text-sm font-normal">Datum</label>
                        <DatePicker
                            id="appointment-date"
                            v-model="appointmentDate"
                            placeholder="Datum auswählen"
                            showIcon
                            iconDisplay="input"
                            icon="pi pi-calendar"
                            fluid
                            inputClass="!h-[33px] !text-sm"
                        />
                    </div>

                    <div class="flex flex-col gap-[7px]">
                        <label for="appointment-time" class="text-sm font-normal">Uhrzeit</label>
                        <DatePicker
                            id="appointment-time"
                            v-model="appointmentTime"
                            timeOnly
                            hourFormat="24"
                            placeholder="Uhrzeit auswählen"
                            showIcon
                            iconDisplay="input"
                            icon="pi pi-clock"
                            fluid
                            inputClass="!h-[33px] !text-sm"
                        />
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
                <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
                <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" />
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Textarea from 'primevue/textarea'

const visible = ref(true)
const appointmentDate = ref(null)
const appointmentTime = ref(null)
const note = ref('')

const breadcrumbItems = ref([
    { label: 'Arzt wählen' },
    { label: 'Termin wählen' },
    { label: 'Bestätigen' }
])
</script>