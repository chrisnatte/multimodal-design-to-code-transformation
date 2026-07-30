<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <div class="w-[512px] rounded-xl border border-gray-200 bg-white shadow-md">
      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-gray-200 text-gray-700" />
          <div class="flex flex-col">
            <span class="text-sm text-gray-800">{{ user.name }}</span>
            <span class="text-xs text-gray-400 font-light">{{ user.role }}</span>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <Tag value="Aktiv" severity="success" class="text-xs font-bold" />
          <i class="pi pi-times text-gray-500 cursor-pointer" @click="closeDialog"></i>
        </div>
      </div>

      <!-- Tabs -->
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="personal">Persönliche Daten</Tab>
          <Tab value="settings">Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="personal">
            <div class="flex flex-col gap-4 px-6 py-4">
              <div class="flex flex-col gap-2">
                <label class="text-sm text-gray-700">Name</label>
                <InputText v-model="name" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-sm text-gray-700">E-Mail</label>
                <InputText v-model="email" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-sm text-gray-700">Rolle</label>
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
                <label for="isActive" class="text-sm text-gray-700">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="settings">
            <div class="px-6 py-4 text-sm text-gray-500">
              Keine Einstellungen verfügbar.
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <!-- Footer -->
      <div class="flex justify-end gap-3 px-6 py-4">
        <Button label="Abbrechen" severity="secondary" text @click="closeDialog" />
        <Button label="Speichern" severity="success" @click="saveChanges" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const user = ref({
  name: 'Max Mustermann',
  role: 'Manager'
})

const activeTab = ref('personal')

const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('manager')
const isActive = ref(true)

const roleOptions = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'mitarbeiter' },
  { label: 'Kunde', value: 'kunde' }
])

const closeDialog = () => {
  console.log('Dialog geschlossen')
}

const saveChanges = () => {
  console.log('Änderungen gespeichert', {
    name: name.value,
    email: email.value,
    role: role.value,
    isActive: isActive.value
  })
}
</script>