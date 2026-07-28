<template>
    <div class="flex items-start gap-8 p-6">
        <div class="flex flex-col gap-2">
            <label for="destination" class="text-sm text-slate-700">Zielort</label>
            <Select
                ref="destinationSelect"
                v-model="destination"
                inputId="destination"
                :options="destinations"
                placeholder="Zielort auswählen"
                filter
                filterPlaceholder="Suche..."
                class="w-[13.5rem]"
            />
        </div>

        <div class="flex flex-col gap-2">
            <label for="travel-period" class="text-sm text-slate-700">Reisezeitraum</label>
            <DatePicker
                ref="travelDatePicker"
                v-model="travelPeriod"
                inputId="travel-period"
                selectionMode="range"
                placeholder="Reisezeitraum wählen"
                dateFormat="dd.mm.yy"
                class="w-[13.5rem]"
            />
        </div>

        <div class="flex flex-col gap-2">
            <label for="people" class="text-sm text-slate-700">Personen</label>
            <InputNumber
                v-model="people"
                inputId="people"
                showButtons
                buttonLayout="horizontal"
                :min="1"
                class="w-48"
            >
                <template #incrementbuttonicon>
                    <span class="pi pi-plus"></span>
                </template>
                <template #decrementbuttonicon>
                    <span class="pi pi-minus"></span>
                </template>
            </InputNumber>
        </div>

        <Button label="Suche" class="mt-7" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';

const destinations = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris']);
const destination = ref(null);
const travelPeriod = ref(null);
const people = ref(2);
const destinationSelect = ref(null);
const travelDatePicker = ref(null);

onMounted(() => {
    destinationSelect.value?.show();
    travelDatePicker.value?.show();
});
</script>