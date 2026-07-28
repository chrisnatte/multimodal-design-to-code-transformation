<template>
  <div class="p-6 max-w-md">
    <Tabs value="0">
      <TabList>
        <Tab value="0" class="flex items-center gap-2">
          <i class="pi pi-user"></i>
          <span>Profil & Konto</span>
        </Tab>
        <Tab value="1" class="flex items-center gap-2">
          <i class="pi pi-shield"></i>
          <span>Sicherheit & Präferenzen</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4 pt-4">
            <div class="relative w-fit">
              <Avatar label="P" shape="square" class="bg-gray-200 text-gray-500 w-16 h-16 text-2xl" />
              <Tag value="Edit" severity="success" class="absolute -top-2 -right-2 text-xs"></Tag>
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
          <div class="pt-4 text-gray-500">
            Sicherheit & Präferenzen Inhalt
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

const username = ref('');
const about = ref('');
const publicVisible = ref(false);
</script>