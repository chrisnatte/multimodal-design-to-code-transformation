<template>
  <div class="card">
    <Tabs value="0">
      <TabList>
        <Tab value="0">
          <div class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span class="font-bold whitespace-nowrap">Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1">
          <div class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span class="font-bold whitespace-nowrap">Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex flex-col gap-2 relative">
              <Avatar label="P" class="bg-gray-200 text-gray-800 text-2xl relative" size="xlarge" shape="square" style="width: 72px; height: 72px;" />
              <Badge value="Edit" severity="success" class="absolute -top-2 -right-2" style="background-color: #10B981" />
            </div>

            <div class="flex flex-col gap-2 w-[216px]">
              <label for="username" class="text-sm font-normal">Benutzername</label>
              <InputText id="username" v-model="username" placeholder="Benutzername eingeben" />
            </div>

            <div class="flex flex-col gap-2 w-[216px]">
              <Textarea v-model="userInfo" placeholder="Informationen über dich...." rows="5" />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="publicVisible" />
              <span class="text-sm">Öffentlich sichtbar</span>
            </div>

            <Button label="Speichern" severity="primary" @click="saveProfile" class="w-min px-4 py-2" />
          </div>
        </TabPanel>
        
        <TabPanel value="1">
           <div class="flex flex-col gap-5 py-3">
            
            <div class="flex flex-col gap-2 w-[216px]">
              <label for="password" class="text-sm font-normal">Passwort</label>
              <Password id="password" v-model="password" toggleMask promptLabel="Passwort wählen">
                <template #header>
                   <div class="font-semibold text-sm mb-2">Passwort wählen</div>
                </template>
                <template #footer>
                  <Divider />
                  <ul class="pl-2 ml-2 mt-0 mb-0 form-text flex flex-col gap-1 text-sm list-disc">
                      <li>Ein Kleinbuchstabe</li>
                      <li>Ein Großbuchstabe</li>
                      <li>Eine Zahl</li>
                      <li>Acht Zeichen</li>
                  </ul>
                </template>
              </Password>
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactor" />
              <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2 w-[216px]">
              <label for="sessionDuration" class="text-sm font-normal">Sitzungsdauer (Minuten)</label>
              <InputText id="sessionDuration" v-model.number="sessionDuration" type="number" />
              <Slider v-model="sessionDuration" class="mt-2" :min="1" :max="120" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec-low" name="security" value="Low" />
                  <label for="sec-low" class="text-sm cursor-pointer">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec-medium" name="security" value="Medium" />
                  <label for="sec-medium" class="text-sm cursor-pointer">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="sec-high" name="security" value="High" />
                  <label for="sec-high" class="text-sm cursor-pointer">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" severity="primary" @click="saveSecurity" :disabled="true" class="w-min px-4 py-2" />
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

import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import ToggleSwitch from 'primevue/toggleswitch';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const username = ref('');
const userInfo = ref('');
const publicVisible = ref(false);

const password = ref('********');
const twoFactor = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('High');

const saveProfile = () => {
    // save profile
};

const saveSecurity = () => {
    // save security
};
</script>