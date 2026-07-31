<template>
  <div>
    <DataTable :value="items">
      <Column header="Produkt" />
      <Column header="Status">
        <template #body>
          <Tag value="Angekommen" />
        </template>
      </Column>
      <Column header="Bestelldatum" />
      <Column header="Summe" />
      <Column header="Stück" />
      <Column header="Aktionen">
        <template #body>
          <Button variant="text" />
        </template>
      </Column>
    </DataTable>
    <Popover ref="op_n106_4181">
      <Button label="Exportieren" />
      <div class="flex flex-col gap-[7px] p-2.5 justify-center">
        <div class="flex flex-col gap-2">
          <Button
            label="Als CSV exportieren"
            severity="secondary"
            variant="outlined"
           />
          <Button
            label="Als PDF exportieren"
            severity="secondary"
            variant="outlined"
           />
        </div>
      </div>
    </Popover>
    <Accordion value="0">
      <AccordionPanel value="0">
        <AccordionHeader>Filter</AccordionHeader>
        <AccordionContent>
          <div class="flex gap-5">
            <DatePicker v-model="_state.n110_4031" />
            <div class="flex flex-col gap-2">
              <label>Status</label>
              <Select
                v-model="_state.n110_4032"
                :options="_options_n110_4032"
                placeholder="Status auswählen"
               />
            </div>
            <div class="flex flex-col">
              <span class="text-sm">Zustand</span>
              <div class="flex gap-3 py-3 items-center">
                <Checkbox
                  size="large"
                  v-model="_state.n110_4045"
                  binary
                 />
                <Checkbox
                  size="large"
                  v-model="_state.n110_4046"
                  binary
                 />
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
    <div class="flex gap-5 items-center">
      <Card>
        <div class="flex flex-col gap-[7px]">
          <span class="text-2xl">42.8 Tsd.</span>
          <span class="text-sm">Umsatz in €</span>
        </div>
        <template #content>
          <Tag value="+12 %" />
        </template>
      </Card>
      <Card>
        <div class="flex flex-col gap-[7px]">
          <span class="text-2xl">1.247</span>
          <span class="text-sm">Bestellungen</span>
        </div>
        <template #content>
          <Tag value="+8 %" />
        </template>
      </Card>
      <Card>
        <div class="flex flex-col gap-[7px]">
          <span class="text-2xl">3.891</span>
          <span class="text-sm">Nutzer</span>
        </div>
        <template #content>
          <Tag value="+2 %" severity="warn" />
        </template>
      </Card>
      <Card>
        <div class="flex flex-col gap-[7px]">
          <span class="text-2xl">89</span>
          <span class="text-sm">Retouren</span>
        </div>
        <template #content>
          <Tag value="+23 %" severity="danger" />
        </template>
      </Card>
    </div>
    <div class="flex flex-col gap-1">
      <span class="font-bold">Dashboard</span>
      <span class="text-base">Bekomme eine Übersicht über die Projekte.  </span>
    </div>
    <div class="flex flex-col gap-6 p-6 items-center">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <div class="flex flex-col gap-4">
          <Button label="Dashboard" variant="outlined" />
          <Button
            label="Kunden"
            severity="secondary"
            variant="outlined"
           />
          <Button
            label="Berichte"
            severity="secondary"
            variant="outlined"
           />
          <Button
            label="Einstellungen"
            severity="secondary"
            variant="outlined"
           />
        </div>
      </div>
    </div>
    <Popover ref="op_n106_7219">
      <div class="flex flex-col gap-[7px] p-2.5 justify-center">
        <div class="flex flex-col gap-2">
          <Button
            label="Bearbeiten"
            severity="secondary"
            variant="outlined"
           />
          <Button
            label="Status aktualisieren"
            severity="secondary"
            variant="outlined"
           />
          <Button
            label="Löschen"
            severity="secondary"
            variant="outlined"
           />
        </div>
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionContent from 'primevue/accordioncontent'
import AccordionHeader from 'primevue/accordionheader'
import AccordionPanel from 'primevue/accordionpanel'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import DatePicker from 'primevue/datepicker'
import Popover from 'primevue/popover'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const _state = reactive({ n110_4031: null, n110_4032: null, n110_4045: null, n110_4046: null })
</script>
