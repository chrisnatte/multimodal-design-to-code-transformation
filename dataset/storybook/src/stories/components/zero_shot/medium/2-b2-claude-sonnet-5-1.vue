<template>
  <div class="p-6 bg-white flex flex-col">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">
          <i class="pi pi-user-edit mr-2"></i>
          Profil & Konto
        </Tab>
        <Tab value="1">
          <i class="pi pi-shield mr-2"></i>
          Sicherheit & Präferenzen
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <p class="m-0 text-gray-500">Profil & Konto Inhalte</p>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <div class="w-56">
              <Password
                v-model="password"
                toggleMask
                :feedback="true"
                inputClass="w-full"
                class="w-full"
              >
                <template #header>
                  <span class="font-semibold text-sm">Passwort wählen</span>
                </template>
                <template #footer>
                  <Divider />
                  <ul class="pl-4 m-0 text-sm">
                    <li>Ein Kleinbuchstabe</li>
                    <li>Ein Großbuchstabe</li>
                    <li>Eine Zahl</li>
                    <li>Acht Zeichen</li>
                  </ul>
                </template>
              </Password>
              <label class="block text-sm mt-1">Passwort</label>
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorEnabled" />
              <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="w-56 flex flex-col gap-2">
              <label class="text-sm">Sitzungsdauer (Minuten)</label>
              <InputText v-model="sessionDuration" class="w-full" />
              <Slider v-model="sessionDurationValue" class="w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <label class="text-sm">Sicherheitsstufe</label>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="niedrig" inputId="security-low" />
                  <label for="security-low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="mittel" inputId="security-medium" />
                  <label for="security-medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="hoch" inputId="security-high" />
                  <label for="security-high" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" disabled />
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
import InputText from 'primevue/inputtext';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const activeTab = ref('0');
const password = ref('');
const twoFactorEnabled = ref(false);
const sessionDuration = ref('30');
const sessionDurationValue = ref(30);
const securityLevel = ref('hoch');
</script>