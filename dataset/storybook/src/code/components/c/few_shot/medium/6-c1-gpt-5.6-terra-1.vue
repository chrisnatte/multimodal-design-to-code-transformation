<template>
  <Card
    :pt="{
      root: 'w-full max-w-[490px] rounded-xl',
      body: '!p-0',
      content: '!p-0',
    }"
  >
    <template #content>
      <div class="flex flex-col items-center px-8 pt-2">
        <Avatar
          label="B"
          shape="square"
          class="!h-24 !w-24 !bg-slate-200 !text-3xl !text-slate-700"
        />
        <h1 class="mt-3 text-xl font-normal text-black">Benutzername</h1>
      </div>

      <Tabs v-model:value="activeTab" class="mt-10">
        <TabList class="px-4">
          <Tab value="profil">Profil</Tab>
          <Tab value="informationen">Informationen</Tab>
          <Tab value="sicherheit">Sicherheit</Tab>
          <Tab value="aktivität">Aktivität</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="profil">
            <p class="px-4 pb-7 pt-3 text-sm leading-6 text-slate-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="informationen" />
          <TabPanel value="sicherheit" />
          <TabPanel value="aktivität" />
        </TabPanels>
      </Tabs>
    </template>
  </Card>
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

const activeTab = ref('profil')
</script>