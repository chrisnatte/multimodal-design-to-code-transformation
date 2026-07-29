<template>
  <div class="flex justify-center p-6">
    <Card class="w-[488px]" :pt="{ body: '!p-0', content: '!p-0' }">
      <template #content>
        <div class="flex flex-col items-center gap-3 p-6">
          <Avatar label="B" size="xlarge" class="!h-24 !w-24 !text-2xl" />
          <span class="text-2xl">Benutzername</span>
        </div>
        <div class="px-4">
          <Tabs v-model:value="activeTab">
            <TabList>
              <Tab value="profil">Profil</Tab>
              <Tab value="informationen">Informationen</Tab>
              <Tab value="sicherheit">Sicherheit</Tab>
              <Tab value="aktivitaet">Aktivität</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="profil">
                <p class="text-sm leading-relaxed">{{ loremText }}</p>
              </TabPanel>
              <TabPanel value="informationen">
                <p class="text-sm leading-relaxed">{{ loremText }}</p>
              </TabPanel>
              <TabPanel value="sicherheit">
                <p class="text-sm leading-relaxed">{{ loremText }}</p>
              </TabPanel>
              <TabPanel value="aktivitaet">
                <p class="text-sm leading-relaxed">{{ loremText }}</p>
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
  import Card from 'primevue/card'
  import Avatar from 'primevue/avatar'
  import Tabs from 'primevue/tabs'
  import TabList from 'primevue/tablist'
  import Tab from 'primevue/tab'
  import TabPanels from 'primevue/tabpanels'
  import TabPanel from 'primevue/tabpanel'

  const activeTab = ref('informationen')

  const loremText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
</script>