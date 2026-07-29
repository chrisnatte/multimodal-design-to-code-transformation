<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <div class="flex flex-col gap-1.5 bg-white rounded-xl w-[488px]">
      <div class="flex flex-col items-center gap-3 p-2.5 pb-2.5">
        <Avatar label="B" size="xlarge" shape="square" class="!w-24 !h-24 !text-3xl !bg-[#e2e8f0]" />
        <span class="text-2xl font-normal font-inter">Benutzername</span>
      </div>
      <div class="flex flex-col gap-1.5 p-[17.5px] rounded-md">
        <Tabs value="1">
          <TabList>
            <Tab value="0">Profil</Tab>
            <Tab value="1">Informationen</Tab>
            <Tab value="2">Sicherheit</Tab>
            <Tab value="3">Aktivität</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <p class="m-0 text-sm font-normal font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0 text-sm font-normal font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0 text-sm font-normal font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="3">
              <p class="m-0 text-sm font-normal font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
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