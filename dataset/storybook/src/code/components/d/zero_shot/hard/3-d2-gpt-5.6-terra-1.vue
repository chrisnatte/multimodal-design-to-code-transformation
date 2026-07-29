<template>
    <div class="flex h-[381px] w-[885px] flex-col gap-2.5 bg-white p-6 font-[Inter] text-sm text-slate-700">
        <div class="flex items-start gap-8">
            <div class="relative flex w-[216px] flex-col gap-0.5">
                <label for="destination" class="leading-[21px]">Zielort</label>
                <Select
                    v-model="destination"
                    inputId="destination"
                    :options="cities"
                    optionLabel="name"
                    placeholder="Zielort auswählen"
                    class="w-[216px] !border-emerald-500"
                />

                <div class="absolute left-0 top-[63px] z-10 w-[216px] rounded-md border border-slate-200 bg-white shadow-md">
                    <div class="p-2.5 pb-1">
                        <div class="relative">
                            <InputText
                                v-model="destinationFilter"
                                placeholder="Suche..."
                                aria-label="Zielort suchen"
                                class="h-[33px] w-full pr-9"
                            />
                            <i class="pi pi-search absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400"></i>
                        </div>
                    </div>
                    <div class="flex flex-col gap-0.5 px-1 pb-1">
                        <Button
                            v-for="city in filteredCities"
                            :key="city.name"
                            :label="city.name"
                            variant="text"
                            severity="secondary"
                            class="!h-[31px] !justify-start !rounded-sm !px-2.5 !py-[7px] !font-normal !text-slate-700"
                            :class="{ '!bg-slate-100': city.name === 'Berlin' }"
                            @click="destination = city"
                        />
                    </div>
                </div>
            </div>

            <div class="flex w-[268px] flex-col gap-0.5">
                <label for="travel-period" class="leading-[21px]">Reisezeitraum</label>
                <DatePicker
                    v-model="travelPeriod"
                    inputId="travel-period"
                    selectionMode="range"
                    placeholder="Reisezeitraum wählen"
                    class="w-[216px]"
                    inputClass="!border-emerald-500"
                />

                <div class="mt-0.5 w-[268px] rounded-md border border-slate-200 bg-white p-2.5 shadow-md">
                    <DatePicker
                        v-model="calendarPreview"
                        inline
                        class="w-full"
                        :pt="{
                            root: { class: '!w-full !border-0 !p-0' }
                        }"
                    />
                </div>
            </div>

            <div class="flex w-[192px] flex-col gap-0.5">
                <label for="people" class="ml-[34px] leading-[21px]">Personen</label>
                <InputNumber
                    v-model="people"
                    inputId="people"
                    :min="1"
                    showButtons
                    buttonLayout="horizontal"
                    class="w-[192px]"
                >
                    <template #incrementbuttonicon>
                        <span class="pi pi-plus"></span>
                    </template>
                    <template #decrementbuttonicon>
                        <span class="pi pi-minus"></span>
                    </template>
                </InputNumber>
            </div>

            <div class="flex h-[60px] w-[65px] flex-col justify-end">
                <Button label="Suche" class="h-[33px] w-[65px] !px-2.5 !py-[7px]" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

const cities = ref([
    { name: 'Berlin' },
    { name: 'Amsterdam' },
    { name: 'Barcelona' },
    { name: 'Paris' }
]);

const destination = ref(null);
const destinationFilter = ref('');
const travelPeriod = ref(null);
const calendarPreview = ref(new Date(2024, 6, 1));
const people = ref(2);

const filteredCities = computed(() => {
    const query = destinationFilter.value.toLowerCase();

    return cities.value.filter((city) => city.name.toLowerCase().includes(query));
});
</script>