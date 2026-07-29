<template>
  <div class="p-6 bg-white flex flex-col w-[560px]">
    <Tabs value="1">
      <TabList>
        <Tab value="0">
          <div class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span class="font-bold text-sm">Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1">
          <div class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span class="font-bold text-sm">Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      
      <TabPanels>
        <TabPanel value="0">
          <!-- Content for Profil & Konto -->
        </TabPanel>
        
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            
            <!-- Password Section -->
            <div class="flex flex-col gap-2 w-[216px]">
              <label class="text-sm text-surface-700">Passwort</label>
              <Password 
                v-model="password" 
                toggleMask 
                promptLabel="Passwort wählen" 
                weakLabel="Ein Kleinbuchstabe" 
                mediumLabel="Medium" 
                strongLabel="Stark" 
                placeholder="********"
                class="w-full"
                inputClass="w-full"
              />
            </div>

            <!-- Two-Factor Authentication -->
            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactor" />
              <span class="text-sm text-surface-700">Zwei-Faktor-Authentifizierung</span>
            </div>

            <!-- Session Duration -->
            <div class="flex flex-col gap-2 w-[216px]">
              <label class="text-sm text-surface-700">Sitzungsdauer (Minuten)</label>
              <InputText v-model.number="sessionDuration" class="w-full" />
              <Slider v-model="sessionDuration" class="w-full mt-2" />
            </div>

            <!-- Security Level -->
            <div class="flex flex-col gap-3">
              <span class="text-sm text-surface-700">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec-low" value="Niedrig" />
                  <label for="sec-low" class="text-sm text-surface-700">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec-med" value="Mittel" />
                  <label for="sec-med" class="text-sm text-surface-700">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec-high" value="Hoch" />
                  <label for="sec-high" class="text-sm text-surface-700">Hoch</label>
                </div>
              </div>
            </div>

            <!-- Save Button -->
            <div class="mt-2">
              <Button label="Speichern" disabled class="w-[91px]" />
            </div>
            
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
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const password = ref('')
const twoFactor = ref(false)
const sessionDuration = ref(30)
const securityLevel = ref('Hoch')
</script>