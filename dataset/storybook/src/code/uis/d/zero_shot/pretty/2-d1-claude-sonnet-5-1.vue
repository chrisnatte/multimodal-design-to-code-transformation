<template>
  <div class="w-full h-screen flex items-center justify-center bg-black py-16">
    <div class="bg-white rounded-xl border border-slate-200 w-[512px]">
      <!-- Header -->
      <div class="flex items-center gap-4 p-[17.5px]">
        <div class="flex items-center gap-3 flex-1">
          <Avatar label="M" shape="circle" class="bg-slate-200" />
          <div class="flex flex-col">
            <span class="text-sm text-slate-800">Max Mustermann</span>
            <span class="text-xs text-slate-400">Manager</span>
          </div>
          <Tag value="Aktiv" severity="success" class="ml-auto" />
        </div>
        <Button icon="pi pi-times" text severity="secondary" rounded @click="onClose" />
      </div>

      <!-- Content -->
      <div class="px-[17.5px] pb-[17.5px]">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">Persönliche Daten</Tab>
            <Tab value="1">Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-4 pt-4">
                <div class="flex flex-col gap-1">
                  <label class="text-sm text-slate-700">Name</label>
                  <InputText v-model="name" class="w-full" />
                </div>

                <div class="flex flex-col gap-1">
                  <label class="text-sm text-slate-700">E-Mail</label>
                  <InputText v-model="email" class="w-full" />
                </div>

                <div class="flex flex-col gap-1">
                  <label class="text-sm text-slate-700">Rolle</label>
                  <Select v-model="role" :options="roles" optionLabel="label" optionValue="value" class="w-full" />
                </div>

                <div class="flex items-center gap-2">
                  <Checkbox v-model="isActive" binary inputId="isActive" />
                  <label for="isActive" class="text-sm text-slate-700">Ist aktiv</label>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="pt-4 text-sm text-slate-500">Einstellungen Inhalt</div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-2 p-[17.5px] border-t border-slate-100">
        <Button label="Abbrechen" severity="secondary" @click="onCancel" />
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
import Select from 'primevue/select'
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

function onClose() {
  console.log('close')
}

function onCancel() {
  console.log('cancel')
}

function onSave() {
  console.log('save', { name: name.value, email: email.value, role: role.value, isActive: isActive.value })
}
</script>