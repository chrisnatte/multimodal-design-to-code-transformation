<template>
  <div class="w-full max-w-xl p-6">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="profile">
          <i class="pi pi-user-edit mr-2"></i>
          <span>Profil &amp; Konto</span>
        </Tab>
        <Tab value="security">
          <i class="pi pi-shield mr-2"></i>
          <span>Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="profile">
          <div class="flex w-64 flex-col gap-4 pt-2">
            <div class="relative h-16 w-16">
              <Avatar label="P" class="h-14 w-14 !bg-slate-200 !text-2xl !text-slate-700" />
              <Button
                label="Edit"
                size="small"
                severity="primary"
                class="absolute -right-1 -top-1 !px-2 !py-1 !text-xs"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="username" class="text-sm text-slate-700">Benutzername</label>
              <InputText
                id="username"
                v-model="username"
                placeholder="Benutzername eingeben"
                class="w-full"
              />
            </div>

            <Textarea
              v-model="about"
              placeholder="Informationen über dich...."
              rows="4"
              class="w-full resize-none"
            />

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="isPublic" input-id="public-profile" />
              <label for="public-profile" class="text-sm text-slate-700">Öffentlich sichtbar</label>
            </div>

            <Button label="Speichern" severity="primary" class="w-fit" />
          </div>
        </TabPanel>

        <TabPanel value="security"></TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Tabs from 'primevue/tabs'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const activeTab = ref('profile')
const username = ref('')
const about = ref('')
const isPublic = ref(false)
</script>