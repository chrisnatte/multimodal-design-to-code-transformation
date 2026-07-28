<template>
  <div class="w-full max-w-lg">
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
            <span class="font-semibold">Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      <TabPanels class="p-4">
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <div class="relative inline-flex self-start">
              <Avatar label="P" shape="square" class="bg-gray-200 text-gray-700 w-16 h-16 text-2xl rounded-lg" />
              <Tag value="Edit" severity="success" class="absolute -top-2 -right-2 text-xs" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="username" class="text-sm font-medium">Benutzername</label>
              <InputText id="username" v-model="username" placeholder="Benutzername eingeben" class="w-full" />
            </div>
            <div class="flex flex-col gap-2">
              <Textarea v-model="bio" placeholder="Informationen über dich...." rows="4" class="w-full resize-none" />
            </div>
            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="isPublic" inputId="public" />
              <label for="public" class="text-sm">Öffentlich sichtbar</label>
            </div>
            <Button label="Speichern" class="self-start" />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex flex-col gap-2">
              <label for="password" class="text-sm font-medium">Passwort</label>
              <Password id="password" v-model="password" toggleMask :feedback="false" class="w-full" />
            </div>
            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactor" inputId="2fa" />
              <label for="2fa" class="text-sm">Zwei-Faktor-Authentifizierung</label>
            </div>
            <div class="flex flex-col gap-2">
              <label for="session" class="text-sm font-medium">Sitzungsdauer (Minuten)</label>
              <InputText id="session" v-model.number="sessionDuration" class="w-full" />
              <Slider v-model="sessionDuration" class="w-full" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-sm font-medium">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="low" value="Niedrig" />
                  <label for="low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="medium" value="Mittel" />
                  <label for="medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="high" value="Hoch" />
                  <label for="high" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>
            <Button label="Speichern" disabled class="self-start" />
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
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Password from 'primevue/password';
import ToggleSwitch from 'primevue/toggleswitch';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const username = ref('');
const bio = ref('');
const isPublic = ref(false);
const password = ref('');
const twoFactor = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('Hoch');
</script>