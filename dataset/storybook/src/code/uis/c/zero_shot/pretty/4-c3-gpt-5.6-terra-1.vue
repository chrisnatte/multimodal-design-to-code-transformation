<template>
    <main class="min-h-screen bg-white pt-6 text-xs text-slate-600">
        <section class="mx-auto w-[520px]">
            <header class="mb-7 flex items-start gap-3">
                <Button
                    icon="pi pi-times"
                    severity="secondary"
                    variant="outlined"
                    rounded
                    size="small"
                    aria-label="Schließen"
                    class="!mt-0.5 !h-8 !w-8 !border-slate-300 !p-0"
                />
                <div>
                    <h1 class="m-0 text-2xl font-bold leading-6 text-slate-700">Bestellung aufgeben</h1>
                    <p class="mt-1 text-xs text-slate-400">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
                </div>
            </header>

            <div class="mb-4">
                <div class="flex items-center justify-between text-xs">
                    <span class="font-medium text-emerald-500">Warenkorb</span>
                    <span class="font-medium text-sky-500">Adresse</span>
                    <span class="font-medium text-slate-400">Bestätigung</span>
                </div>
                <ProgressBar :value="50" :showValue="false" class="mt-1 !h-1" />
            </div>

            <DataTable :value="cartItems" size="small" class="text-xs" tableClass="w-full">
                <Column field="product" header="Produkt" headerClass="!text-xs !font-semibold" />
                <Column header="Menge" headerClass="!text-xs !font-semibold" bodyClass="!py-1">
                    <template #body="slotProps">
                        <InputNumber
                            v-model="slotProps.data.quantity"
                            :min="1"
                            showButtons
                            buttonLayout="horizontal"
                            decrementButtonIcon="pi pi-minus"
                            incrementButtonIcon="pi pi-plus"
                            inputClass="!w-12 !text-xs !py-1"
                            class="!w-[94px] !text-xs"
                        />
                    </template>
                </Column>
                <Column field="price" header="Preis" headerClass="!text-xs !font-semibold" bodyClass="!whitespace-nowrap">
                    <template #body="slotProps">
                        {{ slotProps.data.price }} €
                    </template>
                </Column>
                <Column bodyClass="!w-8">
                    <template #body>
                        <Button
                            icon="pi pi-trash"
                            severity="danger"
                            variant="text"
                            rounded
                            size="small"
                            aria-label="Produkt entfernen"
                            class="!h-7 !w-7 !p-0"
                        />
                    </template>
                </Column>
            </DataTable>

            <Divider class="!my-5" />

            <form class="flex flex-col gap-3" @submit.prevent>
                <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col gap-1">
                        <label for="first-name">Vorname</label>
                        <InputText id="first-name" v-model="firstName" size="small" fluid />
                    </div>
                    <div class="flex flex-col gap-1">
                        <label for="last-name">Nachname</label>
                        <InputText id="last-name" v-model="lastName" size="small" fluid />
                    </div>
                </div>

                <div class="flex flex-col gap-1">
                    <label for="street">Straße</label>
                    <InputText id="street" v-model="street" size="small" fluid />
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col gap-1">
                        <label for="zip-city">PLZ / Ort</label>
                        <InputText id="zip-city" v-model="zipCity" size="small" fluid />
                    </div>
                    <div class="flex flex-col gap-1">
                        <label for="country">Land</label>
                        <Select
                            ref="countrySelect"
                            v-model="country"
                            :options="countries"
                            inputId="country"
                            size="small"
                            fluid
                            appendTo="self"
                            class="!relative"
                        />
                    </div>
                </div>
            </form>

            <Divider class="!mt-[122px] !mb-5" />

            <section>
                <h2 class="mb-3 text-xs font-semibold text-slate-600">Versandart</h2>
                <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2">
                        <RadioButton v-model="shipping" inputId="standard" name="shipping" value="standard" size="small" />
                        <label for="standard">Standard (3 - 5 Tage) - kostenlos</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton v-model="shipping" inputId="express" name="shipping" value="express" size="small" />
                        <label for="express">Express (1 - 2 Tage) - 4,99 €</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton v-model="shipping" inputId="same-day" name="shipping" value="same-day" size="small" />
                        <label for="same-day">Same Day (Gleicher Tag) - 9,99 €</label>
                    </div>
                </div>
            </section>

            <Divider class="!my-5" />

            <footer class="flex items-center justify-between">
                <Button label="Abbrechen" severity="secondary" variant="text" size="small" class="!bg-slate-100" />
                <Button label="Speichern" size="small" />
            </footer>
        </section>
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Divider from 'primevue/divider'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import ProgressBar from 'primevue/progressbar'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const cartItems = ref([
    { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99' },
    { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97' }
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const zipCity = ref('10115 Berlin')
const country = ref('Deutschland')
const shipping = ref(null)
const countrySelect = ref(null)

const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])

onMounted(() => {
    countrySelect.value?.show()
})
</script>