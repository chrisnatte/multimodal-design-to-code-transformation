<template>
  <div class="w-full max-w-md mx-auto p-4">
    <Tabs value="0">
      <TabList>
        <Tab value="0">
          <span class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span>Profil & Konto</span>
          </span>
        </Tab>
        <Tab value="1">
          <span class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span>Sicherheit & Präferenzen</span>
          </span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4 pt-4">
            <div class="relative w-fit">
              <Avatar label="P" shape="square" size="large" class="bg-slate-100 text-slate-500 w-16 h-16 text-2xl" />
              <Button
                label="Edit"
                size="small"
                class="absolute -top-3 -right-3 text-xs py-0.5 px-2"
                severity="success"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="username" class="text-sm text-gray-700">Benutzername</label>
              <InputText id="username" v-model="username" placeholder="Benutzername eingeben" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <Textarea v-model="about" placeholder="Informationen über dich...." rows="4" class="w-full" />
            </div>

            <div class="flex items-center gap-2">
              <ToggleSwitch v-model="publicVisible" />
              <span class="text-sm text-gray-700">Öffentlich sichtbar</span>
            </div>

            <Button label="Speichern" severity="success" class="w-fit" />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="pt-4">
            <p class="m-0 text-sm text-gray-500">Sicherheit & Präferenzen Inhalte hier.</p>
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
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';

const username = ref('');
const about = ref('');
const publicVisible = ref(false);
</script>