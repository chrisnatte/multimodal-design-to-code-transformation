<template>
  <div class="flex w-[536px] flex-col gap-2.5 bg-white p-6">
    <div class="flex w-[488px] flex-col gap-[7px] rounded-xl bg-white">
      <div class="flex h-[157px] flex-col items-center gap-3 p-2.5">
        <Avatar
          label="B"
          size="xlarge"
          class="!h-24 !w-24 !bg-[#e2e8f0] !text-[28px]"
          aria-label="Benutzername"
        />
        <span class="text-2xl font-normal">Benutzername</span>
      </div>

      <div class="flex flex-col gap-[7px] rounded-md p-[17.5px]">
        <Tabs v-model:value="activeTab" class="w-full">
          <TabList>
            <Tab value="profil">Profil</Tab>
            <Tab value="informationen">Informationen</Tab>
            <Tab value="sicherheit">Sicherheit</Tab>
            <Tab value="aktivitaet">Aktivität</Tab>
          </TabList>

          <TabPanels>
            <TabPanel value="profil" />
            <TabPanel value="informationen">
              <p class="m-0 text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="sicherheit" />
            <TabPanel value="aktivitaet" />
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'

const activeTab = ref('informationen')
</script>