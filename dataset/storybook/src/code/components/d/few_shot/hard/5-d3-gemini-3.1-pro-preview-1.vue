<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Neues Projekt"
    :pt="{
      root: 'w-full max-w-[512px]',
      content: '!p-0',
    }"
  >
    <Tabs value="0">
      <TabList>
        <Tab value="0">1 - Allgemein</Tab>
        <Tab value="1">2 - Zeitplan</Tab>
        <Tab value="2">3 - Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4 p-4">
            <div class="flex flex-col gap-2">
              <label for="projektname" class="text-sm font-medium text-surface-700">Projektname</label>
              <InputText id="projektname" v-model="projektname" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="kategorie" class="text-sm font-medium text-surface-700">Kategorie</label>
              <Select id="kategorie" v-model="kategorie" :options="kategorien" optionLabel="label" placeholder="Entwicklung" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="verantwortlicher" class="text-sm font-medium text-surface-700">Verantwortlicher</label>
              <Select id="verantwortlicher" v-model="verantwortlicher" :options="verantwortliche" optionLabel="label" placeholder="Max Mustmann">
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex items-center gap-2">
                    <Avatar :label="slotProps.value.avatar" shape="circle" size="small" />
                    <span>{{ slotProps.value.label }}</span>
                  </div>
                  <div v-else class="flex items-center gap-2">
                    <Avatar label="M" shape="circle" size="small" />
                    <span>Max Mustmann</span>
                  </div>
                </template>
                <template #option="slotProps">
                  <div class="flex items-center gap-2">
                    <Avatar :label="slotProps.option.avatar" shape="circle" size="small" />
                    <span>{{ slotProps.option.label }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <!-- Zeitplan content -->
        </TabPanel>
        <TabPanel value="2">
          <!-- Einstellungen content -->
        </TabPanel>
      </TabPanels>
    </Tabs>
    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="visible = false" />
      <Button label="Weiter" severity="primary" @click="visible = false" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
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
const projektname = ref('');
const kategorie = ref();
const verantwortlicher = ref();

const kategorien = ref([
  { label: 'Entwicklung', value: 'entwicklung' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' }
]);

const verantwortliche = ref([
  { label: 'Max Mustmann', value: 'max', avatar: 'M' },
  { label: 'Erika Musterfrau', value: 'erika', avatar: 'E' }
]);
</script>