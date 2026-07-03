<template>
  <div class="flex items-end gap-3">
    <div class="flex flex-col gap-1">
      <label>Suche</label>
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText v-model="form.search" placeholder="Nach Namen suchen" />
      </IconField>
    </div>
    <Button rounded icon="pi pi-check" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const form = reactive({
  search: ''
})
</script>