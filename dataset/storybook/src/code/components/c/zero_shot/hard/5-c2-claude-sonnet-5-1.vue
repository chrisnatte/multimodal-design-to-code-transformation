<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <Button label="Show Dialog" @click="visible = true" />

    <Dialog v-model:visible="visible" modal header="Neues Projekt" :style="{ width: '30rem' }" :closable="true">
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">1 - Allgemein</Tab>
          <Tab value="1">2 - Zeitplan</Tab>
          <Tab value="2">3 - Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 pt-4">
              <div class="flex flex-col gap-2">
                <label for="projectName" class="text-sm text-gray-700">Projektname</label>
                <InputText id="projectName" v-model="projectName" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="category" class="text-sm text-gray-700">Kategorie</label>
                <Select id="category" v-model="category" :options="categoryOptions" optionLabel="label" optionValue="value" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="owner" class="text-sm text-gray-700">Verantwortlicher</label>
                <Select id="owner" v-model="owner" :options="ownerOptions" optionLabel="label" optionValue="value" class="w-full">
                  <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center gap-2">
                      <Avatar :label="getOwnerInitial(slotProps.value)" shape="circle" size="normal" class="bg-gray-300" />
                      <span>{{ getOwnerLabel(slotProps.value) }}</span>
                    </div>
                    <span v-else>{{ slotProps.placeholder }}</span>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center gap-2">
                      <Avatar :label="slotProps.option.label.charAt(0)" shape="circle" size="normal" class="bg-gray-300" />
                      <span>{{ slotProps.option.label }}</span>
                    </div>
                  </template>
                </Select>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="pt-4 text-gray-500">Zeitplan Inhalt</div>
          </TabPanel>
          <TabPanel value="2">
            <div class="pt-4 text-gray-500">Einstellungen Inhalt</div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Weiter" severity="success" @click="visible = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
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
  { label: 'Anna Beispiel', value: 'anna' }
]);

const getOwnerLabel = (val) => {
  const found = ownerOptions.value.find((o) => o.value === val);
  return found ? found.label : '';
};

const getOwnerInitial = (val) => {
  const label = getOwnerLabel(val);
  return label ? label.charAt(0) : '';
};
</script>