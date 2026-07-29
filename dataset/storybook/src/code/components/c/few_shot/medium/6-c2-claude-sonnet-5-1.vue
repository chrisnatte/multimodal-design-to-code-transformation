<template>
  <Card
    :pt="{
      body: 'flex flex-col items-center gap-4 !p-6',
      content: '!w-full',
    }"
  >
    <template #content>
      <Avatar label="B" size="xlarge" />
      <span class="text-xl">Benutzername</span>
      <Tabs value="1" class="w-full">
        <TabList>
          <Tab value="0">Profil</Tab>
          <Tab value="1">Informationen</Tab>
          <Tab value="2">Sicherheit</Tab>
          <Tab value="3">Aktivität</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="m-0 text-sm text-gray-600">Profil Inhalt</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0 text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="2">
            <p class="m-0 text-sm text-gray-600">Sicherheit Inhalt</p>
          </TabPanel>
          <TabPanel value="3">
            <p class="m-0 text-sm text-gray-600">Aktivität Inhalt</p>
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