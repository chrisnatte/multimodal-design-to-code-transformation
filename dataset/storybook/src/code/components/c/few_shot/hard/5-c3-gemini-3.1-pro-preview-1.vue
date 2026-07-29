<template>
  <Dialog
    v-model:visible="visible"
    header="Neues Projekt"
    modal
    :pt="{
      root: 'w-full max-w-lg',
      content: 'pt-2',
    }"
  >
    <Tabs value="0">
      <TabList>
        <Tab value="0">1 - Allgemein</Tab>
        <Tab value="1">2 - Zeitplan</Tab>
        <Tab value="2">3 - Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0" class="px-0 py-6">
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-2">
              <label for="projectName" class="text-sm text-surface-700">Projektname</label>
              <InputText id="projectName" v-model="projectName" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="category" class="text-sm text-surface-700">Kategorie</label>
              <Select
                id="category"
                v-model="selectedCategory"
                :options="categories"
                class="w-full"
              />
            </div>

            <div class="flex flex-col gap-2">
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
                      :label="slotProps.value.initial"
                      shape="circle"
                      class="w-6 h-6 text-xs bg-surface-200 text-surface-700"
                    />
                    <span>{{ slotProps.value.name }}</span>
                  </div>
                </template>
                <template #option="slotProps">
                  <div class="flex items-center gap-2">
                    <Avatar
                      :label="slotProps.option.initial"
                      shape="circle"
                      class="w-6 h-6 text-xs bg-surface-200 text-surface-700"
                    />
                    <span>{{ slotProps.option.name }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-3 pt-2">
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Weiter" severity="primary" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
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
const selectedCategory = ref('Entwicklung');
const categories = ref(['Entwicklung', 'Design', 'Marketing', 'Vertrieb']);

const selectedResponsible = ref({ name: 'Max Mustmann', initial: 'M' });
const responsibles = ref([
  { name: 'Max Mustmann', initial: 'M' },
  { name: 'Erika Musterfrau', initial: 'E' },
]);
</script>