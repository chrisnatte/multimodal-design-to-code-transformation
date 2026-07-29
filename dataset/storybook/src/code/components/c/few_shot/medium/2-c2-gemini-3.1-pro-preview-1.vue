<template>
  <div class="p-6 max-w-xl bg-white">
    <Tabs value="0">
      <TabList>
        <Tab value="0">
          <div class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span class="font-semibold">Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1">
          <div class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span class="font-semibold">Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      
      <TabPanels>
        <TabPanel value="0" class="pt-8">
          <div class="flex flex-col gap-6">
            
            <!-- Avatar Section -->
            <div class="relative w-fit">
              <Avatar label="P" class="w-16 h-16 text-2xl bg-slate-200 text-slate-700 rounded-lg" />
              <Badge value="Edit" severity="success" class="absolute -top-2 -right-4 text-xs" />
            </div>

            <!-- Username Input -->
            <div class="flex flex-col gap-2">
              <label for="username" class="text-slate-700 text-sm">Benutzername</label>
              <InputText 
                id="username" 
                v-model="username" 
                placeholder="Benutzername eingeben" 
                class="bg-slate-50 border-slate-200" 
              />
            </div>

            <!-- Bio Textarea -->
            <div class="flex flex-col gap-2">
              <Textarea 
                v-model="bio" 
                placeholder="Informationen über dich...." 
                rows="4" 
                class="bg-slate-50 border-slate-200 resize-none" 
              />
            </div>

            <!-- Visibility Toggle -->
            <div class="flex items-center gap-3 mt-2">
              <ToggleSwitch v-model="isPublic" inputId="public-toggle" />
              <label for="public-toggle" class="text-slate-700 text-sm">Öffentlich sichtbar</label>
            </div>

            <!-- Submit Button -->
            <Button label="Speichern" severity="success" class="w-fit mt-4" />
            
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
import Badge from 'primevue/badge';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';

const username = ref('');
const bio = ref('');
const isPublic = ref(false);
</script>