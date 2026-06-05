<template>
  <div class="w-[560px] bg-white p-6 font-sans">
    <Tabs value="0" class="w-full">
      <TabList class="border-b border-slate-200">
        <Tab value="0" class="!px-4 !py-3">
          <div class="flex items-center gap-2 font-bold text-emerald-500">
            <i class="pi pi-user-edit text-sm"></i>
            <span>Profil &amp; Konto</span>
          </div>
        </Tab>
        <Tab value="1" class="!px-4 !py-3">
          <div class="flex items-center gap-2 font-bold text-slate-500">
            <i class="pi pi-shield text-sm"></i>
            <span>Sicherheit &amp; Präferenzen</span>
          </div>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-5 px-4 pt-3 pb-4">
            <div class="relative w-14 h-14 rounded-md bg-slate-200 flex items-center justify-center text-4xl text-slate-600">
              <span class="text-[42px] leading-none">P</span>
              <Tag value="Edit" class="!absolute -top-2 -right-3 !bg-emerald-500 !text-white !text-xs !px-2 !py-0.5" />
            </div>

            <div class="flex flex-col gap-2 w-[270px]">
              <label class="text-[30f] text-slate-700">Benutzername</label>
              <InputText v-model="state.username" placeholder="Benutzername eingeben" class="w-full" />
            </div>

            <Textarea v-model="state.bio" rows="4" placeholder="Informationen über dich....." class="w-[270px]" />

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="state.publicVisible" />
              <label class="text-slate-700">Öffentlich sichtbar</label>
            </div>

            <Button label="Speichern" class="w-fit !bg-emerald-400 !border-emerald-400" />
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div class="p-4 text-slate-500"> </div>
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
  username: '',
  bio: '',
  publicVisible: false
})
</script>