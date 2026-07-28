<template>
  <div class="min-h-screen bg-gray-50 flex items-start justify-center p-8">
    <div class="bg-white rounded-xl shadow-sm w-full max-w-lg flex flex-col gap-2">
      <div class="flex flex-col items-center gap-3 p-2.5">
        <Avatar label="B" size="xlarge" shape="square" class="bg-slate-200 text-slate-700" />
        <span class="text-2xl font-normal text-gray-900">Benutzername</span>
      </div>
      <div class="flex flex-col gap-2 p-5">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">Profil</Tab>
            <Tab value="1">Informationen</Tab>
            <Tab value="2">Sicherheit</Tab>
            <Tab value="3">Aktivität</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <p class="m-0 text-sm text-gray-700 leading-relaxed"></p>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0 text-sm text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0 text-sm text-gray-700 leading-relaxed"></p>
            </TabPanel>
            <TabPanel value="3">
              <p class="m-0 text-sm text-gray-700 leading-relaxed"></p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
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