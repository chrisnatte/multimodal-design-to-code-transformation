<template>
  <div class="flex flex-col p-6 gap-2.5 bg-white">
    <div class="flex flex-col rounded-xl bg-white gap-[7px]">
      <div class="flex flex-col items-center p-2.5 gap-3">
        <Avatar label="B" size="xlarge" />
        <span class="font-sans text-2xl">Benutzername</span>
      </div>
      
      <div class="flex flex-col p-[17.5px] rounded-md gap-[7px]">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">Profil</Tab>
            <Tab value="1">Informationen</Tab>
            <Tab value="2">Sicherheit</Tab>
            <Tab value="3">Aktivität</Tab>
          </TabList>
          
          <TabPanels>
            <TabPanel value="1">
              <p class="font-sans text-sm font-normal m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const activeTab = ref('1')
</script>