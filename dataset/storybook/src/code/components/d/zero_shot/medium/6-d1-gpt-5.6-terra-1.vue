<template>
  <main class="flex min-h-[482px] w-full items-start justify-center bg-white p-6">
    <section class="flex h-[434px] w-full max-w-[488px] flex-col gap-[7px] rounded-xl border border-surface-200 bg-white shadow-sm">
      <header class="flex h-[157px] flex-col items-center gap-3 p-2.5">
        <Avatar
          label="B"
          class="h-24 w-24 bg-[#e2e8f0] text-[28px] font-normal text-[#34445f]"
        />
        <h1 class="m-0 text-2xl font-normal leading-[29px] text-black">
          Benutzername
        </h1>
      </header>

      <div class="h-[270px] rounded-md p-[17.5px]">
        <Tabs v-model:value="activeTab" class="h-[235px]">
          <TabList class="h-[46px]">
            <Tab value="profile" class="text-sm font-bold">
              Profil
            </Tab>
            <Tab value="information" class="text-sm font-bold">
              Informationen
            </Tab>
            <Tab value="security" class="text-sm font-bold">
              Sicherheit
            </Tab>
            <Tab value="activity" class="text-sm font-bold">
              Aktivität
            </Tab>
          </TabList>

          <TabPanels class="h-[189px]">
            <TabPanel value="profile">
              <p class="m-0 text-sm leading-[23px] text-[#34445f]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>

            <TabPanel value="information">
              <p class="m-0 text-sm leading-[23px] text-[#34445f]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>

            <TabPanel value="security">
              <p class="m-0 text-sm leading-[23px] text-[#34445f]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>

            <TabPanel value="activity">
              <p class="m-0 text-sm leading-[23px] text-[#34445f]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const activeTab = ref('information')
</script>