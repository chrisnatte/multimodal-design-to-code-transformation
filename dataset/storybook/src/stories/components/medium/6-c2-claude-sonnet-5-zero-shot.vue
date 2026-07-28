<template>
  <div class="flex justify-center items-center min-h-screen bg-white">
    <Card style="width: 26rem" class="shadow-md">
      <template #content>
        <div class="flex flex-col items-center gap-4">
          <Avatar label="B" size="xlarge" shape="square" style="background-color: #e3e8ef; color: #1f2937" />
          <h2 class="text-xl font-normal text-gray-900 m-0">Benutzername</h2>

          <Tabs v-model:value="activeTab" class="w-full">
            <TabList>
              <Tab value="0">Profil</Tab>
              <Tab value="1">Informationen</Tab>
              <Tab value="2">Sicherheit</Tab>
              <Tab value="3">Aktivität</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <p class="text-gray-600 leading-relaxed m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </TabPanel>
              <TabPanel value="1">
                <p class="text-gray-600 leading-relaxed m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </TabPanel>
              <TabPanel value="2">
                <p class="text-gray-600 leading-relaxed m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </TabPanel>
              <TabPanel value="3">
                <p class="text-gray-600 leading-relaxed m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
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