<template>
  <div class="p-6 bg-white" style="width:560px;">
    <Tabs value="0">
      <TabList>
        <Tab value="0" class="flex items-center gap-2">
          <i class="pi pi-user-edit"></i>
          <span>Profil &amp; Konto</span>
        </Tab>
        <Tab value="1" class="flex items-center gap-2">
          <i class="pi pi-shield"></i>
          <span>Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>
      <TabPanels>
        <!-- Profil & Konto -->
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <div class="relative w-fit">
              <Avatar label="P" size="large" class="bg-slate-100 text-slate-500" shape="square" />
              <Badge value="Edit" severity="success" class="absolute -top-2 -right-2"></Badge>
            </div>

            <div class="flex flex-col gap-2">
              <label for="username" class="text-sm">Benutzername</label>
              <InputText id="username" v-model="username" placeholder="Benutzername eingeben" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <Textarea v-model="aboutText" placeholder="Informationen über dich...." rows="4" class="w-full" />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="publicVisible" />
              <span class="text-sm">Öffentlich sichtbar</span>
            </div>

            <Button label="Speichern" class="w-fit" />
          </div>
        </TabPanel>

        <!-- Sicherheit & Präferenzen -->
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3" style="max-width: 216px;">
            <Password
              v-model="password"
              inputId="password"
              toggleMask
              placeholder="Passwort"
              :feedback="true"
              class="w-full"
            >
              <template #header>
                <div class="font-semibold mb-2">Passwort wählen</div>
              </template>
              <template #footer>
                <ul class="pl-4 m-0 text-sm">
                  <li>Ein Kleinbuchstabe</li>
                  <li>Ein Großbuchstabe</li>
                  <li>Eine Zahl</li>
                  <li>Acht Zeichen</li>
                </ul>
              </template>
            </Password>
            <label for="password" class="text-sm -mt-4">Passwort</label>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorAuth" />
              <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm">Sitzungsdauer (Minuten)</label>
              <InputText v-model="sessionDuration" class="w-full" />
              <Slider v-model="sessionDurationSlider" class="w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <label class="text-sm">Sicherheitsstufe</label>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="low" name="securityLevel" value="Niedrig" />
                  <label for="low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="medium" name="securityLevel" value="Mittel" />
                  <label for="medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" inputId="high" name="securityLevel" value="Hoch" />
                  <label for="high" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" disabled class="w-fit" />
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
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';

const username = ref('');
const aboutText = ref('');
const publicVisible = ref(false);

const password = ref('');
const twoFactorAuth = ref(false);
const sessionDuration = ref('30');
const sessionDurationSlider = ref(30);
const securityLevel = ref('Hoch');
</script>