<template>
  <div class="flex flex-col items-center justify-center py-72 bg-black min-h-screen">
    <Dialog
      v-model:visible="ui.visible"
      modal
      :closable="false"
      :draggable="false"
      :style="{ width: '32rem' }"
      contentClass="p-0"
    >
      <template #header>
        <div class="flex items-center justify-between w-full p-4">
          <span class="text-lg font-semibold">Profil bearbeiten</span>
          <Button icon="pi pi-times" text severity="secondary" @click="ui.visible = false" />
        </div>
      </template>

      <div class="flex flex-col gap-4 px-4 pb-4">
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
          <Checkbox v-model="form.active" binary inputId="active" />
          <label for="active" class="text-sm">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2 p-4">
          <Button label="Abbrechen" text @click="ui.visible = false" />
          <Button label="Speichern" @click="ui.visible = false" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'

const ui = reactive({
  visible: true
})

const form = reactive({
  name: 'Max Mustmann',
  role: 'administrator',
  active: false
})

const roleOptions = reactive([
  { label: 'Administator', value: 'administrator' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' }
])
</script>