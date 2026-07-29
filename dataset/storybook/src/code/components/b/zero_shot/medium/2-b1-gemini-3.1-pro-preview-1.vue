<template>
  <div class="flex flex-col p-6 bg-white w-[560px]">
    <Tabs value="1">
      <TabList>
        <Tab value="0">
          <div class="flex items-center gap-2 px-4 py-3.5">
            <i class="pi pi-user-edit"></i>
            <span class="font-bold text-sm">Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1">
          <div class="flex items-center gap-2 px-4 py-3.5">
            <i class="pi pi-shield"></i>
            <span class="font-bold text-sm">Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      
      <TabPanels class="p-4 pt-3">
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            
            <!-- Password -->
            <div class="flex flex-col gap-2 w-[216px]">
              <label class="text-sm text-surface-700">Passwort</label>
              <Password 
                v-model="password" 
                toggleMask 
                promptLabel="Passwort wählen" 
                mediumLabel="Medium"
                inputClass="w-full"
                class="w-full"
              >
                <template #footer>
                  <Divider />
                  <ul class="flex flex-col gap-1 text-sm text-surface-600 pl-0 ml-0 list-none">
                    <li>Ein Kleinbuchstabe</li>
                    <li>Ein Großbuchstabe</li>
                    <li>Eine Zahl</li>
                    <li>Acht Zeichen</li>
                  </ul>
                </template>
              </Password>
            </div>

            <!-- Two-Factor Authentication -->
            <div class="flex flex-row items-center gap-3">
              <ToggleSwitch v-model="twoFactor" />
              <span class="text-sm text-surface-900">Zwei-Faktor-Authentifizierung</span>
            </div>

            <!-- Session Duration -->
            <div class="flex flex-col gap-2 w-[216px]">
              <label class="text-sm text-surface-700">Sitzungsdauer (Minuten)</label>
              <InputText v-model.number="sessionDuration" type="number" class="w-full" />
              <Slider v-model="sessionDuration" class="mt-2" />
            </div>

            <!-- Security Level -->
            <div class="flex flex-col gap-3">
              <span class="text-sm text-surface-700">Sicherheitsstufe</span>
              <div class="flex flex-row gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec-low" name="security" value="Niedrig" />
                  <label for="sec-low" class="text-sm text-surface-900">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec-med" name="security" value="Mittel" />
                  <label for="sec-med" class="text-sm text-surface-900">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec-high" name="security" value="Hoch" />
                  <label for="sec-high" class="text-sm text-surface-900">Hoch</label>
                </div>
              </div>
            </div>

            <!-- Save Button -->
            <div class="pt-1">
              <Button label="Speichern" disabled class="w-[91px]" />
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
import Divider from 'primevue/divider';
import ToggleSwitch from 'primevue/toggleswitch';
import InputText from 'primevue/inputtext';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const password = ref('********');
const twoFactor = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('Hoch');
</script>