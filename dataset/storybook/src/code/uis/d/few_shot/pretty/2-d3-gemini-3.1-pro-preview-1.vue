<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :pt="{
      root: 'w-full max-w-[512px] rounded-xl',
      header: 'p-4 pb-0',
      content: 'p-4',
      footer: 'p-4 pt-0 gap-2'
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-surface-100 text-surface-600" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-surface-900">Max Mustermann</span>
            <span class="text-[10px] font-light text-surface-500">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <Tag value="Aktiv" severity="success" class="!bg-green-100 !text-green-800" />
          <Button icon="pi pi-times" text rounded severity="secondary" class="!w-7 !h-7" @click="visible = false" />
        </div>
      </div>
    </template>

    <Tabs value="0">
      <TabList>
        <Tab value="0">Persönliche Daten</Tab>
        <Tab value="1">Einstellungen</Tab>
      </TabList>
      <TabPanels class="!p-0 !pt-4">
        <TabPanel value="0" class="flex flex-col gap-4">
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
            <Select id="role" v-model="role" :options="roles" class="w-full" />
          </div>
          
          <div class="flex items-center gap-2 mt-2">
            <Checkbox v-model="isActive" inputId="isActive" binary />
            <label for="isActive" class="text-sm text-surface-700">Ist aktiv</label>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <!-- Settings content would go here -->
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="visible = false" />
      <Button label="Speichern" severity="primary" @click="visible = false" />
    </template>
  </Dialog>
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
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';

const visible = ref(true);
const name = ref('Max Mustmann');
const email = ref('max@example.com');
const role = ref('Manager');
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde']);
const isActive = ref(true);
</script>