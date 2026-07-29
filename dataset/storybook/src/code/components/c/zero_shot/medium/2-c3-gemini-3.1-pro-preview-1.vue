<template>
  <div class="p-8 max-w-3xl bg-white font-sans">
    <Tabs value="0">
      <TabList class="border-b border-slate-200">
        <Tab value="0" class="text-emerald-500 font-semibold flex items-center gap-2 px-4 py-3 border-b-2 border-emerald-500">
          <i class="pi pi-user"></i>
          Profil & Konto
        </Tab>
        <Tab value="1" class="text-slate-500 font-semibold flex items-center gap-2 px-4 py-3 hover:text-slate-700">
          <i class="pi pi-shield"></i>
          Sicherheit & Präferenzen
        </Tab>
      </TabList>
      
      <TabPanels>
        <TabPanel value="0" class="pt-6">
          <div class="flex flex-col gap-6">
            
            <!-- Avatar Section -->
            <div class="relative inline-block w-fit ml-2">
              <Avatar label="P" class="w-16 h-16 text-2xl bg-slate-200 text-slate-700 rounded-xl" />
              <span class="absolute -top-2 -right-4 bg-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded-md cursor-pointer shadow-sm">
                Edit
              </span>
            </div>

            <!-- Username Field -->
            <div class="flex flex-col gap-2">
              <label for="username" class="text-slate-700 font-medium">Benutzername</label>
              <InputText 
                id="username" 
                v-model="username" 
                placeholder="Benutzername eingeben" 
                class="w-full max-w-md bg-slate-50 border-slate-200" 
              />
            </div>

            <!-- Bio Field -->
            <div class="flex flex-col gap-2">
              <Textarea 
                v-model="bio" 
                rows="5" 
                placeholder="Informationen über dich...." 
                class="w-full max-w-md bg-slate-50 border-slate-200 resize-none" 
              />
            </div>

            <!-- Visibility Toggle -->
            <div class="flex items-center gap-3 mt-2">
              <ToggleSwitch v-model="isPublic" inputId="public-visibility" />
              <label for="public-visibility" class="text-slate-700 cursor-pointer">Öffentlich sichtbar</label>
            </div>

            <!-- Save Button -->
            <div class="mt-4">
              <Button 
                label="Speichern" 
                class="bg-emerald-400 border-emerald-400 hover:bg-emerald-500 hover:border-emerald-500 text-white px-6 py-2 rounded-md font-medium" 
              />
            </div>

          </div>
        </TabPanel>
        
        <TabPanel value="1">
          <!-- Content for Sicherheit & Präferenzen -->
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
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';

const username = ref('');
const bio = ref('');
const isPublic = ref(false);
</script>