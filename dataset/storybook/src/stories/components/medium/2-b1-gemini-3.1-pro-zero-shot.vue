<template>
  <div class="flex flex-col w-[512px] bg-white">
    <Tabs value="1">
      <TabList>
        <Tab value="0">
          <div class="flex flex-row items-center gap-[7px]">
            <i class="pi pi-user-edit"></i>
            <span class="font-bold text-sm font-['Inter']">Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1">
          <div class="flex flex-row items-center gap-[7px]">
            <i class="pi pi-shield"></i>
            <span class="font-bold text-sm font-['Inter']">Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      
      <TabPanels>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <!-- Password -->
            <div class="flex flex-col gap-2 w-[216px]">
              <label class="text-sm font-['Inter']">Passwort</label>
              <Password 
                v-model="password" 
                toggleMask 
                promptLabel="Passwort wählen" 
                weakLabel="Niedrig"
                mediumLabel="Medium"
                strongLabel="Hoch"
                class="w-full" 
                inputClass="w-full" 
              />
            </div>

            <!-- Two-Factor Authentication -->
            <div class="flex flex-row items-center gap-3">
              <ToggleSwitch v-model="twoFactor" />
              <span class="text-sm font-['Inter']">Zwei-Faktor-Authentifizierung</span>
            </div>

            <!-- Session Duration -->
            <div class="flex flex-col gap-2 w-[216px]">
              <label class="text-sm font-['Inter']">Sitzungsdauer (Minuten)</label>
              <Slider v-model="sessionDuration" :min="0" :max="120" class="w-full mt-2" />
            </div>

            <!-- Security Level -->
            <div class="flex flex-col gap-3">
              <span class="text-sm font-['Inter']">Sicherheitsstufe</span>
              <div class="flex flex-row items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec-low" name="security" value="Niedrig" />
                  <label for="sec-low" class="text-sm font-['Inter'] cursor-pointer">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec-med" name="security" value="Mittel" />
                  <label for="sec-med" class="text-sm font-['Inter'] cursor-pointer">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec-high" name="security" value="Hoch" />
                  <label for="sec-high" class="text-sm font-['Inter'] cursor-pointer">Hoch</label>
                </div>
              </div>
            </div>

            <!-- Save Button -->
            <Button label="Speichern" disabled class="w-fit mt-1" />
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Password from 'primevue/password'
import ToggleSwitch from 'primevue/toggleswitch'
import Slider from 'primevue/slider'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const password = ref('')
const twoFactor = ref(false)
const sessionDuration = ref(30)
const securityLevel = ref('Hoch')
</script>