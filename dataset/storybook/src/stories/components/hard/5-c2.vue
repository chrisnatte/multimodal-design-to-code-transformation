<template>
  <div class="min-h-screen flex items-center justify-center bg-black/40 p-6">
    <Dialog
      v-model:visible="state.visible"
      modal
      :closable="false"
      :draggable="false"
      :style="{ width: '640px' }"
      :pt="{
        root: { class: 'rounded-xl overflow-hidden' },
        content: { class: 'pt-0 pb-5 px-5' }
      }"
    >
      <div class="flex flex-col gap-5">
        <div class="flex items-center justify-between pt-2">
          <h2 class="text-3xl font-semibold text-slate-700">Neues Projekt</h2>
          <Button icon="pi pi-times" variant="text" rounded severity="secondary" aria-label="Schließen" @click="state.visible = false" />
        </div>

        <Tabs v-model:value="state.activeTab">
          <TabList>
            <Tab value="1">1 - Allgemein</Tab>
            <Tab value="2">2 - Zeitplan</Tab>
            <Tab value="3">3 - Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="1">
              <div class="flex flex-col gap-4 pt-2">
                <div class="flex flex-col gap-2">
                  <label for="projektname" class="text-slate-700">Projektname</label>
                  <InputText id="projektname" v-model="state.projektname" />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="kategorie" class="text-slate-700">Kategorie</label>
                  <Select
                    id="kategorie"
                    v-model="state.kategorie"
                    :options="kategorien"
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Kategorie wählen"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="verantwortlicher" class="text-slate-700">Verantwortlicher</label>
                  <Select
                    id="verantwortlicher"
                    v-model="state.verantwortlicher"
                    :options="verantwortliche"
                    optionLabel="name"
                    optionValue="id"
                    placeholder="Verantwortlichen wählen"
                  >
                    <template #value="slotProps">
                      <div v-if="slotProps.value && selectedPerson" class="flex items-center gap-2">
                        <Avatar :label="selectedPerson.initials" shape="circle" size="small" />
                        <span>{{ selectedPerson.name }}</span>
                      </div>
                      <span v-else>{{ slotProps.placeholder }}</span>
                    </template>
                    <template #option="slotProps">
                      <div class="flex items-center gap-2">
                        <Avatar :label="slotProps.option.initials" shape="circle" size="small" />
                        <span>{{ slotProps.option.name }}</span>
                      </div>
                    </template>
                  </Select>
                </div>
              </div>
            </TabPanel>

            <TabPanel value="2">
              <p class="text-slate-500">Zeitplan-Einstellungen</p>
            </TabPanel>
            <TabPanel value="3">
              <p class="text-slate-500">Projekt-Einstellungen</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <div class="flex justify-end gap-3">
          <Button label="Abbrechen" severity="secondary" @click="state.visible = false" />
          <Button label="Weiter" @click="state.activeTab = '2'" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Avatar from 'primevue/avatar';

const state = reactive({
  visible: true,
  activeTab: '1',
  projektname: '',
  kategorie: 'entwicklung',
  verantwortlicher: 1
});

const kategorien = [
  { label: 'Entwicklung', value: 'entwicklung' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Design', value: 'design' }
];

const verantwortliche = [
  { id: 1, name: 'Max Mustmann', initials: 'M' },
  { id: 2, name: 'Anna Becker', initials: 'A' },
  { id: 3, name: 'Lukas Weber', initials: 'L' }
];

const selectedPerson = computed(() => verantwortliche.find((p) => p.id === state.verantwortlicher));
</script>