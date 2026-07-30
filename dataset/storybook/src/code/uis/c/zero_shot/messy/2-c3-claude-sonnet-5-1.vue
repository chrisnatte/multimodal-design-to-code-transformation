<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <div class="bg-white rounded-lg shadow-lg w-[512px] p-6">
      <!-- Header -->
      <div class="flex items-center justify-between pb-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-gray-200 text-gray-700" />
          <div class="flex flex-col">
            <span class="text-gray-800 font-medium">Max Mustermann</span>
            <span class="text-gray-400 text-sm">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <Tag value="Aktiv" severity="success" class="text-xs" />
          <Button icon="pi pi-times" text rounded severity="secondary" @click="close" />
        </div>
      </div>

      <!-- Tabs -->
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">Persönliche Daten</Tab>
          <Tab value="1">Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 pt-4">
              <div class="flex flex-col gap-2">
                <label class="text-gray-700">Name</label>
                <InputText v-model="name" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-gray-700">E-Mail</label>
                <InputText v-model="email" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-gray-700">Rolle</label>
                <Dropdown
                  v-model="role"
                  :options="roleOptions"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full"
                />
              </div>

              <div class="flex items-center gap-2 pt-2">
                <Checkbox v-model="isActive" binary inputId="isActive" />
                <label for="isActive" class="text-gray-700">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="pt-4 text-gray-500">Einstellungen Inhalt</div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <!-- Footer -->
      <div class="flex justify-end gap-3 pt-6">
        <Button label="Abbrechen" severity="secondary" text class="bg-gray-100" @click="cancel" />
        <Button label="Speichern" severity="success" @click="save" />
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
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'

const activeTab = ref('0')
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('manager')
const isActive = ref(true)

const roleOptions = [
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'mitarbeiter' },
  { label: 'Kunde', value: 'kunde' },
]

function close() {
  console.log('close dialog')
}

function cancel() {
  console.log('cancel')
}

function save() {
  console.log('save', { name: name.value, email: email.value, role: role.value, isActive: isActive.value })
}
</script>