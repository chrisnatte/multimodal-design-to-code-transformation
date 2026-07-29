<template>
  <div class="w-[536px] bg-white p-6">
    <Card
      class="w-full"
      :pt="{
        root: 'overflow-hidden',
        body: '!p-0 !gap-0',
        content: '!p-0',
      }"
    >
      <template #header>
        <div class="flex flex-col items-center gap-3 px-2.5 py-2.5 pb-2.5">
          <Avatar
            label="B"
            size="xlarge"
            class="!h-24 !w-24 !bg-[#e2e8f0] !text-[28px] !text-slate-700"
            aria-label="Benutzername"
          />
          <span class="text-2xl text-black">Benutzername</span>
        </div>
      </template>

      <template #content>
        <div class="p-[17.5px]">
          <Tabs v-model:value="activeTab">
            <TabList>
              <Tab value="profile">Profil</Tab>
              <Tab value="information">Informationen</Tab>
              <Tab value="security">Sicherheit</Tab>
              <Tab value="activity">Aktivität</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="information">
                <p class="m-0 text-sm leading-[23px] text-slate-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </template>
    </Card>
  </div>
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