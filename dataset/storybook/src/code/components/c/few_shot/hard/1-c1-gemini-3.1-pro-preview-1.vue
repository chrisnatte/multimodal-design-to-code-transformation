<template>
  <Dialog
    v-model:visible="visible"
    header="Profil bearbeiten"
    modal
    :pt="{
      root: 'w-full max-w-[400px]',
      content: 'flex flex-col !gap-4',
    }"
  >
    <div class="flex flex-col gap-2">
      <label for="name-input" class="text-sm">Name</label>
      <InputText v-model="name" input-id="name-input" />
    </div>

    <div class="flex flex-col gap-2">
      <label for="role-select" class="text-sm">Rolle</label>
      <Select
        v-model="selectedRole"
        :options="roles"
        input-id="role-select"
        class="w-full"
      />
    </div>

    <div class="flex items-center gap-2 pt-1">
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

  const visible = ref(true)
  const name = ref('Max Mustmann')
  const selectedRole = ref('Administrator')
  const roles = ref([
    'Administator',
    'Projektleiter',
    'Gast'
  ])
  const isActive = ref(false)
</script>