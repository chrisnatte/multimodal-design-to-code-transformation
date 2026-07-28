<template>
  <div class="w-[512px]">
    <Tabs value="0">
      <TabList>
        <Tab value="0">
          <span class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span class="font-bold">Profil & Konto</span>
          </span>
        </Tab>
        <Tab value="1">
          <span class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span class="font-bold">Sicherheit & Präferenzen</span>
          </span>
        </Tab>
      </TabList>
      <TabPanels>
        <!-- Profil & Konto -->
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <div class="relative w-fit">
              <Avatar label="P" shape="square" size="large" class="bg-slate-100 text-slate-500" />
              <Tag value="Edit" severity="success" class="absolute -top-2 -right-3 text-xs"></Tag>
            </div>

            <div class="flex flex-col gap-2">
              <label for="username" class="text-sm text-gray-700">Benutzername</label>
              <InputText id="username" v-model="username" placeholder="Benutzername eingeben" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <Textarea v-model="aboutMe" placeholder="Informationen über dich...." rows="4" class="w-full" />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="publicVisible" />
              <span class="text-sm text-gray-700">Öffentlich sichtbar</span>
            </div>

            <Button label="Speichern" class="w-fit" />
          </div>
        </TabPanel>

        <!-- Sicherheit & Präferenzen -->
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex flex-col gap-2">
              <label for="password" class="text-sm text-gray-700">Passwort</label>
              <Password
                id="password"
                v-model="password"
                toggleMask
                :feedback="true"
                class="w-full"
                inputClass="w-full"
              >
                <template #footer>
                  <Divider />
                  <ul class="pl-2 my-0 leading-normal text-sm">
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
              <span class="text-sm text-gray-700">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-700">Sitzungsdauer (Minuten)</label>
              <InputText v-model="sessionDuration" class="w-full" />
              <Slider v-model="sessionDurationValue" class="w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm text-gray-700">Sicherheitsstufe</span>
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
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import Slider from 'primevue/slider';
import RadioButton from 'primevue/radiobutton';

const username = ref('');
const aboutMe = ref('');
const publicVisible = ref(false);

const password = ref('********');
const twoFactor = ref(false);
const sessionDuration = ref('30');
const sessionDurationValue = ref(30);
const securityLevel = ref('Hoch');
</script>