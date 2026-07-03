<template>
  <div class="flex flex-col items-center justify-center py-72 bg-black min-h-screen">
    <div class="flex flex-col bg-white rounded-xl w-full max-w-md">
      <div class="flex items-center justify-between px-4 py-4">
        <span class="text-base font-semibold">Profil bearbeiten</span>
        <Button icon="pi pi-times" severity="secondary" variant="text" aria-label="Schließen" />
      </div>

      <div class="flex flex-col items-center gap-4 px-4 pb-4">
        <div class="flex flex-col gap-2 w-full">
          <label for="name" class="text-sm">Name</label>
          <InputText id="name" v-model="form.name" />
        </div>

        <div class="flex flex-col gap-2 w-full">
          <label for="role" class="text-sm">Rolle</label>
          <Select
            id="role"
            v-model="form.role"
            :options="roleOptions"
            optionLabel="label"
            optionValue="value"
          />
        </div>

        <div class="flex items-center gap-2 w-full">
          <Checkbox id="active" v-model="form.active" binary />
          <label for="active" class="text-sm">Ist aktiv</label>
        </div>
      </div>

      <div class="flex justify-end gap-2 px-4 pb-4">
        <Button label="Abbrechen" variant="text" />
        <Button label="Speichern" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'

const form = reactive({
  name: 'Max Mustmann',
  role: 'Administrator',
  active: false
})

const roleOptions = [
  { label: 'Administator', value: 'Administator' },
  { label: 'Projektleiter', value: 'Projektleiter' },
  { label: 'Gast', value: 'Gast' }
]
</script>