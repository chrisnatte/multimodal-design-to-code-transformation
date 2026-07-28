<template>
  <Dialog v-model:visible="visible" modal header="Neues Projekt" :style="{ width: '28rem' }">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">1 - Allgemein</Tab>
        <Tab value="1">2 - Zeitplan</Tab>
        <Tab value="2">3 - Einstellungen</Tab>
      </TabList>
      <TabPanels class="pt-4">
        <TabPanel value="0">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="projektname" class="text-sm font-medium text-gray-700">Projektname</label>
              <InputText id="projektname" v-model="projektname" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="kategorie" class="text-sm font-medium text-gray-700">Kategorie</label>
              <Select id="kategorie" v-model="kategorie" :options="kategorien" optionLabel="name" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="verantwortlicher" class="text-sm font-medium text-gray-700">Verantwortlicher</label>
              <Select id="verantwortlicher" v-model="verantwortlicher" :options="verantwortliche" optionLabel="name">
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700">
                      {{ slotProps.value.initials }}
                    </div>
                    <span>{{ slotProps.value.name }}</span>
                  </div>
                  <span v-else>{{ slotProps.placeholder }}</span>
                </template>
                <template #option="slotProps">
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700">
                      {{ slotProps.option.initials }}
                    </div>
                    <span>{{ slotProps.option.name }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="py-4 text-gray-500">Zeitplan Inhalt</div>
        </TabPanel>
        <TabPanel value="2">
          <div class="py-4 text-gray-500">Einstellungen Inhalt</div>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <div class="flex justify-end gap-2 mt-6">
      <Button label="Abbrechen" severity="secondary" @click="visible = false" />
      <Button label="Weiter" severity="success" @click="nextStep" />
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Button from 'primevue/button';

const visible = ref(true);
const activeTab = ref('0');
const projektname = ref('');
const kategorie = ref({ name: 'Entwicklung' });
const verantwortlicher = ref({ name: 'Max Mustmann', initials: 'M' });

const kategorien = ref([
  { name: 'Entwicklung' },
  { name: 'Design' },
  { name: 'Marketing' }
]);

const verantwortliche = ref([
  { name: 'Max Mustmann', initials: 'M' },
  { name: 'Anna Schmidt', initials: 'A' }
]);

const nextStep = () => {
  const next = String(Number(activeTab.value) + 1);
  if (next <= '2') {
    activeTab.value = next;
  }
};
</script>