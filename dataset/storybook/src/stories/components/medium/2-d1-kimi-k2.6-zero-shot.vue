<template>
  <div class="w-full max-w-[512px]">
    <Tabs v-model:value="activeTab">
      <TabList class="border-b border-slate-200">
        <Tab value="0">
          <div class="flex items-center gap-2 px-4 py-3.5">
            <i class="pi pi-user-edit text-emerald-500"></i>
            <span class="text-sm font-bold text-emerald-500">Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1">
          <div class="flex items-center gap-2 px-4 py-3.5">
            <i class="pi pi-shield text-slate-500"></i>
            <span class="text-sm font-bold text-slate-500">Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      <TabPanels class="p-4 pt-3">
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <div class="relative w-fit">
              <Avatar label="P" shape="square" class="!bg-slate-200 !text-slate-700 w-16 h-16 text-2xl rounded-lg" />
              <Tag value="Edit" severity="success" class="absolute -top-1 -right-1 !text-xs !px-2 !py-0.5" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700 font-medium">Benutzername</label>
              <InputText v-model="username" placeholder="Benutzername eingeben" variant="filled" class="w-full" />
            </div>
            <Textarea v-model="info" placeholder="Informationen über dich...." rows="4" variant="filled" class="w-full resize-none" />
            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="isPublic" />
              <span class="text-sm text-slate-700">Öffentlich sichtbar</span>
            </div>
            <Button label="Speichern" class="w-fit" />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700 font-medium">Passwort</label>
              <Password v-model="password" toggleMask :feedback="true" promptLabel="Passwort wählen" weakLabel="Schwach" mediumLabel="Medium" strongLabel="Stark" inputClass="w-full" />
              <div class="flex flex-col gap-1 mt-1">
                <span class="text-sm text-slate-600">Ein Kleinbuchstabe</span>
                <span class="text-sm text-slate-600">Ein Großbuchstabe</span>
                <span class="text-sm text-slate-600">Eine Zahl</span>
                <span class="text-sm text-slate-600">Acht Zeichen</span>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="is2FAEnabled" />
              <span class="text-sm text-slate-700">Zwei-Faktor-Authentifizierung</span>
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700 font-medium">Sitzungsdauer (Minuten)</label>
              <InputText v-model.number="sessionDuration" variant="filled" class="w-full" />
              <Slider v-model="sessionDuration" class="w-full" />
            </div>
            <div class="flex flex-col gap-3">
              <label class="text-sm text-slate-700 font-medium">Sicherheitsstufe</label>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="Niedrig" inputId="niedrig" />
                  <label for="niedrig" class="text-sm text-slate-700 cursor-pointer">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="Mittel" inputId="mittel" />
                  <label for="mittel" class="text-sm text-slate-700 cursor-pointer">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="Hoch" inputId="hoch" />
                  <label for="hoch" class="text-sm text-slate-700 cursor-pointer">Hoch</label>
                </div>
              </div>
            </div>
            <Button label="Speichern" class="w-fit" disabled />
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
import Tag from 'primevue/tag'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'
import Password from 'primevue/password'
import Slider from 'primevue/slider'
import RadioButton from 'primevue/radiobutton'

const activeTab = ref('0')
const username = ref('')
const info = ref('')
const isPublic = ref(false)
const password = ref('')
const is2FAEnabled = ref(false)
const sessionDuration = ref(30)
const securityLevel = ref('Hoch')
</script>