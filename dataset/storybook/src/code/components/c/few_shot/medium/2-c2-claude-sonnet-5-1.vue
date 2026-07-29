<template>
  <div class="w-md p-6">
    <Tabs value="0">
      <TabList>
        <Tab value="0" class="flex items-center gap-2">
          <i class="pi pi-user" />
          <span>Profil & Konto</span>
        </Tab>
        <Tab value="1" class="flex items-center gap-2">
          <i class="pi pi-shield" />
          <span>Sicherheit & Präferenzen</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4 pt-4">
            <div class="relative w-fit">
              <Avatar label="P" size="xlarge" class="!bg-slate-100 !text-slate-500" />
              <Badge value="Edit" severity="success" class="absolute -top-2 -right-3" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="username">Benutzername</label>
              <InputText id="username" v-model="username" placeholder="Benutzername eingeben" />
            </div>

            <Textarea v-model="bio" placeholder="Informationen über dich...." rows="4" />

            <div class="flex items-center gap-2">
              <ToggleSwitch v-model="isPublic" />
              <span>Öffentlich sichtbar</span>
            </div>

            <Button label="Speichern" severity="success" class="w-fit" />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="pt-4"></div>
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