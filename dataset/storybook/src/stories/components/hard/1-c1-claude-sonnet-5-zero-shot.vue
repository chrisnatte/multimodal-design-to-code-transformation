<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <Dialog
      v-model:visible="visible"
      modal
      header="Profil bearbeiten"
      :style="{ width: '25rem' }"
      :closable="true"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm text-gray-700">Name</label>
          <InputText id="name" v-model="name" class="w-full" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="rolle" class="text-sm text-gray-700">Rolle</label>
          <Dropdown
            id="rolle"
            v-model="rolle"
            :options="rollenOptions"
            optionLabel="label"
            optionValue="value"
            class="w-full"
          />
        </div>

        <div class="flex items-center gap-2 mt-2">
          <Checkbox v-model="istAktiv" binary inputId="istAktiv" />
          <label for="istAktiv" class="text-sm text-gray-700">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-3">
          <Button label="Abbrechen" text severity="secondary" @click="visible = false" />
          <Button label="Speichern" severity="success" @click="onSave" />
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
const rolle = ref('Administrator')
const istAktiv = ref(false)

const rollenOptions = ref([
  { label: 'Administrator', value: 'Administrator' },
  { label: 'Projektleiter', value: 'Projektleiter' },
  { label: 'Gast', value: 'Gast' }
])

const onSave = () => {
  visible.value = false
}
</script>