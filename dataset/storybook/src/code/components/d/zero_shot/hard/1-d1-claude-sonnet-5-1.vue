<template>
  <div class="flex items-center justify-center min-h-screen bg-black/60">
    <div class="w-96 bg-white rounded-xl border border-slate-200 overflow-hidden">
      <!-- Header -->
      <div class="flex items-center justify-between px-[17.5px] py-[17.5px]">
        <span class="text-lg font-semibold text-slate-800">Profil bearbeiten</span>
        <Button icon="pi pi-times" text severity="secondary" @click="onClose" />
      </div>

      <!-- Content -->
      <div class="flex flex-col gap-4 px-[17.5px]">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm text-slate-700">Name</label>
          <InputText id="name" v-model="name" class="w-full" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="role" class="text-sm text-slate-700">Rolle</label>
          <Select
            id="role"
            v-model="role"
            :options="roles"
            optionLabel="label"
            optionValue="value"
            class="w-full"
          />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="isActive" inputId="isActive" binary />
          <label for="isActive" class="text-sm text-slate-700">Ist aktiv</label>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-2 px-[17.5px] py-[17.5px]">
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

const roles = ref([
  { label: 'Administrator', value: 'Administrator' },
  { label: 'Projektleiter', value: 'Projektleiter' },
  { label: 'Gast', value: 'Gast' }
])

const onClose = () => {
  // close dialog logic
}

const onCancel = () => {
  // cancel logic
}

const onSave = () => {
  // save logic
}
</script>