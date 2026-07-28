<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Neues Projekt"
    :style="{ width: '32rem' }"
    :closable="true"
  >
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="1">1 - Allgemein</Tab>
        <Tab value="2">2 - Zeitplan</Tab>
        <Tab value="3">3 - Einstellungen</Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="1">
          <div class="flex flex-col gap-4 mt-2">
            <div class="flex flex-col gap-1.5">
              <label for="projectName" class="text-sm font-medium text-surface-700">Projektname</label>
              <InputText id="projectName" v-model="projectName" autocomplete="off" />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="category" class="text-sm font-medium text-surface-700">Kategorie</label>
              <Select
                id="category"
                v-model="category"
                :options="categories"
                placeholder="Wählen"
                class="w-full"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="manager" class="text-sm font-medium text-surface-700">Verantwortlicher</label>
              <Select
                id="manager"
                v-model="manager"
                :options="managers"
                optionLabel="name"
                class="w-full"
              >
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex items-center gap-2">
                    <Avatar
                      :label="slotProps.value.initial"
                      shape="circle"
                      class="bg-surface-100 text-surface-600 rounded-full w-6 h-6 text-xs font-semibold"
                    />
                    <span>{{ slotProps.value.name }}</span>
                  </div>
                  <span v-else>{{ slotProps.placeholder }}</span>
                </template>
                <template #option="slotProps">
                  <div class="flex items-center gap-2">
                    <Avatar
                      :label="slotProps.option.initial"
                      shape="circle"
                      class="bg-surface-100 text-surface-600 rounded-full w-6 h-6 text-xs font-semibold"
                    />
                    <span>{{ slotProps.option.name }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </div>
        </TabPanel>
        
        <TabPanel value="2">
          <!-- Placeholder for Zeitplan -->
        </TabPanel>
        
        <TabPanel value="3">
          <!-- Placeholder for Einstellungen -->
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex gap-2 justify-end pt-4">
        <Button
          label="Abbrechen"
          severity="secondary"
          @click="visible = false"
        />
        <Button
          label="Weiter"
          @click="visible = false"
        />
      </div>
    </template>
  </Dialog>
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
const activeTab = ref('1');

const projectName = ref('');
const category = ref('Entwicklung');
const categories = ref(['Entwicklung', 'Gestaltung', 'Marketing']);

const manager = ref({ name: 'Max Mustmann', initial: 'M' });
const managers = ref([
  { name: 'Max Mustmann', initial: 'M' },
  { name: 'Erika Musterfrau', initial: 'E' }
]);
</script>