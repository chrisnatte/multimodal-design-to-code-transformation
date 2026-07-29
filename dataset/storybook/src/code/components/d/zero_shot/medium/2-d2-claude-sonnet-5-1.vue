<template>
  <div class="p-6 bg-white" style="width: 560px;">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0" class="flex items-center gap-2">
          <i class="pi pi-user-edit"></i>
          <span>Profil & Konto</span>
        </Tab>
        <Tab value="1" class="flex items-center gap-2">
          <i class="pi pi-shield"></i>
          <span>Sicherheit & Präferenzen</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <div class="relative w-fit">
              <Avatar label="P" shape="square" class="bg-slate-100 text-slate-500 w-16 h-16 text-xl" />
              <Badge value="Edit" severity="success" class="absolute -top-2 left-8"></Badge>
            </div>

            <div class="flex flex-col gap-2">
              <label for="username" class="text-sm">Benutzername</label>
              <InputText id="username" v-model="username" placeholder="Benutzername eingeben" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <Textarea v-model="bio" placeholder="Informationen über dich...." rows="4" class="w-full" />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="publicVisible" />
              <span class="text-sm">Öffentlich sichtbar</span>
            </div>

            <div>
              <Button label="Speichern" class="bg-emerald-500 border-emerald-500" />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex flex-col gap-2">
              <Password v-model="password" label="Passwort" toggleMask class="w-full" inputClass="w-full" />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactor" />
              <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm">Sitzungsdauer (Minuten)</label>
              <Slider v-model="sessionDuration" class="w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <label class="text-sm">Sicherheitsstufe</label>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="niedrig" inputId="sec-niedrig" />
                  <label for="sec-niedrig" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="mittel" inputId="sec-mittel" />
                  <label for="sec-mittel" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="hoch" inputId="sec-hoch" />
                  <label for="sec-hoch" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

            <div>
              <Button label="Speichern" class="bg-emerald-500 border-emerald-500" />
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
import Button from 'primevue/button';
import Password from 'primevue/password';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';

const activeTab = ref('0');
const username = ref('');
const bio = ref('');
const publicVisible = ref(false);
const password = ref('');
const twoFactor = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('hoch');
</script>