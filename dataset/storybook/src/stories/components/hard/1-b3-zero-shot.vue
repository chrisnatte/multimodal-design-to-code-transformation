<template>
  <div class="min-h-screen w-full bg-black flex flex-col items-center justify-center py-72">
    <Dialog
      v-model:visible="state.visible"
      modal
      :closable="false"
      :draggable="false"
      :style="{ width: '36rem' }"
      :pt="{
        root: { class: 'rounded-xl overflow-hidden' },
        content: { class: 'p-0' },
        header: { class: 'hidden' }
      }"
    >
      <div class="flex flex-col">
        <div class="flex items-center justify-between p-4">
          <span class="text-lg font-semibold">Profil bearbeiten</span>
          <div class="flex flex-col gap-2">
            <Button icon="pi pi-times" text severity="secondary" @click="state.visible = false" />
          </div>
        </div>

        <div class="flex flex-col items-center gap-4 px-4 pb-4">
          <div class="w-full flex flex-col gap-2">
            <label class="text-sm">Name</label>
            <InputText v-model="state.name" fluid />
          </div>

          <div class="w-full flex flex-col gap-1">
            <label class="text-sm">Rolle</label>
            <Select
              v-model="state.role"
              :options="roleOptions"
              optionLabel="label"
              optionValue="value"
              fluid
            />
          </div>

          <div class="w-full flex items-center gap-2">
            <Checkbox v-model="state.active" binary inputId="active" />
            <label for="active" class="text-sm">Ist aktiv</label>
          </div>
        </div>

        <div class="flex justify-end gap-2 px-4 pb-4">
          <Button label="Abbrechen" text @click="state.visible = false" />
          <Button label="Speichern" @click="state.visible = false" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const state = reactive({
  visible: true,
  name: 'Max Mustmann',
  role: 'administrator',
  active: false
})

const roleOptions = [
  { label: 'Administator', value: 'administrator' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' }
]
</script>