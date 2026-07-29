<template>
  <Dialog
    v-model:visible="isEditProfileDialogVisible"
    header="Profil bearbeiten"
    modal
    :style="{ width: '25rem' }"
  >
    <div class="flex flex-col gap-4 py-2">
      <div class="flex flex-col gap-2">
        <label for="name-input">Name</label>
        <InputText v-model="name" input-id="name-input" placeholder="Name eingeben" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="role-select">Rolle</label>
        <Select
          v-model="role"
          input-id="role-select"
          :options="roleOptions"
          option-label="label"
          option-value="value"
          placeholder="Placeholder"
        />
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="isActive" input-id="is-active" binary />
        <label for="is-active">Ist aktiv</label>
      </div>
    </div>
    <template #footer>
      <Button label="Abbrechen" text severity="secondary" @click="isEditProfileDialogVisible = false" />
      <Button label="Speichern" severity="primary" @click="isEditProfileDialogVisible = false" />
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

  const isEditProfileDialogVisible = ref(true)
  const name = ref('Max Mustmann')
  const role = ref('Administrator')
  const isActive = ref(false)

  const roleOptions = [
    { label: 'Administrator', value: 'Administrator' },
    { label: 'Projektleiter', value: 'Projektleiter' },
    { label: 'Gast', value: 'Gast' },
  ]
</script>