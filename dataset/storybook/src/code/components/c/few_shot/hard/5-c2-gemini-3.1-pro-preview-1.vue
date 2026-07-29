<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Neues Projekt"
    :style="{ width: '500px' }"
    :pt="{
      root: 'bg-white rounded-xl shadow-lg',
      header: 'p-6 pb-4 border-b-0',
      title: 'text-xl font-semibold text-slate-800',
      content: 'p-6 pt-0',
      footer: 'p-6 pt-0 border-t-0 flex justify-end gap-3',
    }"
  >
    <Tabs value="0">
      <TabList class="mb-6 border-b border-slate-200">
        <Tab value="0" class="text-emerald-500 font-medium border-b-2 border-emerald-500 px-4 py-3">1 - Allgemein</Tab>
        <Tab value="1" class="text-slate-500 font-medium px-4 py-3">2 - Zeitplan</Tab>
        <Tab value="2" class="text-slate-500 font-medium px-4 py-3">3 - Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0" class="flex flex-col gap-5">
          <div class="flex flex-col gap-2">
            <label for="projektname" class="text-sm text-slate-700">Projektname</label>
            <InputText id="projektname" v-model="projektname" class="w-full border-slate-300 rounded-md" />
          </div>
          
          <div class="flex flex-col gap-2">
            <label for="kategorie" class="text-sm text-slate-700">Kategorie</label>
            <Select id="kategorie" v-model="kategorie" :options="kategorieOptions" class="w-full border-slate-300 rounded-md" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="verantwortlicher" class="text-sm text-slate-700">Verantwortlicher</label>
            <Select id="verantwortlicher" v-model="verantwortlicher" :options="verantwortlicherOptions" optionLabel="name" class="w-full border-slate-300 rounded-md">
              <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center gap-2">
                  <Avatar :label="slotProps.value.initials" shape="circle" size="small" class="bg-slate-200 text-slate-600 text-xs" />
                  <span>{{ slotProps.value.name }}</span>
                </div>
                <span v-else>
                  {{ slotProps.placeholder }}
                </span>
              </template>
              <template #option="slotProps">
                <div class="flex items-center gap-2">
                  <Avatar :label="slotProps.option.initials" shape="circle" size="small" class="bg-slate-200 text-slate-600 text-xs" />
                  <span>{{ slotProps.option.name }}</span>
                </div>
              </template>
            </Select>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" variant="text" class="bg-slate-100 text-slate-600 hover:bg-slate-200 px-4 py-2 rounded-md font-medium" @click="visible = false" />
      <Button label="Weiter" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600 text-white px-4 py-2 rounded-md font-medium" @click="visible = false" />
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
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';

const visible = ref(true);
const projektname = ref('');
const kategorie = ref('Entwicklung');
const kategorieOptions = ref(['Entwicklung', 'Design', 'Marketing']);

const verantwortlicher = ref({ name: 'Max Mustmann', initials: 'M' });
const verantwortlicherOptions = ref([
  { name: 'Max Mustmann', initials: 'M' },
  { name: 'Anna Schmidt', initials: 'A' }
]);
</script>