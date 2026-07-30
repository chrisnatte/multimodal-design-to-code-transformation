<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :pt="{
      root: 'w-full max-w-lg',
      content: '!pb-0'
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between">
        <div class="flex items-center gap-4">
          <Avatar label="M" shape="circle" class="bg-slate-200 text-slate-700" />
          <div class="flex flex-col">
            <span class="text-sm font-normal">Max Mustermann</span>
            <span class="text-[10px] font-light">Manager</span>
          </div>
          <Tag value="Aktiv" class="bg-green-100 text-xs font-bold text-green-800" />
        </div>
        <Button icon="pi pi-times" text rounded aria-label="Close" @click="visible = false" />
      </div>
    </template>

    <Tabs value="0">
      <TabList>
        <Tab value="0">Persönliche Daten</Tab>
        <Tab value="1">Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0" class="flex flex-col gap-4 pt-4">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-sm">Name</label>
            <InputText id="name" v-model="name" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm">E-Mail</label>
            <InputText id="email" v-model="email" type="email" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="role" class="text-sm">Rolle</label>
            <Select
              id="role"
              v-model="selectedRole"
              :options="roles"
              option-label="label"
              option-value="value"
              placeholder="Rolle wählen"
              class="w-full"
            />
          </div>
          <div class="mt-2 flex items-center gap-2">
            <Checkbox id="isActive" v-model="isActive" binary />
            <label for="isActive" class="text-sm">Ist aktiv</label>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <!-- Einstellungen content -->
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="visible = false" />
      <Button label="Speichern" severity="success" @click="save" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
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

const save = () => {
  visible.value = false
}
</script>