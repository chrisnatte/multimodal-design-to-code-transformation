<template>
  <div class="flex min-h-screen items-center justify-center bg-black p-8">
    <Dialog
      v-model:visible="visible"
      modal
      :pt="{
        root: 'w-full max-w-lg',
        header: '!pb-4 !pt-4 !px-4',
        content: '!p-4',
        footer: '!pb-4 !pt-0 !px-4',
      }"
    >
      <template #header>
        <div class="flex w-full items-center justify-between pr-4">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" class="bg-slate-200 text-slate-700" />
            <div class="flex flex-col">
              <span class="text-sm font-normal">Max Mustermann</span>
              <span class="text-[10px] font-light">Manager</span>
            </div>
          </div>
          <Tag value="Aktiv" severity="success" />
        </div>
      </template>

      <Tabs value="0">
        <TabList>
          <Tab value="0">Persönliche Daten</Tab>
          <Tab value="1">Einstellungen</Tab>
        </TabList>
        <TabPanels class="!px-1 !py-3">
          <TabPanel value="0">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <label for="name" class="text-sm">Name</label>
                <InputText id="name" v-model="name" placeholder="Name eingeben" />
              </div>
              <div class="flex flex-col gap-2">
                <label for="email" class="text-sm">E-Mail</label>
                <InputText id="email" v-model="email" placeholder="Name eingeben" />
              </div>
              <div class="flex flex-col gap-2">
                <label for="role" class="text-sm">Rolle</label>
                <Select id="role" v-model="role" :options="roles" placeholder="Placeholder" />
              </div>
              <div class="mt-2 flex items-center gap-2">
                <Checkbox id="isActive" v-model="isActive" binary />
                <label for="isActive" class="text-sm">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Speichern" severity="primary" @click="visible = false" />
      </template>
    </Dialog>
  </div>
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
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
const isActive = ref(true)
</script>