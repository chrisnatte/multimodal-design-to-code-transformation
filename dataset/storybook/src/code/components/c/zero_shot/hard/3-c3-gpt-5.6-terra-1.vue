<template>
    <div class="flex min-h-[381px] items-start gap-8 bg-white p-6 text-sm text-slate-700">
        <div class="flex w-[216px] flex-col gap-2">
            <label for="destination" class="font-normal">Zielort</label>
            <Select
                ref="destinationSelect"
                v-model="destination"
                inputId="destination"
                :options="destinations"
                placeholder="Zielort auswählen"
                filter
                filterPlaceholder="Suche..."
                class="w-full"
                panelClass="!w-[216px]"
            />
        </div>

        <div class="flex w-[216px] flex-col gap-2">
            <label for="travel-period" class="font-normal">Reisezeitraum</label>
            <DatePicker
                ref="travelDatePicker"
                v-model="travelPeriod"
                inputId="travel-period"
                placeholder="Reisezeitraum wählen"
                :defaultValue="calendarDefault"
                dateFormat="dd.mm.yy"
                class="w-full"
                inputClass="w-full"
                panelClass="!w-[236px]"
            />
        </div>

        <div class="flex w-[192px] flex-col gap-2 ml-6">
            <label for="people" class="font-normal">Personen</label>
            <InputNumber
                v-model="people"
                inputId="people"
                :min="1"
                showButtons
                buttonLayout="horizontal"
                :step="1"
                class="w-full"
                inputClass="w-full text-center"
                decrementButtonIcon="pi pi-minus"
                incrementButtonIcon="pi pi-plus"
            />
        </div>

        <div class="pt-7">
            <Button label="Suche" />
        </div>
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'

const destination = ref(null)
const travelPeriod = ref(null)
const people = ref(2)
const destinationSelect = ref(null)
const travelDatePicker = ref(null)

const destinations = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris'])
const calendarDefault = ref(new Date(2024, 6, 1))

onMounted(() => {
    nextTick(() => {
        destinationSelect.value?.show?.()
        travelDatePicker.value?.show?.()
    })
})
</script>