<template>
  <div class="w-[560px] p-6 bg-white">
    <Tabs v-model:value="state.activeTab" class="w-full">
      <TabList class="border-b border-slate-200">
        <Tab value="0" class="px-4 py-3">
          <div class="flex items-center gap-2 font-bold text-sm text-emerald-500">
            <i class="pi pi-user-edit text-sm"></i>
            <span>Profil &amp; Konto</span>
          </div>
        </Tab>
        <Tab value="1" class="px-4 py-3">
          <div class="flex items-center gap-2 font-bold text-sm text-slate-500">
            <i class="pi pi-shield text-sm"></i>
            <span>Sicherheit &amp; Präferenzen</span>
          </div>
        </Tab>
      </TabList>

      <TabPanels class="pt-3 px-4">
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3 max-w-[280px]">
            <div class="relative w-fit">
              <div class="w-14 h-14 rounded-md bg-slate-200 flex items-center justify-center text-4xl text-slate-600">P</div>
              <Tag value="Edit" class="absolute -top-3 left-11 !bg-emerald-500 !text-white !text-xs !px-2 !py-0.5" />
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-slate-700">Benutzername</label>
              <InputText v-model="state.username" placeholder="Benutzername eingeben" class="w-full" />
            </div>

            <Textarea v-model="state.about" rows="4" placeholder="Informationen über dich...." class="w-full" />

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="state.publicVisible" />
              <span class="text-slate-700">Öffentlich sichtbar</span>
            </div>

            <Button label="Speichern" class="w-fit" />
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div class="py-3 text-slate-500">Sicherheit &amp; Präferenzen</div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'
import Tag from 'primevue/tag'

const state = reactive({
  activeTab: '0',
  username: '',
  about: '',
  publicVisible: false
})
</script>