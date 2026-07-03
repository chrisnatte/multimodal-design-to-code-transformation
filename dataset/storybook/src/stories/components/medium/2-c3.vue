<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-[540px]">
      <Tabs v-model:value="state.activeTab" class="w-full">
        <TabList>
          <Tab value="profile" class="flex items-center gap-2">
            <i class="pi pi-user text-sm"></i>
            <span class="font-semibold">Profil &amp; Konto</span>
          </Tab>
          <Tab value="security" class="flex items-center gap-2">
            <i class="pi pi-shield text-sm"></i>
            <span class="font-semibold">Sicherheit &amp; Präferenzen</span>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="profile">
            <div class="flex flex-col gap-5 pt-4 max-w-[280px]">
              <div class="relative w-fit">
                <Avatar label="P" shape="square" size="xlarge" class="!bg-slate-200 !text-slate-700" />
                <Button
                  label="Edit"
                  size="small"
                  rounded
                  class="!absolute -top-3 -right-5 !px-3 !py-1 !text-xs"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label for="username" class="text-2 text-slate-700">Benutzername</label>
                <InputText
                  id="username"
                  v-model="state.username"
                  placeholder="Benutzername eingeben"
                  class="w-full"
                />
              </div>

              <InputTextarea
                v-model="state.about"
                rows="4"
                autoResize
                placeholder="Informationen über dich...."
                class="w-full"
              />

              <div class="flex items-center gap-3">
                <ToggleSwitch v-model="state.publicVisible" />
                <span class="text-slate-700">Öffentlich sichtbar</span>
              </div>

              <div>
                <Button label="Speichern" severity="success" />
              </div>
            </div>
          </TabPanel>

          <TabPanel value="security">
            <div class="pt-4 text-slate-500"> </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputTextarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const state = reactive({
  activeTab: 'profile',
  username: '',
  about: '',
  publicVisible: false
})
</script>