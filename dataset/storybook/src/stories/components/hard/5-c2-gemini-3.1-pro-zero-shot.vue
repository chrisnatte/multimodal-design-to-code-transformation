<template>
  <div class="min-h-screen bg-[#9ca3af] flex items-center justify-center p-4">
    <Dialog 
      v-model:visible="visible" 
      header="Neues Projekt" 
      :style="{ width: '32rem' }" 
      :closable="true" 
      modal
      pt:root:class="bg-white rounded-xl shadow-xl border-none"
      pt:header:class="pb-0 pt-6 px-6"
      pt:title:class="text-xl font-semibold text-surface-900"
      pt:content:class="px-6 pb-6 pt-2"
      pt:footer:class="px-6 pb-6 pt-0 border-t-0"
    >
      <Tabs value="0" class="w-full">
        <TabList class="border-b border-surface-200 mb-4">
          <Tab value="0" class="text-[#10b981] border-[#10b981] font-medium px-4 py-3">1 - Allgemein</Tab>
          <Tab value="1" class="text-surface-500 font-medium px-4 py-3">2 - Zeitplan</Tab>
          <Tab value="2" class="text-surface-500 font-medium px-4 py-3">3 - Einstellungen</Tab>
        </TabList>
        
        <TabPanels class="p-0">
          <TabPanel value="0">
            <div class="flex flex-col gap-5">
              <div class="flex flex-col gap-1.5">
                <label for="projectName" class="text-sm text-surface-700">Projektname</label>
                <InputText id="projectName" v-model="projectName" class="w-full" />
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="category" class="text-sm text-surface-700">Kategorie</label>
                <Select 
                  id="category" 
                  v-model="selectedCategory" 
                  :options="categories" 
                  optionLabel="label" 
                  class="w-full" 
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="responsible" class="text-sm text-surface-700">Verantwortlicher</label>
                <Select 
                  id="responsible" 
                  v-model="selectedResponsible" 
                  :options="responsibles" 
                  optionLabel="name" 
                  class="w-full"
                >
                  <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center gap-2">
                      <Avatar 
                        :label="slotProps.value.initials" 
                        shape="circle" 
                        class="bg-[#e2e8f0] text-[#475569] w-6 h-6 text-xs font-medium" 
                      />
                      <span class="text-surface-700">{{ slotProps.value.name }}</span>
                    </div>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center gap-2">
                      <Avatar 
                        :label="slotProps.option.initials" 
                        shape="circle" 
                        class="bg-[#e2e8f0] text-[#475569] w-6 h-6 text-xs font-medium" 
                      />
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
        <div class="flex justify-end gap-3 mt-2">
          <Button 
            label="Abbrechen" 
            class="bg-[#f1f5f9] text-[#475569] border-none hover:bg-[#e2e8f0] px-4 py-2 font-medium" 
            @click="visible = false" 
          />
          <Button 
            label="Weiter" 
            class="bg-[#10b981] border-[#10b981] hover:bg-[#059669] hover:border-[#059669] text-white px-4 py-2 font-medium" 
            @click="visible = false" 
          />
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
const projectName = ref('');

const selectedCategory = ref({ label: 'Entwicklung', value: 'entwicklung' });
const categories = ref([
  { label: 'Entwicklung', value: 'entwicklung' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' }
]);

const selectedResponsible = ref({ name: 'Max Mustmann', initials: 'M' });
const responsibles = ref([
  { name: 'Max Mustmann', initials: 'M' },
  { name: 'Erika Musterfrau', initials: 'E' }
]);
</script>