<template>
  <div class="p-8 max-w-3xl bg-white font-sans">
    <Tabs value="0">
      <TabList class="border-b border-slate-200">
        <Tab value="0" class="flex items-center gap-2 px-4 py-3 text-emerald-500 border-b-2 border-emerald-500 bg-transparent">
          <i class="pi pi-user-edit"></i>
          <span class="font-semibold">Profil & Konto</span>
        </Tab>
        <Tab value="1" class="flex items-center gap-2 px-4 py-3 text-slate-500 hover:text-slate-700 bg-transparent border-b-2 border-transparent">
          <i class="pi pi-shield"></i>
          <span class="font-semibold">Sicherheit & Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels class="pt-8 pb-0 px-0">
        <TabPanel value="0">
          <div class="flex flex-col gap-8">
            
            <!-- Avatar Section -->
            <div class="relative inline-flex w-fit">
              <Avatar 
                label="P" 
                class="w-20 h-20 text-3xl bg-slate-100 text-slate-700 rounded-xl font-medium" 
              />
              <div class="absolute -top-2 -right-4 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-md cursor-pointer shadow-sm">
                Edit
              </div>
            </div>

            <!-- Form Fields -->
            <div class="flex flex-col gap-6 max-w-md">
              
              <!-- Username -->
              <div class="flex flex-col gap-2">
                <label for="username" class="text-slate-700 font-medium">Benutzername</label>
                <InputText 
                  id="username" 
                  v-model="username" 
                  placeholder="Benutzername eingeben" 
                  class="w-full bg-slate-50 border-slate-200 text-slate-700 placeholder:text-slate-400" 
                />
              </div>

              <!-- Bio -->
              <div class="flex flex-col gap-2">
                <Textarea 
                  id="bio"
                  v-model="bio" 
                  rows="4" 
                  placeholder="Informationen über dich...." 
                  class="w-full bg-slate-50 border-slate-200 text-slate-700 placeholder:text-slate-400 resize-none" 
                />
              </div>

              <!-- Visibility Toggle -->
              <div class="flex items-center gap-3 mt-2">
                <ToggleSwitch v-model="isPublic" inputId="public-toggle" />
                <label for="public-toggle" class="text-slate-700 cursor-pointer">Öffentlich sichtbar</label>
              </div>

              <!-- Submit Button -->
              <div class="mt-2">
                <Button 
                  label="Speichern" 
                  class="bg-emerald-400 hover:bg-emerald-500 border-none text-white px-6 py-2.5 font-medium rounded-md" 
                />
              </div>

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