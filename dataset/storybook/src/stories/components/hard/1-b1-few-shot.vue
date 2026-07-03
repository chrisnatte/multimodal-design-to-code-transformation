<template>
  <div class="flex flex-col items-center justify-center py-72 bg-black min-h-screen">
    <Dialog v-model:visible="ui.visible" modal :closable="false" :style="{ width: '32rem' }">
      <template #header>
        <div class="flex items-center justify-between w-full p-4">
          <span class="text-lg font-semibold">Profil bearbeiten</span>
          <Button icon="pi pi-times" severity="secondary" text @click="ui.visible = false" />
        </div>
      </template>

      <div class="flex flex-col gap-4 px-4 pb-4">
        <div class="flex flex-col gap-2 w-full">
          <label>Name</label>
          <InputText v-model="form.name" placeholder="Name eingeben" />
        </div>

        <div class="flex flex-col gap-2 w-full">
          <label>Rolle</label>
          <Select v-model="form.role" :options="roles" optionLabel="label" optionValue="value" />
        </div>

        <div class="flex items-center gap-2 w-full">
          <Checkbox v-model="form.active" binary />
          <span>Ist aktiv</span>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2 p-4">
          <Button label="Abbrechen" text severity="secondary" @click="ui.visible = false" />
          <Button label="Speichern" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'

const ui = reactive({
  visible: true,
})

const form = reactive({
  name: 'Max Mustmann',
  role: 'administrator',
  active: false,
})

const roles = reactive([
  { label: 'Administator', value: 'administrator' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' },
])
</script>