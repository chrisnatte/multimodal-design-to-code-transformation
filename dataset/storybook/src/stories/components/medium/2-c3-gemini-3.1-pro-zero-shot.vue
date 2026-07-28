<template>
  <div class="p-6 max-w-2xl font-sans">
    <Tabs value="0">
      <TabList>
        <Tab value="0" class="text-emerald-500 font-semibold">
          <div class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span>Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1" class="text-slate-500 font-semibold">
          <div class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span>Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-6 pt-6">
            
            <!-- Avatar Section -->
            <div class="relative inline-block w-fit">
              <Avatar 
                label="P" 
                class="w-20 h-20 text-3xl bg-slate-200 text-slate-700 rounded-xl" 
              />
              <Badge 
                value="Edit" 
                severity="success" 
                class="absolute -top-2 -right-4 bg-emerald-500" 
              />
            </div>

            <!-- Username Input -->
            <div class="flex flex-col gap-2 max-w-md">
              <label for="username" class="text-slate-700">Benutzername</label>
              <InputText 
                id="username" 
                v-model="username" 
                placeholder="Benutzername eingeben" 
                class="bg-slate-50 border-slate-200"
              />
            </div>

            <!-- Bio Textarea -->
            <div class="flex flex-col gap-2 max-w-md">
              <Textarea 
                v-model="bio" 
                placeholder="Informationen über dich...." 
                rows="5" 
                class="bg-slate-50 border-slate-200 resize-none"
              />
            </div>

            <!-- Visibility Toggle -->
            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="isPublic" inputId="public-toggle" />
              <label for="public-toggle" class="text-slate-700">Öffentlich sichtbar</label>
            </div>

            <!-- Save Button -->
            <div>
              <Button 
                label="Speichern" 
                class="bg-emerald-400 hover:bg-emerald-500 border-none px-6 py-2 font-semibold" 
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
import Badge from 'primevue/badge';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';

const username = ref('');
const bio = ref('');
const isPublic = ref(false);
</script>