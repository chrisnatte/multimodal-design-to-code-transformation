<template>
  <div class="flex items-center justify-center min-h-screen bg-black">
    <Dialog
      v-model:visible="visible"
      header="Profil bearbeiten"
      :modal="false"
      :draggable="false"
      :style="{ width: '24rem' }"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label for="name" class="text-sm">Name</label>
          <InputText id="name" v-model="name" class="w-full" />
        </div>

        <div class="flex flex-col gap-1">
          <label for="role" class="text-sm">Rolle</label>
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
          <Checkbox v-model="isActive" binary inputId="isActive" />
          <label for="isActive" class="text-sm">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <Button label="Abbrechen" text severity="secondary" @click="visible = false" />
        <Button label="Speichern" severity="success" @click="visible = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const visible = ref(true)
const name = ref('Max Mustmann')
const role = ref('admin')
const isActive = ref(false)

const roles = ref([
  { label: 'Administrator', value: 'admin' },
  { label: 'Projektleiter', value: 'projectlead' },
  { label: 'Gast', value: 'guest' }
])
</script>