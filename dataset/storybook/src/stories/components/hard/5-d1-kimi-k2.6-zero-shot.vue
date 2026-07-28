<template>
  <div v-show="visible" class="flex items-center justify-center min-h-screen bg-black/50 p-4">
    <div class="w-[512px] bg-white rounded-[12px] border border-slate-200 shadow-xl flex flex-col overflow-hidden">
      <div class="flex items-center justify-between px-[17.5px] py-[17.5px]">
        <span class="text-[17.5px] font-semibold text-slate-800">Neues Projekt</span>
        <Button icon="pi pi-times" text severity="secondary" @click="visible = false" />
      </div>
      <div class="px-[17.5px] pb-[17.5px]">
        <Tabs v-model:value="activeTab" class="w-full">
          <TabList class="border-b border-slate-200">
            <Tab value="0">1 - Allgemein</Tab>
            <Tab value="1">2 - Zeitplan</Tab>
            <Tab value="2">3 - Einstellungen</Tab>
          </TabList>
          <TabPanels class="pt-3 pb-0 px-1">
            <TabPanel value="0">
              <div class="flex flex-col gap-4 pt-1">
                <div class="flex flex-col gap-1.5">
                  <label for="projektname" class="text-sm font-medium text-slate-700">Projektname</label>
                  <InputText id="projektname" v-model="projektname" class="w-full" />
                </div>
                <div class="flex flex-col gap-1.5">
                  <label for="kategorie" class="text-sm font-medium text-slate-700">Kategorie</label>
                  <Select id="kategorie" v-model="kategorie" :options="kategorien" class="w-full" />
                </div>
                <div class="flex flex-col gap-1.5">
                  <label for="verantwortlicher" class="text-sm font-medium text-slate-700">Verantwortlicher</label>
                  <Select id="verantwortlicher" v-model="verantwortlicher" :options="verantwortliche" optionLabel="name" class="w-full">
                    <template #value="slotProps">
                      <div v-if="slotProps.value" class="flex items-center gap-2">
                        <Avatar :label="slotProps.value.initials" shape="circle" class="w-6 h-6 text-xs bg-slate-200 text-slate-700" />
                        <span class="text-sm text-slate-700">{{ slotProps.value.name }}</span>
                      </div>
                      <span v-else class="text-sm text-slate-500">Max Mustmann</span>
                    </template>
                    <template #option="slotProps">
                      <div class="flex items-center gap-2">
                        <Avatar :label="slotProps.option.initials" shape="circle" class="w-6 h-6 text-xs bg-slate-200 text-slate-700" />
                        <span class="text-sm text-slate-700">{{ slotProps.option.name }}</span>
                      </div>
                    </template>
                  </Select>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="flex items-center justify-center py-8 text-slate-400 text-sm">2 - Zeitplan</div>
            </TabPanel>
            <TabPanel value="2">
              <div class="flex items-center justify-center py-8 text-slate-400 text-sm">3 - Einstellungen</div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Weiter" severity="success" @click="handleWeiter" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Avatar from 'primevue/avatar';

const visible = ref(true);
const activeTab = ref('0');
const projektname = ref('');
const kategorie = ref('Entwicklung');
const kategorien = ref(['Entwicklung', 'Design', 'Marketing']);
const verantwortlicher = ref({ name: 'Max Mustmann', initials: 'M' });
const verantwortliche = ref([{ name: 'Max Mustmann', initials: 'M' }]);

function handleWeiter() {
  // Action for Weiter
}
</script>