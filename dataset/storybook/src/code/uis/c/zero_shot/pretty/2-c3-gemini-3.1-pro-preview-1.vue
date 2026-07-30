<template>
  <div class="min-h-screen bg-surface-500 flex items-center justify-center p-4">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="false"
      :style="{ width: '32rem' }"
      class="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <template #header>
        <div class="flex items-center justify-between w-full pb-4 border-b border-surface-200">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" class="bg-surface-100 text-surface-600 font-semibold" />
            <div class="flex flex-col">
              <span class="font-semibold text-surface-900">Max Mustermann</span>
              <span class="text-sm text-surface-500">Manager</span>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <Tag value="Aktiv" severity="success" class="bg-green-100 text-green-700 font-medium px-2 py-1 rounded-md" />
            <Button icon="pi pi-times" text rounded severity="secondary" @click="visible = false" class="w-8 h-8 p-0" />
          </div>
        </div>
      </template>

      <div class="pt-2">
        <Tabs value="0">
          <TabList class="border-b border-surface-200">
            <Tab value="0" class="text-green-600 border-b-2 border-green-600 font-medium px-4 py-3">Persönliche Daten</Tab>
            <Tab value="1" class="text-surface-500 font-medium px-4 py-3">Einstellungen</Tab>
          </TabList>
          <TabPanels class="p-0 pt-6">
            <TabPanel value="0">
              <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-2">
                  <label for="name" class="text-sm font-medium text-surface-700">Name</label>
                  <InputText id="name" v-model="name" class="w-full" />
                </div>
                
                <div class="flex flex-col gap-2">
                  <label for="email" class="text-sm font-medium text-surface-700">E-Mail</label>
                  <InputText id="email" v-model="email" class="w-full" />
                </div>

                <div class="flex flex-col gap-2 relative">
                  <label for="role" class="text-sm font-medium text-surface-700">Rolle</label>
                  <Dropdown id="role" v-model="selectedRole" :options="roles" optionLabel="name" class="w-full border-green-500" />
                  
                  <!-- Mocking the open dropdown state visually as seen in the image -->
                  <div class="absolute top-full left-0 w-full mt-1 bg-white border border-surface-200 rounded-md shadow-md z-10">
                    <div class="px-3 py-2 bg-green-50 text-green-700 cursor-pointer">Manager</div>
                    <div class="px-3 py-2 text-surface-700 hover:bg-surface-50 cursor-pointer">Mitarbeiter</div>
                    <div class="px-3 py-2 text-surface-700 hover:bg-surface-50 cursor-pointer">Kunde</div>
                  </div>
                </div>

                <div class="flex items-center gap-2 mt-24">
                  <Checkbox v-model="isActive" inputId="isActive" :binary="true" class="text-green-500" />
                  <label for="isActive" class="text-sm text-surface-700">Ist aktiv</label>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <!-- Empty panel for settings -->
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <template #footer>
        <div class="flex justify-end gap-3 pt-4 border-t border-surface-200 mt-6">
          <Button label="Abbrechen" severity="secondary" text class="bg-surface-100 hover:bg-surface-200 text-surface-700 px-4 py-2 rounded-md font-medium" @click="visible = false" />
          <Button label="Speichern" class="bg-green-500 hover:bg-green-600 border-none text-white px-4 py-2 rounded-md font-medium" @click="visible = false" />
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
import Button from 'primevue/button';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';

const visible = ref(true);
const name = ref('Max Mustermann');
const email = ref('max@example.com');
const isActive = ref(true);

const selectedRole = ref({ name: 'Manager', code: 'MGR' });
const roles = ref([
  { name: 'Manager', code: 'MGR' },
  { name: 'Mitarbeiter', code: 'EMP' },
  { name: 'Kunde', code: 'CUS' }
]);
</script>