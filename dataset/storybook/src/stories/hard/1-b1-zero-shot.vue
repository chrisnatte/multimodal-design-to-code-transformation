<template>
  <div class="flex min-h-screen w-full flex-col items-center justify-center bg-black py-72">
    <div class="flex w-full max-w-xl flex-col rounded-xl bg-white">
      <div class="flex items-center justify-between p-4">
        <h2 class="text-lg font-semibold">Profil bearbeiten</h2>
        <div class="flex flex-col gap-2">
          <Button icon="pi pi-times" severity="secondary" text />
        </div>
      </div>

      <div class="flex flex-col items-center gap-4 px-4 pb-4">
        <div class="flex w-full flex-col gap-2">
          <label class="text-sm">Name</label>
          <InputText v-model="form.name" />
        </div>

        <div class="flex w-full flex-col gap-1">
          <label class="text-sm">Rolle</label>
          <Select
            v-model="form.role"
            :options="roles"
            optionLabel="label"
            optionValue="value"
            class="w-full"
          />
        </div>

        <div class="w-full">
          <div class="flex items-center gap-2">
            <Checkbox v-model="form.active" binary inputId="active" />
            <label for="active" class="text-sm">Ist aktiv</label>
          </div>
        </div>
      </div>

      <div class="flex justify-end gap-2 px-4 pb-4">
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
    active: false,
  })

  const roles = reactive([
    { label: 'Administrator', value: 'administrator' },
    { label: 'Projektleiter', value: 'projektleiter' },
    { label: 'Gast', value: 'gast' },
  ])
</script>
