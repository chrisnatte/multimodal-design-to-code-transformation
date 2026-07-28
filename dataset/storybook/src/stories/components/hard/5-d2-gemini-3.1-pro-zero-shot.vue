<template>
  <div class="flex items-center justify-center min-h-screen bg-black/50 p-4">
    <Dialog v-model:visible="visible" modal header="Neues Projekt" :style="{ width: '512px' }" :closable="true">
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">1 - Allgemein</Tab>
          <Tab value="1">2 - Zeitplan</Tab>
          <Tab value="2">3 - Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 mt-2">
              <div class="flex flex-col gap-1">
                <label class="text-sm font-medium text-surface-700">Projektname</label>
                <InputText v-model="projectName" class="w-full" />
              </div>
              
              <div class="flex flex-col gap-1">
                <label class="text-sm font-medium text-surface-700">Kategorie</label>
                <Select v-model="category" :options="categories" optionLabel="label" placeholder="Entwicklung" class="w-full" />
              </div>
              
              <div class="flex flex-col gap-1">
                <label class="text-sm font-medium text-surface-700">Verantwortlicher</label>
                <Select v-model="assignee" :options="assignees" optionLabel="name" class="w-full">
                  <template #value="slotProps">
                    <div class="flex items-center gap-2" v-if="slotProps.value">
                      <Avatar :label="slotProps.value.initial" shape="circle" class="w-6 h-6 text-xs bg-slate-100 text-slate-600" />
                      <span class="text-sm">{{ slotProps.value.name }}</span>
                    </div>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center gap-2">
                      <Avatar :label="slotProps.option.initial" shape="circle" class="w-6 h-6 text-xs bg-slate-100 text-slate-600" />
                      <span class="text-sm">{{ slotProps.option.name }}</span>
                    </div>
                  </template>
                </Select>
              </div>
            </div>
          </TabPanel>
          
          <TabPanel value="1">
             <div class="flex items-center justify-center p-8 text-surface-500">Zeitplan Inhalt...</div>
          </TabPanel>
          
          <TabPanel value="2">
            <div class="flex flex-col gap-6 mt-4">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="font-semibold text-sm">Öffentlich sichtbar</span>
                  <span class="text-xs text-surface-500">Für alle Teammitglieder</span>
                </div>
                <ToggleSwitch v-model="publicVisible" />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="font-semibold text-sm">Benachrichtigungen</span>
                  <span class="text-xs text-surface-500">Bei Statusänderungen</span>
                </div>
                <ToggleSwitch v-model="notifications" />
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <div class="flex justify-end gap-2 pt-4">
          <Button label="Abbrechen" severity="secondary" @click="close" />
          <Button label="Weiter" severity="success" @click="next" />
        </div>
      </template>
    </Dialog>
  </div>
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
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';

const visible = ref(true);
const activeTab = ref('0');

// Form state corresponding to screenshot
const projectName = ref('');
const category = ref({ label: 'Entwicklung' });
const categories = ref([
  { label: 'Entwicklung' },
  { label: 'Design' },
  { label: 'Marketing' }
]);

const assignee = ref({ name: 'Max Mustmann', initial: 'M' });
const assignees = ref([
  { name: 'Max Mustmann', initial: 'M' },
  { name: 'Erika Mustermann', initial: 'E' }
]);

// Settings state corresponding to JSON
const publicVisible = ref(true);
const notifications = ref(false);

const close = () => {
    visible.value = false;
};

const next = () => {
    // Navigate or submit logic
    if (activeTab.value === '0') activeTab.value = '1';
    else if (activeTab.value === '1') activeTab.value = '2';
};
</script>