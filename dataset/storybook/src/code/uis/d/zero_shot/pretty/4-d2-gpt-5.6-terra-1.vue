<template>
    <main class="min-h-screen bg-white pt-6 text-sm text-slate-600">
        <div class="mx-auto w-full max-w-[728px]">
            <header class="mb-10 flex items-center gap-4 -translate-x-[58px]">
                <Button
                    icon="pi pi-times-circle"
                    severity="secondary"
                    variant="text"
                    rounded
                    aria-label="Schließen"
                    class="!h-12 !w-12 !bg-slate-100 !text-slate-500"
                />
                <div class="flex flex-col gap-1">
                    <h1 class="m-0 text-[26px] font-bold leading-tight text-slate-700">Bestellung aufgeben</h1>
                    <p class="m-0 text-sm text-slate-400">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
                </div>
            </header>

            <div class="flex flex-col gap-4">
                <section class="flex flex-col gap-2">
                    <div class="flex items-center justify-between text-sm">
                        <span class="text-emerald-500">Warenkorb</span>
                        <span class="text-sky-500">Adresse</span>
                        <span class="text-slate-500">Bestätigung</span>
                    </div>
                    <ProgressBar :value="progress" :showValue="false" class="!h-1.5" />
                </section>

                <section class="px-4">
                    <DataTable
                        :value="products"
                        dataKey="id"
                        size="small"
                        tableStyle="min-width: 100%"
                        :pt="{
                            table: { class: 'text-sm' },
                            headerCell: { class: 'font-semibold' }
                        }"
                    >
                        <Column field="name" header="Produkt" style="width: 55%" />
                        <Column header="Menge" style="width: 22%">
                            <template #body="{ data }">
                                <InputNumber
                                    v-model="data.quantity"
                                    :min="1"
                                    showButtons
                                    buttonLayout="vertical"
                                    incrementButtonIcon="pi pi-angle-up"
                                    decrementButtonIcon="pi pi-angle-down"
                                    class="w-[94px]"
                                    inputClass="!w-[66px]"
                                />
                            </template>
                        </Column>
                        <Column field="price" header="Preis" style="width: 14%">
                            <template #body="{ data }">
                                {{ data.price }}
                            </template>
                        </Column>
                        <Column style="width: 9%">
                            <template #body="{ data }">
                                <Button
                                    icon="pi pi-trash"
                                    severity="danger"
                                    variant="text"
                                    size="small"
                                    :aria-label="`${data.name} entfernen`"
                                    @click="removeProduct(data.id)"
                                />
                            </template>
                        </Column>
                    </DataTable>
                </section>

                <Divider class="!my-0" />

                <section class="grid grid-cols-2 gap-x-3 gap-y-4 px-4">
                    <div class="flex flex-col gap-1">
                        <label for="firstName">Vorname</label>
                        <InputText id="firstName" v-model="firstName" fluid />
                    </div>

                    <div class="flex flex-col gap-1">
                        <label for="lastName">Nachname</label>
                        <InputText id="lastName" v-model="lastName" fluid />
                    </div>

                    <div class="col-span-2 flex flex-col gap-1">
                        <label for="street">Straße</label>
                        <InputText id="street" v-model="street" fluid />
                    </div>

                    <div class="flex flex-col gap-1">
                        <label for="postalCode">PLZ / Ort</label>
                        <InputText id="postalCode" v-model="postalCode" fluid />
                    </div>

                    <div class="flex flex-col gap-1">
                        <label for="country">Land</label>
                        <Select
                            id="country"
                            v-model="country"
                            :options="countries"
                            optionLabel="name"
                            fluid
                            appendTo="self"
                        />
                    </div>
                </section>

                <Divider class="!my-0" />

                <section class="flex flex-col gap-3 px-4">
                    <span class="font-semibold text-slate-600">Versandart</span>
                    <div class="flex items-center gap-2">
                        <RadioButton v-model="shippingMethod" inputId="standard" name="shipping" value="standard" />
                        <label for="standard">Standard (3 - 5 Tage) - kostenlos</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton v-model="shippingMethod" inputId="express" name="shipping" value="express" />
                        <label for="express">Express (1 - 2 Tage) - 4,99 €</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton v-model="shippingMethod" inputId="sameDay" name="shipping" value="sameDay" />
                        <label for="sameDay">Same Day (Gleicher Tag) - 9,99 €</label>
                    </div>
                </section>

                <Divider class="!my-0" />

                <footer class="flex items-center justify-between">
                    <Button label="Abbrechen" severity="secondary" size="small" />
                    <Button label="Speichern" size="small" />
                </footer>
            </div>
        </div>
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

const progress = ref(50);

const products = ref([
    { id: 1, name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { id: 2, name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
]);

const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const postalCode = ref('10115 Berlin');

const countries = ref([
    { name: 'Spanien' },
    { name: 'Deutschland' },
    { name: 'Österreich' },
    { name: 'Schweiz' }
]);

const country = ref(countries.value[1]);
const shippingMethod = ref(null);

const removeProduct = (id) => {
    products.value = products.value.filter((product) => product.id !== id);
};
</script>