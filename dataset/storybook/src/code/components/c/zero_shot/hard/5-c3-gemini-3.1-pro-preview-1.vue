<template>
  <div class="min-h-screen bg-surface-400 flex items-center justify-center p-4">
    <Dialog
      v-model:visible="visible"
      modal
      header="Neues Projekt"
      :style="{ width: '32rem' }"
      :closable="true"
      class="bg-surface-0 rounded-xl shadow-lg"
      :pt="{
        header: { class: 'pb-0 pt-6 px-6' },
        content: { class: 'pt-2 px-6 pb-6' },
        footer: { class: 'pt-0 px-6 pb-6' }
      }"
    >
      <Tabs value="0" class="w-full">
        <TabList class="border-b border-surface-200">
          <Tab value="0" class="text-primary-500 font-medium px-0 mr-6 py-3 border-b-2 border-primary-500">1 - Allgemein</Tab>
          <Tab value="1" class="text-surface-500 font-medium px-0 mr-6 py-3">2 - Zeitplan</Tab>
          <Tab value="2" class="text-surface-500 font-medium px-0 py-3">3 - Einstellungen</Tab>
        </TabList>
        <TabPanels class="p-0 mt-6">
          <TabPanel value="0">
            <div class="flex flex-col gap-5">
              <div class="flex flex-col gap-2">
                <label for="projectName" class="text-sm text-surface-700">Projektname</label>
                <InputText id="projectName" v-model="projectName" class="w-full rounded-md border-surface-300" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="category" class="text-sm text-surface-700">Kategorie</label>
                <Select
                  id="category"
                  v-model="selectedCategory"
                  :options="categories"
                  optionLabel="name"
                  class="w-full rounded-md border-surface-300"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label for="responsible" class="text-sm text-surface-700">Verantwortlicher</label>
                <Select
                  id="responsible"
                  v-model="selectedResponsible"
                  :options="responsibles"
                  optionLabel="name"
                  class="w-full rounded-md border-surface-300"
                >
                  <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center gap-2">
                      <Avatar
                        :label="slotProps.value.initials"
                        shape="circle"
                        class="bg-blue-100 text-blue-800 text-xs w-6 h-6"
                      />
                      <span class="text-surface-700">{{ slotProps.value.name }}</span>
                    </div>
                    <span v-else>
                      {{ slotProps.placeholder }}
                    </span>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center gap-2">
                      <Avatar
                        :label="slotProps.option.initials"
                        shape="circle"
                        class="bg-blue-100 text-blue-800 text-xs w-6 h-6"
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
            class="bg-surface-100 text-surface-600 border-none hover:bg-surface-200 px-4 py-2 rounded-md font-medium"
            @click="visible = false"
          />
          <Button
            label="Weiter"
            class="bg-emerald-500 text-white border-none hover:bg-emerald-600 px-4 py-2 rounded-md font-medium"
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

const selectedCategory = ref({ name: 'Entwicklung', code: 'DEV' });
const categories = ref([
  { name: 'Entwicklung', code: 'DEV' },
  { name: 'Design', code: 'DES' },
  { name: 'Marketing', code: 'MAR' }
]);

const selectedResponsible = ref({ name: 'Max Mustmann', initials: 'M', code: 'MM' });
const responsibles = ref([
  { name: 'Max Mustmann', initials: 'M', code: 'MM' },
  { name: 'Erika Musterfrau', initials: 'E', code: 'EM' }
]);
</script>