<template>
  <div class="min-h-screen bg-[#9ca3af] flex items-center justify-center p-4 font-sans">
    <div class="bg-white rounded-xl shadow-lg w-full max-w-[520px] flex flex-col overflow-hidden">
      
      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-[#f1f5f9] text-[#475569] font-semibold text-sm w-10 h-10" />
          <div class="flex flex-col">
            <span class="text-[#1e293b] font-medium text-sm">Max Mustermann</span>
            <span class="text-[#64748b] text-xs">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <Tag value="Aktiv" class="bg-[#d1fae5] text-[#059669] font-semibold px-2.5 py-0.5 rounded text-xs" />
          <Button icon="pi pi-times" text rounded class="text-[#64748b] hover:bg-gray-100 w-8 h-8 p-0" />
        </div>
      </div>

      <!-- Tabs -->
      <Tabs value="0">
        <TabList class="px-6 border-b border-gray-200 flex gap-6">
          <Tab value="0" class="text-[#059669] border-b-2 border-[#059669] font-medium text-sm pb-3 px-0 bg-transparent">Persönliche Daten</Tab>
          <Tab value="1" class="text-[#64748b] font-medium text-sm pb-3 px-0 bg-transparent border-b-2 border-transparent hover:border-gray-300">Einstellungen</Tab>
        </TabList>
        
        <TabPanels class="p-0">
          <TabPanel value="0" class="p-6 flex flex-col gap-5">
            
            <!-- Form Fields -->
            <div class="flex flex-col gap-1.5">
              <label class="text-sm text-[#334155]">Name</label>
              <InputText v-model="name" class="w-full border-gray-300 rounded-md shadow-sm text-sm px-3 py-2 text-[#1e293b]" />
            </div>
            
            <div class="flex flex-col gap-1.5">
              <label class="text-sm text-[#334155]">E-Mail</label>
              <InputText v-model="email" class="w-full border-gray-300 rounded-md shadow-sm text-sm px-3 py-2 text-[#1e293b]" />
            </div>
            
            <div class="flex flex-col gap-1.5">
              <label class="text-sm text-[#334155]">Rolle</label>
              <Select v-model="selectedRole" :options="roles" optionLabel="name" class="w-full border-[#059669] rounded-md shadow-sm text-sm" panelClass="text-sm">
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex items-center text-[#1e293b]">
                    {{ slotProps.value.name }}
                  </div>
                </template>
              </Select>
            </div>
            
            <div class="flex items-center gap-2 mt-1">
              <Checkbox v-model="isActive" inputId="isActive" :binary="true" class="border-gray-300 rounded" />
              <label for="isActive" class="text-sm text-[#334155] cursor-pointer">Ist aktiv</label>
            </div>
            
          </TabPanel>
          <TabPanel value="1">
            <!-- Empty panel for Einstellungen -->
          </TabPanel>
        </TabPanels>
      </Tabs>

      <!-- Footer -->
      <div class="px-6 py-4 flex justify-end gap-3">
        <Button label="Abbrechen" class="bg-[#f1f5f9] text-[#475569] border-none hover:bg-gray-200 font-medium text-sm px-4 py-2 rounded-md" />
        <Button label="Speichern" class="bg-[#059669] border-[#059669] hover:bg-[#047857] text-white font-medium text-sm px-4 py-2 rounded-md" />
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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

const name = ref('Max Mustermann');
const email = ref('max@example.com');
const isActive = ref(true);

const roles = ref([
  { name: 'Manager', code: 'MGR' },
  { name: 'Mitarbeiter', code: 'EMP' },
  { name: 'Kunde', code: 'CUS' }
]);

const selectedRole = ref(roles.value[0]);
</script>