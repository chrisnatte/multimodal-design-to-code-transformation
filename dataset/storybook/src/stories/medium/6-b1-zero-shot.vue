<template>
  <div class="flex flex-col gap-2 bg-white rounded-xl p-0 w-fit">
    <div class="flex flex-col items-center gap-3 p-2.5 pb-2.5">
      <Avatar label="B" size="xlarge" shape="square" />
      <span class="text-2xl font-normal">Benutzername</span>
    </div>

    <div class="flex flex-col gap-2 rounded-md p-4">
      <Tabs v-model:value="state.activeTab">
        <TabList>
          <Tab value="profil">Profil</Tab>
          <Tab value="informationen">Informationen</Tab>
          <Tab value="sicherheit">Sicherheit</Tab>
          <Tab value="aktivitaet">Aktivität</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="profil">
            <div class="flex justify-center items-center">
              <span class="text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>
          </TabPanel>
          <TabPanel value="informationen">
            <div class="flex justify-center items-center">
              <span class="text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>
          </TabPanel>
          <TabPanel value="sicherheit">
            <div class="flex justify-center items-center">
              <span class="text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>
          </TabPanel>
          <TabPanel value="aktivitaet">
            <div class="flex justify-center items-center">
              <span class="text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const state = reactive({
  activeTab: 'informationen'
})
</script>