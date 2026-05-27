<template>
  <div class="min-h-screen bg-gray-100 p-6 flex items-start justify-center">
    <Card class="w-full max-w-3xl rounded-2xl">
      <template #content>
        <div class="flex flex-col items-center gap-6 py-2">
          <Avatar
            label="B"
            size="xlarge"
            class="!w-24 !h-24 !text-4xl !bg-slate-200 !text-slate-700 !rounded-xl"
          />
          <h1 class="text-4xl font-normal text-gray-900">Benutzername</h1>

          <div class="w-full mt-4">
            <Tabs v-model:value="state.activeTab" value="1">
              <TabList>
                <Tab value="0">Profil</Tab>
                <Tab value="1">Informationen</Tab>
                <Tab value="2">Sicherheit</Tab>
                <Tab value="3">Aktivität</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="0">
                  <p class="m-0 text-2xl leading-relaxed text-slate-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </TabPanel>
                <TabPanel value="1">
                  <p class="m-0 text-2xl leading-relaxed text-slate-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                  </p>
                </TabPanel>
                <TabPanel value="2">
                  <p class="m-0 text-2xl leading-relaxed text-slate-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </TabPanel>
                <TabPanel value="3">
                  <p class="m-0 text-2xl leading-relaxed text-slate-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
  activeTab: '1'
})
</script>