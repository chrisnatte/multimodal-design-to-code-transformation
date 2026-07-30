<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <div class="bg-white rounded-xl border border-gray-200 w-[512px] shadow-md">
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-4 border-b border-gray-200">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-gray-200 text-gray-700" />
          <div class="flex flex-col">
            <span class="text-sm text-gray-800">{{ name }}</span>
            <span class="text-xs text-gray-500">{{ role }}</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <Tag value="Aktiv" severity="success" class="text-xs" />
          <Button icon="pi pi-times" text rounded severity="secondary" @click="onClose" />
        </div>
      </div>

      <!-- Tabs -->
      <div class="px-4">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="personal">Persönliche Daten</Tab>
            <Tab value="settings">Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="personal">
              <div class="flex flex-col gap-4 py-4">
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
              <div class="py-4 text-sm text-gray-600">
                Einstellungen Inhalt
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-3 px-4 py-4 border-t border-gray-200">
        <Button label="Abbrechen" severity="secondary" text @click="onCancel" />
        <Button label="Speichern" severity="success" @click="onSave" />
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
const role = ref('Manager')
const isActive = ref(true)
const activeTab = ref('personal')

const roleOptions = ref([
  { label: 'Manager', value: 'Manager' },
  { label: 'Mitarbeiter', value: 'Mitarbeiter' },
  { label: 'Kunde', value: 'Kunde' }
])

function onClose() {
  console.log('close')
}
function onCancel() {
  console.log('cancel')
}
function onSave() {
  console.log('save', {
    name: name.value,
    email: email.value,
    role: role.value,
    isActive: isActive.value
  })
}
</script>