<template>
  <div class="min-h-screen flex items-center justify-center bg-black/40 p-4">
    <Dialog
      v-model:visible="state.visible"
      :modal="true"
      :draggable="false"
      :closable="false"
      :style="{ width: '640px' }"
      pt:root:class="rounded-xl"
      pt:content:class="p-0"
      pt:mask:class="bg-black/40"
    >
      <div class="flex flex-col">
        <div class="flex items-center justify-between px-5 pt-5 pb-4">
          <h2 class="text-[32px] leading-none font-semibold text-slate-700">Neues Projekt</h2>
          <Button
            icon="pi pi-times"
            variant="text"
            severity="secondary"
            aria-label="Schließen"
            @click="state.visible = false"
          />
        </div>

        <div class="px-5 pb-5">
          <Tabs v-model:value="state.activeTab">
            <TabList>
              <Tab value="0">1 - Allgemein</Tab>
              <Tab value="1">2 - Zeitplan</Tab>
              <Tab value="2">3 - Einstellungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <div class="flex flex-col gap-4 pt-3">
                  <div class="flex flex-col gap-2">
                    <label for="projektname" class="text-2xl text-slate-700">Projektname</label>
                    <InputText id="projektname" v-model="state.projectName" class="w-full" />
                  </div>

                  <div class="flex flex-col gap-2">
                    <label for="kategorie" class="text-2xl text-slate-700">Kategorie</label>
                    <Select
                      id="kategorie"
                      v-model="state.category"
                      :options="categoryOptions"
                      optionLabel="label"
                      optionValue="value"
                      class="w-full"
                    />
                  </div>

                  <div class="flex flex-col gap-2">
                    <label for="verantwortlicher" class="text-2xl text-slate-700">Verantwortlicher</label>
                    <Select
                      id="verantwortlicher"
                      v-model="state.owner"
                      :options="ownerOptions"
                      optionLabel="label"
                      optionValue="value"
                      class="w-full"
                    />
                  </div>
                </div>
              </TabPanel>

              <TabPanel value="1">
                <div class="pt-4 text-slate-500">Zeitplan-Einstellungen</div>
              </TabPanel>

              <TabPanel value="2">
                <div class="flex flex-col gap-4 pt-3">
                  <div class="flex items-center justify-between">
                    <div class="flex flex-col">
                      <span class="font-semibold text-slate-700">Öffentlich sichtbar</span>
                      <span class="text-xs text-slate-500">Für alle Teammitglieder</span>
                    </div>
                    <ToggleSwitch v-model="state.publicVisible" />
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex flex-col">
                      <span class="font-semibold text-slate-700">Benachrichtigungen</span>
                      <span class="text-xs text-slate-500">Bei Statusänderungen</span>
                    </div>
                    <ToggleSwitch v-model="state.notifications" />
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>

        <div class="flex justify-end gap-2 px-5 pb-5">
          <Button label="Abbrechen" severity="secondary" @click="state.visible = false" />
          <Button label="Weiter" @click="state.activeTab = '1'" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import ToggleSwitch from 'primevue/toggleswitch'

const state = reactive({
  visible: true,
  activeTab: '0',
  projectName: '',
  category: 'entwicklung',
  owner: 'max',
  publicVisible: true,
  notifications: false
})

const categoryOptions = [
  { label: 'Entwicklung', value: 'entwicklung' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' }
]

const ownerOptions = [
  { label: 'Max Mustmann', value: 'max' },
  { label: 'Anna Schmidt', value: 'anna' },
  { label: 'Lena Fischer', value: 'lena' }
]
</script>