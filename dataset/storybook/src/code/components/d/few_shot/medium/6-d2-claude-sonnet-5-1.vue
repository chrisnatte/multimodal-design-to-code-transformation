<template>
  <div class="flex justify-center p-6">
    <Card
      :pt="{
        body: 'flex flex-col items-center !gap-3',
        content: 'w-full',
      }"
      class="w-lg"
    >
      <template #content>
        <Avatar label="B" size="xlarge" class="mb-2" />
        <h2 class="mb-4 text-2xl">Benutzername</h2>
        <Tabs value="1">
          <TabList>
            <Tab value="0">Profil</Tab>
            <Tab value="1">Informationen</Tab>
            <Tab value="2">Sicherheit</Tab>
            <Tab value="3">Aktivität</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <p class="m-0 text-sm">Profil Inhalt</p>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0 text-sm">Sicherheit Inhalt</p>
            </TabPanel>
            <TabPanel value="3">
              <p class="m-0 text-sm">Aktivität Inhalt</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>
    </Card>
  </div>
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