<template>
  <div class="p-6 bg-white flex justify-center">
    <Card class="w-full max-w-[536px] shadow-sm border border-surface-200 rounded-xl">
      <template #content>
        <div class="flex flex-col items-center pt-4 pb-2">
          <Avatar 
            label="B" 
            class="w-24 h-24 text-3xl bg-slate-200 text-slate-700 rounded-xl" 
          />
          <h2 class="text-2xl font-normal text-surface-900 mt-6 mb-2">
            Benutzername
          </h2>
        </div>

        <div class="mt-2">
          <Tabs v-model:value="activeTab">
            <TabList>
              <Tab value="0">Profil</Tab>
              <Tab value="1">Informationen</Tab>
              <Tab value="2">Sicherheit</Tab>
              <Tab value="3">Aktivität</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <p class="m-0 text-surface-600 leading-relaxed">
                  Profil content goes here.
                </p>
              </TabPanel>
              <TabPanel value="1">
                <p class="m-0 text-surface-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </TabPanel>
              <TabPanel value="2">
                <p class="m-0 text-surface-600 leading-relaxed">
                  Sicherheit content goes here.
                </p>
              </TabPanel>
              <TabPanel value="3">
                <p class="m-0 text-surface-600 leading-relaxed">
                  Aktivität content goes here.
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
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

const activeTab = ref('1')
</script>