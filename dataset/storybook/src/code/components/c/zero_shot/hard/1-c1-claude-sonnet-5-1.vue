<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-500">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="true"
      :draggable="false"
      header="Profil bearbeiten"
      class="w-[380px]"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm text-gray-700">Name</label>
          <InputText id="name" v-model="name" class="w-full" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="role" class="text-sm text-gray-700">Rolle</label>
          <Dropdown
            id="role"
            v-model="role"
            :options="roles"
            optionLabel="label"
            optionValue="value"
            class="w-full"
          />
        </div>

        <div class="flex items-center gap-2 mt-1">
          <Checkbox v-model="isActive" binary inputId="isActive" />
          <label for="isActive" class="text-sm text-gray-700">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-3">
          <Button label="Abbrechen" text severity="secondary" @click="visible = false" />
          <Button label="Speichern" severity="success" @click="save" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const visible = ref(true)
const name = ref('Max Mustmann')
const role = ref('admin')
const isActive = ref(false)

const roles = ref([
  { label: 'Administrator', value: 'admin' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' }
])

const save = () => {
  visible.value = false
}
</script>