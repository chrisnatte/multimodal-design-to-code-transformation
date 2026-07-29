<template>
  <div class="flex justify-center items-center min-h-screen bg-white">
    <Card class="w-[500px] shadow-md rounded-xl">
      <template #content>
        <div class="flex flex-col items-center gap-3 py-4">
          <Avatar label="B" class="bg-gray-200 text-gray-700 !w-20 !h-20 text-2xl" shape="square" />
          <span class="text-xl text-gray-800 mt-2">Benutzername</span>
        </div>
        <Tabs v-model:value="activeTab" class="w-full">
          <TabList>
            <Tab value="profil">Profil</Tab>
            <Tab value="informationen">Informationen</Tab>
            <Tab value="sicherheit">Sicherheit</Tab>
            <Tab value="aktivitaet">Aktivität</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="profil">
              <p class="text-gray-500 text-sm leading-relaxed py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </TabPanel>
            <TabPanel value="informationen">
              <p class="text-gray-500 text-sm leading-relaxed py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="sicherheit">
              <p class="text-gray-500 text-sm leading-relaxed py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </TabPanel>
            <TabPanel value="aktivitaet">
              <p class="text-gray-500 text-sm leading-relaxed py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const activeTab = ref('informationen')
</script>