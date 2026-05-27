<template>
  <div class="flex flex-col w-full">
    <Tabs v-model:value="state.activeTab">
      <TabList class="flex">
        <Tab value="0" as="div" class="flex items-center gap-2 px-4 py-3.5 font-bold text-sm">
          <i class="pi pi-user-edit"></i>
          <span>Profil &amp; Konto</span>
        </Tab>
        <Tab value="1" as="div" class="flex items-center gap-2 px-4 py-3.5 font-bold text-sm">
          <i class="pi pi-shield"></i>
          <span>Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels class="px-4 py-3">
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex flex-col gap-2">
              <label class="text-sm">Passwort</label>
              <Password v-model="state.password" :feedback="true" promptLabel="Passwort wählen" weakLabel="Niedrig" mediumLabel="Medium" strongLabel="Hoch" toggleMask />
              <div class="flex flex-col gap-1 text-sm">
                <span>Ein Kleinbuchstabe</span>
                <span>Ein Großbuchstabe</span>
                <span>Eine Zahl</span>
                <span>Acht Zeichen</span>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="state.twoFactor" />
              <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm">Sitzungsdauer (Minuten)</label>
              <InputNumber v-model="state.sessionDuration" />
              <Slider v-model="state.sessionDuration" :min="0" :max="120" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="state.securityLevel" inputId="level-low" value="Niedrig" />
                  <label for="level-low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="state.securityLevel" inputId="level-medium" value="Mittel" />
                  <label for="level-medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="state.securityLevel" inputId="level-high" value="Hoch" />
                  <label for="level-high" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" disabled />
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div class="py-3">
            <span class="text-sm">Sicherheit &amp; Präferenzen</span>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Password from 'primevue/password';
import ToggleSwitch from 'primevue/toggleswitch';
import InputNumber from 'primevue/inputnumber';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const state = reactive({
  activeTab: '0',
  password: '********',
  twoFactor: false,
  sessionDuration: 30,
  securityLevel: 'Hoch'
});
</script>