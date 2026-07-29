<template>
  <div class="flex flex-col w-full max-w-2xl p-6 bg-white">
    <Tabs value="0">
      <TabList>
        <Tab value="0">
          <div class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span class="font-semibold">Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1">
          <div class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span>Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      
      <TabPanels>
        <TabPanel value="0" class="pt-6">
          <div class="flex flex-col gap-6">
            
            <div class="relative w-fit mt-2">
              <Avatar label="P" size="xlarge" class="w-16 h-16 text-2xl bg-slate-100 text-slate-700 rounded-xl" />
              <Badge value="Edit" severity="success" class="absolute -top-2 -right-4" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="username" class="text-slate-700">Benutzername</label>
              <InputText id="username" v-model="username" placeholder="Benutzername eingeben" class="w-full max-w-md bg-slate-50" />
            </div>

            <div class="flex flex-col gap-2">
              <Textarea v-model="bio" placeholder="Informationen über dich...." rows="5" class="w-full max-w-md bg-slate-50" />
            </div>

            <div class="flex items-center gap-3 mt-2">
              <ToggleSwitch v-model="isPublic" inputId="public-switch" />
              <label for="public-switch" class="text-slate-700">Öffentlich sichtbar</label>
            </div>

            <div class="mt-4">
              <Button label="Speichern" severity="success" class="w-fit px-6" />
            </div>
            
          </div>
        </TabPanel>
        <TabPanel value="1">
          <!-- Empty panel for Sicherheit & Präferenzen -->
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'

const username = ref('')
const bio = ref('')
const isPublic = ref(false)
</script>