<template>
  <div class="flex justify-center items-center min-h-screen bg-white p-4">
    <Card class="w-full max-w-[520px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 rounded-2xl">
      <template #content>
        <div class="flex flex-col items-center pt-6 pb-8">
          <Avatar
            label="B"
            class="w-24 h-24 text-3xl bg-[#e2e8f0] text-[#334155] rounded-xl mb-6 font-medium"
          />
          <h2 class="text-[22px] font-medium text-gray-900 m-0 tracking-wide">Benutzername</h2>
        </div>

        <Tabs v-model:value="activeTab">
          <TabList class="border-b border-gray-100">
            <Tab value="0" class="font-medium text-gray-500 px-4 py-3">Profil</Tab>
            <Tab value="1" class="font-medium px-4 py-3">Informationen</Tab>
            <Tab value="2" class="font-medium text-gray-500 px-4 py-3">Sicherheit</Tab>
            <Tab value="3" class="font-medium text-gray-500 px-4 py-3">Aktivität</Tab>
          </TabList>
          <TabPanels class="px-2 py-6">
            <TabPanel value="0">
              <p class="m-0 text-gray-600 leading-relaxed">Profil content</p>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0 text-gray-600 leading-[1.6] text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0 text-gray-600 leading-relaxed">Sicherheit content</p>
            </TabPanel>
            <TabPanel value="3">
              <p class="m-0 text-gray-600 leading-relaxed">Aktivität content</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>
    </Card>
  </div>
</template>

<script setup>
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