<template>
  <div class="flex flex-col gap-[7px] w-[488px] bg-white rounded-xl shadow-sm overflow-hidden p-0 border border-surface-200">
    <!-- Header -->
    <div class="flex flex-col items-center gap-[12px] p-[10px] pb-[10px]">
      <Avatar label="B" size="xlarge" shape="square" class="!w-24 !h-24 !text-2xl mt-4 rounded-md !bg-[#e2e8f0] !text-surface-600" />
      <span class="text-2xl font-normal text-surface-900">Benutzername</span>
    </div>

    <!-- Body / Tabs -->
    <div class="flex flex-col p-[17.5px]">
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0" pt:root="font-bold">Profil</Tab>
          <Tab value="1" pt:root="font-bold">Informationen</Tab>
          <Tab value="2" pt:root="font-bold">Sicherheit</Tab>
          <Tab value="3" pt:root="font-bold">Aktivität</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="m-0 text-surface-600">Profil content here...</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0 text-surface-600 leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="2">
            <p class="m-0 text-surface-600">Sicherheit content here...</p>
          </TabPanel>
          <TabPanel value="3">
            <p class="m-0 text-surface-600">Aktivität content here...</p>
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