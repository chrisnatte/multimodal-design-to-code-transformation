<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="false"
      :draggable="false"
      :style="{ width: '32rem' }"
      class="rounded-xl"
    >
      <template #container>
        <div class="flex flex-col">
          <!-- Header -->
          <div class="flex items-center justify-between px-6 py-4">
            <span class="text-lg font-semibold text-surface-900">Neues Projekt</span>
            <Button
              icon="pi pi-times"
              text
              severity="secondary"
              rounded
              aria-label="Close"
              @click="visible = false"
            />
          </div>

          <!-- Tabs -->
          <div class="px-4">
            <Tabs v-model:value="activeTab">
              <TabList>
                <Tab value="0" class="font-bold">1 - Allgemein</Tab>
                <Tab value="1" class="font-bold">2 - Zeitplan</Tab>
                <Tab value="2" class="font-bold">3 - Einstellungen</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="0">
                  <div class="flex flex-col gap-4 py-2">
                    <div class="flex flex-col gap-2">
                      <label for="projektname" class="text-sm text-surface-700">Projektname</label>
                      <InputText id="projektname" v-model="projektname" class="w-full" />
                    </div>
                    <div class="flex flex-col gap-2">
                      <label for="kategorie" class="text-sm text-surface-700">Kategorie</label>
                      <Select
                        id="kategorie"
                        v-model="kategorie"
                        :options="kategorieOptions"
                        optionLabel="label"
                        optionValue="value"
                        class="w-full"
                      />
                    </div>
                    <div class="flex flex-col gap-2">
                      <label for="verantwortlicher" class="text-sm text-surface-700">Verantwortlicher</label>
                      <Select
                        id="verantwortlicher"
                        v-model="verantwortlicher"
                        :options="verantwortlicherOptions"
                        optionLabel="label"
                        optionValue="value"
                        class="w-full"
                      >
                        <template #value="slotProps">
                          <div v-if="slotProps.value" class="flex items-center gap-2">
                            <Avatar :label="getInitial(slotProps.value)" shape="circle" size="normal" class="bg-surface-200 text-surface-700" />
                            <span>{{ getLabel(slotProps.value) }}</span>
                          </div>
                          <span v-else>{{ slotProps.placeholder }}</span>
                        </template>
                        <template #option="slotProps">
                          <div class="flex items-center gap-2">
                            <Avatar :label="getInitial(slotProps.option.value)" shape="circle" size="normal" class="bg-surface-200 text-surface-700" />
                            <span>{{ slotProps.option.label }}</span>
                          </div>
                        </template>
                      </Select>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="1">
                  <div class="py-2 text-surface-500 text-sm">Zeitplan Inhalte</div>
                </TabPanel>
                <TabPanel value="2">
                  <div class="flex flex-col gap-4 py-2">
                    <div class="flex items-center justify-between">
                      <div class="flex flex-col">
                        <span class="text-sm font-semibold text-surface-900">Öffentlich sichtbar</span>
                        <span class="text-xs text-surface-500">Für alle Teammitglieder</span>
                      </div>
                      <ToggleSwitch v-model="oeffentlich" />
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex flex-col">
                        <span class="text-sm font-semibold text-surface-900">Benachrichtigungen</span>
                        <span class="text-xs text-surface-500">Bei Statusänderungen</span>
                      </div>
                      <ToggleSwitch v-model="benachrichtigungen" />
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>

          <!-- Footer -->
          <div class="flex justify-end gap-2 px-6 py-4">
            <Button label="Abbrechen" severity="secondary" @click="visible = false" />
            <Button label="Weiter" severity="success" @click="onWeiter" />
          </div>
        </div>
      </template>
    </Dialog>
  </div>
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
import ToggleSwitch from 'primevue/toggleswitch';

const visible = ref(true);
const activeTab = ref('0');

const projektname = ref('');
const kategorie = ref('entwicklung');
const kategorieOptions = ref([
  { label: 'Entwicklung', value: 'entwicklung' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' }
]);

const verantwortlicher = ref('max');
const verantwortlicherOptions = ref([
  { label: 'Max Mustmann', value: 'max' },
  { label: 'Erika Musterfrau', value: 'erika' }
]);

const oeffentlich = ref(true);
const benachrichtigungen = ref(false);

const getLabel = (val) => {
  const found = verantwortlicherOptions.value.find((o) => o.value === val);
  return found ? found.label : '';
};

const getInitial = (val) => {
  const label = getLabel(val);
  return label ? label.charAt(0) : '';
};

const onWeiter = () => {
  visible.value = false;
};
</script>