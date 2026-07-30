<template>
    <main class="min-h-screen bg-white px-6 py-[92px] font-sans text-surface-900">
        <section class="mx-auto flex w-full max-w-[802px] flex-col gap-10">
            <header class="flex items-center gap-4">
                <Button
                    icon="pi pi-times-circle"
                    severity="secondary"
                    rounded
                    aria-label="Bestellung schließen"
                    class="!h-[50px] !w-[50px]"
                />
                <div class="flex flex-col gap-1">
                    <h1 class="m-0 text-[32px] font-bold leading-[39px]">Bestellung aufgeben</h1>
                    <p class="m-0 text-base leading-[19px]">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
                </div>
            </header>

            <section class="mx-auto flex w-full max-w-[728px] flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <div class="flex items-center justify-between text-base leading-[19px]">
                        <span>Warenkorb</span>
                        <span>Adresse</span>
                        <span>Bestätigung</span>
                    </div>
                    <ProgressBar :value="50" :showValue="false" class="!h-[6px]" aria-label="Bestellfortschritt" />
                </div>

                <DataTable
                    :value="cartItems"
                    dataKey="id"
                    tableStyle="min-width: 100%; table-layout: fixed"
                    :pt="{
                        root: { class: 'w-full' },
                        table: { class: 'w-full' }
                    }"
                >
                    <Column field="product" header="Produkt" headerStyle="width: 55.2%" />
                    <Column header="Menge" headerStyle="width: 22.4%">
                        <template #body="slotProps">
                            <InputNumber
                                v-model="slotProps.data.quantity"
                                :min="1"
                                showButtons
                                buttonLayout="vertical"
                                incrementButtonIcon="pi pi-angle-up"
                                decrementButtonIcon="pi pi-angle-down"
                                class="w-[130px]"
                                inputClass="!w-[96px] !text-sm"
                            />
                        </template>
                    </Column>
                    <Column field="price" header="Preis" headerStyle="width: 13.2%" bodyClass="text-center" />
                    <Column header="" headerStyle="width: 9.2%" bodyClass="text-center">
                        <template #body="slotProps">
                            <Button
                                icon="pi pi-trash"
                                severity="danger"
                                variant="text"
                                size="small"
                                aria-label="Produkt entfernen"
                                @click="removeItem(slotProps.data.id)"
                            />
                        </template>
                    </Column>
                </DataTable>

                <Divider class="!my-0" />

                <div class="grid grid-cols-2 gap-x-4 gap-y-4 px-4">
                    <div class="flex flex-col gap-2">
                        <label for="first-name" class="text-sm leading-[21px]">Vorname</label>
                        <InputText id="first-name" v-model="firstName" class="w-full" />
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="last-name" class="text-sm leading-[21px]">Nachname</label>
                        <InputText id="last-name" v-model="lastName" class="w-full" />
                    </div>

                    <div class="col-span-2 flex flex-col gap-2">
                        <label for="street" class="text-sm leading-[21px]">Straße</label>
                        <InputText id="street" v-model="street" class="w-full" />
                    </div>

                    <div class="flex h-[202px] flex-col gap-2">
                        <label for="postal-city" class="text-sm leading-[21px]">PLZ / Ort</label>
                        <InputText id="postal-city" v-model="postalCity" class="w-full" />
                    </div>

                    <div class="flex h-[202px] flex-col gap-2">
                        <label for="country" class="text-sm leading-[21px]">Land</label>
                        <Select
                            id="country"
                            v-model="selectedCountry"
                            :options="countries"
                            optionLabel="label"
                            optionValue="value"
                            class="w-full"
                            aria-label="Land"
                        />
                    </div>
                </div>

                <Divider class="!my-0" />

                <section class="flex flex-col gap-4 px-4">
                    <h2 class="m-0 text-sm font-semibold leading-[17px]">Versandart</h2>

                    <div class="flex items-center gap-2">
                        <RadioButton v-model="shippingMethod" inputId="standard" name="shipping" value="standard" />
                        <label for="standard" class="text-sm">Standard (3 - 5 Tage) - kostenlos</label>
                    </div>

                    <div class="flex items-center gap-2">
                        <RadioButton v-model="shippingMethod" inputId="express" name="shipping" value="express" />
                        <label for="express" class="text-sm">Express (1 - 2 Tage) - 4,99 €</label>
                    </div>

                    <div class="flex items-center gap-2">
                        <RadioButton v-model="shippingMethod" inputId="same-day" name="shipping" value="same-day" />
                        <label for="same-day" class="text-sm">Same Day (Gleicher Tag) - 9,99 €</label>
                    </div>
                </section>

                <Divider class="!my-0" />

                <div class="flex items-center justify-between">
                    <Button label="Abbrechen" severity="secondary" />
                    <Button label="Speichern" />
                </div>
            </section>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Divider from 'primevue/divider';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import ProgressBar from 'primevue/progressbar';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';

const cartItems = ref([
    { id: 1, product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { id: 2, product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
]);

const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const postalCity = ref('10115 Berlin');
const selectedCountry = ref('de');
const shippingMethod = ref(null);

const countries = ref([
    { label: 'Spanien', value: 'es' },
    { label: 'Deutschland', value: 'de' },
    { label: 'Österreich', value: 'at' },
    { label: 'Schweiz', value: 'ch' }
]);

const removeItem = (id) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== id);
};
</script>