<template>
  <div class="bg-white p-6 flex flex-col w-[560px]">
    <Tabs value="1">
      <TabList>
        <Tab value="0" class="flex items-center gap-2">
          <i class="pi pi-user-edit"></i>
          <span class="font-bold text-sm">Profil & Konto</span>
        </Tab>
        <Tab value="1" class="flex items-center gap-2">
          <i class="pi pi-shield"></i>
          <span class="font-bold text-sm">Sicherheit & Präferenzen</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <!-- Content for Profil & Konto would go here based on the screenshot, but JSON focuses on Sicherheit & Präferenzen -->
          <div class="flex flex-col gap-5 py-3">
            <div class="relative w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center text-2xl text-slate-700">
              P
              <Badge value="Edit" severity="success" class="absolute -top-2 -right-4" />
            </div>
            
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Benutzername</label>
              <InputText v-model="username" placeholder="Benutzername eingeben" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <Textarea v-model="bio" placeholder="Informationen über dich...." rows="4" class="w-full" />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="publicVisible" />
              <span class="text-sm text-slate-700">Öffentlich sichtbar</span>
            </div>

            <Button label="Speichern" severity="success" class="w-fit" />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex flex-col gap-2 w-[216px]">
              <label class="text-sm text-slate-700">Passwort</label>
              <Password v-model="password" placeholder="Placeholder" toggleMask>
                <template #header>
                  <div class="font-semibold text-sm mb-2">Passwort wählen</div>
                </template>
                <template #footer>
                  <Divider />
                  <ul class="pl-2 ml-2 mt-0 list-disc text-sm flex flex-col gap-1">
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
              <span class="text-sm text-slate-700">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2 w-[216px]">
              <label class="text-sm text-slate-700">Sitzungsdauer (Minuten)</label>
              <InputText v-model.number="sessionDuration" type="number" />
              <Slider v-model="sessionDuration" :min="0" :max="120" class="mt-2" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm text-slate-700">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="level1" value="Niedrig" />
                  <label for="level1" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="level2" value="Mittel" />
                  <label for="level2" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="level3" value="Hoch" />
                  <label for="level3" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" severity="success" disabled class="w-fit" />
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
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';
import Badge from 'primevue/badge';
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';

const username = ref('');
const bio = ref('');
const publicVisible = ref(false);

const password = ref('********');
const twoFactor = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('Hoch');
</script>