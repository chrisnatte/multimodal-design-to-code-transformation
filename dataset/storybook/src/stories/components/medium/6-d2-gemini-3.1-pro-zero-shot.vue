<template>
  <Card class="w-[488px] rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-surface-100 bg-white">
    <template #content>
      <div class="flex flex-col gap-[7px]">
        
        <!-- Header Section -->
        <div class="flex flex-col items-center gap-3 p-2.5">
          <Avatar 
            label="B" 
            size="xlarge" 
            class="w-24 h-24 text-[28px] bg-slate-200 text-slate-700 rounded-lg" 
          />
          <span class="text-2xl text-surface-900">Benutzername</span>
        </div>

        <!-- Body Section -->
        <div class="p-[17.5px]">
          <Tabs v-model:value="activeTab">
            <TabList>
              <Tab value="0">Profil</Tab>
              <Tab value="1">Informationen</Tab>
              <Tab value="2">Sicherheit</Tab>
              <Tab value="3">Aktivität</Tab>
            </TabList>
            
            <TabPanels>
              <TabPanel value="0">
                <p class="m-0 text-sm text-surface-600 leading-relaxed">
                  Profil inhalt hier...
                </p>
              </TabPanel>
              <TabPanel value="1">
                <p class="m-0 text-sm text-surface-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </TabPanel>
              <TabPanel value="2">
                <p class="m-0 text-sm text-surface-600 leading-relaxed">
                  Sicherheit inhalt hier...
                </p>
              </TabPanel>
              <TabPanel value="3">
                <p class="m-0 text-sm text-surface-600 leading-relaxed">
                  Aktivität inhalt hier...
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>

      </div>
    </template>
  </Card>
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