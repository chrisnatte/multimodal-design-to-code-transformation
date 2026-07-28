<template>
    <div ref="formRow" class="flex items-start gap-8 p-6 font-[Inter] text-sm text-slate-700">
        <div class="relative flex w-[216px] flex-col gap-1">
            <label for="destination" class="text-sm">Zielort</label>
            <Select
                ref="destinationSelect"
                v-model="destination"
                inputId="destination"
                :options="destinations"
                placeholder="Zielort auswählen"
                filter
                filterPlaceholder="Suche..."
                appendTo="self"
                class="w-[216px]"
            />
        </div>

        <div class="flex w-[268px] flex-col gap-1">
            <label for="travel-period" class="text-sm">Reisezeitraum</label>
            <InputText
                id="travel-period"
                v-model="travelPeriodText"
                placeholder="Reisezeitraum wählen"
                class="w-[216px]"
            />
            <DatePicker
                v-model="travelPeriod"
                inline
                class="mt-0 w-[268px]"
            />
        </div>

        <div class="flex w-[192px] flex-col gap-1">
            <label for="guests" class="text-center">Personen</label>
            <InputNumber
                v-model="guests"
                inputId="guests"
                showButtons
                buttonLayout="horizontal"
                :min="1"
                :step="1"
                class="w-[192px]"
            >
                <template #incrementbuttonicon>
                    <span class="pi pi-plus" />
                </template>
                <template #decrementbuttonicon>
                    <span class="pi pi-minus" />
                </template>
            </InputNumber>
        </div>

        <div class="flex h-[61px] items-end">
            <Button label="Suche" />
        </div>
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

const formRow = ref(null);
const destinationSelect = ref(null);
const destination = ref(null);
const travelPeriod = ref(null);
const travelPeriodText = ref('');
const guests = ref(2);

const destinations = ref([
    'Berlin',
    'Amsterdam',
    'Barcelona',
    'Paris'
]);

onMounted(async () => {
    await nextTick();

    const selectElement = formRow.value?.querySelector('.p-select');

    if (selectElement) {
        selectElement.dispatchEvent(
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true
            })
        );
    }
});
</script>