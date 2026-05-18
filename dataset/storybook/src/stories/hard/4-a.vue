<template>
  <div>
    <DataTable :value="items">
      <Column header="_datatable-header-cell" />
      <Column header="Projekt">
        <template #body>
          <Tag value="Aktiv" />
        </template>
      </Column>
      <Column header="_datatable-header-cell" />
      <Column header="Status">
        <template #body>
          <Button variant="text" />
        </template>
      </Column>
      <Column header="_datatable-header-cell" />
      <Column header="Fällig" />
      <Column header="_datatable-header-cell" />
      <Column header="Aktionen" />
    </DataTable>
    <Popover ref="op_n28_3830">
      <div class="flex flex-col gap-[7px] p-2.5 justify-center">
        <div class="flex flex-col gap-2">
          <Button
            label="Bearbeiten"
            severity="secondary"
            variant="outlined"
           />
          <Button
            label="Duplizieren"
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
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Popover from 'primevue/popover'
import Tag from 'primevue/tag'
</script>
