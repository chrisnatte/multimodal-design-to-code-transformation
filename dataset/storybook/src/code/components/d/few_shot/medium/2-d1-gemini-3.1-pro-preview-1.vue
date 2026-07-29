<template>
  <div class="w-[560px] bg-white p-6">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">
          <div class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span class="font-bold">Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1">
          <div class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span class="font-bold">Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      
      <TabPanels>
        <!-- Tab 1: Profil & Konto (From Screenshot) -->
        <TabPanel value="0">
          <div class="flex flex-col gap-6 pt-4">
            <div class="relative mt-2 w-fit">
              <Avatar 
                label="P" 
                size="xlarge" 
                class="!h-16 !w-16 rounded-lg !bg-slate-100 !text-2xl !text-slate-700" 
              />
              <Badge 
                value="Edit" 
                severity="success" 
                class="absolute -right-4 -top-2" 
              />
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Benutzername</label>
              <InputText v-model="username" placeholder="Benutzername eingeben" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <Textarea v-model="info" placeholder="Informationen über dich...." rows="4" class="w-full" />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="isPublic" />
              <span class="text-sm text-slate-700">Öffentlich sichtbar</span>
            </div>

            <Button label="Speichern" severity="success" class="w-fit" />
          </div>
        </TabPanel>

        <!-- Tab 2: Sicherheit & Präferenzen (From JSON) -->
        <TabPanel value="1">
          <div class="flex flex-col gap-6 pt-4">
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Passwort</label>
              <Password 
                v-model="password" 
                toggleMask 
                :feedback="true" 
                promptLabel="Passwort wählen" 
                weakLabel="Niedrig" 
                mediumLabel="Medium" 
                strongLabel="Hoch" 
                input-class="w-full"
                class="w-full"
              />
            </div>
            
            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactor" />
              <span class="text-sm text-slate-700">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Sitzungsdauer (Minuten)</label>
              <InputText v-model.number="sessionDuration" class="w-full" />
              <Slider v-model="sessionDuration" class="mt-2" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm text-slate-700">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec1" value="Niedrig" />
                  <label for="sec1" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec2" value="Mittel" />
                  <label for="sec2" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec3" value="Hoch" />
                  <label for="sec3" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" severity="success" disabled class="w-fit" />
          </div>
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
import Password from 'primevue/password'
import Slider from 'primevue/slider'
import RadioButton from 'primevue/radiobutton'

const activeTab = ref('0')

// Tab 1 State
const username = ref('')
const info = ref('')
const isPublic = ref(false)

// Tab 2 State
const password = ref('')
const twoFactor = ref(false)
const sessionDuration = ref(30)
const securityLevel = ref('Hoch')
</script>