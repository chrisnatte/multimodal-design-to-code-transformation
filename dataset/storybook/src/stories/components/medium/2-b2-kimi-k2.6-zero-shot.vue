<template>
  <div class="flex flex-col w-[512px] bg-white">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">
          <span class="flex items-center gap-2">
            <i class="pi pi-user-edit text-sm"></i>
            <span class="font-bold text-sm">Profil & Konto</span>
          </span>
        </Tab>
        <Tab value="1">
          <span class="flex items-center gap-2">
            <i class="pi pi-shield text-sm"></i>
            <span class="font-bold text-sm">Sicherheit & Präferenzen</span>
          </span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-5 p-4 py-3">
            <div class="flex flex-col gap-2">
              <label class="text-sm">Passwort</label>
              <Password v-model="password" toggleMask :feedback="true" class="w-full" />
              <div class="flex flex-col gap-2 mt-2">
                <span class="text-sm font-semibold">Passwort wählen</span>
                <div class="flex gap-1 h-2.5">
                  <div class="flex-1 bg-yellow-500 rounded-l-md"></div>
                  <div class="flex-1 bg-yellow-500"></div>
                  <div class="flex-1 bg-gray-200 rounded-r-md"></div>
                </div>
                <span class="text-sm">Medium</span>
                <Divider />
                <ul class="flex flex-col gap-1 text-sm">
                  <li>Ein Kleinbuchstabe</li>
                  <li>Ein Großbuchstabe</li>
                  <li>Eine Zahl</li>
                  <li>Acht Zeichen</li>
                </ul>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactor" />
              <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm">Sitzungsdauer (Minuten)</label>
              <InputText v-model="sessionDuration" variant="filled" class="w-full" />
              <Slider v-model="sessionDuration" class="w-full" />
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" name="security" value="Niedrig" />
                  <label class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" name="security" value="Mittel" />
                  <label class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" name="security" value="Hoch" />
                  <label class="text-sm">Hoch</label>
                </div>
              </div>
            </div>
            <Button label="Speichern" disabled />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 p-4 py-3"></div>
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
import Password from 'primevue/password';
import ToggleSwitch from 'primevue/toggleswitch';
import Slider from 'primevue/slider';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

const activeTab = ref('0');
const password = ref('');
const twoFactor = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('Hoch');
</script>