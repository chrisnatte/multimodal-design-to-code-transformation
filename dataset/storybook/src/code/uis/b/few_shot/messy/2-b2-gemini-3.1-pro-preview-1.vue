<template>
  <Dialog
    v-model:visible="visible"
    modal
    :pt="{
      root: 'w-full max-w-[512px]',
      header: 'flex items-center justify-between pb-4 border-b border-slate-100',
      content: 'pt-4',
      footer: 'pt-4 border-t border-slate-100'
    }"
  >
    <template #header>
      <div class="flex items-center gap-4">
        <Avatar label="M" shape="circle" class="bg-slate-200 text-slate-700" />
        <div class="flex flex-col">
          <span class="text-sm font-normal text-slate-900">Max Mustermann</span>
          <span class="text-[10px] font-light text-slate-500">Manager</span>
        </div>
        <Tag value="Aktiv" class="bg-green-100 text-green-800 font-bold text-xs px-2 py-0.5" />
      </div>
    </template>

    <Tabs value="0">
      <TabList>
        <Tab value="0">Persönliche Daten</Tab>
        <Tab value="1">Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0" class="flex flex-col gap-4 pt-4 px-0 pb-0">
          <div class="flex flex-col gap-1.5">
            <label for="name" class="text-sm text-slate-700">Name</label>
            <InputText id="name" v-model="name" class="w-full" />
          </div>
          
          <div class="flex flex-col gap-1.5">
            <label for="email" class="text-sm text-slate-700">E-Mail</label>
            <InputText id="email" v-model="email" type="email" class="w-full" />
          </div>
          
          <div class="flex flex-col gap-1.5">
            <label for="role" class="text-sm text-slate-700">Rolle</label>
            <Select 
              id="role" 
              v-model="selectedRole" 
              :options="roles" 
              optionLabel="label" 
              optionValue="value" 
              class="w-full" 
            />
          </div>
          
          <div class="flex items-center gap-2 mt-2">
            <Checkbox id="isActive" v-model="isActive" binary />
            <label for="isActive" class="text-sm text-slate-700">Ist aktiv</label>
          </div>
        </TabPanel>
        <TabPanel value="1" class="px-0 pb-0">
          <!-- Einstellungen Content -->
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="visible = false" />
      <Button label="Speichern" severity="success" @click="visible = false" />
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
const selectedRole = ref('manager')
const isActive = ref(true)

const roles = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'mitarbeiter' },
  { label: 'Kunde', value: 'kunde' }
])
</script>