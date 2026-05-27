<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <Card class="w-full max-w-2xl">
      <template #content>
        <div class="flex flex-col items-center gap-10 py-2">
          <div class="flex flex-col items-center gap-4">
            <Avatar
              :label="state.avatarLabel"
              size="xlarge"
              class="!w-24 !h-24 !text-5xl"
              style="background-color: #d1d5db; color: #334155"
            />
            <h1 class="text-5xl font-normal text-gray-900 leading-none">{{ state.username }}</h1>
          </div>

          <div class="w-full">
            <Tabs v-model:value="state.activeTab">
              <TabList>
                <Tab value="profil">Profil</Tab>
                <Tab value="informationen">Informationen</Tab>
                <Tab value="sicherheit">Sicherheit</Tab>
                <Tab value="aktivität">Aktivität</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="profil">
                  <p class="m-0 text-2xl leading-relaxed text-slate-700">
                    {{ loremText }}
                  </p>
                </TabPanel>
                <TabPanel value="informationen">
                  <p class="m-0 text-2xl leading-relaxed text-slate-700">
                    {{ loremText }}
                  </p>
                </TabPanel>
                <TabPanel value="sicherheit">
                  <p class="m-0 text-2xl leading-relaxed text-slate-700">
                    {{ loremText }}
                  </p>
                </TabPanel>
                <TabPanel value="aktivität">
                  <p class="m-0 text-2xl leading-relaxed text-slate-700">
                    {{ loremText }}
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
  username: 'Benutzername',
  activeTab: 'informationen'
});

const loremText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
</script>