<template>
  <div class="p-6 bg-white max-w-lg">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">
          <div class="flex items-center gap-2 whitespace-nowrap">
            <i class="pi pi-user-edit text-emerald-500"></i>
            <span class="font-bold text-emerald-600">Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1">
          <div class="flex items-center gap-2 whitespace-nowrap">
            <i class="pi pi-shield text-slate-400"></i>
            <span class="font-bold text-slate-500">Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      <TabPanels class="px-4 py-3">
        <TabPanel value="0">
          <div class="flex flex-col gap-5">
            <div class="relative inline-flex self-start">
              <Avatar label="P" size="xlarge" class="bg-slate-200 text-slate-700 text-2xl font-medium" />
              <Badge value="Edit" severity="success" class="absolute -top-1 -right-2 text-xs rounded-md px-2 py-0.5" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="username" class="text-sm font-medium text-slate-700">Benutzername</label>
              <InputText id="username" v-model="username" placeholder="Benutzername eingeben" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <Textarea id="bio" v-model="bio" placeholder="Informationen über dich...." rows="4" class="w-full resize-none" />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="publicVisible" inputId="public-visible" />
              <label for="public-visible" class="text-slate-700">Öffentlich sichtbar</label>
            </div>

            <div>
              <Button label="Speichern" severity="success" />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-2">
              <label for="password" class="text-sm font-medium text-slate-700">Passwort</label>
              <Password id="password" v-model="password" toggleMask showStrengthMeter promptLabel="Passwort wählen" weakLabel="Schwach" mediumLabel="Medium" strongLabel="Stark" class="w-full" inputClass="w-full" />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactor" inputId="two-factor" />
              <label for="two-factor" class="text-slate-700">Zwei-Faktor-Authentifizierung</label>
            </div>

            <div class="flex flex-col gap-2">
              <label for="session-duration" class="text-sm font-medium text-slate-700">Sitzungsdauer (Minuten)</label>
              <InputText :modelValue="sessionDuration" @update:modelValue="val => sessionDuration = Number(val)" type="number" class="w-full" />
              <Slider v-model="sessionDuration" class="w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm font-medium text-slate-700">Sicherheitsstufe</span>
              <div class="flex gap-6">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="Niedrig" inputId="sec-low" />
                  <label for="sec-low" class="text-slate-700 cursor-pointer">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="Mittel" inputId="sec-medium" />
                  <label for="sec-medium" class="text-slate-700 cursor-pointer">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="Hoch" inputId="sec-high" />
                  <label for="sec-high" class="text-slate-700 cursor-pointer">Hoch</label>
                </div>
              </div>
            </div>

            <div>
              <Button label="Speichern" severity="success" disabled />
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Password from 'primevue/password';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const activeTab = ref('0');
const username = ref('');
const bio = ref('');
const publicVisible = ref(false);
const password = ref('');
const twoFactor = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('Hoch');
</script>