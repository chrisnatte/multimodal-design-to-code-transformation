<template>
  <div class="min-h-[1080px] w-full bg-black py-[280px]">
    <Dialog
      v-model:visible="dialogVisible"
      modal
      :closable="false"
      :draggable="false"
      :pt="{
        root: 'w-full max-w-[512px]',
        header: '!hidden',
        content: '!p-0',
        footer: '!m-0 !border-t-0 !p-0'
      }"
    >
      <div class="flex flex-col">
        <header class="flex items-center gap-4 border-b border-surface-200 p-[17.5px] dark:border-surface-700">
          <div class="flex flex-1 items-center justify-between gap-16">
            <div class="flex items-center gap-3">
              <Avatar label="M" shape="circle" />
              <div class="flex flex-col">
                <span class="text-sm">Max Mustermann</span>
                <span class="text-[10px] font-light">Manager</span>
              </div>
            </div>
            <Tag value="Aktiv" severity="success" />
          </div>
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            aria-label="Schließen"
            @click="dialogVisible = false"
          />
        </header>

        <main class="flex flex-col gap-2 px-[17.5px] pb-[17.5px]">
          <Tabs v-model:value="activeTab">
            <TabList>
              <Tab value="personal">Persönliche Daten</Tab>
              <Tab value="settings">Einstellungen</Tab>
            </TabList>
            <TabPanels class="px-1 pb-4 pt-3">
              <TabPanel value="personal">
                <div class="flex flex-col gap-4">
                  <div class="flex flex-col gap-2">
                    <label for="name" class="text-sm">Name</label>
                    <InputText v-model="name" input-id="name" />
                  </div>

                  <div class="flex flex-col gap-2">
                    <label for="email" class="text-sm">E-Mail</label>
                    <InputText v-model="email" input-id="email" type="email" />
                  </div>

                  <div class="flex flex-col gap-2">
                    <label for="role" class="text-sm">Rolle</label>
                    <Select
                      v-model="role"
                      :options="roleOptions"
                      input-id="role"
                      class="w-full"
                    />
                  </div>

                  <div class="flex items-center gap-2">
                    <Checkbox v-model="isActive" input-id="is-active" binary />
                    <label for="is-active" class="text-sm">Ist aktiv</label>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="settings">
                <div></div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </main>

        <footer class="flex justify-end gap-2 px-[17.5px] pb-[17.5px]">
          <Button label="Abbrechen" severity="secondary" @click="dialogVisible = false" />
          <Button label="Speichern" severity="primary" />
        </footer>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Tag from 'primevue/tag'

const dialogVisible = ref(true)
const activeTab = ref('personal')
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const isActive = ref(true)
const roleOptions = ref(['Manager', 'Mitarbeiter', 'Kunde'])
</script>