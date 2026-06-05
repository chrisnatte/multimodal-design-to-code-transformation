<template>
  <div class="w-[560px] min-h-[498px] bg-white p-6">
    <Tabs v-model:value="state.activeTab" class="w-full">
      <TabList class="border-b border-slate-200">
        <Tab value="profile" class="!px-4 !py-3">
          <div class="flex items-center gap-2 font-bold text-sm">
            <i class="pi pi-user-edit text-emerald-500"></i>
            <span>Profil &amp; Konto</span>
          </div>
        </Tab>
        <Tab value="security" class="!px-4 !py-3">
          <div class="flex items-center gap-2 font-bold text-sm">
            <i class="pi pi-shield text-slate-500"></i>
            <span>Sicherheit &amp; Präferenzen</span>
          </div>
        </Tab>
      </TabList>

      <TabPanels class="pt-3">
        <TabPanel value="profile">
          <div class="flex flex-col gap-5 px-4 py-3">
            <div class="relative w-14 h-14 rounded-md bg-slate-200 flex items-center justify-center">
              <span class="text-4xl text-slate-700 leading-none">P</span>
              <Button label="Edit" size="small" class="!absolute -top-3 -right-7 !py-1 !px-3 !text-xs" />
            </div>

            <div class="flex flex-col gap-2 w-[270px]">
              <label class="text-[30:37296] text-slate-700">Benutzername</label>
              <InputText v-model="state.username" placeholder="Benutzername eingeben" class="w-full" />
            </div>

            <div class="w-[270px]">
              <Textarea v-model="state.bio" placeholder="Informationen über dich...." rows="4" class="w-full" />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="state.publicVisible" />
              <span class="text-slate-700">Öffentlich sichtbar</span>
            </div>

            <Button label="Speichern" class="w-fit" />
          </div>
        </TabPanel>

        <TabPanel value="security">
          <div class="px-4 py-3 text-slate-500 text-sm">Sicherheit &amp; Präferenzen</div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';

const state = reactive({
  activeTab: 'profile',
  username: '',
  bio: '',
  publicVisible: false
});
</script>