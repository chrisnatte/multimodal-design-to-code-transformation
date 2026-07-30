<template>
  <div class="bg-black flex flex-col items-center py-[280px] min-h-screen font-sans">
    <div class="bg-white rounded-xl border border-[#e2e8f0] flex flex-col w-[512px]">
      
      <!-- Header -->
      <div class="flex flex-row items-center p-[17.5px] gap-4">
        <div class="flex flex-row justify-between items-center gap-16 grow">
          <div class="flex flex-row items-center gap-3">
            <Avatar label="M" shape="circle" class="bg-[#e2e8f0] text-sm" />
            <div class="flex flex-col">
              <span class="text-sm font-normal text-black">Max Mustermann</span>
              <span class="text-[10px] font-light text-black">Manager</span>
            </div>
          </div>
          <Tag value="Aktiv" class="bg-[#d1fae5] text-[#065f46] font-bold text-[12.25px] px-2 py-1" :rounded="false" />
        </div>
        <div class="flex flex-col gap-[7px]">
          <Button icon="pi pi-times" text severity="secondary" class="w-7 h-7 p-0" />
        </div>
      </div>

      <!-- Content -->
      <div class="flex flex-col p-[17.5px] gap-[7px]">
        <Tabs value="0" class="flex flex-col">
          <TabList class="flex flex-row border-b border-[#e2e8f0] bg-white">
            <Tab value="0" class="font-bold text-sm text-black">Persönliche Daten</Tab>
            <Tab value="1" class="font-bold text-sm text-black">Einstellungen</Tab>
          </TabList>
          <TabPanels class="flex flex-col pt-[12.25px] pb-[15.75px] px-1 bg-white">
            <TabPanel value="0" class="flex flex-col gap-4">
              
              <!-- Name Input -->
              <div class="flex flex-col gap-2">
                <label for="name" class="text-sm font-normal text-black">Name</label>
                <InputText id="name" v-model="name" placeholder="Name eingeben" class="border-[#cbd5e1] rounded-md px-[10.5px] py-[7px] text-sm" />
              </div>

              <!-- Email Input -->
              <div class="flex flex-col gap-2">
                <label for="email" class="text-sm font-normal text-black">E-Mail</label>
                <InputText id="email" v-model="email" placeholder="E-Mail eingeben" class="border-[#cbd5e1] rounded-md px-[10.5px] py-[7px] text-sm" />
              </div>

              <!-- Role Select -->
              <div class="flex flex-col gap-2">
                <label for="role" class="text-sm font-normal text-black">Rolle</label>
                <Select id="role" v-model="selectedRole" :options="roles" optionLabel="label" placeholder="Placeholder" class="border-[#10b981] rounded-md text-sm" />
              </div>

              <!-- Is Active Checkbox -->
              <div class="flex flex-row items-center gap-[22.5px] mt-2">
                <Checkbox v-model="isActive" inputId="isActive" :binary="true" class="text-[#10b981]" />
                <label for="isActive" class="text-sm font-normal text-black">Ist aktiv</label>
              </div>

            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <!-- Footer -->
      <div class="flex flex-row justify-end p-[17.5px] gap-[7px]">
        <Button label="Abbrechen" severity="secondary" class="bg-[#f1f5f9] text-black font-medium text-sm px-4 py-2 border-none" />
        <Button label="Speichern" class="bg-[#10b981] text-white font-medium text-sm px-4 py-2 border-none" />
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

const name = ref('Max Mustmann');
const email = ref('max@example.com');

const selectedRole = ref({ label: 'Manager', value: 'manager' });
const roles = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'employee' },
  { label: 'Kunde', value: 'customer' }
]);

const isActive = ref(true);
</script>