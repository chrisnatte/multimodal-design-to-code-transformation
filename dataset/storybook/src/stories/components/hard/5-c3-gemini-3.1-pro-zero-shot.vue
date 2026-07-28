<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400 p-4">
    <Dialog v-model:visible="visible" modal header="Neues Projekt" :style="{ width: '32rem' }" :closable="true" class="bg-white rounded-xl shadow-lg">
      
      <Tabs value="0" class="mt-2">
        <TabList class="border-b border-gray-200">
          <Tab value="0" class="text-[#10b981] border-[#10b981] font-semibold px-4 py-3">1 - Allgemein</Tab>
          <Tab value="1" class="text-gray-500 font-semibold px-4 py-3">2 - Zeitplan</Tab>
          <Tab value="2" class="text-gray-500 font-semibold px-4 py-3">3 - Einstellungen</Tab>
        </TabList>
        
        <TabPanels class="px-0 pb-0 pt-6">
          <TabPanel value="0">
            <div class="flex flex-col gap-5">
              
              <div class="flex flex-col gap-1.5">
                <label for="projectName" class="text-sm text-gray-700">Projektname</label>
                <InputText id="projectName" v-model="projectName" class="w-full border-gray-300 rounded-md" />
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="category" class="text-sm text-gray-700">Kategorie</label>
                <Select id="category" v-model="selectedCategory" :options="categories" optionLabel="name" class="w-full border-gray-300 rounded-md" />
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="responsible" class="text-sm text-gray-700">Verantwortlicher</label>
                <Select id="responsible" v-model="selectedResponsible" :options="responsibles" optionLabel="name" class="w-full border-gray-300 rounded-md">
                  <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center gap-2">
                      <Avatar :label="slotProps.value.initials" shape="circle" class="w-6 h-6 text-xs bg-slate-200 text-slate-600" />
                      <span class="text-gray-700">{{ slotProps.value.name }}</span>
                    </div>
                    <span v-else>
                      {{ slotProps.placeholder }}
                    </span>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center gap-2">
                      <Avatar :label="slotProps.option.initials" shape="circle" class="w-6 h-6 text-xs bg-slate-200 text-slate-600" />
                      <span>{{ slotProps.option.name }}</span>
                    </div>
                  </template>
                </Select>
              </div>
              
            </div>
          </TabPanel>
          <TabPanel value="1"></TabPanel>
          <TabPanel value="2"></TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <div class="flex justify-end gap-3 mt-6 pt-2">
          <Button label="Abbrechen" class="bg-slate-100 text-slate-600 border-none hover:bg-slate-200 font-medium px-4 py-2 rounded-md" @click="visible = false" />
          <Button label="Weiter" class="bg-[#10b981] text-white border-none hover:bg-[#059669] font-medium px-4 py-2 rounded-md" @click="visible = false" />
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
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';

const visible = ref(true);
const projectName = ref('');

const selectedCategory = ref({ name: 'Entwicklung', code: 'DEV' });
const categories = ref([
  { name: 'Entwicklung', code: 'DEV' },
  { name: 'Design', code: 'DES' },
  { name: 'Marketing', code: 'MAR' }
]);

const selectedResponsible = ref({ name: 'Max Mustmann', initials: 'M' });
const responsibles = ref([
  { name: 'Max Mustmann', initials: 'M' },
  { name: 'Erika Musterfrau', initials: 'E' }
]);
</script>