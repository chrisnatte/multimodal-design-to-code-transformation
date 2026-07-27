<template>
  <div class="flex w-[488px] flex-col gap-[7px] rounded-xl bg-white">
    <header class="flex h-[157px] flex-col items-center gap-3 p-2.5">
      <Avatar
        label="B"
        size="xlarge"
        shape="square"
        class="!h-24 !w-24 !bg-slate-200 !text-[28px] !font-normal !text-slate-900"
      />
      <span class="text-[24px] font-normal leading-[29px] text-slate-900">Benutzername</span>
    </header>

    <section class="rounded-md p-[17.5px]">
      <Tabs v-model:value="activeTab" class="w-full">
        <TabList>
          <Tab value="profil" class="!text-[14px] !font-bold">Profil</Tab>
          <Tab value="informationen" class="!text-[14px] !font-bold">Informationen</Tab>
          <Tab value="sicherheit" class="!text-[14px] !font-bold">Sicherheit</Tab>
          <Tab value="aktivitaet" class="!text-[14px] !font-bold">Aktivität</Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="informationen">
            <div class="flex min-h-[161px] items-center">
              <span class="text-[14px] font-normal leading-normal text-slate-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </span>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'

const activeTab = ref('informationen')
</script>