<template>
  <Card
    :pt="{
      root: 'w-lg',
      body: '!p-2.5 gap-1.5',
    }"
  >
    <template #header>
      <div class="flex flex-col items-center gap-3 p-2.5">
        <Avatar label="B" size="xlarge" />
        <span class="text-2xl">Benutzername</span>
      </div>
    </template>
    <template #content>
      <div class="rounded-md p-4">
        <Tabs value="0">
          <TabList>
            <Tab value="0">Profil</Tab>
            <Tab value="1">Informationen</Tab>
            <Tab value="2">Sicherheit</Tab>
            <Tab value="3">Aktivität</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <p class="m-0 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0 text-center">Informationen Inhalt</p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0 text-center">Sicherheit Inhalt</p>
            </TabPanel>
            <TabPanel value="3">
              <p class="m-0 text-center">Aktivität Inhalt</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
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