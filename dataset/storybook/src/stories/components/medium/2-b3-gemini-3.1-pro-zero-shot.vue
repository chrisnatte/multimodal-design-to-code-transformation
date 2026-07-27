<template>
  <div class="w-[512px] flex flex-col bg-white">
    <Tabs v-model:value="activeTab">
      <TabList class="border-b border-[#e2e8f0]">
        <Tab value="0" as="div" class="flex items-center gap-[7px] px-[15.75px] py-[14px] cursor-pointer">
          <i class="pi pi-user-edit text-sm"></i>
          <span class="font-bold text-sm font-['Inter']">Profil & Konto</span>
        </Tab>
        <Tab value="1" as="div" class="flex items-center gap-[7px] px-[15.75px] py-[14px] cursor-pointer">
          <i class="pi pi-shield text-sm"></i>
          <span class="font-bold text-sm font-['Inter']">Sicherheit & Präferenzen</span>
        </Tab>
      </TabList>
      
      <TabPanels class="px-[15.75px] pt-[12.25px] pb-[15.75px]">
        <TabPanel value="0">
          <!-- Empty panel for Profil & Konto -->
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            
            <!-- Password Section -->
            <div class="flex flex-col gap-2">
              <label class="text-sm font-normal font-['Inter'] text-surface-700">Passwort</label>
              <Password 
                v-model="passwordValue" 
                toggleMask 
                promptLabel="Passwort wählen"
                weakLabel="Ein Kleinbuchstabe"
                mediumLabel="Medium"
                strongLabel="Stark"
                class="w-[216px]"
                inputClass="w-full"
              />
            </div>

            <!-- Two-Factor Authentication -->
            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactor" />
              <span class="text-sm font-normal font-['Inter']">Zwei-Faktor-Authentifizierung</span>
            </div>

            <!-- Session Duration -->
            <div class="flex flex-col gap-2 w-[216px]">
              <label class="text-sm font-normal font-['Inter'] text-surface-700">Sitzungsdauer (Minuten)</label>
              <InputText v-model.number="sessionDuration" class="w-full" />
              <Slider v-model="sessionDuration" class="w-full mt-2" />
            </div>

            <!-- Security Level -->
            <div class="flex flex-col gap-3">
              <span class="text-sm font-normal font-['Inter']">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="low" value="Niedrig" />
                  <label for="low" class="text-sm font-normal font-['Inter']">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="medium" value="Mittel" />
                  <label for="medium" class="text-sm font-normal font-['Inter']">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="high" value="Hoch" />
                  <label for="high" class="text-sm font-normal font-['Inter']">Hoch</label>
                </div>
              </div>
            </div>

            <!-- Save Button -->
            <Button label="Speichern" disabled class="w-[91px] mt-2" />
            
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

const activeTab = ref('1');
const passwordValue = ref('********');
const twoFactor = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('Hoch');
</script>