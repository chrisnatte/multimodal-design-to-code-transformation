<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-500/70 p-6">
    <Dialog
      v-model:visible="state.visible"
      modal
      :draggable="false"
      :closable="false"
      :style="{ width: '24rem' }"
      :contentClass="'pt-2'"
    >
      <template #header>
        <div class="w-full flex items-center justify-between">
          <span class="text-2xl font-semibold text-slate-700">Profil bearbeiten</span>
          <Button
            icon="pi pi-times"
            text
            severity="secondary"
            rounded
            @click="state.visible = false"
          />
        </div>
      </template>

      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-xl text-slate-600">Name</label>
          <InputText id="name" v-model="state.name" fluid />
        </div>

        <div class="flex flex-col gap-2">
          <label for="role" class="text-xl text-slate-600">Rolle</label>
          <Select
            id="role"
            v-model="state.role"
            :options="roles"
            optionLabel="label"
            optionValue="value"
            fluid
            :highlightOnSelect="true"
          />
        </div>

        <div class="flex items-center gap-3">
          <Checkbox v-model="state.active" binary inputId="active" />
          <label for="active" class="text-xl text-slate-600">Ist aktiv</label>
        </div>

        <div class="flex justify-end gap-3 pt-2">
          <Button
            label="Abbrechen"
            text
            severity="secondary"
            @click="state.visible = false"
          />
          <Button
            label="Speichern"
            severity="success"
            @click="state.visible = false"
          />
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

const roles = reactive([
  { label: 'Administator', value: 'administrator' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' }
])
</script>