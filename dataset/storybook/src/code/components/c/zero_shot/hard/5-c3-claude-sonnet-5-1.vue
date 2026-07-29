<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <Dialog v-model:visible="visible" modal header="Neues Projekt" :style="{ width: '30rem' }">
      <Tabs value="0">
        <TabList>
          <Tab value="0">1 - Allgemein</Tab>
          <Tab value="1">2 - Zeitplan</Tab>
          <Tab value="2">3 - Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 pt-2">
              <div class="flex flex-col gap-2">
                <label for="projektname" class="font-normal text-gray-700">Projektname</label>
                <InputText id="projektname" v-model="projektname" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="kategorie" class="font-normal text-gray-700">Kategorie</label>
                <Select id="kategorie" v-model="kategorie" :options="kategorien" optionLabel="label" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="verantwortlicher" class="font-normal text-gray-700">Verantwortlicher</label>
                <Select id="verantwortlicher" v-model="verantwortlicher" :options="verantwortliche" optionLabel="name" class="w-full">
                  <template #value="slotProps">
                    <div class="flex items-center gap-2" v-if="slotProps.value">
                      <Avatar :label="slotProps.value.initial" shape="circle" size="normal" class="bg-gray-300" />
                      <span>{{ slotProps.value.name }}</span>
                    </div>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center gap-2">
                      <Avatar :label="slotProps.option.initial" shape="circle" size="normal" class="bg-gray-300" />
                      <span>{{ slotProps.option.name }}</span>
                    </div>
                  </template>
                </Select>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0 pt-2">Zeitplan Inhalte</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="m-0 pt-2">Einstellungen Inhalte</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Abbrechen" severity="secondary" text @click="visible = false" />
          <Button label="Weiter" severity="success" @click="visible = false" />
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
const projektname = ref('');
const kategorien = ref([
  { label: 'Entwicklung' },
  { label: 'Design' },
  { label: 'Marketing' }
]);
const kategorie = ref(kategorien.value[0]);

const verantwortliche = ref([
  { name: 'Max Mustmann', initial: 'M' },
  { name: 'Anna Muster', initial: 'A' }
]);
const verantwortlicher = ref(verantwortliche.value[0]);
</script>