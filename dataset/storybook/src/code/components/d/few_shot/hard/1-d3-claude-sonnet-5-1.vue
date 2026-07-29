<template>
  <Dialog
    v-model:visible="isProfilDialogVisible"
    header="Profil bearbeiten"
    modal
    :pt="{
      root: 'w-full max-w-md',
      content: 'flex flex-col !gap-4',
    }"
  >
    <div class="flex flex-col gap-2">
      <label for="name-input" class="text-sm">Name</label>
      <InputText v-model="name" type="text" input-id="name-input" placeholder="Name eingeben" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="role-select" class="text-sm">Rolle</label>
      <Select
        v-model="role"
        :options="roleOptions"
        option-label="label"
        option-value="value"
        placeholder="Placeholder"
        input-id="role-select"
      />
    </div>
    <div class="flex items-center gap-2">
      <Checkbox v-model="isActive" input-id="is-active" binary />
      <label for="is-active">Ist aktiv</label>
    </div>
    <template #footer>
      <Button label="Abbrechen" text severity="secondary" @click="isProfilDialogVisible = false" />
      <Button label="Speichern" severity="primary" @click="isProfilDialogVisible = false" />
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

  const isProfilDialogVisible = ref(true)
  const name = ref('Max Mustmann')
  const role = ref('administrator')
  const isActive = ref(false)

  const roleOptions = [
    { label: 'Administrator', value: 'administrator' },
    { label: 'Projektleiter', value: 'projektleiter' },
    { label: 'Gast', value: 'gast' },
  ]
</script>