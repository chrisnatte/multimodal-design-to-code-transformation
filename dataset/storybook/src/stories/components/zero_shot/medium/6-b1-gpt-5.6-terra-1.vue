<template>
  <div class="flex w-[536px] flex-col gap-2.5 bg-white p-6">
    <div class="flex w-full flex-col gap-[7px] rounded-xl bg-white">
      <div class="flex flex-col items-center gap-3 px-2.5 py-2.5">
        <Avatar label="B" class="h-24 w-24 bg-[#e2e8f0] text-[28px] text-surface-900" />
        <span class="text-2xl font-normal text-surface-900">Benutzername</span>
      </div>

      <div class="flex flex-col gap-[7px] rounded-md px-[17.5px] py-[17.5px]">
        <Tabs v-model:value="activeTab" class="w-full">
          <TabList>
            <Tab value="profil">Profil</Tab>
            <Tab value="informationen">Informationen</Tab>
            <Tab value="sicherheit">Sicherheit</Tab>
            <Tab value="aktivitaet">Aktivität</Tab>
          </TabList>

          <TabPanels>
            <TabPanel value="informationen">
              <div class="flex min-h-[161px] items-center justify-center">
                <span class="text-sm font-normal leading-normal text-surface-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const activeTab = ref('informationen')
</script>