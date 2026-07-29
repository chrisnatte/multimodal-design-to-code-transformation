<template>
  <div class="w-full h-full bg-black flex items-center justify-center py-[280px]">
    <div class="w-96 bg-white rounded-xl border border-slate-200">
      <!-- Header -->
      <div class="flex items-center justify-between p-[17.5px]">
        <span class="text-lg font-semibold">Profil bearbeiten</span>
        <div class="flex flex-col gap-2">
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            rounded
            aria-label="Close"
            @click="onClose"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="flex flex-col gap-4 p-[17.5px] items-center">
        <div class="w-full flex flex-col gap-1">
          <label for="name" class="text-sm">Name</label>
          <InputText id="name" v-model="name" placeholder="Name eingeben" class="w-full" />
        </div>

        <div class="w-full flex flex-col gap-1">
          <label for="rolle" class="text-sm">Rolle</label>
          <Select
            id="rolle"
            v-model="selectedRole"
            :options="roles"
            optionLabel="name"
            placeholder="Placeholder"
            class="w-full"
          />
        </div>

        <div class="w-full flex items-center gap-2">
          <Checkbox v-model="isActive" inputId="isActive" binary />
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
const isActive = ref(false)

const roles = ref([
  { name: 'Administrator' },
  { name: 'Projektleiter' },
  { name: 'Gast' }
])
const selectedRole = ref(roles.value[0])

function onClose() {
  console.log('close dialog')
}

function onCancel() {
  console.log('cancel')
}

function onSave() {
  console.log('save', { name: name.value, role: selectedRole.value, isActive: isActive.value })
}
</script>