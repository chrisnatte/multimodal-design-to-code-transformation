<template>
  <div class="p-8">
    <Tabs value="0">
      <TabList>
        <Tab value="0">
          <span class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span class="font-semibold">Profil & Konto</span>
          </span>
        </Tab>
        <Tab value="1">
          <span class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span class="font-semibold">Sicherheit & Präferenzen</span>
          </span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-5 pt-6">
            <div class="relative w-fit">
              <Avatar label="P" class="bg-slate-200 text-slate-700 w-16 h-16 text-2xl" />
              <Button label="Edit" severity="success" size="small" rounded class="absolute -top-1 -right-2 text-xs font-semibold px-2 py-0.5" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="username" class="text-sm font-medium text-gray-700">Benutzername</label>
              <InputText id="username" v-model="username" placeholder="Benutzername eingeben" class="w-80" />
            </div>

            <Textarea v-model="info" placeholder="Informationen über dich...." rows="4" class="w-80 resize-none" />

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="isPublic" inputId="public" />
              <label for="public" class="text-sm text-gray-700 cursor-pointer">Öffentlich sichtbar</label>
            </div>

            <Button label="Speichern" severity="success" class="w-fit" />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="pt-6 text-gray-500">
            Sicherheit & Präferenzen
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const username = ref('')
const info = ref('')
const isPublic = ref(false)
</script>