<template>
  <div class="min-h-screen flex items-center justify-center bg-black/50 p-4">
    <Dialog 
      v-model:visible="visible" 
      modal 
      header="Neues Projekt" 
      :style="{ width: '512px' }" 
      :closable="true"
      class="bg-white rounded-xl shadow-lg"
    >
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0" class="font-semibold">1 - Allgemein</Tab>
          <Tab value="1" class="font-semibold text-surface-500">2 - Zeitplan</Tab>
          <Tab value="2" class="font-semibold text-surface-500">3 - Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 mt-4">
              <div class="flex flex-col gap-2">
                <label for="projektname" class="text-sm text-surface-700">Projektname</label>
                <InputText id="projektname" v-model="projektname" class="w-full" />
              </div>
              
              <div class="flex flex-col gap-2">
                <label for="kategorie" class="text-sm text-surface-700">Kategorie</label>
                <Select 
                  id="kategorie" 
                  v-model="kategorie" 
                  :options="kategorien" 
                  class="w-full" 
                />
              </div>
              
              <div class="flex flex-col gap-2">
                <label for="verantwortlicher" class="text-sm text-surface-700">Verantwortlicher</label>
                <Select 
                  id="verantwortlicher" 
                  v-model="verantwortlicher" 
                  :options="verantwortliche" 
                  class="w-full"
                >
                  <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center gap-2">
                      <Avatar :label="slotProps.value.charAt(0)" shape="circle" class="bg-surface-200 text-surface-600 w-6 h-6 text-xs" />
                      <span>{{ slotProps.value }}</span>
                    </div>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center gap-2">
                      <Avatar :label="slotProps.option.charAt(0)" shape="circle" class="bg-surface-200 text-surface-600 w-6 h-6 text-xs" />
                      <span>{{ slotProps.option }}</span>
                    </div>
                  </template>
                </Select>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <!-- Content for Zeitplan -->
          </TabPanel>
          <TabPanel value="2">
            <!-- Content for Einstellungen -->
          </TabPanel>
        </TabPanels>
      </Tabs>
      
      <template #footer>
        <div class="flex justify-end gap-2 pt-4">
          <Button 
            label="Abbrechen" 
            @click="visible = false" 
            class="bg-surface-100 text-surface-700 border-none hover:bg-surface-200 font-medium px-4 py-2" 
          />
          <Button 
            label="Weiter" 
            @click="visible = false" 
            class="bg-[#10B981] border-[#10B981] text-white hover:bg-[#059669] hover:border-[#059669] font-medium px-4 py-2" 
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
const activeTab = ref('0');

const projektname = ref('');
const kategorie = ref('Entwicklung');
const kategorien = ref(['Entwicklung', 'Design', 'Marketing', 'Vertrieb']);

const verantwortlicher = ref('Max Mustmann');
const verantwortliche = ref(['Max Mustmann', 'Erika Mustermann', 'John Doe']);
</script>