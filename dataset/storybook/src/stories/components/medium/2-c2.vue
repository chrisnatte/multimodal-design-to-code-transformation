<template>
  <div class="min-h-screen bg-gray-100 flex justify-center items-start p-8">
    <div class="w-full max-w-3xl flex flex-col gap-6">
      <Tabs v-model:value="state.activeTab">
        <TabList>
          <Tab value="profile">
            <span class="flex items-center gap-2">
              <i class="pi pi-user-edit text-sm"></i>
              <span class="font-semibold">Profil &amp; Konto</span>
            </span>
          </Tab>
          <Tab value="security">
            <span class="flex items-center gap-2">
              <i class="pi pi-shield text-sm"></i>
              <span class="font-semibold">Sicherheit &amp; Präferenzen</span>
            </span>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="profile">
            <div class="flex flex-col gap-6 max-w-sm pt-2">
              <div class="relative w-fit">
                <Avatar :label="state.avatarLabel" size="xlarge" shape="square" />
                <Tag value="Edit" class="absolute -top-2 left-10" rounded />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-xl text-slate-600">Benutzername</label>
                <InputText v-model="state.username" placeholder="Benutzername eingeben" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <Textarea
                  v-model="state.about"
                  placeholder="Informationen über dich....."
                  rows="4"
                  class="w-full"
                />
              </div>

              <div class="flex items-center gap-3">
                <ToggleSwitch v-model="state.publicVisible" />
                <span class="text-2xl text-slate-600">Öffentlich sichtbar</span>
              </div>

              <div>
                <Button label="Speichern" class="px-4" />
              </div>
            </div>
          </TabPanel>
          <TabPanel value="security">
            <div class="py-4 text-slate-500">Sicherheitseinstellungen</div>
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
import Tag from 'primevue/tag'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'

const state = reactive({
  activeTab: 'profile',
  avatarLabel: 'P',
  username: '',
  about: '',
  publicVisible: false
})
</script>