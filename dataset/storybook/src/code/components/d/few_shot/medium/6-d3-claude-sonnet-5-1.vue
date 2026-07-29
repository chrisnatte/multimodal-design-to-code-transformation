<template>
  <Card
    :pt="{
      body: 'flex flex-col items-center !p-0 gap-3 pb-4',
      content: 'w-full !p-0',
    }"
    class="w-lg"
  >
    <template #content>
      <div class="flex flex-col items-center gap-3 py-4">
        <Avatar label="B" size="xlarge" />
        <span class="text-2xl">Benutzername</span>
      </div>
      <Tabs value="Informationen">
        <TabList>
          <Tab value="Profil">Profil</Tab>
          <Tab value="Informationen">Informationen</Tab>
          <Tab value="Sicherheit">Sicherheit</Tab>
          <Tab value="Aktivität">Aktivität</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="Profil">
            <p class="m-0 text-sm">Profil Inhalt</p>
          </TabPanel>
          <TabPanel value="Informationen">
            <p class="m-0 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="Sicherheit">
            <p class="m-0 text-sm">Sicherheit Inhalt</p>
          </TabPanel>
          <TabPanel value="Aktivität">
            <p class="m-0 text-sm">Aktivität Inhalt</p>
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