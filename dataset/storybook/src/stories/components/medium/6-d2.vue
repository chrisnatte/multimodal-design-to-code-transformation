<template>
  <div class="min-h-screen bg-gray-100 flex items-start justify-center p-6">
    <Card class="w-full max-w-[820px] rounded-xl shadow-sm border border-gray-200">
      <template #content>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col items-center gap-3 px-3 py-3 pb-2.5">
            <Avatar
              :label="state.avatarLabel"
              size="xlarge"
              class="!w-24 !h-24 !text-4xl !bg-slate-200 !text-slate-700"
              shape="square"
            />
            <h1 class="text-[42px] leading-tight font-normal text-gray-900">Benutzername</h1>
          </div>

          <div class="flex flex-col rounded-md p-4 pt-2">
            <Tabs v-model:value="state.activeTab">
              <TabList>
                <Tab value="profil" class="font-bold">Profil</Tab>
                <Tab value="informationen" class="font-bold">Informationen</Tab>
                <Tab value="sicherheit" class="font-bold">Sicherheit</Tab>
                <Tab value="aktivitat" class="font-bold">Aktivität</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="profil">
                  <p class="m-0 text-[34px] leading-[1.55] text-slate-700">
                    {{ state.content }}
                  </p>
                </TabPanel>
                <TabPanel value="informationen">
                  <p class="m-0 text-[34px] leading-[1.55] text-slate-700">
                    {{ state.content }}
                  </p>
                </TabPanel>
                <TabPanel value="sicherheit">
                  <p class="m-0 text-[34px] leading-[1.55] text-slate-700">
                    {{ state.content }}
                  </p>
                </TabPanel>
                <TabPanel value="aktivitat">
                  <p class="m-0 text-[34px] leading-[1.55] text-slate-700">
                    {{ state.content }}
                  </p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const state = reactive({
  avatarLabel: 'B',
  activeTab: 'informationen',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});
</script>