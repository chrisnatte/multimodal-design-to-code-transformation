<template>
  <div class="flex items-center justify-center w-full h-full bg-black p-8">
    <div class="w-[512px] rounded-xl border border-slate-200 bg-white">
      <!-- Header with avatar, name, status, close -->
      <div class="flex items-center justify-between px-4 py-4 border-b border-slate-200">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-slate-200" />
          <div class="flex flex-col">
            <span class="text-sm">Max Mustermann</span>
            <span class="text-xs font-light text-gray-500">Manager</span>
          </div>
          <Tag severity="success" value="Aktiv" class="ml-2" />
        </div>
        <Button icon="pi pi-times" text rounded aria-label="Close" />
      </div>

      <!-- Tabs -->
      <Tabs value="0">
        <TabList>
          <Tab value="0">Persönliche Daten</Tab>
          <Tab value="1">Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 p-4">
              <div class="flex flex-col gap-2">
                <label class="text-sm">Name</label>
                <InputText v-model="name" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-sm">E-Mail</label>
                <InputText v-model="email" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-sm">Rolle</label>
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
                <label for="isActive" class="text-sm">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="p-4 text-sm text-gray-500">
              Einstellungen Inhalt hier.
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <!-- Footer -->
      <div class="flex items-center justify-end gap-3 px-4 py-4 border-t border-slate-200">
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