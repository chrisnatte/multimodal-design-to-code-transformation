<template>
  <div class="w-[512px] flex flex-col">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">
          <div class="flex items-center gap-[7px]">
            <i class="pi pi-user-edit"></i>
            <span class="font-bold text-sm">Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1">
          <div class="flex items-center gap-[7px]">
            <i class="pi pi-shield"></i>
            <span class="font-bold text-sm">Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      
      <TabPanels class="bg-white px-[15.75px] pb-[15.75px] pt-[12.25px]">
        <TabPanel value="0">
          <!-- Content for Profil & Konto -->
        </TabPanel>
        
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            
            <!-- Password -->
            <div class="flex flex-col gap-2">
              <label class="text-sm font-normal">Passwort</label>
              <Password 
                v-model="password" 
                toggleMask 
                placeholder="********" 
                fluid 
              />
            </div>

            <!-- Two-Factor Authentication -->
            <div class="flex flex-row items-center gap-3">
              <ToggleSwitch v-model="twoFactor" />
              <span class="text-sm font-normal">Zwei-Faktor-Authentifizierung</span>
            </div>

            <!-- Session Duration -->
            <div class="flex flex-col gap-2">
              <label class="text-sm font-normal">Sitzungsdauer (Minuten)</label>
              <InputText v-model.number="sessionDuration" />
              <Slider v-model="sessionDuration" class="mt-2" />
            </div>

            <!-- Security Level -->
            <div class="flex flex-col gap-3">
              <span class="text-sm font-normal">Sicherheitsstufe</span>
              <div class="flex flex-row gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec-low" value="Niedrig" />
                  <label for="sec-low" class="text-sm font-normal">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec-medium" value="Mittel" />
                  <label for="sec-medium" class="text-sm font-normal">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec-high" value="Hoch" />
                  <label for="sec-high" class="text-sm font-normal">Hoch</label>
                </div>
              </div>
            </div>

            <!-- Save Button -->
            <div class="pt-1">
              <Button label="Speichern" disabled />
            </div>
            
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
const password = ref('********');
const twoFactor = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('Hoch');
</script>