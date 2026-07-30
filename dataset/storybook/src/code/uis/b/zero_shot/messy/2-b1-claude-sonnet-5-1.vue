<template>
  <div class="w-full h-full bg-black flex items-center justify-center p-8">
    <div class="bg-white border border-gray-200 rounded-xl w-[512px] p-4">
      <!-- Header -->
      <div class="flex items-center justify-between pb-4 border-b border-gray-200">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-gray-200" />
          <div class="flex flex-col">
            <span class="text-sm font-normal">Max Mustermann</span>
            <span class="text-xs font-light text-gray-500">Manager</span>
          </div>
          <Tag value="Aktiv" severity="success" class="ml-2" />
        </div>
        <Button icon="pi pi-times" text rounded aria-label="Close" />
      </div>

      <!-- Tabs -->
      <Tabs value="0" class="mt-4">
        <TabList>
          <Tab value="0">Persönliche Daten</Tab>
          <Tab value="1">Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 py-4">
              <div class="flex flex-col gap-2">
                <label for="name" class="text-sm">Name</label>
                <InputText id="name" v-model="name" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="email" class="text-sm">E-Mail</label>
                <InputText id="email" v-model="email" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="role" class="text-sm">Rolle</label>
                <Dropdown
                  id="role"
                  v-model="role"
                  :options="roleOptions"
                  option-label="label"
                  option-value="value"
                  class="w-full"
                />
              </div>

              <div class="flex items-center gap-2">
                <Checkbox v-model="isActive" inputId="isActive" binary />
                <label for="isActive" class="text-sm">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="py-4 text-sm text-gray-500">
              Einstellungen Inhalt
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <!-- Footer buttons -->
      <div class="flex justify-end gap-3 pt-4 border-t border-gray-200">
        <Button label="Abbrechen" severity="secondary" outlined />
        <Button label="Speichern" severity="success" />
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

const name = ref('Max Mustermann')
const email = ref('max@example.com')
const role = ref('manager')
const isActive = ref(true)

const roleOptions = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'mitarbeiter' },
  { label: 'Kunde', value: 'kunde' }
])
</script>