<template>
  <Dialog
    v-model:visible="visible"
    header="Profil bearbeiten"
    modal
    :pt="{
      root: 'w-96',
      content: 'flex flex-col gap-4 !pb-4',
      footer: 'flex justify-end gap-2 !pt-0',
    }"
  >
    <div class="flex flex-col gap-2">
      <label for="name" class="text-sm text-surface-700">Name</label>
      <InputText id="name" v-model="name" placeholder="Name eingeben" />
    </div>

    <div class="flex flex-col gap-2">
      <label for="role" class="text-sm text-surface-700">Rolle</label>
      <Select
        id="role"
        v-model="selectedRole"
        :options="roles"
        placeholder="Rolle auswählen"
        class="w-full"
      />
    </div>

    <div class="flex items-center gap-2 mt-2">
      <Checkbox id="isActive" v-model="isActive" binary />
      <label for="isActive" class="text-sm text-surface-700">Ist aktiv</label>
    </div>

    <template #footer>
      <Button label="Abbrechen" variant="text" plain @click="visible = false" />
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
  const selectedRole = ref('Administrator')
  const roles = ref(['Administrator', 'Projektleiter', 'Gast'])
  const isActive = ref(false)
</script>