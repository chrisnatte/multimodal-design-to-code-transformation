<template>
  <Dialog v-model:visible="visible" modal header="Profil bearbeiten" :style="{ width: '24rem' }">
    <div class="flex flex-col gap-4 py-2">
      <div class="flex flex-col gap-1.5">
        <label for="name" class="text-sm text-surface-700">Name</label>
        <InputText id="name" v-model="name" />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="role" class="text-sm text-surface-700">Rolle</label>
        <Select id="role" v-model="role" :options="roles" class="w-full" />
      </div>

      <div class="flex items-center gap-2 mt-1">
        <Checkbox v-model="isActive" inputId="isActive" binary />
        <label for="isActive" class="text-sm text-surface-700">Ist aktiv</label>
      </div>
    </div>

    <template #footer>
      <Button label="Abbrechen" text severity="secondary" @click="visible = false" />
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