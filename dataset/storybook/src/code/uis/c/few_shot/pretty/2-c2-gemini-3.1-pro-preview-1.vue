<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="true"
    :style="{ width: '500px' }"
    :pt="{
      root: 'bg-white rounded-xl shadow-lg',
      header: 'p-6 pb-0 border-b-0',
      content: 'p-6 pt-4',
      footer: 'p-6 pt-0 border-t-0',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-blue-100 text-blue-800" />
          <div class="flex flex-col">
            <span class="text-base font-semibold text-gray-900">Max Mustermann</span>
            <span class="text-sm text-gray-500">Manager</span>
          </div>
        </div>
        <Tag value="Aktiv" severity="success" class="bg-green-100 text-green-800" />
      </div>
    </template>

    <Tabs value="0">
      <TabList>
        <Tab value="0" class="text-green-600 font-semibold border-b-2 border-green-600">Persönliche Daten</Tab>
        <Tab value="1" class="text-gray-500">Einstellungen</Tab>
      </TabList>
      <TabPanels class="p-0 pt-6">
        <TabPanel value="0" class="flex flex-col gap-4">
          <div class="flex flex-col gap-1.5">
            <label for="name" class="text-sm font-medium text-gray-700">Name</label>
            <InputText id="name" v-model="name" class="w-full" />
          </div>

          <div class="flex flex-col gap-1.5">
            <label for="email" class="text-sm font-medium text-gray-700">E-Mail</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>

          <div class="flex flex-col gap-1.5">
            <label for="role" class="text-sm font-medium text-gray-700">Rolle</label>
            <Select
              id="role"
              v-model="selectedRole"
              :options="roles"
              optionLabel="label"
              class="w-full"
              :pt="{
                root: 'border-green-500',
                list: 'p-1',
                option: ({ context }) => ({
                  class: context.selected ? 'bg-green-50 text-green-700' : 'text-gray-700',
                }),
              }"
            />
          </div>

          <div class="flex items-center gap-2 mt-2">
            <Checkbox v-model="isActive" inputId="isActive" binary class="!border-green-500 !bg-green-500" />
            <label for="isActive" class="text-sm text-gray-700">Ist aktiv</label>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <!-- Settings content would go here -->
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-3 mt-4">
        <Button label="Abbrechen" severity="secondary" variant="text" @click="visible = false" class="bg-gray-100 text-gray-700 hover:bg-gray-200" />
        <Button label="Speichern" severity="success" @click="visible = false" class="bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600" />
      </div>
    </template>
  </Dialog>
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
const isActive = ref(true);

const selectedRole = ref({ label: 'Manager', value: 'manager' });
const roles = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'employee' },
  { label: 'Kunde', value: 'customer' }
]);
</script>