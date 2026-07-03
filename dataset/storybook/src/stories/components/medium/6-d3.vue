<template>
  <div class="min-h-screen bg-slate-100 flex items-center justify-center p-6">
    <Card class="w-full max-w-2xl rounded-xl shadow-sm border border-slate-200">
      <template #content>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col items-center gap-3 p-3 pb-2.5">
            <Avatar label="B" size="xlarge" class="bg-slate-300 text-slate-700" />
            <h1 class="text-4xl font-normal text-slate-900 leading-tight">Benutzername</h1>
          </div>

          <div class="flex flex-col gap-2 p-4">
            <Tabs v-model:value="state.activeTab" class="w-full">
              <TabList>
                <Tab value="profil" class="font-bold text-sm">Profil</Tab>
                <Tab value="informationen" class="font-bold text-sm">Informationen</Tab>
                <Tab value="sicherheit" class="font-bold text-sm">Sicherheit</Tab>
                <Tab value="aktivitaet" class="font-bold text-sm">Aktivität</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="profil">
                  <p class="m-0 text-slate-700 text-2xl leading-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </TabPanel>
                <TabPanel value="informationen">
                  <p class="m-0 text-slate-700 text-2xl leading-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </TabPanel>
                <TabPanel value="sicherheit">
                  <p class="m-0 text-slate-700 text-2xl leading-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </TabPanel>
                <TabPanel value="aktivitaet">
                  <p class="m-0 text-slate-700 text-2xl leading-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
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