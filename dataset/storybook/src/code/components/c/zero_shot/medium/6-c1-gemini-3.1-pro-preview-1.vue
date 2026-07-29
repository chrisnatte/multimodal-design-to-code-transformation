<template>
  <div class="max-w-2xl mx-auto p-8 bg-white border border-surface-100 rounded-2xl shadow-sm flex flex-col items-center font-sans mt-10">
    <!-- Avatar -->
    <Avatar label="B" class="w-24 h-24 text-3xl bg-slate-200 text-slate-700 rounded-xl mb-4" />
    
    <!-- Title -->
    <h1 class="text-2xl font-medium text-surface-900 mb-8">Benutzername</h1>

    <!-- Tabs -->
    <Tabs v-model:value="activeTab" class="w-full">
      <TabList>
        <Tab value="0">Profil</Tab>
        <Tab value="1">Informationen</Tab>
        <Tab value="2">Sicherheit</Tab>
        <Tab value="3">Aktivität</Tab>
      </TabList>
      <TabPanels class="pt-6">
        <TabPanel value="0"></TabPanel>
        <TabPanel value="1">
          <p class="text-surface-600 leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </TabPanel>
        <TabPanel value="2"></TabPanel>
        <TabPanel value="3"></TabPanel>
      </TabPanels>
    </Tabs>
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