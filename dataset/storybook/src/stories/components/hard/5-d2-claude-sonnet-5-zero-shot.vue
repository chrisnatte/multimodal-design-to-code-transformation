<template>
  <div class="flex items-center justify-center min-h-screen bg-black">
    <Dialog
      v-model:visible="visible"
      modal
      :draggable="false"
      :closable="true"
      header="Neues Projekt"
      :style="{ width: '32rem' }"
    >
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">1 - Allgemein</Tab>
          <Tab value="1">2 - Zeitplan</Tab>
          <Tab value="2">3 - Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <label for="projectName" class="font-semibold text-sm">Projektname</label>
                <InputText id="projectName" v-model="projectName" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="category" class="font-semibold text-sm">Kategorie</label>
                <Select
                  id="category"
                  v-model="category"
                  :options="categoryOptions"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label for="owner" class="font-semibold text-sm">Verantwortlicher</label>
                <Select
                  id="owner"
                  v-model="owner"
                  :options="ownerOptions"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full"
                >
                  <template #value="slotProps">
                    <div class="flex items-center gap-2" v-if="slotProps.value">
                      <Avatar :label="getOwnerInitial(slotProps.value)" shape="circle" size="normal" />
                      <span>{{ getOwnerLabel(slotProps.value) }}</span>
                    </div>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center gap-2">
                      <Avatar :label="slotProps.option.label.charAt(0)" shape="circle" size="normal" />
                      <span>{{ slotProps.option.label }}</span>
                    </div>
                  </template>
                </Select>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="1">
            <div class="flex flex-col gap-4">
              <p class="text-sm text-surface-500">Zeitplan Einstellungen</p>
            </div>
          </TabPanel>

          <TabPanel value="2">
            <div class="flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="font-semibold text-sm">Öffentlich sichtbar</span>
                  <span class="text-xs text-surface-500">Für alle Teammitglieder</span>
                </div>
                <ToggleSwitch v-model="publicVisible" />
              </div>

              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="font-semibold text-sm">Benachrichtigungen</span>
                  <span class="text-xs text-surface-500">Bei Statusänderungen</span>
                </div>
                <ToggleSwitch v-model="notifications" />
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Weiter" @click="onNext" />
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
const category = ref('development');
const owner = ref('max');

const publicVisible = ref(true);
const notifications = ref(false);

const categoryOptions = ref([
  { label: 'Entwicklung', value: 'development' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' }
]);

const ownerOptions = ref([
  { label: 'Max Mustmann', value: 'max' },
  { label: 'Anna Schmidt', value: 'anna' },
  { label: 'Peter Meyer', value: 'peter' }
]);

const getOwnerLabel = (value) => {
  const found = ownerOptions.value.find((o) => o.value === value);
  return found ? found.label : '';
};

const getOwnerInitial = (value) => {
  const label = getOwnerLabel(value);
  return label ? label.charAt(0) : '';
};

const onNext = () => {
  if (activeTab.value === '0') {
    activeTab.value = '1';
  } else if (activeTab.value === '1') {
    activeTab.value = '2';
  } else {
    visible.value = false;
  }
};
</script>