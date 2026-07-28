<template>
  <Dialog v-model:visible="visible" modal header="Neues Projekt" :style="{ width: '30rem' }" :closable="true">
    <Tabs value="0">
      <TabList>
        <Tab value="0">1 - Allgemein</Tab>
        <Tab value="1">2 - Zeitplan</Tab>
        <Tab value="2">3 - Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4 mt-4">
            <div class="flex flex-col gap-2">
              <label for="projektname" class="text-sm font-medium text-surface-700">Projektname</label>
              <InputText id="projektname" v-model="projektname" class="w-full" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="kategorie" class="text-sm font-medium text-surface-700">Kategorie</label>
              <Select id="kategorie" v-model="kategorie" :options="kategorieOptions" optionLabel="name" class="w-full" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="verantwortlicher" class="text-sm font-medium text-surface-700">Verantwortlicher</label>
              <Select id="verantwortlicher" v-model="verantwortlicher" :options="verantwortlicherOptions" optionLabel="name" class="w-full">
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex items-center gap-2">
                    <Avatar :label="slotProps.value.initials" shape="circle" class="!w-6 !h-6 !text-xs" />
                    <span>{{ slotProps.value.name }}</span>
                  </div>
                </template>
                <template #option="slotProps">
                  <div class="flex items-center gap-2">
                    <Avatar :label="slotProps.option.initials" shape="circle" class="!w-6 !h-6 !text-xs" />
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
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" variant="outlined" severity="secondary" @click="visible = false" />
        <Button label="Weiter" severity="success" @click="handleWeiter" />
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
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';

const visible = ref(true);
const projektname = ref('');
const kategorie = ref({ name: 'Entwicklung' });
const kategorieOptions = ref([
  { name: 'Entwicklung' },
  { name: 'Design' },
  { name: 'Marketing' }
]);
const verantwortlicher = ref({ name: 'Max Mustmann', initials: 'M' });
const verantwortlicherOptions = ref([
  { name: 'Max Mustmann', initials: 'M' },
  { name: 'Erika Musterfrau', initials: 'E' }
]);

const handleWeiter = () => {
  // Weiter action
};
</script>