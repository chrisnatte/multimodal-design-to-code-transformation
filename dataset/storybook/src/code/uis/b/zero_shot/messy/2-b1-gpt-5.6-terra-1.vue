<template>
  <main class="flex min-h-screen items-center justify-center bg-black p-6">
    <section class="w-full max-w-[512px] rounded-xl border border-slate-200 bg-white shadow-sm">
      <header class="flex h-16 items-center justify-between px-[17px]">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="h-7 w-7 bg-slate-200 text-sm text-slate-900" />
          <div class="flex flex-col">
            <span class="text-sm text-slate-900">Max Mustermann</span>
            <span class="text-[10px] font-light text-slate-700">Manager</span>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <Tag value="Aktiv" class="bg-emerald-100 px-2 py-1 text-xs font-bold text-slate-900" />
          <Button
            icon="pi pi-times"
            text
            rounded
            severity="secondary"
            aria-label="Schließen"
            class="h-7 w-9"
          />
        </div>
      </header>

      <div class="px-[17px]">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="personal" class="font-bold">Persönliche Daten</Tab>
            <Tab value="settings" class="font-bold">Einstellungen</Tab>
          </TabList>

          <TabPanels>
            <TabPanel value="personal">
              <div class="flex flex-col gap-4 px-1 pt-3">
                <div class="flex flex-col gap-1.5">
                  <label for="name" class="text-sm text-slate-900">Name</label>
                  <InputText id="name" v-model="name" class="h-[33px] w-full text-sm" />
                </div>

                <div class="flex flex-col gap-1.5">
                  <label for="email" class="text-sm text-slate-900">E-Mail</label>
                  <InputText id="email" v-model="email" class="h-[33px] w-full text-sm" />
                </div>

                <div class="flex flex-col gap-1.5">
                  <label for="role" class="text-sm text-slate-900">Rolle</label>
                  <Select
                    id="role"
                    v-model="role"
                    :options="roles"
                    class="h-[33px] w-full border-emerald-500 text-sm"
                  />
                </div>

                <Listbox
                  v-model="role"
                  :options="roles"
                  class="w-full border-slate-200 text-sm"
                  list-class="max-h-none py-1"
                />

                <div class="flex items-center gap-2 pt-0.5">
                  <Checkbox v-model="isActive" input-id="active" binary />
                  <label for="active" class="text-sm text-slate-900">Ist aktiv</label>
                </div>
              </div>
            </TabPanel>

            <TabPanel value="settings">
              <div class="px-1 py-4 text-sm text-slate-600">
                Einstellungen
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <footer class="flex h-[50px] items-start justify-end gap-2 px-[17px] pt-4">
        <Button label="Abbrechen" severity="secondary" class="h-[33px] text-sm" />
        <Button label="Speichern" class="h-[33px] bg-emerald-500 text-sm hover:bg-emerald-600" />
      </footer>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Tag from 'primevue/tag'

const activeTab = ref('personal')
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const isActive = ref(true)
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
</script>