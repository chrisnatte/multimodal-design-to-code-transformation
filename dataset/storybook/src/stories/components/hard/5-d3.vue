<template>
  <div class="min-h-screen bg-black/40 flex items-center justify-center p-4">
    <Dialog
      v-model:visible="state.visible"
      modal
      :draggable="false"
      :closable="false"
      :style="{ width: '540px' }"
      class="rounded-xl"
    >
      <template #container>
        <div class="bg-white rounded-xl shadow-2xl flex flex-col">
          <div class="flex items-center justify-between px-5 pt-5 pb-4">
            <h2 class="text-3xl font-semibold text-slate-700">Neues Projekt</h2>
            <Button icon="pi pi-times" text severity="secondary" @click="state.visible = false" />
          </div>

          <div class="px-5 pb-5 flex">
            <Tabs v-model:value="state.activeTab" class="w-full">
              <TabList>
                <Tab value="1" class="font-bold">1 - Allgemein</Tab>
                <Tab value="2" class="font-bold">2 - Zeitplan</Tab>
                <Tab value="3" class="font-bold">3 - Einstellungen</Tab>
              </TabList>
              <TabPanels class="pt-4 px-1 pb-4">
                <TabPanel value="1">
                  <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                      <label class="text-slate-700">Projektname</label>
                      <InputText v-model="state.projectName" />
                    </div>

                    <div class="flex flex-col gap-2">
                      <label class="text-slate-700">Kategorie</label>
                      <Dropdown
                        v-model="state.category"
                        :options="categories"
                        optionLabel="label"
                        optionValue="value"
                        placeholder="Kategorie auswählen"
                      />
                    </div>

                    <div class="flex flex-col gap-2">
                      <label class="text-slate-700">Verantwortlicher</label>
                      <Dropdown
                        v-model="state.owner"
                        :options="owners"
                        optionLabel="label"
                        optionValue="value"
                        placeholder="Verantwortlicher auswählen"
                      />
                    </div>
                  </div>
                </TabPanel>

                <TabPanel value="2">
                  <div class="text-slate-500 text-sm">Zeitplan-Inhalte</div>
                </TabPanel>

                <TabPanel value="3">
                  <div class="flex flex-col gap-4">
                    <div class="flex items-center justify-between px-1">
                      <div class="flex flex-col">
                        <span class="font-semibold text-sm text-slate-700">Öffentlich sichtbar</span>
                        <span class="text-[10px] text-slate-500">Für alle Teammitglieder</span>
                      </div>
                      <ToggleSwitch v-model="state.publicVisible" />
                    </div>

                    <div class="flex items-center justify-between px-1">
                      <div class="flex flex-col">
                        <span class="font-semibold text-sm text-slate-700">Benachrichtigungen</span>
                        <span class="text-[10px] text-slate-500">Bei Statusänderungen</span>
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
            <Button label="Weiter" @click="state.activeTab = state.activeTab === '1' ? '2' : state.activeTab === '2' ? '3' : '3'" />
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import ToggleSwitch from 'primevue/toggleswitch'

const state = reactive({
  visible: true,
  activeTab: '1',
  projectName: '',
  category: 'entwicklung',
  owner: 'max-mustmann',
  publicVisible: true,
  notifications: false
})

const categories = [
  { label: 'Entwicklung', value: 'entwicklung' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' }
]

const owners = [
  { label: 'Max Mustmann', value: 'max-mustmann' },
  { label: 'Anna Schmidt', value: 'anna-schmidt' }
]
</script>