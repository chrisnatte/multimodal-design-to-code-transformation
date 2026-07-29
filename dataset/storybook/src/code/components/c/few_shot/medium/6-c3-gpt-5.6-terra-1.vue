<template>
  <Card
    class="w-full max-w-[490px]"
    :pt="{
      root: 'border border-surface-200 shadow-sm',
      body: '!p-0',
      content: '!p-0',
    }"
  >
    <template #content>
      <div class="flex flex-col items-center px-8 pt-8">
        <Avatar
          label="B"
          shape="square"
          aria-label="Benutzername"
          :pt="{ root: '!h-24 !w-24 !bg-surface-200 !text-2xl !text-surface-700' }"
        />
        <h1 class="mt-3 text-xl font-normal text-black">Benutzername</h1>
      </div>

      <Tabs v-model:value="activeTab" class="mt-8">
        <TabList class="px-4">
          <Tab value="profile">Profil</Tab>
          <Tab value="information">Informationen</Tab>
          <Tab value="security">Sicherheit</Tab>
          <Tab value="activity">Aktivität</Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="profile">
            <p class="m-0 px-8 pb-7 pt-3 text-sm leading-6 text-surface-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="information">
            <p class="m-0 px-8 pb-7 pt-3 text-sm leading-6 text-surface-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="security">
            <p class="m-0 px-8 pb-7 pt-3 text-sm leading-6 text-surface-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="activity">
            <p class="m-0 px-8 pb-7 pt-3 text-sm leading-6 text-surface-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </template>
  </Card>
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