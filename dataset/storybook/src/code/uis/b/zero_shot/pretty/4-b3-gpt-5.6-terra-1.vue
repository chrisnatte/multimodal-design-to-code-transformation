<template>
    <main class="min-h-screen bg-white pt-7 text-[14px] text-slate-900">
        <header class="mx-auto flex w-[802px] items-center gap-4">
            <Button
                icon="pi pi-times-circle"
                severity="secondary"
                rounded
                aria-label="Bestellung schließen"
                class="!h-[50px] !w-[50px] !bg-slate-100 !text-slate-700"
            />
            <div class="flex h-[58px] flex-col gap-1">
                <h1 class="m-0 text-[32px] font-bold leading-[39px]">Bestellung aufgeben</h1>
                <p class="m-0 text-base leading-[19px]">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
            </div>
        </header>

        <section class="mx-auto mt-[47px] flex w-[728px] flex-col gap-4">
            <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between text-base leading-[19px]">
                    <span>Warenkorb</span>
                    <span>Adresse</span>
                    <span>Bestätigung</span>
                </div>
                <ProgressBar :value="50" :showValue="false" class="h-[6px]" />
            </div>

            <DataTable
                :value="cartItems"
                dataKey="id"
                class="px-4"
                :tableStyle="{ width: '100%', tableLayout: 'fixed' }"
                :pt="{
                    headerRow: { class: 'h-[39px]' },
                    headerCell: { class: '!px-[14px] !py-[10px] !text-sm !font-semibold' },
                    bodyRow: { class: 'h-[50px]' },
                    bodyCell: { class: '!border-slate-200 !px-[14px] !py-[10px]' }
                }"
            >
                <Column field="product" header="Produkt" headerStyle="width: 55.2%" />
                <Column header="Menge" headerStyle="width: 22.4%">
                    <template #body="{ data }">
                        <div class="flex h-[31px] w-[130px] items-stretch">
                            <InputText v-model="data.quantity" class="!h-[31px] !w-[96px] !rounded-r-none !px-[10px] !py-[7px] !text-sm" />
                            <div class="-ml-px flex w-[35px] flex-col">
                                <Button
                                    icon="pi pi-angle-up"
                                    severity="secondary"
                                    variant="outlined"
                                    aria-label="Menge erhöhen"
                                    class="!h-4 !min-h-0 !w-[35px] !rounded-b-none !p-0"
                                    @click="increaseQuantity(data)"
                                />
                                <Button
                                    icon="pi pi-angle-down"
                                    severity="secondary"
                                    variant="outlined"
                                    aria-label="Menge verringern"
                                    class="-mt-px !h-4 !min-h-0 !w-[35px] !rounded-t-none !p-0"
                                    @click="decreaseQuantity(data)"
                                />
                            </div>
                        </div>
                    </template>
                </Column>
                <Column header="Preis" headerStyle="width: 13.2%" bodyStyle="text-align: center">
                    <template #body="{ data }">
                        {{ data.price }}
                    </template>
                </Column>
                <Column header="" headerStyle="width: 9.2%" bodyStyle="text-align: center">
                    <template #body="{ data }">
                        <Button
                            icon="pi pi-trash"
                            severity="danger"
                            variant="text"
                            aria-label="Produkt entfernen"
                            class="!h-7 !w-[35px] !p-0"
                            @click="removeItem(data.id)"
                        />
                    </template>
                </Column>
            </DataTable>

            <Divider class="!m-0 !h-[29px]" />

            <div class="grid h-[356px] grid-cols-2 gap-x-4 gap-y-4 px-4">
                <label class="flex flex-col gap-[7px]">
                    <span class="leading-[21px]">Vorname</span>
                    <InputText v-model="firstName" placeholder="Name eingeben" class="!h-[33px] !w-full !px-[10px] !py-[7px] !text-sm" />
                </label>

                <label class="flex flex-col gap-[7px]">
                    <span class="leading-[21px]">Nachname</span>
                    <InputText v-model="lastName" placeholder="Name eingeben" class="!h-[33px] !w-full !px-[10px] !py-[7px] !text-sm" />
                </label>

                <label class="col-span-2 flex flex-col gap-[7px]">
                    <span class="leading-[21px]">Straße</span>
                    <InputText v-model="street" placeholder="Straße eingeben" class="!h-[33px] !w-full !px-[10px] !py-[7px] !text-sm" />
                </label>

                <label class="flex flex-col gap-[7px]">
                    <span class="leading-[21px]">PLZ / Ort</span>
                    <InputText v-model="postalCity" placeholder="PLZ / Ort eingeben" class="!h-[33px] !w-full !px-[10px] !py-[7px] !text-sm" />
                </label>

                <label class="flex flex-col gap-[7px]">
                    <span class="leading-[21px]">Land</span>
                    <Select
                        v-model="country"
                        :options="countries"
                        optionLabel="label"
                        optionValue="value"
                        appendTo="self"
                        class="!h-[33px] !w-full !text-sm"
                    />
                </label>
            </div>

            <Divider class="!m-0 !h-[29px]" />

            <fieldset class="flex h-[117px] flex-col gap-4 border-0 px-4 py-0">
                <legend class="p-0 text-sm font-semibold leading-[17px]">Versandart</legend>

                <label class="flex items-center gap-[7px]">
                    <RadioButton v-model="shippingMethod" inputId="standard" name="shipping" value="standard" />
                    <span>Standard (3 - 5 Tage) - kostenlos</span>
                </label>

                <label class="flex items-center gap-[7px]">
                    <RadioButton v-model="shippingMethod" inputId="express" name="shipping" value="express" />
                    <span>Express (1 - 2 Tage) - 4,99 €</span>
                </label>

                <label class="flex items-center gap-[7px]">
                    <RadioButton v-model="shippingMethod" inputId="same-day" name="shipping" value="same-day" />
                    <span>Same Day (Gleicher Tag) - 9,99 €</span>
                </label>
            </fieldset>

            <Divider class="!m-0 !h-[29px]" />

            <div class="flex h-[33px] items-center justify-between">
                <Button label="Abbrechen" severity="secondary" />
                <Button label="Speichern" />
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import ProgressBar from 'primevue/progressbar';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';

const cartItems = ref([
    { id: 1, product: 'Wireless Kopfhörer', quantity: '1', price: '79,99 €' },
    { id: 2, product: 'USB-C Kabel 2m', quantity: '1', price: '14,97 €' }
]);

const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const postalCity = ref('10115 Berlin');
const country = ref('Deutschland');
const shippingMethod = ref('');

const countries = ref([
    { label: 'Spanien', value: 'Spanien' },
    { label: 'Deutschland', value: 'Deutschland' },
    { label: 'Österreich', value: 'Österreich' },
    { label: 'Schweiz', value: 'Schweiz' }
]);

const increaseQuantity = (item) => {
    item.quantity = String(Number(item.quantity || 0) + 1);
};

const decreaseQuantity = (item) => {
    item.quantity = String(Math.max(1, Number(item.quantity || 1) - 1));
};

const removeItem = (id) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== id);
};
</script>