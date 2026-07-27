<template>
  <div class="w-[512px]">
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
          <p class="m-0">Profil & Konto Inhalt</p>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <Password
              v-model="password"
              label="Passwort"
              toggleMask
              class="w-[216px]"
              inputClass="w-full"
            />

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorAuth" />
              <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2 w-[216px]">
              <label class="text-sm">Sitzungsdauer (Minuten)</label>
              <InputText v-model="sessionDuration" class="w-full" />
              <Slider v-model="sessionDurationSlider" class="w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="low" name="securityLevel" value="low" />
                  <label for="low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="medium" name="securityLevel" value="medium" />
                  <label for="medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="high" name="securityLevel" value="high" />
                  <label for="high" class="text-sm">Hoch</label>
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
import ToggleSwitch from 'primevue/toggleswitch';
import InputText from 'primevue/inputtext';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const activeTab = ref('0');
const password = ref('');
const twoFactorAuth = ref(false);
const sessionDuration = ref('30');
const sessionDurationSlider = ref(30);
const securityLevel = ref('high');
</script>