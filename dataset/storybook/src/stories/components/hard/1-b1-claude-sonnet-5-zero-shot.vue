<template>
  <div class="w-full min-h-screen bg-black flex items-center justify-center py-[280px]">
    <div class="dialog bg-white rounded-xl border border-surface-200 w-96">
      <!-- Header -->
      <div class="flex items-center justify-between p-[17.5px]">
        <span class="text-lg font-semibold">Profil bearbeiten</span>
        <div class="flex flex-col gap-2">
          <Button icon="pi pi-times" severity="secondary" text rounded @click="onClose" />
        </div>
      </div>

      <!-- Content -->
      <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px] items-center">
        <div class="w-full">
          <label class="block text-sm mb-1">Name</label>
          <InputText v-model="name" placeholder="Name eingeben" class="w-full" />
        </div>

        <div class="w-full">
          <label class="block text-sm mb-1">Rolle</label>
          <Select
            v-model="role"
            :options="roleOptions"
            optionLabel="label"
            optionValue="value"
            placeholder="Placeholder"
            class="w-full"
          />
        </div>

        <div class="w-full flex items-center gap-2">
          <Checkbox v-model="isActive" binary inputId="isActive" />
          <label for="isActive" class="text-sm">Ist aktiv</label>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-2 p-[17.5px]">
        <Button label="Abbrechen" severity="secondary" text @click="onCancel" />
        <Button label="Speichern" severity="primary" @click="onSave" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'

const name = ref('Max Mustmann')
const role = ref('administrator')
const isActive = ref(false)

const roleOptions = ref([
  { label: 'Administator', value: 'administrator' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' }
])

function onClose() {
  console.log('close dialog')
}

function onCancel() {
  console.log('cancel')
}

function onSave() {
  console.log('save', { name: name.value, role: role.value, isActive: isActive.value })
}
</script>