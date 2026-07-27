<template>
  <div class="flex flex-col w-[512px]">
    <Tabs value="0">
      <TabList>
        <Tab value="0" as="div" class="flex items-center gap-2 px-4 py-3">
          <span class="text-sm font-bold">Profil & Konto</span>
        </Tab>
        <Tab value="1" as="div" class="flex items-center gap-2 px-4 py-3">
          <span class="text-sm font-bold">Sicherheit & Präferenzen</span>
        </Tab>
      </TabList>
      <TabPanels class="p-4">
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3 w-full">
            <div class="flex flex-col gap-2 w-full">
              <label class="text-sm">Passwort</label>
              <Password v-model="password" toggleMask :feedback="false" class="w-full" />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactor" />
              <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2 w-full">
              <label class="text-sm">Sitzungsdauer (Minuten)</label>
              <InputText v-model.number="sessionDuration" class="w-full" />
              <Slider v-model="sessionDuration" class="w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="Niedrig" />
                  <label class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="Mittel" />
                  <label class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" value="Hoch" />
                  <label class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" disabled />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="p-4" />
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
import InputText from 'primevue/inputtext';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const password = ref('');
const twoFactor = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('Hoch');
</script>