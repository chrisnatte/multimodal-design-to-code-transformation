<template>
    <div class="flex items-end gap-8 px-6 pt-7">
        <div class="flex flex-col gap-2">
            <label for="destination" class="text-sm text-surface-700">Zielort</label>
            <Select
                ref="destinationSelect"
                v-model="destination"
                inputId="destination"
                :options="destinations"
                placeholder="Zielort auswählen"
                filter
                filterPlaceholder="Suche..."
                size="small"
                class="w-[216px]"
                scrollHeight="14rem"
            />
        </div>

        <div class="flex flex-col gap-2">
            <label for="travel-period" class="text-sm text-surface-700">Reisezeitraum</label>
            <DatePicker
                ref="travelDatePicker"
                v-model="travelPeriod"
                inputId="travel-period"
                selectionMode="range"
                placeholder="Reisezeitraum wählen"
                size="small"
                class="w-[216px]"
                panelClass="w-[270px]"
            />
        </div>

        <div class="ml-12 flex flex-col gap-2">
            <label for="persons" class="text-sm text-surface-700">Personen</label>
            <InputNumber
                v-model="persons"
                inputId="persons"
                :min="1"
                showButtons
                buttonLayout="horizontal"
                size="small"
                fluid
                class="w-48"
            >
                <template #decrementbuttonicon>
                    <span class="pi pi-minus" />
                </template>
                <template #incrementbuttonicon>
                    <span class="pi pi-plus" />
                </template>
            </InputNumber>
        </div>

        <Button label="Suche" size="small" class="mb-px" />
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';

const destinationSelect = ref();
const travelDatePicker = ref();

const destination = ref(null);
const travelPeriod = ref(null);
const persons = ref(2);

const destinations = ref([
    'Berlin',
    'Amsterdam',
    'Barcelona',
    'Paris'
]);

onMounted(async () => {
    await nextTick();
    destinationSelect.value?.show();
    travelDatePicker.value?.show();
});
</script>