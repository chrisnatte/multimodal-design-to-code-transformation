<template>
    <main class="flex items-start gap-8 p-6">
        <section class="flex flex-col gap-2">
            <label for="destination" class="text-sm text-slate-700">Zielort</label>
            <Select
                ref="destinationSelect"
                v-model="destination"
                inputId="destination"
                :options="destinations"
                placeholder="Zielort auswählen"
                filter
                filterPlaceholder="Suche..."
                class="w-[216px]"
                panelClass="w-[216px]"
            />
        </section>

        <section class="flex flex-col gap-2">
            <label for="travel-period" class="text-sm text-slate-700">Reisezeitraum</label>
            <DatePicker
                ref="travelDatePicker"
                v-model="travelPeriod"
                inputId="travel-period"
                placeholder="Reisezeitraum wählen"
                :defaultDate="calendarDefault"
                :manualInput="false"
                :showOnFocus="false"
                :firstDayOfWeek="0"
                class="w-[216px]"
                panelClass="w-[270px]"
            />
        </section>

        <section class="flex flex-col gap-2">
            <label for="persons" class="text-sm text-slate-700">Personen</label>
            <InputNumber
                v-model="persons"
                inputId="persons"
                :min="1"
                showButtons
                buttonLayout="horizontal"
                decrementButtonIcon="pi pi-minus"
                incrementButtonIcon="pi pi-plus"
                class="w-[192px]"
                inputClass="w-full text-center"
            />
        </section>

        <div class="pt-7">
            <Button label="Suche" />
        </div>
    </main>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'

const destinations = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris'])
const destination = ref(null)
const travelPeriod = ref(null)
const persons = ref(2)
const calendarDefault = ref(new Date(2024, 6, 1))

const destinationSelect = ref(null)
const travelDatePicker = ref(null)

onMounted(async () => {
    await nextTick()
    destinationSelect.value?.show()
    travelDatePicker.value?.show()
})
</script>