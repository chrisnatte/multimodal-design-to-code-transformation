<template>
  <Dialog v-model:visible="visible" modal :style="{ width: '32rem' }">
    <template #header>
      <div class="flex w-full items-center gap-3 pr-2">
        <Avatar label="M" shape="circle" class="bg-slate-100 text-slate-700" />
        <div class="flex flex-col">
          <span class="font-medium text-slate-900">Max Mustermann</span>
          <span class="text-xs text-slate-500">Manager</span>
        </div>
        <Tag value="Aktiv" severity="success" class="ml-auto" />
      </div>
    </template>

    <Tabs value="0">
      <TabList>
        <Tab value="0">Persönliche Daten</Tab>
        <Tab value="1">Einstellungen</Tab>
      </TabList>
      <TabPanels class="!px-0 !pb-0">
        <TabPanel value="0">
          <div class="flex flex-col gap-4 pt-4">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-sm text-slate-700">Name</label>
              <InputText id="name" v-model="name" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm text-slate-700">E-Mail</label>
              <InputText id="email" v-model="email" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="role" class="text-sm text-slate-700">Rolle</label>
              <Select id="role" v-model="selectedRole" :options="roles" class="w-full" />
            </div>
            <div class="flex items-center gap-2 pt-2">
              <Checkbox id="active" v-model="isActive" binary />
              <label for="active" class="text-sm text-slate-700">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1"></TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Speichern" severity="primary" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const visible = ref(true)
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const selectedRole = ref('Manager')
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
const isActive = ref(true)
</script>