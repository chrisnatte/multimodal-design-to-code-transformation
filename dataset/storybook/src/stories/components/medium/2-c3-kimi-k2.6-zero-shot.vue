<template>
  <div class="p-8 max-w-xl">
    <Tabs value="0">
      <TabList>
        <Tab value="0" as="div" class="flex items-center gap-2">
          <i class="pi pi-user-edit text-green-500"></i>
          <span class="font-semibold text-green-600">Profil & Konto</span>
        </Tab>
        <Tab value="1" as="div" class="flex items-center gap-2">
          <i class="pi pi-shield text-gray-400"></i>
          <span class="text-gray-500">Sicherheit & Präferenzen</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-6 pt-6">
            <div class="relative inline-flex">
              <Avatar label="P" shape="square" size="xlarge" class="bg-gray-200 text-gray-700 text-2xl" />
              <Badge value="Edit" severity="success" class="absolute -top-2 -right-2" />
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-gray-700 font-medium">Benutzername</label>
              <InputText v-model="username" placeholder="Benutzername eingeben" class="w-full max-w-sm" />
            </div>

            <Textarea v-model="bio" placeholder="Informationen über dich...." rows="4" class="w-full max-w-sm resize-none" />

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="isPublic" />
              <label class="text-gray-700">Öffentlich sichtbar</label>
            </div>

            <Button label="Speichern" severity="success" class="w-fit" />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="pt-6 text-gray-500">
            Sicherheit & Präferenzen
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

const username = ref('');
const bio = ref('');
const isPublic = ref(false);
</script>