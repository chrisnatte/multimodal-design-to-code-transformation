<template>
  <div class="flex flex-col p-6 gap-2.5 bg-white">
    <Card class="w-full rounded-xl bg-white shadow-none">
      <template #content>
        <div class="flex flex-col gap-[7px]">
          <!-- Header -->
          <div class="flex flex-col items-center gap-3 p-2.5">
            <Avatar 
              label="B" 
              size="xlarge" 
              shape="square" 
              style="background-color: #e2e8f0; color: #000000" 
            />
            <span class="text-2xl font-normal font-sans text-black">Benutzername</span>
          </div>
          
          <!-- Body -->
          <div class="flex flex-col gap-[7px] p-[17.5px] rounded-md">
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
                  <p class="m-0 text-sm font-normal font-sans text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </TabPanel>
                <TabPanel value="2"></TabPanel>
                <TabPanel value="3"></TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
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