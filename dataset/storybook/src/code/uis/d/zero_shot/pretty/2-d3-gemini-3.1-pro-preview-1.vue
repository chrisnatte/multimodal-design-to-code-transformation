<template>
  <div class="min-h-screen flex items-center justify-center bg-black/50 p-4 font-sans">
    <Dialog 
      v-model:visible="visible" 
      modal 
      :closable="false" 
      :pt="{ 
        root: { class: 'w-full max-w-[512px] rounded-xl bg-white shadow-lg border border-surface-200' }, 
        header: { class: 'p-4 pb-0' }, 
        content: { class: 'p-0' }, 
        footer: { class: 'p-4' } 
      }"
    >
      <template #header>
        <div class="flex items-center justify-between w-full pb-4">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" class="bg-surface-100 text-surface-600 font-medium" />
            <div class="flex flex-col">
              <span class="text-sm font-normal text-surface-900">Max Mustermann</span>
              <span class="text-[10px] font-light text-surface-500">Manager</span>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <Tag value="Aktiv" class="bg-[#D1FAE5] text-[#059669] font-bold text-xs px-2 py-1 rounded" :unstyled="true" />
            <Button icon="pi pi-times" text rounded severity="secondary" @click="visible = false" class="w-7 h-7 p-0 text-surface-500 hover:bg-surface-100" />
          </div>
        </div>
      </template>

      <Tabs value="0">
        <TabList class="px-4 border-b border-surface-200">
          <Tab value="0" class="font-bold text-sm py-3 px-4 text-surface-900 border-b-2 border-surface-900">Persönliche Daten</Tab>
          <Tab value="1" class="font-bold text-sm py-3 px-4 text-surface-500 hover:text-surface-700">Einstellungen</Tab>
        </TabList>
        <TabPanels class="p-4">
          <TabPanel value="0" class="flex flex-col gap-4">
            <div class="flex flex-col gap-1.5">
              <label class="text-sm text-surface-900">Name</label>
              <InputText v-model="name" class="w-full border-surface-300 rounded-md" />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-sm text-surface-900">E-Mail</label>
              <InputText v-model="email" class="w-full border-surface-300 rounded-md" />
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-sm text-surface-900">Rolle</label>
              <Select v-model="selectedRole" :options="roles" class="w-full border-surface-300 rounded-md" />
            </div>
            <div class="flex items-center gap-2 mt-2">
              <Checkbox v-model="isActive" inputId="isActive" :binary="true" class="border-surface-300" />
              <label for="isActive" class="text-sm text-surface-900 cursor-pointer">Ist aktiv</label>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <!-- Empty state for Einstellungen tab -->
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <div class="flex justify-end gap-2 w-full pt-4">
          <Button label="Abbrechen" severity="secondary" class="bg-surface-100 hover:bg-surface-200 text-surface-700 font-medium text-sm px-4 py-2 border-none" @click="visible = false" />
          <Button label="Speichern" class="bg-[#10B981] hover:bg-[#059669] text-white font-medium text-sm px-4 py-2 border-none" @click="visible = false" />
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
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';

const visible = ref(true);
const name = ref('Max Mustmann');
const email = ref('max@example.com');
const selectedRole = ref('Manager');
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde']);
const isActive = ref(true);
</script>