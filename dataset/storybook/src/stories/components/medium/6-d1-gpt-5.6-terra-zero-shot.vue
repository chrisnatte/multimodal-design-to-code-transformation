<template>
  <main class="flex min-h-screen items-start justify-center bg-white p-6">
    <Card
      class="w-full max-w-[488px] overflow-hidden rounded-xl border border-slate-100 shadow-sm"
      :pt="{
        body: { class: 'p-0' },
        content: { class: 'p-0' }
      }"
    >
      <template #content>
        <div class="flex flex-col gap-[7px]">
          <header class="flex h-[157px] flex-col items-center gap-3 p-2.5">
            <Avatar
              label="B"
              size="xlarge"
              class="h-24 w-24 rounded-md bg-slate-200 text-[28px] font-normal text-slate-700"
            />
            <h1 class="m-0 text-2xl font-normal leading-[29px] text-black">
              Benutzername
            </h1>
          </header>

          <section class="h-[270px] rounded-md p-[17.5px]">
            <Tabs v-model:value="activeTab" class="h-full">
              <TabList class="h-[46px] border-b border-slate-200">
                <Tab value="profile" class="w-[68.5px] text-sm font-bold">
                  Profil
                </Tab>
                <Tab value="information" class="w-[128.5px] text-sm font-bold">
                  Informationen
                </Tab>
                <Tab value="security" class="w-[102.5px] text-sm font-bold">
                  Sicherheit
                </Tab>
                <Tab value="activity" class="w-[90.5px] text-sm font-bold">
                  Aktivität
                </Tab>
              </TabList>

              <TabPanels class="h-[189px]">
                <TabPanel value="information" class="h-full px-[15.7px] py-[12.3px]">
                  <p class="m-0 text-sm font-normal leading-[23px] text-slate-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </section>
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