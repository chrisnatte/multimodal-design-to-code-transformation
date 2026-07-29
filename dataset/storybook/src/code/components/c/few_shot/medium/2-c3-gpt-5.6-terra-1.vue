<template>
  <div class="w-full max-w-[560px] p-6">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="profile" class="gap-2 text-sm font-semibold">
          <i class="pi pi-user-edit text-sm"></i>
          <span>Profil &amp; Konto</span>
        </Tab>
        <Tab value="security" class="gap-2 text-sm font-semibold">
          <i class="pi pi-shield text-sm"></i>
          <span>Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="profile" class="!px-4 !py-6">
          <div class="flex w-64 flex-col gap-4">
            <div class="relative h-14 w-14">
              <Avatar label="P" shape="square" class="!h-14 !w-14 !bg-slate-200 !text-2xl !text-slate-700" />
              <Badge value="Edit" severity="success" class="absolute -right-6 -top-3 !text-xs" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="username" class="text-sm text-slate-700">Benutzername</label>
              <InputText
                id="username"
                v-model="username"
                placeholder="Benutzername eingeben"
                class="w-64 !text-sm"
              />
            </div>

            <Textarea
              v-model="profileInfo"
              placeholder="Informationen über dich...."
              rows="4"
              class="h-[100px] w-64 resize-none !text-sm"
            />

            <div class="flex items-center gap-2">
              <ToggleSwitch v-model="isPublic" input-id="public-profile" />
              <label for="public-profile" class="text-sm text-slate-700">Öffentlich sichtbar</label>
            </div>

            <Button label="Speichern" severity="success" size="small" class="w-fit" />
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
import Badge from 'primevue/badge'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const activeTab = ref('profile')
const username = ref('')
const profileInfo = ref('')
const isPublic = ref(false)
</script>