<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <Dialog v-model:visible="visible" modal header="Neues Projekt" :style="{ width: '32rem' }" :closable="true">
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">1 - Allgemein</Tab>
          <Tab value="1">2 - Zeitplan</Tab>
          <Tab value="2">3 - Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 py-2">
              <div class="flex flex-col gap-2">
                <label for="projectname" class="font-medium text-sm text-surface-700">Projektname</label>
                <InputText id="projectname" v-model="projectName" class="w-full" />
              </div>
              <div class="flex flex-col gap-2">
                <label for="kategorie" class="font-medium text-sm text-surface-700">Kategorie</label>
                <Select id="kategorie" v-model="kategorie" :options="kategorieOptions" optionLabel="label" optionValue="value" class="w-full" />
              </div>
              <div class="flex flex-col gap-2">
                <label for="verantwortlicher" class="font-medium text-sm text-surface-700">Verantwortlicher</label>
                <Select id="verantwortlicher" v-model="verantwortlicher" :options="verantwortlicherOptions" optionLabel="label" optionValue="value" class="w-full">
                  <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center gap-2">
                      <Avatar :label="getInitial(slotProps.value)" shape="circle" size="normal" class="bg-surface-300 text-surface-700" />
                      <span>{{ getLabel(slotProps.value) }}</span>
                    </div>
                    <span v-else>{{ slotProps.placeholder }}</span>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center gap-2">
                      <Avatar :label="slotProps.option.label.charAt(0)" shape="circle" size="normal" class="bg-surface-300 text-surface-700" />
                      <span>{{ slotProps.option.label }}</span>
                    </div>
                  </template>
                </Select>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="flex flex-col gap-4 py-2">
              <p class="text-surface-500 text-sm m-0">Zeitplan-Einstellungen folgen hier.</p>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div class="flex flex-col gap-4 py-2">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="font-semibold text-sm">Öffentlich sichtbar</span>
                  <span class="text-xs text-surface-500">Für alle Teammitglieder</span>
                </div>
                <ToggleSwitch v-model="oeffentlichSichtbar" />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="font-semibold text-sm">Benachrichtigungen</span>
                  <span class="text-xs text-surface-500">Bei Statusänderungen</span>
                </div>
                <ToggleSwitch v-model="benachrichtigungen" />
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" text @click="visible = false" />
        <Button label="Weiter" @click="onWeiter" />
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
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';

const visible = ref(true);
const activeTab = ref('0');

const projectName = ref('');
const kategorie = ref('entwicklung');
const kategorieOptions = ref([
  { label: 'Entwicklung', value: 'entwicklung' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' }
]);

const verantwortlicher = ref('max');
const verantwortlicherOptions = ref([
  { label: 'Max Mustmann', value: 'max' },
  { label: 'Anna Beispiel', value: 'anna' }
]);

const oeffentlichSichtbar = ref(true);
const benachrichtigungen = ref(false);

function getLabel(value) {
  const found = verantwortlicherOptions.value.find((o) => o.value === value);
  return found ? found.label : '';
}

function getInitial(value) {
  const label = getLabel(value);
  return label ? label.charAt(0) : '';
}

function onWeiter() {
  visible.value = false;
}
</script>