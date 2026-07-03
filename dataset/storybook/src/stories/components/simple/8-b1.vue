<template>
  <div class="flex items-end gap-3">
    <div class="flex flex-col gap-1">
      <label class="text-sm">Suche</label>
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          v-model="state.search"
          placeholder="Nach Namen suchen"
          variant="filled"
        />
      </IconField>
    </div>
    <Button icon="pi pi-check" severity="primary" rounded />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const state = reactive({
  search: ''
})
</script>