<template>
  <Dialog v-model:visible="visible" modal header="Neues Projekt" :style="{ width: '512px' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <Tabs v-model:value="activeTab" class="w-full">
      <TabList>
        <Tab value="0">1 - Allgemein</Tab>
        <Tab value="1">2 - Zeitplan</Tab>
        <Tab value="2">3 - Einstellungen</Tab>
      </TabList>
      <TabPanels class="pt-5">
        <TabPanel value="0">
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-1.5">
              <label for="projektname" class="text-sm font-medium text-surface-700">Projektname</label>
              <InputText id="projektname" v-model="projektname" class="w-full" />
            </div>
            <div class="flex flex-col gap-1.5">
              <label for="kategorie" class="text-sm font-medium text-surface-700">Kategorie</label>
              <Select id="kategorie" v-model="kategorie" :options="kategorien" optionLabel="label" class="w-full" />
            </div>
            <div class="flex flex-col gap-1.5">
              <label for="verantwortlicher" class="text-sm font-medium text-surface-700">Verantwortlicher</label>
              <Select id="verantwortlicher" v-model="verantwortlicher" :options="verantwortliche" optionLabel="name" class="w-full">
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex items-center gap-2">
                    <Avatar :label="slotProps.value.initials" shape="circle" class="w-6 h-6 !text-xs bg-surface-200 text-surface-700" />
                    <span>{{ slotProps.value.name }}</span>
                  </div>
                  <span v-else>Max Mustmann</span>
                </template>
                <template #option="slotProps">
                  <div class="flex items-center gap-2">
                    <Avatar :label="slotProps.option.initials" shape="circle" class="w-6 h-6 !text-xs bg-surface-200 text-surface-700" />
                    <span>{{ slotProps.option.name }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="py-4 text-sm text-surface-500">Zeitplan Inhalt</div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col gap-5 py-2">
            <div class="flex items-center justify-between">
              <div class="flex flex-col gap-0.5">
                <span class="text-sm font-semibold text-surface-800">Öffentlich sichtbar</span>
                <span class="text-xs text-surface-500">Für alle Teammitglieder</span>
              </div>
              <ToggleSwitch v-model="isPublic" />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex flex-col gap-0.5">
                <span class="text-sm font-semibold text-surface-800">Benachrichtigungen</span>
                <span class="text-xs text-surface-500">Bei Statusänderungen</span>
              </div>
              <ToggleSwitch v-model="notifications" />
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Weiter" class="!bg-emerald-500 !border-emerald-500 !text-white hover:!bg-emerald-600 hover:!border-emerald-600" />
      </div>
    </template>
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
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import ToggleSwitch from 'primevue/toggleswitch';

const visible = ref(true);
const activeTab = ref('0');
const projektname = ref('');
const kategorie = ref({ label: 'Entwicklung', value: 'entwicklung' });
const verantwortlicher = ref({ name: 'Max Mustmann', initials: 'M' });
const isPublic = ref(true);
const notifications = ref(false);

const kategorien = ref([
  { label: 'Entwicklung', value: 'entwicklung' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' }
]);

const verantwortliche = ref([
  { name: 'Max Mustmann', initials: 'M' },
  { name: 'Anna Schmidt', initials: 'A' },
  { name: 'Tom Müller', initials: 'T' }
]);
</script>