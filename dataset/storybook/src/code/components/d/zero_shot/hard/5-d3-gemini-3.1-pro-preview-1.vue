<template>
  <Dialog v-model:visible="visible" modal header="Neues Projekt" :style="{ width: '32rem' }" :closable="true">
    <Tabs value="0">
      <TabList>
        <Tab value="0" class="!text-[#10B981] !border-[#10B981]">1 - Allgemein</Tab>
        <Tab value="1">2 - Zeitplan</Tab>
        <Tab value="2">3 - Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4 mt-2">
            <div class="flex flex-col gap-2">
              <label for="projectName" class="text-sm text-surface-700 dark:text-surface-300">Projektname</label>
              <InputText id="projectName" v-model="projectName" class="w-full" />
            </div>
            
            <div class="flex flex-col gap-2">
              <label for="category" class="text-sm text-surface-700 dark:text-surface-300">Kategorie</label>
              <Select id="category" v-model="selectedCategory" :options="categories" optionLabel="name" placeholder="Entwicklung" class="w-full" />
            </div>
            
            <div class="flex flex-col gap-2">
              <label for="assignee" class="text-sm text-surface-700 dark:text-surface-300">Verantwortlicher</label>
              <Select id="assignee" v-model="selectedAssignee" :options="assignees" optionLabel="name" placeholder="Max Mustmann" class="w-full">
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex items-center gap-2">
                    <Avatar :label="slotProps.value.initials" shape="circle" class="!bg-surface-200 !text-surface-600 !w-6 !h-6 !text-xs" />
                    <span>{{ slotProps.value.name }}</span>
                  </div>
                  <div v-else class="flex items-center gap-2">
                    <Avatar label="M" shape="circle" class="!bg-surface-200 !text-surface-600 !w-6 !h-6 !text-xs" />
                    <span class="text-surface-500">Max Mustmann</span>
                  </div>
                </template>
                <template #option="slotProps">
                  <div class="flex items-center gap-2">
                    <Avatar :label="slotProps.option.initials" shape="circle" class="!bg-surface-200 !text-surface-600 !w-6 !h-6 !text-xs" />
                    <span>{{ slotProps.option.name }}</span>
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
        <Button label="Abbrechen" severity="secondary" class="!bg-surface-100 !text-surface-700 !border-none hover:!bg-surface-200" @click="visible = false" />
        <Button label="Weiter" class="!bg-[#10B981] !border-[#10B981] hover:!bg-[#0ea5e9] hover:!border-[#0ea5e9]" @click="visible = false" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Avatar from 'primevue/avatar';

const visible = ref(true);
const projectName = ref('');

const selectedCategory = ref(null);
const categories = ref([
  { name: 'Entwicklung', code: 'DEV' },
  { name: 'Design', code: 'DES' },
  { name: 'Marketing', code: 'MAR' }
]);

const selectedAssignee = ref(null);
const assignees = ref([
  { name: 'Max Mustmann', initials: 'M' },
  { name: 'Erika Musterfrau', initials: 'E' },
  { name: 'John Doe', initials: 'J' }
]);
</script>