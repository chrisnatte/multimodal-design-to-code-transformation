<template>
  <div class="p-6">
    <Card
      :pt="{
        root: 'w-[488px] rounded-xl bg-white',
        header: 'flex flex-col items-center gap-3 p-2.5 pb-2.5',
        body: 'flex flex-col gap-[7px] p-[17.5px] rounded-md',
        content: '!p-0',
      }"
    >
      <template #header>
        <Avatar
          label="B"
          size="xlarge"
          shape="square"
          :pt="{
            root: 'w-24 h-24 bg-[#e2e8f0] rounded-md',
            label: 'text-[28px] font-normal text-black',
          }"
        />
        <span class="text-2xl font-normal text-black">Benutzername</span>
      </template>
      <template #content>
        <Tabs value="1">
          <TabList>
            <Tab value="0">Profil</Tab>
            <Tab value="1">Informationen</Tab>
            <Tab value="2">Sicherheit</Tab>
            <Tab value="3">Aktivität</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <p class="m-0 text-sm font-normal text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0 text-sm font-normal text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0 text-sm font-normal text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel value="3">
              <p class="m-0 text-sm font-normal text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
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