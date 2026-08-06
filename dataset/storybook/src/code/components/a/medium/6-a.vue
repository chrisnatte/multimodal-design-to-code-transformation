<template>
  <div class="flex flex-col gap-2.5 p-6">
    <Card>
      <template #header>
        <Avatar label="B" size="xlarge" />
        <span class="text-2xl">Benutzername</span>
      </template>
      <Tabs value="0">
        <TabList>
          <Tab value="0">Profil</Tab>
          <Tab value="1">Informationen</Tab>
          <Tab value="2">Sicherheit</Tab>
          <Tab value="3">Aktivität</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0" />
        </TabPanels>
      </Tabs>
    </Card>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Card from 'primevue/card'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
</script>
