<template>
    <main class="min-h-screen bg-white px-6 py-8 font-sans text-slate-700">
        <header class="mx-auto flex w-full max-w-[832px] items-center gap-4">
            <Button
                icon="pi pi-times-circle"
                severity="secondary"
                text
                rounded
                aria-label="Schließen"
                class="!h-[50px] !w-[50px] !bg-slate-100 !text-[32px] !text-slate-500"
            />
            <div class="flex flex-col gap-1">
                <h1 class="m-0 text-[32px] font-bold leading-tight text-slate-700">Bestellung aufgeben</h1>
                <p class="m-0 text-base text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
            </div>
        </header>

        <section class="mx-auto mt-10 flex w-full max-w-[728px] flex-col gap-4">
            <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between text-base">
                    <span class="text-emerald-500">Warenkorb</span>
                    <span class="text-sky-500">Adresse</span>
                    <span class="text-slate-500">Bestätigung</span>
                </div>
                <ProgressBar :value="50" :showValue="false" class="!h-[6px]" />
            </div>

            <DataTable
                :value="cartItems"
                tableClass="w-full"
                class="px-4"
                :pt="{
                    headerCell: { class: '!px-[14px] !py-[10px] !text-sm !font-semibold !text-slate-700 !border-b !border-slate-200' },
                    bodyCell: { class: '!h-[50px] !px-[14px] !py-[10px] !text-sm !text-slate-700 !border-b !border-slate-200' }
                }"
            >
                <Column field="product" header="Produkt" style="width: 55.2%"></Column>
                <Column header="Menge" style="width: 22.4%">
                    <template #body="slotProps">
                        <InputNumber
                            v-model="slotProps.data.quantity"
                            :min="1"
                            showButtons
                            buttonLayout="vertical"
                            incrementButtonIcon="pi pi-angle-up"
                            decrementButtonIcon="pi pi-angle-down"
                            class="w-[130px]"
                            inputClass="!h-[31px] !w-[96px] !rounded-r-none !px-[10px] !py-[7px] !text-sm"
                            :pt="{
                                incrementButton: { class: '!h-[16px] !w-[35px] !border-slate-300 !bg-white !text-slate-400' },
                                decrementButton: { class: '!h-[16px] !w-[35px] !border-slate-300 !bg-white !text-slate-400' }
                            }"
                        />
                    </template>
                </Column>
                <Column field="price" header="Preis" style="width: 13.2%"></Column>
                <Column style="width: 9.2%">
                    <template #body>
                        <Button icon="pi pi-trash" severity="danger" text aria-label="Produkt entfernen" class="!h-7 !w-[35px]" />
                    </template>
                </Column>
            </DataTable>

            <Divider class="!my-0 !h-[29px]" />

            <div class="grid grid-cols-2 gap-x-4 gap-y-4 px-4">
                <label class="flex flex-col gap-[7px] text-sm">
                    <span>Vorname</span>
                    <InputText v-model="firstName" class="!h-[33px] !w-full !px-[10px] !py-[7px] !text-sm" />
                </label>

                <label class="flex flex-col gap-[7px] text-sm">
                    <span>Nachname</span>
                    <InputText v-model="lastName" class="!h-[33px] !w-full !px-[10px] !py-[7px] !text-sm" />
                </label>

                <label class="col-span-2 flex flex-col gap-[7px] text-sm">
                    <span>Straße</span>
                    <InputText v-model="street" class="!h-[33px] !w-full !px-[10px] !py-[7px] !text-sm" />
                </label>

                <label class="flex flex-col gap-[7px] text-sm">
                    <span>PLZ / Ort</span>
                    <InputText v-model="postalCity" class="!h-[33px] !w-full !px-[10px] !py-[7px] !text-sm" />
                </label>

                <div class="flex flex-col gap-[7px] text-sm">
                    <label for="country">Land</label>
                    <Select
                        ref="countrySelect"
                        v-model="country"
                        inputId="country"
                        :options="countries"
                        class="!h-[33px] !w-full"
                        :pt="{
                            root: { class: '!border-emerald-500' },
                            label: { class: '!px-[10px] !py-[7px] !text-sm' },
                            dropdown: { class: '!w-[35px]' },
                            overlay: { class: '!mt-[2px]' },
                            list: { class: '!p-[3px]' },
                            option: { class: '!h-[31px] !px-[10px] !py-[7px] !text-sm' }
                        }"
                    />
                </div>
            </div>

            <Divider class="!my-0 !h-[29px]" />

            <div class="flex flex-col gap-4 px-4">
                <span class="text-sm font-semibold">Versandart</span>

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
            </div>

            <Divider class="!my-0 !h-[29px]" />

            <div class="flex items-center justify-between">
                <Button label="Abbrechen" severity="secondary" class="!h-[33px] !bg-slate-100 !px-3 !py-2 !text-sm !text-slate-600" />
                <Button label="Speichern" class="!h-[33px] !px-3 !py-2 !text-sm" />
            </div>
        </section>
    </main>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
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
const postalCity = ref('10115 Berlin');
const country = ref('Deutschland');
const shippingMethod = ref(null);
const countrySelect = ref();

const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz']);

onMounted(async () => {
    await nextTick();
    countrySelect.value?.show?.();
});
</script>