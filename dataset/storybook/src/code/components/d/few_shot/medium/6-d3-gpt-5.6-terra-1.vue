<template>
  <div class="flex w-[536px] flex-col p-6">
    <Card
      :pt="{
        root: 'w-full overflow-hidden rounded-xl',
        body: '!p-0',
        content: '!p-0',
      }"
    >
      <template #content>
        <div class="flex flex-col gap-[7px]">
          <div class="flex flex-col items-center gap-3 p-2.5 pb-2.5">
            <Avatar label="B" size="xlarge" />
            <span class="text-2xl text-surface-950">Benutzername</span>
          </div>

          <div class="flex flex-col rounded-md p-[17.5px]">
            <Tabs v-model:value="activeTab">
              <TabList>
                <Tab value="profile">Profil</Tab>
                <Tab value="information">Informationen</Tab>
                <Tab value="security">Sicherheit</Tab>
                <Tab value="activity">Aktivität</Tab>
              </TabList>

              <TabPanels>
                <TabPanel value="profile">
                  <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </TabPanel>
                <TabPanel value="information">
                  <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </TabPanel>
                <TabPanel value="security">
                  <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </TabPanel>
                <TabPanel value="activity">
                  <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
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