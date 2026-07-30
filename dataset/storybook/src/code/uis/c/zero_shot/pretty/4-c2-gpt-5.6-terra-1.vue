<template>
    <main class="mx-auto flex w-full max-w-[520px] flex-col px-3 py-6 text-sm">
        <header class="flex items-start gap-3">
            <Button
                icon="pi pi-times"
                severity="secondary"
                variant="text"
                rounded
                aria-label="Bestellung schließen"
                class="mt-0.5"
            />
            <div>
                <h1 class="m-0 text-2xl font-semibold text-surface-700">Bestellung aufgeben</h1>
                <p class="m-0 mt-0.5 text-sm text-surface-500">
                    Schließe deine Bestellung mit den Produkten im Warenkorb ab.
                </p>
            </div>
        </header>

        <section class="mt-7">
            <div class="flex justify-between text-sm">
                <span class="text-emerald-500">Warenkorb</span>
                <span class="text-primary">Adresse</span>
                <span class="text-surface-500">Bestätigung</span>
            </div>
            <ProgressBar :value="50" :showValue="false" class="mt-2 h-1" aria-label="Bestellfortschritt" />
        </section>

        <section class="mt-4">
            <DataTable :value="cartItems" size="small" tableStyle="width: 100%">
                <Column field="product" header="Produkt" style="width: 57%" />
                <Column header="Menge" style="width: 24%">
                    <template #body="{ data }">
                        <InputNumber
                            v-model="data.quantity"
                            :min="1"
                            showButtons
                            buttonLayout="horizontal"
                            incrementButtonIcon="pi pi-chevron-up"
                            decrementButtonIcon="pi pi-chevron-down"
                            inputClass="w-12"
                            class="w-24"
                        />
                    </template>
                </Column>
                <Column field="price" header="Preis" style="width: 14%" />
                <Column style="width: 5%">
                    <template #body="{ data }">
                        <Button
                            icon="pi pi-trash"
                            severity="danger"
                            variant="text"
                            size="small"
                            rounded
                            :aria-label="`${data.product} entfernen`"
                            @click="removeItem(data)"
                        />
                    </template>
                </Column>
            </DataTable>
        </section>

        <Divider class="my-6" />

        <section class="grid grid-cols-2 gap-x-3 gap-y-3">
            <div class="flex flex-col gap-1">
                <label for="firstname">Vorname</label>
                <InputText id="firstname" v-model="firstName" fluid />
            </div>

            <div class="flex flex-col gap-1">
                <label for="lastname">Nachname</label>
                <InputText id="lastname" v-model="lastName" fluid />
            </div>

            <div class="col-span-2 flex flex-col gap-1">
                <label for="street">Straße</label>
                <InputText id="street" v-model="street" fluid />
            </div>

            <div class="flex flex-col gap-1">
                <label for="postal-code">PLZ / Ort</label>
                <InputText id="postal-code" v-model="postalCode" fluid />
            </div>

            <div class="flex flex-col gap-1">
                <label for="country">Land</label>
                <Select
                    id="country"
                    v-model="country"
                    :options="countries"
                    optionLabel="label"
                    optionValue="value"
                    fluid
                />
            </div>
        </section>

        <Divider class="my-6" />

        <section class="flex flex-col gap-3">
            <h2 class="m-0 text-sm font-semibold text-surface-700">Versandart</h2>

            <div class="flex items-center gap-2">
                <RadioButton v-model="shippingMethod" inputId="standard" name="shipping" value="standard" />
                <label for="standard">Standard (3 - 5 Tage) - kostenlos</label>
            </div>

            <div class="flex items-center gap-2">
                <RadioButton v-model="shippingMethod" inputId="express" name="shipping" value="express" />
                <label for="express">Express (1 - 2 Tage) - 4,99 €</label>
            </div>

            <div class="flex items-center gap-2">
                <RadioButton v-model="shippingMethod" inputId="same-day" name="shipping" value="same-day" />
                <label for="same-day">Same Day (Gleicher Tag) - 9,99 €</label>
            </div>
        </section>

        <Divider class="my-6" />

        <footer class="flex items-center justify-between">
            <Button label="Abbrechen" severity="secondary" variant="text" size="small" />
            <Button label="Speichern" size="small" @click="saveOrder" />
        </footer>
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
    { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
]);

const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const postalCode = ref('10115 Berlin');
const country = ref('Deutschland');
const shippingMethod = ref(null);

const countries = ref([
    { label: 'Spanien', value: 'Spanien' },
    { label: 'Deutschland', value: 'Deutschland' },
    { label: 'Österreich', value: 'Österreich' },
    { label: 'Schweiz', value: 'Schweiz' }
]);

const removeItem = (item) => {
    cartItems.value = cartItems.value.filter((cartItem) => cartItem !== item);
};

const saveOrder = () => {};
</script>