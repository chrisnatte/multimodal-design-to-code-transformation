<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Profil bearbeiten"
    :pt="{
      root: 'w-96',
      content: 'flex flex-col gap-4 pt-2',
    }"
  >
    <div class="flex flex-col gap-2">
      <label for="name" class="text-sm">Name</label>
      <InputText id="name" v-model="name" placeholder="Name eingeben" />
    </div>
    
    <div class="flex flex-col gap-2">
      <label for="role" class="text-sm">Rolle</label>
      <Select
        id="role"
        v-model="role"
        :options="roles"
        placeholder="Rolle wählen"
        class="w-full"
      />
    </div>
    
    <div class="flex items-center gap-2 mt-2">
      <Checkbox id="isActive" v-model="isActive" binary />
      <label for="isActive" class="text-sm">Ist aktiv</label>
    </div>

    <template #footer>
      <Button label="Abbrechen" text plain @click="visible = false" />
      <Button label="Speichern" severity="primary" @click="visible = false" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const visible = ref(true)
const name = ref('Max Mustmann')
const role = ref('Administrator')
const roles = ref(['Administrator', 'Projektleiter', 'Gast'])
const isActive = ref(false)
</script>