<template>
  <div class="bg-white p-6 flex flex-col w-[560px]">
    <Tabs v-model:value="activeTab" class="flex flex-col w-full">
      <TabList class="flex w-full border-b border-slate-200">
        <Tab value="0" as="div" class="flex items-center gap-[7px] px-[15.75px] py-[14px] border-b-2 border-emerald-500 text-black cursor-pointer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span class="font-bold text-[14px] font-['Inter']">Profil & Konto</span>
        </Tab>
        <Tab value="1" as="div" class="flex items-center gap-[7px] px-[15.75px] py-[14px] text-black cursor-pointer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <span class="font-bold text-[14px] font-['Inter']">Sicherheit & Präferenzen</span>
        </Tab>
      </TabList>
      
      <TabPanels class="bg-white pt-[12.25px] pb-[15.75px] px-[15.75px]">
        <TabPanel value="0" class="flex flex-col gap-5 py-3">
          
          <!-- Password -->
          <div class="flex flex-col w-[216px]">
            <label class="text-[14px] font-['Inter'] mb-1">Passwort</label>
            <Password 
              v-model="password" 
              toggleMask 
              :feedback="true" 
              class="w-full" 
              inputClass="w-full bg-slate-50 border border-emerald-500 rounded-md px-[10.5px] py-[7px] text-[14px] font-['Inter']" 
            />
          </div>

          <!-- 2FA -->
          <div class="flex items-center gap-3">
            <ToggleSwitch v-model="twoFactor" />
            <span class="text-[14px] font-['Inter']">Zwei-Faktor-Authentifizierung</span>
          </div>

          <!-- Session Duration -->
          <div class="flex flex-col w-[216px]">
            <label class="text-[14px] font-['Inter'] mb-1">Sitzungsdauer (Minuten)</label>
            <div class="flex flex-col gap-2">
              <div class="bg-slate-50 border border-slate-300 rounded-md px-[10.5px] py-[7px] text-[14px] font-['Inter']">
                {{ sessionDuration }}
              </div>
              <Slider v-model="sessionDuration" :min="0" :max="120" class="w-full" />
            </div>
          </div>

          <!-- Security Level -->
          <div class="flex flex-col gap-3">
            <span class="text-[14px] font-['Inter']">Sicherheitsstufe</span>
            <div class="flex items-center gap-5">
              <div class="flex items-center gap-2">
                <RadioButton v-model="securityLevel" inputId="sec-low" name="security" value="Niedrig" />
                <label for="sec-low" class="text-[14px] font-['Inter'] cursor-pointer">Niedrig</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="securityLevel" inputId="sec-med" name="security" value="Mittel" />
                <label for="sec-med" class="text-[14px] font-['Inter'] cursor-pointer">Mittel</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="securityLevel" inputId="sec-high" name="security" value="Hoch" />
                <label for="sec-high" class="text-[14px] font-['Inter'] cursor-pointer">Hoch</label>
              </div>
            </div>
          </div>

          <!-- Save Button -->
          <Button label="Speichern" disabled class="w-[91px] mt-2" />

        </TabPanel>
        <TabPanel value="1">
          <!-- Empty panel for Sicherheit & Präferenzen -->
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

const activeTab = ref('0');
const password = ref('********');
const twoFactor = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('Hoch');
</script>