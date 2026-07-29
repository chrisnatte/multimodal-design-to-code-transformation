<template>
  <Card class="w-full max-w-2xl mx-auto shadow-sm border border-gray-100" :pt="{ body: 'p-8' }">
    <template #content>
      <div class="flex flex-col items-center pb-8 gap-4">
        <Avatar label="B" class="!w-24 !h-24 text-4xl bg-slate-200 text-slate-700 rounded-xl" />
        <h1 class="text-2xl font-medium text-gray-900">Benutzername</h1>
      </div>

      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">Profil</Tab>
          <Tab value="1">Informationen</Tab>
          <Tab value="2">Sicherheit</Tab>
          <Tab value="3">Aktivität</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0"></TabPanel>
          <TabPanel value="1">
            <p class="text-gray-600 leading-relaxed text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabPanels>
      </Tabs>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const activeTab = ref('1');
</script>