<template>
  <div class="flex h-[768px] w-[768px] flex-col items-center justify-center bg-black py-[280px]">
    <Dialog
      v-model:visible="dialogVisible"
      modal
      header="Profil bearbeiten"
      :draggable="false"
      :style="{ width: '384px' }"
      content-class="!p-[17.5px] !pt-0"
      :pt="{
        header: 'px-[17.5px] py-[17.5px]',
        title: 'text-[17.5px] font-semibold',
        footer: 'flex justify-end gap-[7px] px-[17.5px] pb-[17.5px] pt-0',
      }"
      :close-button-props="{
        severity: 'secondary',
        variant: 'text',
        'aria-label': 'Schließen',
      }"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-[7px]">
          <label for="profile-name" class="text-sm">Name</label>
          <InputText id="profile-name" v-model="name" fluid />
        </div>

        <div class="flex flex-col gap-[7px]">
          <label for="profile-role" class="text-sm">Rolle</label>
          <Select
            v-model="selectedRole"
            input-id="profile-role"
            :options="roles"
            option-label="label"
            fluid
          />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="isActive" input-id="is-active" binary />
          <label for="is-active" class="text-sm">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <Button
          label="Abbrechen"
          severity="secondary"
          variant="text"
          @click="dialogVisible = false"
        />
        <Button label="Speichern" @click="dialogVisible = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const dialogVisible = ref(true)
const name = ref('Max Mustmann')
const isActive = ref(false)
const roles = ref([
  { label: 'Administrator' },
  { label: 'Projektleiter' },
  { label: 'Gast' },
])
const selectedRole = ref(roles.value[0])
</script>