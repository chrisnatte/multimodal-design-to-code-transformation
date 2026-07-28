<template>
  <div class="flex flex-col gap-2 bg-white rounded-xl shadow-sm w-[488px]">
    <div class="flex flex-col items-center gap-3 p-2.5">
      <Avatar label="B" shape="square" class="w-24 h-24 text-[28px] bg-slate-200 text-slate-700" />
      <span class="text-2xl font-normal text-slate-900">Benutzername</span>
    </div>
    <div class="flex flex-col gap-2 p-4 rounded-md">
      <Tabs v-model:value="activeTab" class="w-full">
        <TabList class="border-b border-slate-200">
          <Tab value="0" class="font-bold text-sm">Profil</Tab>
          <Tab value="1" class="font-bold text-sm">Informationen</Tab>
          <Tab value="2" class="font-bold text-sm">Sicherheit</Tab>
          <Tab value="3" class="font-bold text-sm">Aktivität</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0" />
          <TabPanel value="1">
            <p class="text-sm text-slate-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="2" />
          <TabPanel value="3" />
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>