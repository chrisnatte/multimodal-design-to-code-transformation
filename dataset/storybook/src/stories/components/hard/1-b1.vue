<template>
  <div class="min-h-screen w-full bg-black flex flex-col items-center justify-center py-72">
    <div class="bg-white rounded-xl flex flex-col w-full max-w-xl">
      <div class="flex items-center justify-between p-4">
        <span class="text-[17.5px] font-semibold">Profil bearbeiten</span>
        <div class="flex flex-col gap-2">
          <Button icon="pi pi-times" severity="secondary" text />
        </div>
      </div>

      <div class="flex flex-col items-center gap-4 px-4 pb-4">
        <div class="w-full flex flex-col gap-1">
          <label class="text-sm">Name</label>
          <InputText v-model="form.name" />
        </div>

        <div class="w-full flex flex-col gap-1">
          <label class="text-sm">Rolle</label>
          <Select v-model="form.role" :options="roles" optionLabel="label" optionValue="value" />
        </div>

        <div class="w-full flex items-center">
          <Checkbox v-model="form.active" inputId="active" binary />
          <label for="active" class="ml-2 text-sm">Ist aktiv</label>
        </div>
      </div>

      <div class="flex justify-end gap-2 p-4">
        <Button label="Abbrechen" severity="contrast" text />
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
  role: 'administrator',
  active: false
})

const roles = reactive([
  { label: 'Administator', value: 'administrator' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' }
])
</script>