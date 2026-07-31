<template>
  <div>
    <DataTable :value="items">
      <Column header="Nutzer">
        <template #body>
          <Avatar label="M" shape="circle" />
          <span class="text-sm">Max Mustermann</span>
        </template>
      </Column>
      <Column header="Status">
        <template #body>
          <Tag value="In Prüfung" severity="danger" />
        </template>
      </Column>
      <Column header="Fortschritt">
        <template #body>
          <div class="flex flex-col gap-1">
            <div class="flex gap-[102px] items-end justify-between">
              <span>Zertifizierung</span>
              <span class="text-xs">45 %</span>
            </div>
            <ProgressBar showValue="false" :value="50" />
          </div>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body>
          <Button variant="text" />
        </template>
      </Column>
    </DataTable>
    <Popover ref="op_n32_3162">
      <div class="flex flex-col gap-[7px] p-2.5 justify-center">
        <div class="flex flex-col gap-2">
          <Button
            label="Profil bearbeiten"
            severity="secondary"
            variant="outlined"
           />
          <Button
            label="Status ändern"
            severity="secondary"
            variant="outlined"
           />
          <Button
            label="Duplizieren"
            severity="secondary"
            variant="outlined"
           />
          <Button
            label="Deaktiveren"
            severity="secondary"
            variant="outlined"
           />
        </div>
      </div>
    </Popover>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Popover from 'primevue/popover'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
</script>
