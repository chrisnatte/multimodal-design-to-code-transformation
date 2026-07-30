<template>
  <div class="min-h-screen bg-black flex items-center justify-center p-8">
    <Dialog 
      v-model:visible="visible" 
      modal 
      :closable="true" 
      :style="{ width: '512px' }" 
      class="bg-white rounded-xl border border-surface-200"
    >
      <template #header>
        <div class="flex items-center justify-between w-full pr-2">
          <div class="flex items-center gap-16">
            <div class="flex items-center gap-3">
              <Avatar label="M" shape="circle" class="bg-surface-200 text-surface-700" />
              <div class="flex flex-col">
                <span class="text-sm font-normal text-surface-900">Max Mustermann</span>
                <span class="text-[10px] font-light text-surface-500">Manager</span>
              </div>
            </div>
            <Tag value="Aktiv" severity="success" class="bg-green-100 text-green-800 font-bold text-xs px-2 py-1" />
          </div>
        </div>
      </template>

      <div class="flex flex-col w-full">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">Persönliche Daten</Tab>
            <Tab value="1">Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-4 mt-4">
                <div class="flex flex-col gap-1">
                  <label class="text-sm font-normal text-surface-900">Name</label>
                  <InputText v-model="name" placeholder="Name eingeben" class="w-full" />
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-sm font-normal text-surface-900">E-Mail</label>
                  <InputText v-model="email" placeholder="E-Mail eingeben" class="w-full" />
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-sm font-normal text-surface-900">Rolle</label>
                  <Select v-model="role" :options="roles" placeholder="Rolle wählen" class="w-full" />
                </div>
                <div class="flex items-center gap-2 mt-2">
                  <Checkbox v-model="isActive" inputId="isActive" :binary="true" />
                  <label for="isActive" class="text-sm font-normal text-surface-900">Ist aktiv</label>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <!-- Empty panel for Einstellungen -->
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2 w-full mt-4">
          <Button label="Abbrechen" severity="secondary" @click="visible = false" />
          <Button label="Speichern" @click="visible = false" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const visible = ref(true);
const activeTab = ref('0');
const name = ref('Max Mustmann');
const email = ref('max@example.com');
const role = ref('Manager');
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde']);
const isActive = ref(true);
</script>