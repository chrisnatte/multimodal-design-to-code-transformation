<template>
  <Dialog v-model:visible="visible" modal header="Profil bearbeiten" :style="{ width: '24rem' }">
    <div class="flex flex-col gap-4 py-4">
      <div class="flex flex-col gap-2">
        <label for="name" class="text-sm text-surface-700 dark:text-surface-300">Name</label>
        <InputText id="name" v-model="name" placeholder="Name eingeben" class="w-full" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="role" class="text-sm text-surface-700 dark:text-surface-300">Rolle</label>
        <Select id="role" v-model="role" :options="roles" placeholder="Rolle auswählen" class="w-full" />
      </div>

      <div class="flex items-center gap-2 pt-2">
        <Checkbox inputId="isActive" v-model="isActive" binary />
        <label for="isActive" class="text-sm text-surface-700 dark:text-surface-300">Ist aktiv</label>
      </div>
    </div>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" variant="text" @click="visible = false" />
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