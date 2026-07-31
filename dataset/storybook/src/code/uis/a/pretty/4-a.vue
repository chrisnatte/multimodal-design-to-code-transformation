<template>
  <div>
    <div class="flex flex-col gap-4 items-center">
      <div class="flex flex-col gap-2">
        <div class="flex gap-[156px] items-center justify-between">
          <span class="text-base">Warenkorb</span>
          <span class="text-base">Adresse</span>
          <span class="text-base">Bestätigung</span>
        </div>
        <ProgressBar showValue="false" :value="50" />
      </div>
      <DataTable :value="items">
        <Column header="Produkt">
          <template #body>
            <span class="text-sm">Wireless Kopfhörer</span>
          </template>
        </Column>
        <Column header="Menge">
          <template #body>
            <div class="flex gap-[-1px]">
              <InputText placeholder="Placeholder" v-model="_state.n110_4786" />
              <div class="flex flex-col gap-[-1px]" />
            </div>
          </template>
        </Column>
        <Column header="Preis">
          <template #body>
            <span class="text-sm">79,99  €</span>
          </template>
        </Column>
        <Column header="_datatable-header-cell">
          <template #body>
            <Button severity="danger" variant="text" />
          </template>
        </Column>
      </DataTable>
      <Divider />
      <div class="px-4">
        <InputText placeholder="Placeholder" v-model="_state.n110_4963" />
        <InputText placeholder="Placeholder" v-model="_state.n110_4973" />
        <InputText placeholder="Placeholder" v-model="_state.n110_4986" />
        <InputText placeholder="Placeholder" v-model="_state.n110_4996" />
        <div class="flex flex-col gap-2">
          <label>Land</label>
          <Select
            v-model="_state.n110_5006"
            :options="_options_n110_5006"
            placeholder="Deutschland"
           />
        </div>
      </div>
      <Divider />
      <div class="flex flex-col gap-4 px-4">
        <span class="text-sm font-semibold">Versandart</span>
        <RadioButton v-model="_state.n110_5104" value="option1" />
        <RadioButton v-model="_state.n110_5108" value="option1" />
        <RadioButton v-model="_state.n110_5112" value="option1" />
      </div>
      <Divider />
      <div class="flex items-center justify-between">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" />
      </div>
    </div>
    <div class="flex gap-4 items-center">
      <div class="flex gap-[7px] p-2 items-center" />
      <div class="flex flex-col gap-1">
        <span class="font-bold">Bestellung aufgeben</span>
        <span class="text-base">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Divider from 'primevue/divider'
import InputText from 'primevue/inputtext'
import ProgressBar from 'primevue/progressbar'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const _state = reactive({ n110_4786: null, n110_4963: null, n110_4973: null, n110_4986: null, n110_4996: null, n110_5006: null, n110_5104: null, n110_5108: null, n110_5112: null })
</script>
