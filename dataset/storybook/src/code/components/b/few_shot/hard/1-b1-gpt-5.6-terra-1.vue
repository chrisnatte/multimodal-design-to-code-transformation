<template>
  <div class="flex h-[768px] w-[768px] flex-col gap-2.5 bg-white">
    <div class="flex h-full flex-col items-center justify-center bg-black py-[280px]">
      <Dialog
        v-model:visible="dialogVisible"
        modal
        :closable="false"
        append-to="self"
        :pt="{
          root: 'w-[384px] overflow-visible rounded-xl',
          header: '!p-[17.5px]',
          content: '!p-0',
          footer: '!p-0',
          mask: '!absolute',
        }"
      >
        <template #header>
          <div class="flex w-full items-center justify-between">
            <span class="text-[17.5px] font-semibold">Profil bearbeiten</span>
            <Button
              icon="pi pi-times"
              severity="secondary"
              text
              aria-label="Dialog schließen"
              @click="dialogVisible = false"
            />
          </div>
        </template>

        <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px]">
          <div class="flex flex-col gap-2">
            <label for="profile-name" class="text-sm">Name</label>
            <InputText
              id="profile-name"
              v-model="name"
              placeholder="Name eingeben"
              class="w-full"
            />
          </div>

          <div class="flex flex-col gap-0.5">
            <label for="profile-role" class="text-sm">Rolle</label>
            <Select
              id="profile-role"
              v-model="role"
              :options="roles"
              option-label="label"
              option-value="value"
              class="w-full"
            />
          </div>

          <div class="flex items-center gap-2">
            <Checkbox v-model="isActive" input-id="is-active" binary />
            <label for="is-active" class="text-sm">Ist aktiv</label>
          </div>
        </div>

        <template #footer>
          <div class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
            <Button
              label="Abbrechen"
              severity="secondary"
              text
              @click="dialogVisible = false"
            />
            <Button label="Speichern" severity="primary" @click="dialogVisible = false" />
          </div>
        </template>
      </Dialog>
    </div>
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
const role = ref('Administrator')
const isActive = ref(false)

const roles = [
  { label: 'Administrator', value: 'Administrator' },
  { label: 'Projektleiter', value: 'Projektleiter' },
  { label: 'Gast', value: 'Gast' },
]
</script>