<template>
  <div class="min-h-screen">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="false"
      :draggable="false"
      class="w-[364px]"
    >
      <template #header>
        <div class="flex w-full items-center gap-2">
          <Avatar label="M" shape="circle" class="h-5 w-5 text-[9px]" />
          <div class="flex flex-col leading-none">
            <span class="text-[11px] font-medium text-slate-700">Max Mustermann</span>
            <span class="mt-0.5 text-[8px] text-slate-500">Manager</span>
          </div>
          <Tag value="Aktiv" severity="success" class="ml-auto text-[9px]" />
          <Button
            icon="pi pi-times"
            text
            rounded
            size="small"
            class="ml-1 h-6 w-6"
            aria-label="Schließen"
            @click="visible = false"
          />
        </div>
      </template>

      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="personal" class="text-[10px]">Persönliche Daten</Tab>
          <Tab value="settings" class="text-[10px]">Einstellungen</Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="personal" class="px-0 pb-0 pt-3">
            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-1">
                <label for="name" class="text-[10px] text-slate-600">Name</label>
                <InputText id="name" v-model="name" size="small" class="w-full text-[10px]" />
              </div>

              <div class="flex flex-col gap-1">
                <label for="email" class="text-[10px] text-slate-600">E-Mail</label>
                <InputText id="email" v-model="email" size="small" class="w-full text-[10px]" />
              </div>

              <div class="flex flex-col gap-1">
                <label for="role" class="text-[10px] text-slate-600">Rolle</label>
                <div class="relative">
                  <Select
                    id="role"
                    v-model="role"
                    :options="roles"
                    option-label="label"
                    option-value="value"
                    size="small"
                    class="w-full text-[10px]"
                  />
                  <Listbox
                    v-model="role"
                    :options="roles"
                    option-label="label"
                    option-value="value"
                    class="absolute left-0 top-[28px] z-10 w-full text-[10px] shadow-md"
                  />
                </div>
              </div>

              <div class="mt-[66px] flex items-center gap-1.5">
                <Checkbox v-model="isActive" input-id="active" binary size="small" />
                <label for="active" class="text-[10px] text-slate-600">Ist aktiv</label>
              </div>

              <div class="mt-2 flex justify-end gap-2">
                <Button
                  label="Abbrechen"
                  severity="secondary"
                  text
                  size="small"
                  class="text-[10px]"
                  @click="visible = false"
                />
                <Button
                  label="Speichern"
                  severity="success"
                  size="small"
                  class="text-[10px]"
                />
              </div>
            </div>
          </TabPanel>

          <TabPanel value="settings">
            <div class="h-56"></div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Dialog>
  </div>
</template>

<script setup>
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
const activeTab = ref('personal')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const role = ref('manager')
const isActive = ref(true)

const roles = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'employee' },
  { label: 'Kunde', value: 'customer' }
])
</script>