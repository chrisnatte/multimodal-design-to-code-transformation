<template>
  <div class="flex items-end gap-3">
    <div class="flex flex-col gap-2">
      <label for="search" class="text-sm text-slate-700">Suche</label>
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          id="search"
          v-model="form.search"
          placeholder="Nach Namen suchen"
          class="w-[217px]"
          fluid
        />
      </IconField>
    </div>

    <Button icon="pi pi-check" rounded />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'

const form = reactive({
  search: ''
})
</script>