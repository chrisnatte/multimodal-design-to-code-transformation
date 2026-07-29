<template>
  <Card
    :pt="{
      root: 'w-full max-w-lg overflow-hidden',
      header: 'flex flex-col items-center p-2.5 gap-3',
    }"
  >
    <template #header>
      <Avatar
        label="B"
        :pt="{
          root: '!size-24',
          label: 'text-3xl',
        }"
      />
      <h1 class="text-2xl">Benutzername</h1>
    </template>

    <template #content>
      <Tabs value="1">
        <TabList>
          <Tab value="0">Profil</Tab>
          <Tab value="1">Information</Tab>
          <Tab value="2">Sicherheit</Tab>
          <Tab value="3">Aktivitäten</Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import Tab from 'primevue/tab'
  import Card from 'primevue/card'
  import Tabs from 'primevue/tabs'
  import Avatar from 'primevue/avatar'
  import TabList from 'primevue/tablist'
  import TabPanel from 'primevue/tabpanel'
  import TabPanels from 'primevue/tabpanels'
</script>
