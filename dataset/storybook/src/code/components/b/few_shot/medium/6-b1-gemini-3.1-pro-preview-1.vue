<template>
  <div class="flex flex-col bg-white p-6">
    <div class="flex flex-col rounded-xl bg-white">
      <div class="flex flex-col items-center gap-3 p-2.5">
        <Avatar label="B" size="xlarge" class="!bg-slate-200 !text-2xl" />
        <span class="text-2xl text-black">Benutzername</span>
      </div>
      <div class="flex flex-col rounded-md p-4">
        <Tabs value="Informationen">
          <TabList>
            <Tab value="Profil">Profil</Tab>
            <Tab value="Informationen">Informationen</Tab>
            <Tab value="Sicherheit">Sicherheit</Tab>
            <Tab value="Aktivität">Aktivität</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="Informationen">
              <p class="text-sm text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Avatar from 'primevue/avatar'
  import Tabs from 'primevue/tabs'
  import TabList from 'primevue/tablist'
  import Tab from 'primevue/tab'
  import TabPanels from 'primevue/tabpanels'
  import TabPanel from 'primevue/tabpanel'
</script>