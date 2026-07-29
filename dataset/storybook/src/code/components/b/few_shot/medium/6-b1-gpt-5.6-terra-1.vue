<template>
  <div class="flex w-[536px] flex-col gap-2.5 bg-white p-6">
    <Card class="w-[488px]">
      <template #content>
        <div class="flex flex-col gap-[7px]">
          <div class="flex flex-col items-center gap-3 p-2.5">
            <Avatar label="B" size="xlarge" class="!h-24 !w-24" />
            <span class="text-2xl">Benutzername</span>
          </div>

          <div class="flex flex-col gap-[7px] rounded-md p-[17.5px]">
            <Tabs v-model:value="activeTab" class="w-full">
              <TabList>
                <Tab value="profile">Profil</Tab>
                <Tab value="information">Informationen</Tab>
                <Tab value="security">Sicherheit</Tab>
                <Tab value="activity">Aktivität</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="profile">
                  <div class="flex min-h-[161px] items-center justify-center text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </TabPanel>
                <TabPanel value="information">
                  <div class="flex min-h-[161px] items-center justify-center text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </TabPanel>
                <TabPanel value="security">
                  <div class="flex min-h-[161px] items-center justify-center text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </TabPanel>
                <TabPanel value="activity">
                  <div class="flex min-h-[161px] items-center justify-center text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Card from 'primevue/card'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'

const activeTab = ref('information')
</script>