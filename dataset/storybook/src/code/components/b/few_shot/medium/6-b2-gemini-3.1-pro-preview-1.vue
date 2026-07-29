<template>
  <div class="flex flex-col bg-white p-6">
    <Card
      :pt="{
        root: 'rounded-xl bg-white shadow-none',
        body: '!p-0',
        content: 'flex flex-col gap-[7px] p-[17.5px]',
      }"
    >
      <template #header>
        <div class="flex flex-col items-center gap-3 p-2.5">
          <Avatar
            label="B"
            size="xlarge"
            class="!h-24 !w-24 bg-[#e2e8f0] !text-[28px]"
          />
          <span class="text-2xl font-normal">Benutzername</span>
        </div>
      </template>
      <template #content>
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="Profil">Profil</Tab>
            <Tab value="Informationen">Informationen</Tab>
            <Tab value="Sicherheit">Sicherheit</Tab>
            <Tab value="Aktivität">Aktivität</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="Informationen">
              <p class="m-0 text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const activeTab = ref('Informationen')
</script>