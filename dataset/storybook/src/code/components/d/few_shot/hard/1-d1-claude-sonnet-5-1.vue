<template>
  <Dialog
    v-model:visible="isEditProfilDialogVisible"
    header="Profil bearbeiten"
    modal
    :pt="{
      root: 'w-full max-w-md',
      content: 'flex flex-col !gap-4',
    }"
  >
    <div class="flex flex-col gap-2">
      <label for="name-input" class="text-sm">Name</label>
      <InputText v-model="name" type="text" input-id="name-input" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="role-select" class="text-sm">Rolle</label>
      <Select v-model="role" :options="roleOptions" input-id="role-select" />
    </div>
    <div class="flex items-center gap-2">
      <Checkbox v-model="isActive" input-id="is-active-checkbox" binary />
      <label for="is-active-checkbox" class="text-sm">Ist aktiv</label>
    </div>
    <template #footer>
      <Button label="Abbrechen" text severity="secondary" />
      <Button label="Speichern" severity="primary" />
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

  const isEditProfilDialogVisible = ref(true)
  const name = ref('Max Mustmann')
  const role = ref('Administrator')
  const roleOptions = ['Administrator', 'Projektleiter', 'Gast']
  const isActive = ref(false)
</script>