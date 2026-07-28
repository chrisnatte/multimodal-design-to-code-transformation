<template>
  <div class="p-10 flex flex-col justify-center items-center h-full">
    <Card class="w-[488px] shadow-sm rounded-xl overflow-hidden border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900">
      <template #header>
        <div class="flex flex-col items-center pt-8 pb-4 gap-4">
          <Avatar label="B" size="xlarge" class="w-24 h-24 text-2xl !bg-[#E2E8F0] !text-surface-600 dark:!text-surface-900 font-normal" />
          <span class="text-2xl text-surface-900 dark:text-surface-0">Benutzername</span>
        </div>
      </template>
      <template #content>
        <div class="pb-[17.5px] px-[17.5px] pt-0">
          <Tabs value="1">
            <TabList>
              <Tab value="0">Profil</Tab>
              <Tab value="1">Informationen</Tab>
              <Tab value="2">Sicherheit</Tab>
              <Tab value="3">Aktivität</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <p class="m-0 text-surface-700 dark:text-surface-0/80 leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </TabPanel>
              <TabPanel value="1">
                <p class="m-0 text-surface-700 dark:text-surface-0/80 leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </TabPanel>
              <TabPanel value="2">
                <p class="m-0 text-surface-700 dark:text-surface-0/80 leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </TabPanel>
              <TabPanel value="3">
                <p class="m-0 text-surface-700 dark:text-surface-0/80 leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Avatar from 'primevue/avatar';
</script>