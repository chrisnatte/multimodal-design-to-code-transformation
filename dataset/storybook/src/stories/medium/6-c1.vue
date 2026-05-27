<template>
  <div class="min-h-screen bg-gray-100 p-6 flex items-start justify-center">
    <Card class="w-full max-w-3xl shadow-sm rounded-2xl">
      <template #content>
        <div class="flex flex-col items-center gap-4 pt-2 pb-6">
          <Avatar
            :label="state.avatarLabel"
            shape="square"
            class="w-24 h-24 text-4xl bg-slate-300 text-slate-700 rounded-lg"
          />
          <h1 class="text-4xl font-normal text-gray-900 leading-tight">Benutzername</h1>
        </div>

        <Tabs v-model:value="state.activeTab" class="w-full">
          <TabList>
            <Tab value="profil" class="font-semibold">Profil</Tab>
            <Tab value="informationen" class="font-semibold">Informationen</Tab>
            <Tab value="sicherheit" class="font-semibold">Sicherheit</Tab>
            <Tab value="aktivitaet" class="font-semibold">Aktivität</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="profil">
              <p class="text-2xl leading-10 text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="informationen">
              <p class="text-2xl leading-10 text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="sicherheit">
              <p class="text-2xl leading-10 text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="aktivitaet">
              <p class="text-2xl leading-10 text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
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
  avatarLabel: 'B',
  activeTab: 'informationen'
})
</script>