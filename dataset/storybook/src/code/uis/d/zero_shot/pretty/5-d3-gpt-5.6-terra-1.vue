<template>
    <main class="min-h-screen bg-white px-6 py-8 text-slate-700">
        <div class="mx-auto flex w-full max-w-[834px] flex-col">
            <header class="flex items-center gap-4">
                <Button
                    icon="pi pi-times-circle"
                    severity="secondary"
                    text
                    rounded
                    aria-label="Schließen"
                    class="!h-[50px] !w-[50px] !bg-slate-100 !text-[2rem] !text-slate-600"
                />
                <div class="flex flex-col gap-1">
                    <h1 class="m-0 text-[32px] font-bold leading-[39px] text-slate-800">Termin buchen</h1>
                    <p class="m-0 text-base leading-[19px] text-slate-600">Buche einen Termin für dich bei uns.</p>
                </div>
            </header>

            <section class="mt-12 grid grid-cols-2 gap-4">
                <Card class="h-[386px] !rounded-xl !bg-slate-100 !shadow-none">
                    <template #content>
                        <div class="flex h-full flex-col gap-4 p-[18px]">
                            <h2 class="m-0 text-[18px] font-medium leading-[21px] text-slate-800">Datum wählen</h2>
                            <DatePicker
                                v-model="appointmentDate"
                                inline
                                showWeek
                                :showOtherMonths="true"
                                :selectOtherMonths="false"
                                class="w-[292px]"
                                :pt="{
                                    root: { class: '!border !border-slate-200 !rounded-md !bg-white' },
                                    header: { class: '!px-3 !py-2 !border-b !border-slate-200' },
                                    title: { class: '!text-sm' },
                                    table: { class: '!text-sm' }
                                }"
                            />
                        </div>
                    </template>
                </Card>

                <Card class="h-[386px] !rounded-xl !bg-slate-100 !shadow-none">
                    <template #content>
                        <div class="flex h-full flex-col gap-4 p-[18px]">
                            <h2 class="m-0 text-[18px] font-medium leading-[21px] text-slate-800">Zeitslot wählen</h2>

                            <div class="flex flex-col gap-2">
                                <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                                    <RadioButton
                                        v-model="selectedTime"
                                        name="time"
                                        :value="slot"
                                        :inputId="`time-${slot}`"
                                        :pt="{ root: { style: '--p-radiobutton-checked-background: #10b981; --p-radiobutton-checked-border-color: #10b981' } }"
                                    />
                                    <label :for="`time-${slot}`" class="cursor-pointer text-sm leading-[18px] text-slate-700">{{ slot }}</label>
                                </div>
                            </div>

                            <div class="relative mt-1">
                                <label for="service" class="mb-2 block text-sm leading-[21px] text-slate-700">Dienstleistung</label>
                                <Select
                                    inputId="service"
                                    v-model="selectedService"
                                    :options="services"
                                    optionLabel="name"
                                    class="w-full"
                                    :pt="{ root: { class: '!h-[33px]' }, label: { class: '!py-[6px] !text-sm' } }"
                                />
                                <div class="absolute left-0 right-0 top-[61px] z-10 rounded-md border border-slate-200 bg-white p-1 shadow-md">
                                    <div class="flex h-[31px] items-center rounded px-3 text-sm text-slate-700">Beratungsgespräch</div>
                                    <div class="flex h-[31px] items-center rounded bg-slate-100 px-3 text-sm text-slate-700">Untersuchung</div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Card>

                <Card class="col-span-2 h-[311px] !rounded-xl !bg-slate-100 !shadow-none">
                    <template #content>
                        <div class="flex h-full flex-col gap-3 p-[18px]">
                            <h2 class="m-0 text-[18px] font-medium leading-[21px] text-slate-800">Deine Daten</h2>

                            <div class="grid grid-cols-2 gap-3">
                                <div class="flex flex-col gap-2">
                                    <label for="name" class="text-sm leading-[21px] text-slate-700">Name</label>
                                    <InputText id="name" v-model="name" class="h-[33px] w-full !text-sm" />
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label for="email" class="text-sm leading-[21px] text-slate-700">E-Mail</label>
                                    <InputText id="email" v-model="email" type="email" class="h-[33px] w-full !text-sm" />
                                </div>
                            </div>

                            <div class="flex flex-col gap-3">
                                <label for="notes" class="text-sm leading-[21px] text-slate-700">Anmerkungen</label>
                                <Textarea
                                    id="notes"
                                    v-model="notes"
                                    placeholder="Optionale Nachricht..."
                                    rows="4"
                                    class="h-[101px] w-full resize-none !text-sm"
                                />
                            </div>

                            <div class="flex items-center gap-3 px-1">
                                <ToggleSwitch
                                    v-model="sendReminder"
                                    inputId="reminder"
                                    :pt="{ root: { style: '--p-toggleswitch-checked-background: #10b981; --p-toggleswitch-checked-hover-background: #059669' } }"
                                />
                                <label for="reminder" class="flex cursor-pointer flex-col">
                                    <span class="text-sm font-semibold leading-[17px] text-slate-800">Erinnerung senden</span>
                                    <span class="text-[10px] font-light leading-3 text-slate-600">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
                                </label>
                            </div>
                        </div>
                    </template>
                </Card>
            </section>

            <div class="mt-[15px] flex justify-end gap-3">
                <Button label="Abbrechen" severity="secondary" class="!h-[33px] !text-sm" />
                <Button
                    label="Buchen"
                    class="!h-[33px] !border-emerald-500 !bg-emerald-500 !text-sm hover:!border-emerald-600 hover:!bg-emerald-600"
                    @click="confirmationVisible = true"
                />
            </div>
        </div>

        <Dialog
            v-model:visible="confirmationVisible"
            modal
            :closable="false"
            :draggable="false"
            :style="{ width: '350px' }"
            :contentStyle="{ padding: '0' }"
            :pt="{
                root: { class: '!rounded-xl !border !border-slate-200 !shadow-lg' },
                header: { class: '!p-0' },
                content: { class: '!p-0' }
            }"
        >
            <template #header>
                <div class="flex h-[63px] w-full items-center justify-between px-[18px]">
                    <span class="text-[18px] font-semibold leading-[21px] text-slate-700">Buchung bestätigen</span>
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        text
                        aria-label="Dialog schließen"
                        class="!h-7 !w-[35px]"
                        @click="confirmationVisible = false"
                    />
                </div>
            </template>

            <div class="flex flex-col gap-2 px-[18px] pb-[18px]">
                <div class="flex min-h-[23px] items-center justify-between gap-2 text-sm">
                    <span>Datum:</span>
                    <strong class="font-semibold">15. Juni 2029</strong>
                </div>
                <div class="flex min-h-[23px] items-center justify-between gap-2 text-sm">
                    <span>Zeit</span>
                    <strong class="font-semibold">{{ selectedTime }}</strong>
                </div>
                <div class="flex min-h-[23px] items-center justify-between gap-2 text-sm">
                    <span>Dienstleistung</span>
                    <strong class="font-semibold">{{ selectedService.name }}</strong>
                </div>
            </div>

            <template #footer>
                <div class="flex justify-end gap-[7px] px-[18px] pb-[18px]">
                    <Button label="Abbrechen" severity="secondary" class="!h-[33px] !text-sm" @click="confirmationVisible = false" />
                    <Button
                        label="Bestätigen"
                        class="!h-[33px] !border-emerald-500 !bg-emerald-500 !text-sm hover:!border-emerald-600 hover:!bg-emerald-600"
                        @click="confirmationVisible = false"
                    />
                </div>
            </template>
        </Dialog>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const appointmentDate = ref(new Date(2026, 6, 15))
const selectedTime = ref('11:00 - 12:30')
const services = ref([
    { name: 'Beratungsgespräch' },
    { name: 'Untersuchung' }
])
const selectedService = ref(services.value[1])
const timeSlots = ref(['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30'])
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)
const confirmationVisible = ref(true)
</script>