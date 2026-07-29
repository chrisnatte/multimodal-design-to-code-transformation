<template>
    <div class="w-[885px] bg-white p-6">
        <div class="flex items-start gap-8">
            <div class="w-[216px]">
                <label for="destination" class="mb-0.5 block text-sm">Zielort</label>
                <Select
                    v-model="destination"
                    inputId="destination"
                    :options="destinations"
                    optionLabel="label"
                    placeholder="Zielort auswählen"
                    filter
                    filterPlaceholder="Suche..."
                    class="w-full"
                    :pt="{
                        root: { class: '!border-primary' },
                        overlay: { class: '!w-[216px]' }
                    }"
                />
            </div>

            <div class="w-[268px]">
                <label for="travel-period" class="mb-0.5 block text-sm">Reisezeitraum</label>
                <DatePicker
                    v-model="travelPeriod"
                    inputId="travel-period"
                    placeholder="Reisezeitraum wählen"
                    class="w-[216px]"
                    :pt="{
                        pcInputText: { root: { class: '!border-primary' } },
                        panel: { class: '!w-[268px]' }
                    }"
                />
            </div>

            <div class="w-[192px]">
                <label for="travellers" class="mb-0.5 block text-sm">Personen</label>
                <InputNumber
                    v-model="travellers"
                    inputId="travellers"
                    showButtons
                    buttonLayout="horizontal"
                    :step="1"
                    :min="1"
                    class="w-full"
                    :pt="{
                        incrementButton: { class: '!bg-black !border-black' },
                        decrementButton: { class: '!bg-black !border-black' }
                    }"
                >
                    <template #incrementbuttonicon>
                        <span class="pi pi-plus text-white" />
                    </template>
                    <template #decrementbuttonicon>
                        <span class="pi pi-minus text-white" />
                    </template>
                </InputNumber>
            </div>

            <div class="flex h-[61px] w-[65px] items-end">
                <Button label="Suche" class="h-[33px] w-full !text-sm" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';

const destination = ref(null);
const travelPeriod = ref(null);
const travellers = ref(2);

const destinations = ref([
    { label: 'Berlin' },
    { label: 'Amsterdam' },
    { label: 'Barcelona' },
    { label: 'Paris' }
]);
</script>