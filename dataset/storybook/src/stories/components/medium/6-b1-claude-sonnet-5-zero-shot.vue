<template>
  <div class="flex flex-col gap-[7px] p-0 bg-white rounded-xl w-[488px]">
    <!-- header -->
    <div class="flex flex-col items-center gap-3 p-[10px] w-full">
      <Avatar label="B" size="xlarge" :circle="false" />
      <span class="text-2xl">Benutzername</span>
    </div>

    <!-- body -->
    <div class="flex flex-col gap-[7px] p-[17.5px] w-full rounded-md">
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="profil">Profil</Tab>
          <Tab value="informationen">Informationen</Tab>
          <Tab value="sicherheit">Sicherheit</Tab>
          <Tab value="aktivitat">Aktivität</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="profil">
            <p class="text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="informationen">
            <p class="text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="sicherheit">
            <p class="text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="aktivitat">
            <p class="text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
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

const activeTab = ref('informationen')
</script>