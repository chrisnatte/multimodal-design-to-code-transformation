<template>
  <main class="min-h-screen">
    <Dialog
      v-model:visible="visible"
      modal
      :show-header="false"
      :closable="false"
      :draggable="false"
      :dismissable-mask="false"
      class="w-[364px]"
    >
      <div class="flex flex-col gap-4 px-4 pb-3 pt-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <Avatar label="M" shape="circle" class="h-5 w-5 text-[9px]" />
            <div class="flex flex-col leading-none">
              <span class="text-[11px] font-medium text-slate-700">Max Mustermann</span>
              <span class="mt-0.5 text-[8px] text-slate-500">Manager</span>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <Tag value="Aktiv" severity="success" class="text-[9px]" />
            <Button
              icon="pi pi-times"
              text
              rounded
              size="small"
              severity="secondary"
              aria-label="Schließen"
              @click="visible = false"
            />
          </div>
        </div>

        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="personal" class="px-2 py-2 text-[10px]">Persönliche Daten</Tab>
            <Tab value="settings" class="px-2 py-2 text-[10px]">Einstellungen</Tab>
          </TabList>

          <TabPanels>
            <TabPanel value="personal" class="px-0 pb-0 pt-3">
              <div class="flex flex-col gap-3">
                <div class="flex flex-col gap-1">
                  <label for="name" class="text-[10px] text-slate-600">Name</label>
                  <InputText
                    id="name"
                    v-model="name"
                    class="h-6 w-full text-[10px]"
                  />
                </div>

                <div class="flex flex-col gap-1">
                  <label for="email" class="text-[10px] text-slate-600">E-Mail</label>
                  <InputText
                    id="email"
                    v-model="email"
                    class="h-6 w-full text-[10px]"
                  />
                </div>

                <div class="flex flex-col gap-1">
                  <label for="role" class="text-[10px] text-slate-600">Rolle</label>
                  <div class="relative">
                    <Select
                      id="role"
                      v-model="role"
                      :options="roles"
                      class="h-6 w-full text-[10px]"
                    />
                    <Listbox
                      v-model="role"
                      :options="roles"
                      class="absolute left-0 top-7 z-10 w-full text-[10px] shadow-md"
                    />
                  </div>
                </div>

                <div class="mt-[66px] flex items-center gap-1.5">
                  <Checkbox v-model="isActive" input-id="active" binary />
                  <label for="active" class="text-[10px] text-slate-600">Ist aktiv</label>
                </div>
              </div>
            </TabPanel>

            <TabPanel value="settings" class="px-0 pb-0 pt-3">
              <div class="h-[224px]"></div>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <div class="flex justify-end gap-2 pt-1">
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
            @click="visible = false"
          />
        </div>
      </div>
    </Dialog>
  </main>
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
const role = ref('Manager')
const isActive = ref(true)
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
</script>