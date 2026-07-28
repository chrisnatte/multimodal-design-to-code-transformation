<template>
  <div class="flex items-center justify-center min-h-screen bg-surface-400">
    <Dialog v-model:visible="visible" modal header="Neues Projekt" :style="{ width: '30rem' }" :draggable="false">
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">1 - Allgemein</Tab>
          <Tab value="1">2 - Zeitplan</Tab>
          <Tab value="2">3 - Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-1 mb-4">
              <label for="projectName" class="font-medium text-surface-700">Projektname</label>
              <InputText id="projectName" v-model="projectName" class="w-full" />
            </div>

            <div class="flex flex-col gap-1 mb-4">
              <label for="category" class="font-medium text-surface-700">Kategorie</label>
              <Select id="category" v-model="category" :options="categoryOptions" optionLabel="label" optionValue="value" class="w-full" />
            </div>

            <div class="flex flex-col gap-1 mb-4">
              <label for="owner" class="font-medium text-surface-700">Verantwortlicher</label>
              <Select id="owner" v-model="owner" :options="ownerOptions" optionLabel="label" optionValue="value" class="w-full">
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex items-center gap-2">
                    <Avatar :label="getOwnerLabel(slotProps.value)" shape="circle" size="normal" class="!bg-surface-300 !text-surface-700" />
                    <span>{{ getOwnerName(slotProps.value) }}</span>
                  </div>
                  <span v-else>{{ slotProps.placeholder }}</span>
                </template>
                <template #option="slotProps">
                  <div class="flex items-center gap-2">
                    <Avatar :label="slotProps.option.label.charAt(0)" shape="circle" size="normal" class="!bg-surface-300 !text-surface-700" />
                    <span>{{ slotProps.option.label }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </TabPanel>

          <TabPanel value="1">
            <p class="m-0 text-surface-500">Zeitplan Inhalte hier.</p>
          </TabPanel>

          <TabPanel value="2">
            <p class="m-0 text-surface-500">Einstellungen Inhalte hier.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <div class="flex justify-end gap-2 mt-6">
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Weiter" severity="success" @click="onNext" />
      </div>
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
const category = ref('development');
const owner = ref('max');

const categoryOptions = ref([
  { label: 'Entwicklung', value: 'development' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' }
]);

const ownerOptions = ref([
  { label: 'Max Mustmann', value: 'max' },
  { label: 'Erika Musterfrau', value: 'erika' }
]);

const getOwnerName = (value) => {
  const found = ownerOptions.value.find((o) => o.value === value);
  return found ? found.label : '';
};

const getOwnerLabel = (value) => {
  const name = getOwnerName(value);
  return name ? name.charAt(0) : '';
};

const onNext = () => {
  activeTab.value = '1';
};
</script>