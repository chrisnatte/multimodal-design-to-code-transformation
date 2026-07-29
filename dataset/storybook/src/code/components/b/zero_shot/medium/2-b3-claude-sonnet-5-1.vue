<template>
  <div class="p-6 bg-white">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">
          <i class="pi pi-user-edit mr-2"></i>
          <span>Profil & Konto</span>
        </Tab>
        <Tab value="1">
          <i class="pi pi-shield mr-2"></i>
          <span>Sicherheit & Präferenzen</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <p class="m-0">Profil & Konto Inhalte</p>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <Password
              v-model="password"
              label="Passwort"
              toggleMask
              class="w-56"
              inputClass="w-56"
              promptLabel="Passwort wählen"
              weakLabel="Niedrig"
              mediumLabel="Medium"
              strongLabel="Hoch"
            >
              <template #header>
                <span class="font-semibold text-sm">Passwort wählen</span>
              </template>
              <template #footer>
                <Divider />
                <ul class="pl-4 my-0 text-sm">
                  <li>Ein Kleinbuchstabe</li>
                  <li>Ein Großbuchstabe</li>
                  <li>Eine Zahl</li>
                  <li>Acht Zeichen</li>
                </ul>
              </template>
            </Password>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorEnabled" />
              <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2 w-56">
              <label class="text-sm">Sitzungsdauer (Minuten)</label>
              <Slider v-model="sessionDuration" :min="0" :max="120" />
              <span class="text-sm">{{ sessionDuration }}</span>
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="niedrig" inputId="sec-low" />
                  <label for="sec-low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="mittel" inputId="sec-medium" />
                  <label for="sec-medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="hoch" inputId="sec-high" />
                  <label for="sec-high" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" severity="primary" disabled />
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
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import ToggleSwitch from 'primevue/toggleswitch';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const activeTab = ref('0');
const password = ref('');
const twoFactorEnabled = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('hoch');
</script>