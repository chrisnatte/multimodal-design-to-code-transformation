<template>
    <main class="flex min-h-[380px] items-start gap-8 bg-white p-6 text-slate-700">
        <section class="flex w-[13.5rem] flex-col gap-1">
            <label for="destination" class="text-sm">Zielort</label>
            <Select
                ref="destinationSelect"
                v-model="destination"
                inputId="destination"
                :options="destinations"
                placeholder="Zielort auswählen"
                filter
                filterPlaceholder="Suche..."
                size="small"
                class="w-full"
            />
        </section>

        <section class="flex w-[17rem] flex-col gap-1">
            <label for="travel-period" class="text-sm">Reisezeitraum</label>
            <DatePicker
                v-model="travelPeriod"
                inputId="travel-period"
                placeholder="Reisezeitraum wählen"
                size="small"
                fluid
            />
            <DatePicker v-model="calendarDate" inline class="mt-0.5 w-full shadow-md" />
        </section>

        <section class="flex w-48 flex-col gap-1">
            <label for="guests" class="text-sm">Personen</label>
            <InputNumber
                v-model="guests"
                inputId="guests"
                :min="1"
                showButtons
                buttonLayout="horizontal"
                size="small"
                fluid
            >
                <template #decrementbuttonicon>
                    <span class="pi pi-minus" />
                </template>
                <template #incrementbuttonicon>
                    <span class="pi pi-plus" />
                </template>
            </InputNumber>
        </section>

        <div class="pt-7">
            <Button label="Suche" size="small" severity="success" />
        </div>
    </main>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';

const destinationSelect = ref();
const destination = ref(null);
const travelPeriod = ref(null);
const calendarDate = ref(new Date(2024, 6, 1));
const guests = ref(2);

const destinations = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris']);

onMounted(async () => {
    await nextTick();
    destinationSelect.value?.$el?.click();

    await nextTick();
    calendarDate.value = null;
});
</script>