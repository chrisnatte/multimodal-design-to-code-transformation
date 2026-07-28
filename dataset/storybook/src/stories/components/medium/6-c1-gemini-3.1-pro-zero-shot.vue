<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50 p-4">
    <div class="w-full max-w-2xl bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col items-center">
      
      <!-- Avatar Section -->
      <Avatar 
        label="B" 
        class="w-24 h-24 text-3xl bg-slate-200 text-slate-700 rounded-xl mb-4 font-medium" 
      />
      
      <!-- Username -->
      <h1 class="text-2xl font-medium text-gray-900 mb-8">Benutzername</h1>

      <!-- Tabs Section -->
      <Tabs v-model:value="activeTab" class="w-full">
        <TabList class="mb-4">
          <Tab value="0">Profil</Tab>
          <Tab value="1">Informationen</Tab>
          <Tab value="2">Sicherheit</Tab>
          <Tab value="3">Aktivität</Tab>
        </TabList>
        
        <TabPanels>
          <TabPanel value="0">
            <!-- Placeholder for Profil -->
          </TabPanel>
          <TabPanel value="1">
            <p class="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="2">
            <!-- Placeholder for Sicherheit -->
          </TabPanel>
          <TabPanel value="3">
            <!-- Placeholder for Aktivität -->
          </TabPanel>
        </TabPanels>
      </Tabs>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const activeTab = ref('1');
</script>