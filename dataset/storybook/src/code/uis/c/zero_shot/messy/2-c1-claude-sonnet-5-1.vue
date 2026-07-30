<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <Dialog v-model:visible="visible" :modal="true" :closable="false" :draggable="false" class="w-[500px]">
      <template #container>
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <Avatar label="M" shape="circle" class="bg-gray-200 text-gray-700" />
              <div>
                <div class="text-gray-800 font-medium">Max Mustermann</div>
                <div class="text-gray-400 text-sm">Manager</div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <Tag value="Aktiv" severity="success" class="bg-green-100 text-green-600 font-semibold" />
              <Button icon="pi pi-times" text rounded @click="visible = false" class="text-gray-500" />
            </div>
          </div>

          <Tabs v-model:value="activeTab">
            <TabList>
              <Tab value="0">Persönliche Daten</Tab>
              <Tab value="1">Einstellungen</Tab>
            </TabList>
          </Tabs>

          <div class="mt-6 flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label class="text-gray-700 text-sm">Name</label>
              <InputText v-model="name" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-gray-700 text-sm">E-Mail</label>
              <InputText v-model="email" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-gray-700 text-sm">Rolle</label>
              <Dropdown
                v-model="role"
                :options="roleOptions"
                optionLabel="label"
                optionValue="value"
                class="w-full"
              />
            </div>

            <div class="flex items-center gap-2 mt-2">
              <Checkbox v-model="isActive" binary inputId="isActive" />
              <label for="isActive" class="text-gray-700 text-sm">Ist aktiv</label>
            </div>
          </div>

          <div class="flex justify-end gap-3 mt-8">
            <Button label="Abbrechen" severity="secondary" text class="bg-gray-100 text-gray-700" @click="visible = false" />
            <Button label="Speichern" class="bg-green-500 border-green-500 hover:bg-green-600" />
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'

const visible = ref(true)
const activeTab = ref('0')
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const isActive = ref(true)

const roleOptions = ref([
  { label: 'Manager', value: 'Manager' },
  { label: 'Mitarbeiter', value: 'Mitarbeiter' },
  { label: 'Kunde', value: 'Kunde' }
])
</script>