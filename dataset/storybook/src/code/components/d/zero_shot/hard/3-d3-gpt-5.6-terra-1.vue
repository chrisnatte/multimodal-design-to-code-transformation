<template>
    <div class="flex w-[885px] flex-col gap-2.5 bg-white p-6 font-sans text-sm text-slate-700">
        <div class="flex items-start gap-8">
            <div class="w-[216px]">
                <label for="destination" class="mb-[7px] block leading-[21px]">Zielort</label>
                <Select
                    ref="destinationSelect"
                    v-model="destination"
                    inputId="destination"
                    :options="destinations"
                    optionLabel="name"
                    placeholder="Zielort auswählen"
                    filter
                    filterPlaceholder="Suche..."
                    appendTo="self"
                    class="w-full [&_.p-select-label]:!py-[7px] [&_.p-select-label]:!pl-[10px] [&_.p-select]:!h-[33px] [&_.p-select]:!border-emerald-500 [&_.p-select]:!shadow-none [&_.p-select-dropdown]:!w-[35px]"
                    panelClass="!mt-0 !w-[216px] [&_.p-select-filter-container]:!p-[10px] [&_.p-select-filter]:!h-[33px] [&_.p-select-filter]:!py-[7px] [&_.p-select-filter]:!pl-[10px] [&_.p-select-list]:!p-[3px] [&_.p-select-option]:!min-h-[31px] [&_.p-select-option]:!px-[10px] [&_.p-select-option]:!py-[7px]"
                />
            </div>

            <div class="w-[268px]">
                <label for="travel-period" class="mb-[7px] block leading-[21px]">Reisezeitraum</label>
                <DatePicker
                    ref="travelPicker"
                    v-model="travelPeriod"
                    inputId="travel-period"
                    selectionMode="range"
                    dateFormat="dd.mm.yy"
                    placeholder="Reisezeitraum wählen"
                    appendTo="self"
                    class="w-[216px] [&_.p-inputtext]:!h-[33px] [&_.p-inputtext]:!border-emerald-500 [&_.p-inputtext]:!px-[10px] [&_.p-inputtext]:!py-[7px] [&_.p-inputtext]:!shadow-none"
                    panelClass="!mt-0 !w-[270px] [&_.p-datepicker-header]:!px-[10px] [&_.p-datepicker-header]:!py-[4px] [&_.p-datepicker-title]:!gap-[7px] [&_.p-datepicker-calendar-container]:!p-[10px] [&_.p-datepicker-day-view]:!text-sm"
                />
            </div>

            <div class="w-[192px]">
                <label for="people" class="mb-[7px] block leading-[21px]">Personen</label>
                <InputNumber
                    v-model="people"
                    inputId="people"
                    :min="1"
                    showButtons
                    buttonLayout="horizontal"
                    :step="1"
                    decrementButtonIcon="pi pi-minus"
                    incrementButtonIcon="pi pi-plus"
                    class="mt-[7px] w-full [&_.p-inputnumber-button]:!h-[33px] [&_.p-inputnumber-button]:!w-[35px] [&_.p-inputnumber-input]:!h-[33px] [&_.p-inputnumber-input]:!px-[10px] [&_.p-inputnumber-input]:!py-[7px]"
                />
            </div>

            <div class="flex h-[60px] w-[65px] flex-col justify-end">
                <Button label="Suche" class="!h-[33px] !px-[11px] !py-[7px] !text-sm" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'

const destinations = [
    { name: 'Berlin' },
    { name: 'Amsterdam' },
    { name: 'Barcelona' },
    { name: 'Paris' }
]

const destination = ref(null)
const travelPeriod = ref(null)
const people = ref(2)
const destinationSelect = ref(null)
const travelPicker = ref(null)

onMounted(() => {
    destinationSelect.value?.show?.()
    travelPicker.value?.show?.()
})
</script>