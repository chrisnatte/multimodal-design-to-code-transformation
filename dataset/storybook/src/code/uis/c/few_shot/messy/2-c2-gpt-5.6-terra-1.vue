<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :draggable="false"
    :pt="{
      root: 'w-full max-w-[510px]',
      header: '!px-5 !pt-5 !pb-4',
      content: '!px-5 !py-0',
      footer: '!px-5 !pt-7 !pb-5',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="!h-7 !w-7 !text-xs" />
          <div class="flex flex-col">
            <span class="text-sm font-medium">Max Mustermann</span>
            <span class="text-xs text-surface-500">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-6">
          <Tag value="Aktiv" severity="success" class="!text-xs" />
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            rounded
            aria-label="Schließen"
            @click="visible = false"
          />
        </div>
      </div>
    </template>

    <Tabs value="personal">
      <TabList>
        <Tab value="personal">Persönliche Daten</Tab>
        <Tab value="settings">Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="personal" class="!px-1 !pt-4 !pb-0">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1.5">
              <label for="name" class="text-sm">Name</label>
              <InputText id="name" v-model="name" class="w-full" />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="email" class="text-sm">E-Mail</label>
              <InputText id="email" v-model="email" type="email" class="w-full" />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="role" class="text-sm">Rolle</label>
              <Select
                id="role"
                v-model="role"
                :options="roles"
                option-label="label"
                class="w-full"
              />
              <Listbox
                v-model="role"
                :options="roles"
                option-label="label"
                class="-mt-1 w-full shadow-md"
                list-class="!py-1"
              />
            </div>

            <div class="flex items-center gap-2 pt-1">
              <Checkbox v-model="active" input-id="active" binary />
              <label for="active" class="text-sm">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="settings" class="!px-1 !pt-4 !pb-0">
          <div class="h-72"></div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Speichern" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Tag from 'primevue/tag'

const visible = ref(true)
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const active = ref(true)
const roles = ref([
  { label: 'Manager' },
  { label: 'Mitarbeiter' },
  { label: 'Kunde' },
])
const role = ref(roles.value[0])
</script>