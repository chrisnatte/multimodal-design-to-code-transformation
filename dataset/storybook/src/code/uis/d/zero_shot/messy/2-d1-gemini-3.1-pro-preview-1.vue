<template>
  <div class="min-h-screen bg-black/80 flex items-center justify-center p-4 font-sans">
    <div class="bg-white rounded-xl border border-slate-200 w-full max-w-[512px] flex flex-col overflow-hidden shadow-lg">
      
      <!-- Header -->
      <div class="flex items-center justify-between px-5 py-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-slate-200 text-slate-700 font-medium" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-slate-900">Max Mustermann</span>
            <span class="text-[10px] font-light text-slate-500">Manager</span>
          </div>
          <Tag value="Aktiv" class="bg-[#d1fae5] text-[#047857] font-bold text-xs px-2 py-0.5 rounded-md ml-2" :pt="{ value: { class: 'text-[12.25px]' } }" />
        </div>
        <Button icon="pi pi-times" text rounded aria-label="Close" class="text-slate-500 hover:bg-slate-100 w-8 h-8 p-0" />
      </div>

      <!-- Content -->
      <Tabs value="0" class="flex flex-col w-full">
        <TabList class="px-5 border-b border-slate-200 flex gap-6">
          <Tab value="0" class="py-3 px-0 border-b-2 border-[#10b981] text-[#10b981] font-bold text-sm bg-transparent">Persönliche Daten</Tab>
          <Tab value="1" class="py-3 px-0 border-b-2 border-transparent text-slate-500 font-bold text-sm bg-transparent hover:text-slate-700">Einstellungen</Tab>
        </TabList>
        
        <TabPanels class="p-0">
          <TabPanel value="0" class="p-5 flex flex-col gap-5">
            
            <!-- Name Field -->
            <div class="flex flex-col gap-1.5">
              <label for="name" class="text-sm text-slate-700">Name</label>
              <InputText id="name" v-model="name" class="w-full border-slate-300 rounded-md" />
            </div>

            <!-- Email Field -->
            <div class="flex flex-col gap-1.5">
              <label for="email" class="text-sm text-slate-700">E-Mail</label>
              <InputText id="email" v-model="email" class="w-full border-slate-300 rounded-md" />
            </div>

            <!-- Role Field -->
            <div class="flex flex-col gap-1.5">
              <label for="role" class="text-sm text-slate-700">Rolle</label>
              <Select id="role" v-model="selectedRole" :options="roles" optionLabel="label" class="w-full border-slate-300 rounded-md" />
            </div>

            <!-- Active Checkbox -->
            <div class="flex items-center gap-2 mt-1">
              <Checkbox v-model="isActive" inputId="isActive" :binary="true" class="border-slate-300" />
              <label for="isActive" class="text-sm text-slate-700 cursor-pointer">Ist aktiv</label>
            </div>

          </TabPanel>
        </TabPanels>
      </Tabs>

      <!-- Footer -->
      <div class="flex items-center justify-end gap-3 px-5 py-4">
        <Button label="Abbrechen" class="bg-[#f1f5f9] text-slate-700 border-none hover:bg-slate-200 font-medium text-sm px-4 py-2 rounded-md" />
        <Button label="Speichern" class="bg-[#10b981] text-white border-none hover:bg-[#059669] font-medium text-sm px-4 py-2 rounded-md" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const name = ref('Max Mustmann');
const email = ref('max@example.com');
const selectedRole = ref({ label: 'Manager', value: 'manager' });
const roles = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'mitarbeiter' },
  { label: 'Kunde', value: 'kunde' }
]);
const isActive = ref(true);
</script>