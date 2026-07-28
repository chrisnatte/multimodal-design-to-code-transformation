<template>
  <div class="w-full max-w-2xl mx-auto p-4">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">
          <div class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span>Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1">
          <div class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span>Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-6 pt-4">
            <div class="relative inline-block">
              <div class="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center text-2xl text-slate-600 font-medium">
                P
              </div>
              <span class="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-semibold px-2 py-0.5 rounded-md">
                Edit
              </span>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm font-medium text-slate-700">Benutzername</label>
              <InputText v-model="username" placeholder="Benutzername eingeben" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <Textarea v-model="bio" placeholder="Informationen über dich...." rows="4" class="w-full resize-none" />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="isPublic" />
              <span class="text-sm text-slate-700">Öffentlich sichtbar</span>
            </div>

            <Button label="Speichern" severity="success" class="w-fit" />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="pt-4 text-slate-500">
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
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';

const activeTab = ref('0');
const username = ref('');
const bio = ref('');
const isPublic = ref(false);
</script>