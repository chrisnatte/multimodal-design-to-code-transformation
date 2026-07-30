<template>
  <div class="min-h-screen bg-gray-400 flex items-center justify-center p-4">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="true"
      :style="{ width: '32rem' }"
      pt:root:class="bg-white rounded-xl shadow-xl overflow-hidden"
      pt:header:class="px-6 py-4 border-b border-gray-100 flex items-center justify-between"
      pt:content:class="p-0"
      pt:footer:class="px-6 py-4 border-t border-gray-100 flex justify-end gap-2"
    >
      <template #header>
        <div class="flex items-center gap-3 flex-1">
          <Avatar
            label="M"
            shape="circle"
            class="bg-blue-50 text-blue-600 font-semibold text-sm w-10 h-10"
          />
          <div class="flex flex-col">
            <span class="font-semibold text-gray-900 text-base leading-tight">Max Mustermann</span>
            <span class="text-sm text-gray-500 leading-tight">Manager</span>
          </div>
          <Tag
            value="Aktiv"
            severity="success"
            rounded
            class="ml-auto mr-2 bg-green-100 text-green-700 font-bold text-xs px-2.5 py-0.5"
          />
        </div>
      </template>

      <Tabs value="0" pt:root:class="w-full">
        <TabList pt:root:class="px-6 pt-2 border-b border-gray-200 flex gap-6">
          <Tab
            value="0"
            pt:root:class="pb-3 text-sm font-semibold text-green-600 border-b-2 border-green-500 bg-transparent cursor-pointer"
          >
            Persönliche Daten
          </Tab>
          <Tab
            value="1"
            pt:root:class="pb-3 text-sm font-medium text-gray-500 hover:text-gray-700 bg-transparent cursor-pointer border-b-2 border-transparent"
          >
            Einstellungen
          </Tab>
        </TabList>
        <TabPanels pt:root:class="p-6">
          <TabPanel value="0">
            <div class="flex flex-col gap-5">
              <div class="flex flex-col gap-1.5">
                <label for="name" class="text-sm font-medium text-gray-700">Name</label>
                <InputText
                  id="name"
                  v-model="name"
                  class="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm px-3 py-2 border"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="email" class="text-sm font-medium text-gray-700">E-Mail</label>
                <InputText
                  id="email"
                  v-model="email"
                  class="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm px-3 py-2 border"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="role" class="text-sm font-medium text-gray-700">Rolle</label>
                <Select
                  id="role"
                  v-model="selectedRole"
                  :options="roles"
                  optionLabel="label"
                  class="w-full border-green-500 ring-1 ring-green-500 rounded-md shadow-sm sm:text-sm"
                  pt:root:class="border border-green-500 rounded-md"
                  pt:input:class="px-3 py-2 text-gray-900"
                  pt:trigger:class="text-gray-500 px-3"
                />
                <!-- Note: The dropdown menu is visually open in the screenshot. 
                     PrimeVue Select doesn't have a simple prop to force it open statically for a mockup, 
                     but the styling below mimics the open state options shown in the image if it were opened. -->
              </div>

              <div class="flex items-center gap-2 mt-1">
                <Checkbox
                  v-model="isActive"
                  inputId="isActive"
                  :binary="true"
                  pt:box:class="border-gray-300 rounded text-green-600 focus:ring-green-500 w-5 h-5 flex items-center justify-center bg-green-500 border-none"
                  pt:icon:class="text-white w-3 h-3"
                />
                <label for="isActive" class="text-sm text-gray-700 cursor-pointer">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <!-- Content for Einstellungen -->
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <Button
          label="Abbrechen"
          variant="text"
          class="text-gray-600 hover:bg-gray-100 font-medium px-4 py-2 rounded-md text-sm"
          @click="visible = false"
        />
        <Button
          label="Speichern"
          class="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md text-sm border-none"
          @click="visible = false"
        />
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
const name = ref('Max Mustermann');
const email = ref('max@example.com');
const selectedRole = ref({ label: 'Manager', value: 'manager' });
const roles = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'mitarbeiter' },
  { label: 'Kunde', value: 'kunde' }
]);
const isActive = ref(true);
</script>