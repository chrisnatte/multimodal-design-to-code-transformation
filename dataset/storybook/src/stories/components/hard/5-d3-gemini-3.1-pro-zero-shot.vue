<template>
  <Dialog v-model:visible="visible" modal header="Neues Projekt" :style="{ width: '32rem' }">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">1 - Allgemein</Tab>
        <Tab value="1">2 - Zeitplan</Tab>
        <Tab value="2">3 - Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4 mt-4 text-surface-700">
            <div class="flex flex-col gap-2">
              <label for="projectName" class="text-sm font-medium">Projektname</label>
              <InputText id="projectName" v-model="projectName" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="category" class="text-sm font-medium">Kategorie</label>
              <Select id="category" v-model="category" :options="categories" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="responsible" class="text-sm font-medium">Verantwortlicher</label>
              <Select id="responsible" v-model="responsible" :options="responsibles" optionLabel="name" class="w-full">
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex items-center gap-2">
                    <Avatar :label="slotProps.value.initial" shape="circle" class="bg-surface-100 text-surface-600 !w-6 !h-6 !text-xs font-semibold" />
                    <span class="text-sm">{{ slotProps.value.name }}</span>
                  </div>
                </template>
                <template #option="slotProps">
                  <div class="flex items-center gap-2">
                    <Avatar :label="slotProps.option.initial" shape="circle" class="bg-surface-100 text-surface-600 !w-6 !h-6 !text-xs font-semibold" />
                    <span class="text-sm">{{ slotProps.option.name }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="1">
          <!-- Placeholder for Zeitplan -->
        </TabPanel>

        <TabPanel value="2">
          <div class="flex flex-col gap-6 mt-4">
            <div class="flex items-center justify-between">
              <div class="flex flex-col gap-1">
                <span class="text-sm font-semibold text-surface-900">Öffentlich sichtbar</span>
                <span class="text-xs font-light text-surface-500">Für alle Teammitglieder</span>
              </div>
              <ToggleSwitch v-model="isPublic" />
            </div>

            <div class="flex items-center justify-between">
              <div class="flex flex-col gap-1">
                <span class="text-sm font-semibold text-surface-900">Benachrichtigungen</span>
                <span class="text-xs font-light text-surface-500">Bei Statusänderungen</span>
              </div>
              <ToggleSwitch v-model="notifications" />
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-2 pt-2">
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Weiter" severity="success" @click="visible = false" />
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
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import ToggleSwitch from 'primevue/toggleswitch';
import Avatar from 'primevue/avatar';

const visible = ref(true);
const activeTab = ref('0');

// Tab 0 State
const projectName = ref('');
const category = ref('Entwicklung');
const categories = ref(['Entwicklung', 'Design', 'Marketing', 'Vertrieb']);

const responsible = ref({ name: 'Max Mustmann', initial: 'M' });
const responsibles = ref([
  { name: 'Max Mustmann', initial: 'M' },
  { name: 'Anna Schmidt', initial: 'A' },
  { name: 'Lisa Müller', initial: 'L' }
]);

// Tab 2 State
const isPublic = ref(true);
const notifications = ref(false);
</script>