<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <Card class="w-full max-w-[760px] rounded-xl shadow-sm">
      <template #content>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col items-center gap-3 px-3 pt-3 pb-2.5">
            <Avatar label="B" shape="square" size="xlarge" class="bg-slate-200 text-slate-600" />
            <div class="text-[38px] leading-tight font-normal text-black">Benutzername</div>
          </div>

          <div class="flex flex-col gap-2 p-4">
            <Tabs value="1">
              <TabList>
                <Tab value="0">Profil</Tab>
                <Tab value="1">Informationen</Tab>
                <Tab value="2">Sicherheit</Tab>
                <Tab value="3">Aktivität</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="0">
                  <p class="text-slate-700 text-[33px] leading-[1.6] m-0">
                    Profil Inhalte.
                  </p>
                </TabPanel>
                <TabPanel value="1">
                  <p class="text-slate-700 text-[33px] leading-[1.6] m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </TabPanel>
                <TabPanel value="2">
                  <p class="text-slate-700 text-[33px] leading-[1.6] m-0">
                    Sicherheit Inhalte.
                  </p>
                </TabPanel>
                <TabPanel value="3">
                  <p class="text-slate-700 text-[33px] leading-[1.6] m-0">
                    Aktivität Inhalte.
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