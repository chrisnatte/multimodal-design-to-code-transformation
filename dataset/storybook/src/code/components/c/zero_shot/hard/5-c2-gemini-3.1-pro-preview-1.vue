<template>
  <div class="min-h-screen flex items-center justify-center bg-neutral-400 p-4">
    <Dialog
      v-model:visible="visible"
      modal
      header="Neues Projekt"
      :style="{ width: '32rem' }"
      :closable="true"
      class="bg-white rounded-xl shadow-lg"
      pt:root:class="border-none"
      pt:header:class="pb-0 pt-6 px-6"
      pt:content:class="px-6 pb-6 pt-2"
      pt:footer:class="px-6 pb-6 pt-0"
    >
      <Tabs v-model:value="activeTab" class="w-full">
        <TabList class="border-b border-surface-200 dark:border-surface-700">
          <Tab value="0" class="text-emerald-500 font-medium border-emerald-500">1 - Allgemein</Tab>
          <Tab value="1" class="text-surface-500 font-medium">2 - Zeitplan</Tab>
          <Tab value="2" class="text-surface-500 font-medium">3 - Einstellungen</Tab>
        </TabList>
        <TabPanels class="p-0 pt-6">
          <TabPanel value="0">
            <div class="flex flex-col gap-5">
              <!-- Projektname -->
              <div class="flex flex-col gap-2">
                <label for="projectName" class="text-sm text-surface-700 dark:text-surface-300">Projektname</label>
                <InputText id="projectName" v-model="projectName" class="w-full" />
              </div>

              <!-- Kategorie -->
              <div class="flex flex-col gap-2">
                <label for="category" class="text-sm text-surface-700 dark:text-surface-300">Kategorie</label>
                <Select id="category" v-model="selectedCategory" :options="categories" class="w-full" />
              </div>

              <!-- Verantwortlicher -->
              <div class="flex flex-col gap-2">
                <label for="responsible" class="text-sm text-surface-700 dark:text-surface-300">Verantwortlicher</label>
                <Select id="responsible" v-model="selectedUser" :options="users" optionLabel="name" class="w-full">
                  <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center gap-2">
                      <Avatar :label="slotProps.value.initial" shape="circle" class="bg-slate-200 text-slate-600 text-xs w-6 h-6" />
                      <span>{{ slotProps.value.name }}</span>
                    </div>
                    <span v-else>Select a user</span>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center gap-2">
                      <Avatar :label="slotProps.option.initial" shape="circle" class="bg-slate-200 text-slate-600 text-xs w-6 h-6" />
                      <span>{{ slotProps.option.name }}</span>
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
            <!-- Placeholder for Einstellungen -->
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <div class="flex justify-end gap-3 mt-2">
          <Button label="Abbrechen" variant="text" class="bg-slate-100 text-slate-600 hover:bg-slate-200 border-none px-4 py-2 rounded-md font-medium" @click="visible = false" />
          <Button label="Weiter" class="bg-emerald-500 hover:bg-emerald-600 border-none text-white px-4 py-2 rounded-md font-medium" @click="visible = false" />
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
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';

const visible = ref(true);
const activeTab = ref('0');
const projectName = ref('');

const selectedCategory = ref('Entwicklung');
const categories = ref(['Entwicklung', 'Design', 'Marketing', 'Vertrieb']);

const selectedUser = ref({ name: 'Max Mustmann', initial: 'M' });
const users = ref([
  { name: 'Max Mustmann', initial: 'M' },
  { name: 'Erika Musterfrau', initial: 'E' },
  { name: 'John Doe', initial: 'J' }
]);
</script>