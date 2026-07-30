<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :dismissableMask="false"
    class="w-[364px]"
  >
    <template #header>
      <div class="flex w-full items-center gap-2">
        <Avatar label="M" shape="circle" class="h-5 w-5 text-[10px]" />
        <div class="flex flex-col leading-none">
          <span class="text-xs font-medium text-slate-700">Max Mustermann</span>
          <span class="mt-0.5 text-[8px] text-slate-500">Manager</span>
        </div>
        <Tag value="Aktiv" severity="success" class="ml-auto text-[10px]" />
        <Button
          icon="pi pi-times"
          text
          rounded
          size="small"
          aria-label="Schließen"
          class="ml-1 h-6 w-6"
          @click="visible = false"
        />
      </div>
    </template>

    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="personal" class="px-2 text-xs">Persönliche Daten</Tab>
        <Tab value="settings" class="px-2 text-xs">Einstellungen</Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="personal" class="px-0 pt-3">
          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-1">
              <label for="name" class="text-xs text-slate-600">Name</label>
              <InputText id="name" v-model="name" class="w-full text-xs" />
            </div>

            <div class="flex flex-col gap-1">
              <label for="email" class="text-xs text-slate-600">E-Mail</label>
              <InputText id="email" v-model="email" class="w-full text-xs" />
            </div>

            <div class="flex flex-col gap-1">
              <label for="role" class="text-xs text-slate-600">Rolle</label>
              <Select
                id="role"
                v-model="role"
                :options="roles"
                class="w-full text-xs"
              />
              <Listbox
                v-model="role"
                :options="roles"
                class="w-full text-xs shadow-md"
                :pt="{
                  root: { class: 'border border-slate-200 rounded-md' },
                  list: { class: 'p-1' },
                  option: { class: 'px-2 py-1.5 text-xs' }
                }"
              />
            </div>

            <div class="flex items-center gap-2 pt-1">
              <Checkbox v-model="isActive" inputId="active" binary />
              <label for="active" class="text-xs text-slate-600">Ist aktiv</label>
            </div>

            <div class="flex justify-end gap-2 pt-4">
              <Button
                label="Abbrechen"
                severity="secondary"
                text
                size="small"
                class="text-xs"
                @click="visible = false"
              />
              <Button
                label="Speichern"
                severity="success"
                size="small"
                class="text-xs"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="settings" class="px-0 pt-3">
          <div class="h-48"></div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Dialog>
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
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Listbox from 'primevue/listbox'
import Checkbox from 'primevue/checkbox'

const visible = ref(true)
const activeTab = ref('personal')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const role = ref('Manager')
const isActive = ref(true)
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
</script>