<template>
  <Dialog v-model:visible="visible" modal :closable="false" :style="{ width: '24rem' }">
    <template #header>
      <div class="flex items-center justify-between w-full">
        <span class="text-lg font-semibold text-gray-800">Profil bearbeiten</span>
        <Button icon="pi pi-times" variant="text" rounded @click="visible = false" />
      </div>
    </template>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="name" class="text-sm text-gray-700">Name</label>
        <InputText id="name" v-model="name" placeholder="Name eingeben" class="w-full" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="role" class="text-sm text-gray-700">Rolle</label>
        <Select id="role" v-model="role" :options="roles" placeholder="Rolle wählen" class="w-full" />
      </div>

      <div class="flex items-center gap-2">
        <Checkbox id="active" v-model="active" binary />
        <label for="active" class="text-sm text-gray-700">Ist aktiv</label>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" variant="text" @click="visible = false" />
        <Button label="Speichern" severity="success" @click="save" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'

const visible = ref(true)
const name = ref('Max Mustmann')
const role = ref('Administrator')
const active = ref(false)

const roles = ref(['Administrator', 'Projektleiter', 'Gast'])

const save = () => {
  // Speichern logic
}
</script>