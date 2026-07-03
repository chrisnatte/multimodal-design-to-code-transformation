<template>
  <Dialog
    header="Profil bearbeiten"
    visible
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
      <label for="role-input" class="text-sm">Rolle</label>
      <Select
        v-model="role"
        :options="roles"
        option-Label="label"
        option-value="value"
        input-id="role-input"
      />
    </div>

    <div class="flex items-center gap-2">
      <Checkbox v-model="isActive" input-id="is-active" binary />
      <label for="is-active">Ist aktiv</label>
    </div>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Speichern" severity="primary" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Dialog from 'primevue/dialog'
  import Select from 'primevue/select'
  import InputText from 'primevue/inputtext'
  import Checkbox from 'primevue/checkbox'
  import Button from 'primevue/button'

  const name = ref('Max Mustermann')
  const role = ref(0)
  const isActive = ref(false)

  const roles = [
    {
      label: 'Administrator',
      value: 0,
    },
    {
      label: 'Projektleister',
      value: 1,
    },
    {
      label: 'Gast',
      value: 2,
    },
  ]
</script>
