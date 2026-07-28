<template>
  <div class="flex justify-center p-8">
    <Card class="w-full max-w-2xl shadow-sm border border-surface-200 rounded-xl">
      <template #content>
        <div class="flex flex-col items-center pt-4 pb-6">
          <Avatar label="B" size="xlarge" shape="square" class="w-24 h-24 text-4xl bg-surface-100 text-surface-700 rounded-xl mb-4" />
          <h2 class="text-2xl font-medium text-surface-900 m-0">Benutzername</h2>
        </div>

        <Tabs value="1">
          <TabList>
            <Tab value="0">Profil</Tab>
            <Tab value="1">Informationen</Tab>
            <Tab value="2">Sicherheit</Tab>
            <Tab value="3">Aktivität</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <p class="m-0 text-surface-600 leading-relaxed">
                Profil content goes here.
              </p>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0 text-surface-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0 text-surface-600 leading-relaxed">
                Sicherheit content goes here.
              </p>
            </TabPanel>
            <TabPanel value="3">
              <p class="m-0 text-surface-600 leading-relaxed">
                Aktivität content goes here.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
</script>