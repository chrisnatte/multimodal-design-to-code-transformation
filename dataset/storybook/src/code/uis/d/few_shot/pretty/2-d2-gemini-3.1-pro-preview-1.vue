<template>
  <Dialog v-model:visible="visible" modal class="w-[32rem]">
    <template #header>
      <div class="flex w-full items-center justify-between pr-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-slate-100 text-slate-600" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-slate-900">Max Mustermann</span>
            <span class="text-[10px] font-light text-slate-500">Manager</span>
          </div>
        </div>
        <Tag value="Aktiv" severity="success" class="!bg-green-100 !text-green-700" />
      </div>
    </template>

    <Tabs value="0" class="-mx-1 mt-2">
      <TabList>
        <Tab value="0">Persönliche Daten</Tab>
        <Tab value="1">Einstellungen</Tab>
      </TabList>
      <TabPanels class="!px-1 !py-4">
        <TabPanel value="0">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-sm text-slate-700">Name</label>
              <InputText id="name" v-model="name" class="w-full" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm text-slate-700">E-Mail</label>
              <InputText id="email" v-model="email" class="w-full" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="role" class="text-sm text-slate-700">Rolle</label>
              <Select id="role" v-model="role" :options="roles" class="w-full" />
            </div>
            <div class="mt-2 flex items-center gap-2">
              <Checkbox id="isActive" v-model="isActive" binary />
              <label for="isActive" class="text-sm text-slate-700">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <!-- Empty tab panel for Einstellungen -->
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="visible = false" />
      <Button label="Speichern" severity="primary" @click="visible = false" />
    </template>
  </Dialog>
</template>

<script setup>
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
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
const isActive = ref(true)
</script>