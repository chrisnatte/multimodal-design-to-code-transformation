<template>
  <div class="flex min-h-screen items-center justify-center bg-black py-[280px]">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="false"
      :pt="{
        root: 'w-full max-w-[512px] rounded-xl border border-surface-200 bg-white',
        header: 'flex items-center justify-between p-4 pb-0',
        content: 'p-4',
        footer: 'flex justify-end gap-2 p-4 pt-0'
      }"
    >
      <template #header>
        <div class="flex w-full items-center justify-between">
          <div class="flex grow items-center justify-between pr-16">
            <div class="flex items-center gap-3">
              <Avatar label="M" shape="circle" class="bg-surface-100 text-sm" />
              <div class="flex flex-col">
                <span class="text-sm font-normal text-surface-900">Max Mustermann</span>
                <span class="text-[10px] font-light text-surface-500">Manager</span>
              </div>
            </div>
            <Tag value="Aktiv" severity="success" />
          </div>
          <Button icon="pi pi-times" severity="secondary" text rounded @click="visible = false" />
        </div>
      </template>

      <Tabs value="0">
        <TabList>
          <Tab value="0">Persönliche Daten</Tab>
          <Tab value="1">Einstellungen</Tab>
        </TabList>
        <TabPanels :pt="{ root: 'p-1 pt-3' }">
          <TabPanel value="0" class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-sm text-surface-900">Name</label>
              <InputText id="name" v-model="name" placeholder="Name eingeben" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm text-surface-900">E-Mail</label>
              <InputText id="email" v-model="email" placeholder="E-Mail eingeben" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="role" class="text-sm text-surface-900">Rolle</label>
              <Select id="role" v-model="role" :options="roles" placeholder="Rolle wählen" class="w-full" />
            </div>
            <div class="mt-2 flex items-center gap-2">
              <Checkbox id="isActive" v-model="isActive" binary />
              <label for="isActive" class="text-sm text-surface-900">Ist aktiv</label>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <!-- Einstellungen Content -->
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
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
const isActive = ref(true)
</script>