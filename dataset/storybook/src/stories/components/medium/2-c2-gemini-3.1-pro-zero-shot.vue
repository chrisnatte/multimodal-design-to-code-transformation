<template>
  <div class="max-w-2xl p-6 font-sans">
    <Tabs value="0">
      <TabList>
        <Tab value="0" class="text-emerald-500">
          <div class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span class="font-semibold">Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1" class="text-slate-500">
          <div class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span class="font-semibold">Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-6 pt-6">
            
            <!-- Avatar Section -->
            <div class="relative inline-block w-max">
              <div class="w-16 h-16 bg-[#eef0f4] text-[#2c3e50] text-3xl flex items-center justify-center rounded-lg font-light">
                P
              </div>
              <div class="absolute -top-2 -right-5 bg-[#22c55e] text-white text-[10px] font-bold px-2 py-1 rounded cursor-pointer">
                Edit
              </div>
            </div>

            <!-- Username Input -->
            <div class="flex flex-col gap-2">
              <label for="username" class="text-[#4b5563] text-sm">Benutzername</label>
              <InputText 
                id="username" 
                v-model="username" 
                placeholder="Benutzername eingeben" 
                class="w-full bg-[#f8fafc] border-[#e2e8f0]" 
              />
            </div>

            <!-- Bio Textarea -->
            <div class="flex flex-col gap-2">
              <Textarea 
                v-model="bio" 
                placeholder="Informationen über dich...." 
                rows="4" 
                class="w-full bg-[#f8fafc] border-[#e2e8f0] resize-none" 
              />
            </div>

            <!-- Public Toggle -->
            <div class="flex items-center gap-3 mt-2">
              <ToggleSwitch v-model="isPublic" inputId="public-switch" />
              <label for="public-switch" class="text-[#4b5563] text-sm cursor-pointer">Öffentlich sichtbar</label>
            </div>

            <!-- Save Button -->
            <div class="mt-2">
              <Button 
                label="Speichern" 
                class="bg-[#5eead4] hover:bg-[#34d399] border-none text-white px-6 py-2 rounded-md font-medium" 
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
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';

const username = ref('');
const bio = ref('');
const isPublic = ref(false);
</script>