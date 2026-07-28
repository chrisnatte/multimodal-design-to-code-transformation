<template>
  <div class="w-[512px] bg-white">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">
          <span class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span class="font-bold">Profil & Konto</span>
          </span>
        </Tab>
        <Tab value="1">
          <span class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span class="font-bold">Sicherheit & Präferenzen</span>
          </span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <div class="relative w-fit">
              <Avatar label="P" class="bg-slate-100 text-slate-500" size="large" shape="square" />
              <Badge value="Edit" severity="success" class="absolute -top-2 -right-4 text-xs"></Badge>
            </div>

            <div class="flex flex-col gap-2">
              <label for="username" class="text-sm">Benutzername</label>
              <InputText
                id="username"
                v-model="username"
                placeholder="Benutzername eingeben"
                class="w-full"
              />
            </div>

            <div class="flex flex-col gap-2">
              <Textarea
                v-model="bio"
                placeholder="Informationen über dich...."
                rows="4"
                class="w-full"
              />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="publicVisible" />
              <span class="text-sm">Öffentlich sichtbar</span>
            </div>

            <Button label="Speichern" severity="success" class="w-fit" />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <Password
              v-model="password"
              toggleMask
              placeholder="Passwort"
              class="w-full"
              inputClass="w-full"
            />

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactor" />
              <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm">Sitzungsdauer (Minuten)</label>
              <Slider v-model="sessionDuration" class="w-full" />
              <span class="text-sm">{{ sessionDuration }}</span>
            </div>

            <div class="flex flex-col gap-3">
              <label class="text-sm">Sicherheitsstufe</label>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="low" value="low" name="security" />
                  <label for="low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="medium" value="medium" name="security" />
                  <label for="medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="high" value="high" name="security" />
                  <label for="high" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" severity="success" class="w-fit" disabled />
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
import Badge from 'primevue/badge'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'
import Password from 'primevue/password'
import Slider from 'primevue/slider'
import RadioButton from 'primevue/radiobutton'

const activeTab = ref('0')
const username = ref('')
const bio = ref('')
const publicVisible = ref(false)
const password = ref('')
const twoFactor = ref(false)
const sessionDuration = ref(30)
const securityLevel = ref('high')
</script>