<template>
  <main class="flex min-h-screen items-center justify-center bg-white p-6">
    <Card
      class="w-full max-w-[488px] rounded-xl border border-slate-100 shadow-sm [&_.p-card-body]:p-8 [&_.p-card-content]:p-0"
    >
      <div class="flex flex-col items-center">
        <Avatar
          label="B"
          class="h-24 w-24 bg-slate-200 text-3xl font-normal text-slate-700"
        />

        <h1 class="mt-3 text-2xl font-normal text-black">Benutzername</h1>
      </div>

      <Tabs v-model:value="activeTab" class="mt-10 [&_.p-tabpanels]:p-0">
        <TabList>
          <Tab value="profile" class="px-4 text-sm font-semibold">Profil</Tab>
          <Tab value="information" class="px-4 text-sm font-semibold">Informationen</Tab>
          <Tab value="security" class="px-4 text-sm font-semibold">Sicherheit</Tab>
          <Tab value="activity" class="px-4 text-sm font-semibold">Aktivität</Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="profile">
            <p class="pt-4 text-sm leading-[1.65] text-slate-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>

          <TabPanel value="information">
            <p class="pt-4 text-sm leading-[1.65] text-slate-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>

          <TabPanel value="security">
            <p class="pt-4 text-sm leading-[1.65] text-slate-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>

          <TabPanel value="activity">
            <p class="pt-4 text-sm leading-[1.65] text-slate-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Card from 'primevue/card'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const activeTab = ref('information')
</script>