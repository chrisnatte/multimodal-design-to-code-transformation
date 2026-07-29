<template>
  <main class="flex min-h-screen items-start justify-center bg-white px-6 pt-6">
    <Card class="w-full max-w-[488px] rounded-xl border border-surface-100 shadow-sm">
      <template #content>
        <div class="flex flex-col items-center">
          <Avatar
            label="B"
            shape="square"
            class="h-24 w-24 rounded-md bg-slate-200 text-3xl font-normal text-slate-700"
          />

          <h1 class="mt-3 text-2xl font-normal text-black">Benutzername</h1>

          <Tabs v-model:value="activeTab" class="mt-10 w-full">
            <TabList
              class="border-b border-surface-200"
              :pt="{
                tablist: { class: 'border-0' },
                activeBar: { class: 'bg-emerald-400 h-[2px]' }
              }"
            >
              <Tab
                value="profile"
                class="px-4 pb-3 pt-0 text-sm font-semibold text-slate-500"
              >
                Profil
              </Tab>
              <Tab
                value="information"
                class="px-4 pb-3 pt-0 text-sm font-semibold text-emerald-500"
              >
                Informationen
              </Tab>
              <Tab
                value="security"
                class="px-4 pb-3 pt-0 text-sm font-semibold text-slate-500"
              >
                Sicherheit
              </Tab>
              <Tab
                value="activity"
                class="px-4 pb-3 pt-0 text-sm font-semibold text-slate-500"
              >
                Aktivität
              </Tab>
            </TabList>

            <TabPanels class="pt-3">
              <TabPanel value="profile" class="p-0" />
              <TabPanel value="information" class="p-0">
                <p class="text-[15px] leading-[23px] text-slate-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </TabPanel>
              <TabPanel value="security" class="p-0" />
              <TabPanel value="activity" class="p-0" />
            </TabPanels>
          </Tabs>
        </div>
      </template>
    </Card>
  </main>
</template>

<script setup>
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