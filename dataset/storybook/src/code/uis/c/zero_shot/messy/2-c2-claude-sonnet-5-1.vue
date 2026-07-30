<template>
  <div class="min-h-screen bg-gray-400 flex items-center justify-center">
    <div class="bg-white rounded-xl shadow-lg w-[512px] p-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-gray-200 text-gray-700" />
          <div class="flex flex-col">
            <span class="text-gray-800 font-medium">Max Mustermann</span>
            <span class="text-gray-500 text-sm">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <Tag value="Aktiv" severity="success" class="bg-green-100 text-green-600 font-semibold" />
          <Button icon="pi pi-times" text rounded class="text-gray-500" @click="$emit('close')" />
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
            <div class="flex flex-col gap-4 mt-4">
              <div class="flex flex-col gap-1">
                <label class="text-gray-700 text-sm">Name</label>
                <InputText v-model="name" class="w-full" />
              </div>

              <div class="flex flex-col gap-1">
                <label class="text-gray-700 text-sm">E-Mail</label>
                <InputText v-model="email" class="w-full" />
              </div>

              <div class="flex flex-col gap-1">
                <label class="text-gray-700 text-sm">Rolle</label>
                <Dropdown
                  v-model="role"
                  :options="roleOptions"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full"
                />
              </div>

              <div class="flex items-center gap-2">
                <Checkbox v-model="isActive" binary inputId="isActive" />
                <label for="isActive" class="text-gray-700 text-sm">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="mt-4 text-gray-500 text-sm">Keine Einstellungen verfügbar.</div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <!-- Footer -->
      <div class="flex justify-end gap-2 mt-6">
        <Button label="Abbrechen" severity="secondary" outlined @click="$emit('cancel')" />
        <Button label="Speichern" severity="success" @click="$emit('save')" />
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
  { label: 'Kunde', value: 'kunde' }
]
</script>