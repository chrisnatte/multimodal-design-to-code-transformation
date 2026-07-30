<template>
  <Dialog
    v-model:visible="visible"
    modal
    :pt="{
      root: 'w-full max-w-lg',
      header: 'flex items-center justify-between p-6 pb-0',
      content: 'p-6 pt-4',
      footer: 'p-6 pt-0 flex justify-end gap-2',
    }"
  >
    <template #header>
      <div class="flex items-center gap-4">
        <Avatar label="M" shape="circle" class="bg-slate-200 text-slate-700" />
        <div class="flex flex-col">
          <span class="text-sm font-medium text-slate-900">Max Mustermann</span>
          <span class="text-xs text-slate-500">Manager</span>
        </div>
        <Tag value="Aktiv" severity="success" class="ml-4" />
      </div>
    </template>

    <div class="flex flex-col gap-6">
      <div class="flex border-b border-slate-200">
        <button
          class="border-b-2 border-emerald-500 px-4 py-3 text-sm font-bold text-emerald-500"
        >
          Persönliche Daten
        </button>
        <button class="px-4 py-3 text-sm font-bold text-slate-500 hover:text-slate-700">
          Einstellungen
        </button>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm text-slate-700">Name</label>
          <InputText id="name" v-model="name" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="email" class="text-sm text-slate-700">E-Mail</label>
          <InputText id="email" v-model="email" type="email" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="role" class="text-sm text-slate-700">Rolle</label>
          <Dropdown
            id="role"
            v-model="selectedRole"
            :options="roles"
            optionLabel="name"
            placeholder="Select a Role"
            class="w-full"
          />
        </div>

        <div class="flex items-center gap-2 mt-2">
          <Checkbox v-model="isActive" inputId="isActive" binary />
          <label for="isActive" class="text-sm text-slate-700">Ist aktiv</label>
        </div>
      </div>
    </div>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" text @click="visible = false" />
      <Button label="Speichern" severity="success" @click="visible = false" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const visible = ref(true)
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const isActive = ref(true)

const selectedRole = ref({ name: 'Manager', code: 'MGR' })
const roles = ref([
  { name: 'Manager', code: 'MGR' },
  { name: 'Mitarbeiter', code: 'EMP' },
  { name: 'Kunde', code: 'CUS' }
])
</script>