<template>
  <div class="flex flex-col w-[512px]">
    <Tabs value="0">
      <TabList>
        <Tab value="0" as="div" class="flex items-center gap-2">
          <i class="pi pi-user-edit"></i>
          <span class="font-bold whitespace-nowrap">Profil & Konto</span>
        </Tab>
        <Tab value="1" as="div" class="flex items-center gap-2">
          <i class="pi pi-shield"></i>
          <span class="font-bold whitespace-nowrap">Sicherheit & Präferenzen</span>
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
              :feedback="true"
              inputClass="w-full"
              class="w-[216px]"
            />

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorEnabled" />
              <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2 w-[216px]">
              <label class="text-sm">Sitzungsdauer (Minuten)</label>
              <Slider v-model="sessionDuration" :min="0" :max="120" />
              <span class="text-sm">{{ sessionDuration }}</span>
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="niedrig" inputId="securityLow" />
                  <label for="securityLow" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="mittel" inputId="securityMedium" />
                  <label for="securityMedium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="hoch" inputId="securityHigh" />
                  <label for="securityHigh" class="text-sm">Hoch</label>
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
import ToggleSwitch from 'primevue/toggleswitch';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const password = ref('');
const twoFactorEnabled = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('hoch');
</script>