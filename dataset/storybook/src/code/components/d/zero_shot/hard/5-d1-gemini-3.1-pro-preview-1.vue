<template>
  <div class="min-h-screen bg-black/50 flex items-center justify-center p-4">
    <Dialog
      v-model:visible="visible"
      modal
      header="Neues Projekt"
      :style="{ width: '32rem' }"
      :closable="true"
      class="bg-white rounded-xl shadow-lg"
      contentClass="p-0"
    >
      <Tabs value="0" class="w-full">
        <TabList class="px-4 pt-2 border-b border-surface-200">
          <Tab value="0" class="font-semibold text-sm">1 - Allgemein</Tab>
          <Tab value="1" class="font-semibold text-sm text-surface-500">2 - Zeitplan</Tab>
          <Tab value="2" class="font-semibold text-sm text-surface-500">3 - Einstellungen</Tab>
        </TabList>
        
        <TabPanels class="p-4">
          <TabPanel value="0">
            <div class="flex flex-col gap-4">
              <!-- Projektname -->
              <div class="flex flex-col gap-2">
                <label for="projectName" class="text-sm text-surface-700">Projektname</label>
                <InputText id="projectName" v-model="projectName" class="w-full" />
              </div>

              <!-- Kategorie -->
              <div class="flex flex-col gap-2">
                <label for="category" class="text-sm text-surface-700">Kategorie</label>
                <Select 
                  id="category" 
                  v-model="category" 
                  :options="categories" 
                  class="w-full" 
                />
              </div>

              <!-- Verantwortlicher -->
              <div class="flex flex-col gap-2">
                <label for="responsible" class="text-sm text-surface-700">Verantwortlicher</label>
                <Select 
                  id="responsible" 
                  v-model="responsible" 
                  :options="responsibles" 
                  optionLabel="name" 
                  class="w-full"
                >
                  <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center gap-2">
                      <Avatar 
                        :label="slotProps.value.initial" 
                        shape="circle" 
                        class="bg-surface-100 text-surface-600 text-xs w-6 h-6" 
                      />
                      <span class="text-sm">{{ slotProps.value.name }}</span>
                    </div>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center gap-2">
                      <Avatar 
                        :label="slotProps.option.initial" 
                        shape="circle" 
                        class="bg-surface-100 text-surface-600 text-xs w-6 h-6" 
                      />
                      <span class="text-sm">{{ slotProps.option.name }}</span>
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
        <div class="flex justify-end gap-2 px-4 pb-4 pt-2">
          <Button 
            label="Abbrechen" 
            severity="secondary" 
            class="bg-surface-100 hover:bg-surface-200 text-surface-700 border-none" 
            @click="visible = false" 
          />
          <Button 
            label="Weiter" 
            class="bg-emerald-500 hover:bg-emerald-600 border-none" 
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
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';

const visible = ref(true);
const projectName = ref('');
const category = ref('Entwicklung');
const categories = ref(['Entwicklung', 'Design', 'Marketing', 'Vertrieb']);

const responsible = ref({ name: 'Max Mustmann', initial: 'M' });
const responsibles = ref([
  { name: 'Max Mustmann', initial: 'M' },
  { name: 'Erika Musterfrau', initial: 'E' },
  { name: 'John Doe', initial: 'J' }
]);
</script>