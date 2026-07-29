<template>
  <div class="flex justify-center items-start p-8">
    <Card class="w-[520px] shadow-md rounded-xl">
      <template #content>
        <div class="flex flex-col items-center gap-4 pb-4">
          <Avatar label="B" size="xlarge" shape="square" class="w-20 h-20 text-2xl bg-slate-100 text-slate-700" />
          <span class="text-xl text-gray-800">Benutzername</span>
        </div>
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">Profil</Tab>
            <Tab value="1">Informationen</Tab>
            <Tab value="2">Sicherheit</Tab>
            <Tab value="3">Aktivität</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <p class="m-0 text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </p>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0 text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0 text-gray-600 leading-relaxed">
                Sicherheit Inhalt.
              </p>
            </TabPanel>
            <TabPanel value="3">
              <p class="m-0 text-gray-600 leading-relaxed">
                Aktivität Inhalt.
              </p>
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