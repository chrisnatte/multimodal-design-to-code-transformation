<template>
  <Card
    :pt="{
      root: 'w-sm p-6',
      body: '!p-0 gap-4',
      content: '!p-0',
    }"
  >
    <template #content>
      <div class="flex flex-col items-center gap-3">
        <Avatar label="B" size="xlarge" shape="square" class="!h-16 !w-16 !text-xl" />
        <span class="text-xl text-black">Benutzername</span>
      </div>
      <Tabs value="0" class="mt-4">
        <TabList>
          <Tab value="0">Profil</Tab>
          <Tab value="1">Informationen</Tab>
          <Tab value="2">Sicherheit</Tab>
          <Tab value="3">Aktivität</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="text-sm leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-sm leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-sm leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </TabPanel>
          <TabPanel value="3">
            <p class="text-sm leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import Card from 'primevue/card'
  import Avatar from 'primevue/avatar'
  import Tabs from 'primevue/tabs'
  import TabList from 'primevue/tablist'
  import Tab from 'primevue/tab'
  import TabPanels from 'primevue/tabpanels'
  import TabPanel from 'primevue/tabpanel'
</script>