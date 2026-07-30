<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <div class="bg-white rounded-lg shadow-xl w-[512px] p-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-gray-200 text-gray-700" />
          <div>
            <div class="text-base font-medium text-gray-800">Max Mustermann</div>
            <div class="text-sm text-gray-500">Manager</div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <Tag value="Aktiv" class="bg-green-100 text-green-600 font-semibold" />
          <Button icon="pi pi-times" text rounded severity="secondary" @click="close" />
        </div>
      </div>

      <!-- Tabs -->
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">Persönliche Daten</Tab>
          <Tab value="1">Einstellungen</Tab>
        </TabList>
      </Tabs>

      <!-- Form -->
      <div class="flex flex-col gap-4 mt-4">
        <div class="flex flex-col gap-1">
          <label class="text-sm text-gray-700">Name</label>
          <InputText v-model="name" class="w-full" />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm text-gray-700">E-Mail</label>
          <InputText v-model="email" class="w-full" />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm text-gray-700">Rolle</label>
          <Dropdown
            v-model="role"
            :options="roles"
            optionLabel="label"
            optionValue="value"
            class="w-full"
          />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="isActive" binary />
          <label class="text-sm text-gray-700">Ist aktiv</label>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-3 mt-6">
        <Button label="Abbrechen" severity="secondary" text @click="close" />
        <Button label="Speichern" class="bg-green-500 border-green-500 hover:bg-green-600" @click="save" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'

const activeTab = ref('0')
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const isActive = ref(true)

const roles = ref([
  { label: 'Manager', value: 'Manager' },
  { label: 'Mitarbeiter', value: 'Mitarbeiter' },
  { label: 'Kunde', value: 'Kunde' }
])

function close() {
  console.log('close')
}

function save() {
  console.log('save', { name: name.value, email: email.value, role: role.value, isActive: isActive.value })
}
</script>