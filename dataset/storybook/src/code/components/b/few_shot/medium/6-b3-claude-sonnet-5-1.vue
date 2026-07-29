<template>
  <div class="flex w-fit flex-col gap-2.5 p-6">
    <Card
      :pt="{
        body: 'flex flex-col gap-2 !p-0',
        content: 'flex flex-col gap-2',
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
          <Tabs value="Informationen">
            <TabList>
              <Tab value="Profil">Profil</Tab>
              <Tab value="Informationen">Informationen</Tab>
              <Tab value="Sicherheit">Sicherheit</Tab>
              <Tab value="Aktivität">Aktivität</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="Profil">
                <p class="flex items-center justify-center text-sm">{{ loremText }}</p>
              </TabPanel>
              <TabPanel value="Informationen">
                <p class="flex items-center justify-center text-sm">{{ loremText }}</p>
              </TabPanel>
              <TabPanel value="Sicherheit">
                <p class="flex items-center justify-center text-sm">{{ loremText }}</p>
              </TabPanel>
              <TabPanel value="Aktivität">
                <p class="flex items-center justify-center text-sm">{{ loremText }}</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
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

  const loremText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
</script>