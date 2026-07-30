<template>
  <Dialog v-model:visible="visible" modal :style="{ width: '32rem' }" :closable="true">
    <template #header>
      <div class="flex w-full items-center justify-between pr-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-slate-100 text-slate-600" />
          <div class="flex flex-col">
            <span class="font-medium text-surface-900">Max Mustermann</span>
            <span class="text-xs text-surface-500">Manager</span>
          </div>
        </div>
        <Tag value="Aktiv" severity="success" class="bg-emerald-100 text-emerald-700" />
      </div>
    </template>

    <Tabs value="0" class="mt-2">
      <TabList>
        <Tab value="0">Persönliche Daten</Tab>
        <Tab value="1">Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0" class="px-0 py-4">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1.5">
              <label for="name" class="text-sm text-surface-700">Name</label>
              <InputText id="name" v-model="name" />
            </div>
            <div class="flex flex-col gap-1.5">
              <label for="email" class="text-sm text-surface-700">E-Mail</label>
              <InputText id="email" v-model="email" />
            </div>
            <div class="flex flex-col gap-1.5">
              <label for="role" class="text-sm text-surface-700">Rolle</label>
              <Select id="role" v-model="selectedRole" :options="roles" class="w-full" />
            </div>
            <div class="mt-1 flex items-center gap-2">
              <Checkbox v-model="isActive" inputId="isActive" binary />
              <label for="isActive" class="text-sm text-surface-700">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <!-- Empty panel for Einstellungen -->
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-2 pt-2">
        <Button label="Abbrechen" severity="secondary" text />
        <Button label="Speichern" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 text-white" />
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
const selectedRole = ref('Manager');
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde']);
const isActive = ref(true);
</script>