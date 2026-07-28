<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <Dialog v-model:visible="visible" modal header="Neues Projekt" :style="{ width: '32rem' }">
      <Tabs value="0">
        <TabList>
          <Tab value="0">1 - Allgemein</Tab>
          <Tab value="1">2 - Zeitplan</Tab>
          <Tab value="2">3 - Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 mt-4">
              <div class="flex flex-col gap-2">
                <label for="projectname" class="font-semibold text-surface-700">Projektname</label>
                <InputText id="projectname" v-model="projectName" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="category" class="font-semibold text-surface-700">Kategorie</label>
                <Select id="category" v-model="category" :options="categoryOptions" optionLabel="label" optionValue="value" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="owner" class="font-semibold text-surface-700">Verantwortlicher</label>
                <Select id="owner" v-model="owner" :options="ownerOptions" optionLabel="label" optionValue="value" class="w-full">
                  <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center gap-2">
                      <Avatar label="M" shape="circle" size="normal" />
                      <span>{{ getOwnerLabel(slotProps.value) }}</span>
                    </div>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center gap-2">
                      <Avatar label="M" shape="circle" size="normal" />
                      <span>{{ slotProps.option.label }}</span>
                    </div>
                  </template>
                </Select>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0 mt-4 text-surface-500">Zeitplan Inhalt hier.</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="m-0 mt-4 text-surface-500">Einstellungen Inhalt hier.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" text @click="visible = false" />
        <Button label="Weiter" @click="visible = false" />
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
const projectName = ref('');
const category = ref('development');
const owner = ref('max');

const categoryOptions = ref([
  { label: 'Entwicklung', value: 'development' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' }
]);

const ownerOptions = ref([
  { label: 'Max Mustmann', value: 'max' },
  { label: 'Anna Schmidt', value: 'anna' }
]);

const getOwnerLabel = (value) => {
  const found = ownerOptions.value.find((o) => o.value === value);
  return found ? found.label : '';
};
</script>