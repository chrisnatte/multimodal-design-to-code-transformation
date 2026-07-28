<template>
  <div class="w-full h-full flex items-center justify-center bg-black py-[280px]">
    <div class="dialog bg-white rounded-xl border border-slate-200 w-96">
      <!-- Header -->
      <div class="flex items-center justify-between p-[17.5px]">
        <span class="text-lg font-semibold text-slate-800">Profil bearbeiten</span>
        <Button
          icon="pi pi-times"
          severity="secondary"
          text
          rounded
          @click="onClose"
        />
      </div>

      <!-- Content -->
      <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px]">
        <div class="flex flex-col gap-1">
          <label class="text-sm text-slate-700">Name</label>
          <InputText v-model="name" placeholder="Name eingeben" class="w-full" />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm text-slate-700">Rolle</label>
          <Select
            v-model="role"
            :options="roleOptions"
            optionLabel="label"
            optionValue="value"
            placeholder="Placeholder"
            class="w-full"
          />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="isActive" binary inputId="isActive" />
          <label for="isActive" class="text-sm text-slate-700">Ist aktiv</label>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-2 p-[17.5px]">
        <Button label="Abbrechen" text severity="secondary" @click="onCancel" />
        <Button label="Speichern" severity="success" @click="onSave" />
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
const role = ref('Administrator')
const isActive = ref(false)

const roleOptions = ref([
  { label: 'Administrator', value: 'Administrator' },
  { label: 'Projektleiter', value: 'Projektleiter' },
  { label: 'Gast', value: 'Gast' }
])

function onClose() {
  console.log('Dialog closed')
}

function onCancel() {
  console.log('Cancelled')
}

function onSave() {
  console.log('Saved', {
    name: name.value,
    role: role.value,
    isActive: isActive.value
  })
}
</script>