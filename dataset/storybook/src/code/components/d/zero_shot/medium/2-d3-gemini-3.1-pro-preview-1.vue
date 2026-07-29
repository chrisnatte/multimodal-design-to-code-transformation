<template>
  <div class="p-6 bg-white w-[560px] rounded-lg">
    <Tabs value="0">
      <TabList>
        <Tab value="0" class="flex items-center gap-2 px-4 py-3">
          <i class="pi pi-user-edit text-emerald-500"></i>
          <span class="font-bold text-emerald-500">Profil & Konto</span>
        </Tab>
        <Tab value="1" class="flex items-center gap-2 px-4 py-3">
          <i class="pi pi-shield text-slate-500"></i>
          <span class="font-bold text-slate-500">Sicherheit & Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels>
        <!-- Tab 0: Profil & Konto (From Screenshot) -->
        <TabPanel value="0" class="flex flex-col gap-6 pt-6">
          <!-- Avatar Section -->
          <div class="relative w-fit mt-2">
            <Avatar label="P" size="xlarge" class="bg-slate-100 text-slate-700 text-2xl w-16 h-16 rounded-md" />
            <Badge value="Edit" class="absolute -top-2 -right-4 bg-emerald-500 border-none" />
          </div>

          <!-- Username Input -->
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">Benutzername</label>
            <InputText v-model="username" placeholder="Benutzername eingeben" class="w-full bg-slate-50 border-slate-200 rounded-md" />
          </div>

          <!-- Bio Textarea -->
          <div class="flex flex-col gap-2">
            <Textarea v-model="bio" placeholder="Informationen über dich...." rows="4" class="w-full bg-slate-50 border-slate-200 rounded-md resize-none" />
          </div>

          <!-- Public Visibility Toggle -->
          <div class="flex items-center gap-3">
            <ToggleSwitch v-model="isPublic" />
            <span class="text-sm text-slate-700">Öffentlich sichtbar</span>
          </div>

          <!-- Save Button -->
          <Button label="Speichern" class="w-fit bg-emerald-400 hover:bg-emerald-500 border-none text-white px-4 py-2 rounded-md font-medium" />
        </TabPanel>

        <!-- Tab 1: Sicherheit & Präferenzen (From JSON) -->
        <TabPanel value="1" class="flex flex-col gap-5 pt-4">
          <!-- Password Input -->
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">Passwort</label>
            <Password v-model="password" toggleMask placeholder="********" class="w-full" inputClass="w-full bg-slate-50 border-emerald-500 rounded-md">
              <template #content>
                <div class="flex flex-col gap-2 p-1">
                  <div class="font-semibold text-sm text-slate-800">Passwort wählen</div>
                  <div class="flex gap-1 h-2.5 mt-1">
                    <div class="flex-1 bg-orange-500 rounded-l-md"></div>
                    <div class="flex-1 bg-orange-500"></div>
                    <div class="flex-1 bg-slate-200 rounded-r-md"></div>
                  </div>
                  <div class="text-sm text-slate-700">Medium</div>
                  <Divider class="my-2" />
                  <div class="flex flex-col gap-1 text-sm text-slate-700">
                    <span>Ein Kleinbuchstabe</span>
                    <span>Ein Großbuchstabe</span>
                    <span>Eine Zahl</span>
                    <span>Acht Zeichen</span>
                  </div>
                </div>
              </template>
            </Password>
          </div>

          <!-- 2FA Toggle -->
          <div class="flex items-center gap-3">
            <ToggleSwitch v-model="twoFactor" />
            <span class="text-sm text-slate-700">Zwei-Faktor-Authentifizierung</span>
          </div>

          <!-- Session Duration Slider -->
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">Sitzungsdauer (Minuten)</label>
            <InputText v-model.number="sessionDuration" class="w-full bg-slate-50 border-slate-200 rounded-md" />
            <Slider v-model="sessionDuration" class="w-full mt-2" />
          </div>

          <!-- Security Level Radio Buttons -->
          <div class="flex flex-col gap-3 mt-2">
            <span class="text-sm text-slate-700">Sicherheitsstufe</span>
            <div class="flex items-center gap-5">
              <div class="flex items-center gap-2">
                <RadioButton v-model="securityLevel" inputId="sec-low" name="security" value="Niedrig" />
                <label for="sec-low" class="text-sm text-slate-700">Niedrig</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="securityLevel" inputId="sec-med" name="security" value="Mittel" />
                <label for="sec-med" class="text-sm text-slate-700">Mittel</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="securityLevel" inputId="sec-high" name="security" value="Hoch" />
                <label for="sec-high" class="text-sm text-slate-700">Hoch</label>
              </div>
            </div>
          </div>

          <!-- Save Button -->
          <Button label="Speichern" disabled class="w-fit bg-emerald-500 border-none text-white px-4 py-2 rounded-md font-medium mt-2 opacity-60" />
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
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';
import Divider from 'primevue/divider';

// Tab 0 State
const username = ref('');
const bio = ref('');
const isPublic = ref(false);

// Tab 1 State
const password = ref('');
const twoFactor = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('Hoch');
</script>