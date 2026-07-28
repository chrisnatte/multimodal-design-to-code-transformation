<template>
    <form class="flex items-start gap-8 p-6 font-sans text-sm text-slate-700" @submit.prevent>
        <div class="relative flex w-[216px] flex-col gap-2">
            <label for="destination" class="leading-5">Zielort</label>
            <Select
                ref="destinationSelect"
                v-model="destination"
                inputId="destination"
                :options="destinations"
                placeholder="Zielort auswählen"
                filter
                filterPlaceholder="Suche..."
                appendTo="self"
                class="!h-[33px] w-full"
                :pt="{
                    label: { class: '!text-sm' },
                    filterInput: { class: '!h-[33px] !text-sm' },
                    overlay: { class: '!mt-0 !w-[216px]' }
                }"
            />
        </div>

        <div class="relative flex w-[268px] flex-col gap-2">
            <label for="travel-period" class="leading-5">Reisezeitraum</label>
            <DatePicker
                ref="travelPicker"
                v-model="travelDates"
                inputId="travel-period"
                selectionMode="range"
                placeholder="Reisezeitraum wählen"
                appendTo="self"
                :showOnFocus="true"
                inputClass="!h-[33px] !w-[216px] !text-sm"
                class="w-[216px]"
                :pt="{
                    panel: { class: '!mt-0' }
                }"
            />
        </div>

        <div class="flex w-[192px] flex-col gap-2">
            <label for="guests" class="ml-[34px] leading-5">Personen</label>
            <InputNumber
                v-model="guests"
                inputId="guests"
                :min="1"
                showButtons
                buttonLayout="horizontal"
                decrementButtonIcon="pi pi-minus"
                incrementButtonIcon="pi pi-plus"
                decrementButtonClass="!h-[33px] !w-[35px]"
                incrementButtonClass="!h-[33px] !w-[35px]"
                class="!h-[33px] w-full"
                :pt="{
                    input: { class: '!h-[33px] !text-sm' }
                }"
            />
        </div>

        <div class="flex h-[61px] w-[65px] flex-col justify-end">
            <Button type="submit" label="Suche" class="!h-[33px] !px-3 !text-sm" />
        </div>
    </form>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';

const destination = ref(null);
const travelDates = ref(null);
const guests = ref(2);

const destinationSelect = ref(null);
const travelPicker = ref(null);

const destinations = ['Berlin', 'Amsterdam', 'Barcelona', 'Paris'];

onMounted(async () => {
    await nextTick();

    if (destinationSelect.value?.show) {
        destinationSelect.value.show();
    }

    if (travelPicker.value?.show) {
        travelPicker.value.show();
    }
});
</script>