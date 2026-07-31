<template>
  <div>
    <DataTable :value="items">
      <Column header="_datatable-header-cell">
        <template #body>
          <Checkbox v-model="_state.n108_3463" binary />
        </template>
      </Column>
      <Column header="Aufgabe" />
      <Column header="Verantwortlicher">
        <template #body>
          <Avatar label="M" shape="circle" />
          <span class="text-sm">Max Mustermann</span>
        </template>
      </Column>
      <Column header="Status">
        <template #body>
          <div class="flex gap-3 items-center">
            <div class="flex">
              <div class="flex flex-col items-center" />
            </div>
            <span class="text-xs">100 %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body>
          <Tag value="Fertig" />
        </template>
      </Column>
      <Column header="Fällig" />
      <Column header="Aktionen">
        <template #body>
          <Button severity="secondary" variant="text" />
        </template>
      </Column>
    </DataTable>
    <Breadcrumb :model="_breadcrumb_n108_3604" />
    <div class="flex gap-4 items-center">
      <div class="flex gap-[7px] p-2 items-center" />
      <div class="flex flex-col gap-1">
        <span class="font-bold">Projektaufgaben</span>
        <span class="text-base">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</span>
      </div>
    </div>
    <Popover ref="op_n109_3897">
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
    <div class="flex gap-4">
      <InputText placeholder="Placeholder" v-model="_state.n109_3918" />
      <div class="flex flex-col gap-2">
        <label>Status</label>
        <Select
          v-model="_state.n109_3927"
          :options="_options_n109_3927"
          placeholder="Status auswählen"
         />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import InputText from 'primevue/inputtext'
import Popover from 'primevue/popover'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const _state = reactive({ n108_3463: null, n109_3918: null, n109_3927: null })
</script>
