<template>
  <div class="min-h-screen bg-gray-400 flex items-center justify-center p-4 font-sans">
    <div class="bg-white rounded-xl shadow-xl w-full max-w-[500px] overflow-hidden">
      
      <!-- Header -->
      <div class="flex items-center justify-between p-6 pb-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-blue-50 text-blue-800 font-semibold text-lg" size="large" />
          <div class="flex flex-col">
            <span class="text-gray-900 font-medium">Max Mustermann</span>
            <span class="text-gray-500 text-sm">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <Tag value="Aktiv" class="bg-emerald-100 text-emerald-700 font-semibold px-3 py-1 rounded-md" :pt="{ value: { class: 'text-xs' } }" />
          <Button icon="pi pi-times" text rounded class="text-gray-500 hover:bg-gray-100 w-8 h-8 p-0" />
        </div>
      </div>

      <!-- Tabs -->
      <div class="px-6 border-b border-gray-200">
        <TabMenu :model="tabs" v-model:activeIndex="activeTab" :pt="{
            menu: { class: 'border-none bg-transparent' },
            action: { class: 'bg-transparent border-b-2 pb-3 pt-2 px-4' }
        }">
            <template #item="{ item, props }">
                <a v-bind="props.action" class="flex items-center gap-2 cursor-pointer" :class="[
                    activeTab === tabs.indexOf(item) ? 'text-emerald-500 border-emerald-500 font-medium' : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300 font-medium'
                ]">
                    <span class="text-sm">{{ item.label }}</span>
                </a>
            </template>
        </TabMenu>
      </div>

      <!-- Form Content -->
      <div class="p-6 flex flex-col gap-5">
        <!-- Name Field -->
        <div class="flex flex-col gap-1.5">
          <label for="name" class="text-sm font-medium text-gray-700">Name</label>
          <InputText id="name" v-model="name" class="w-full border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
        </div>

        <!-- Email Field -->
        <div class="flex flex-col gap-1.5">
          <label for="email" class="text-sm font-medium text-gray-700">E-Mail</label>
          <InputText id="email" v-model="email" class="w-full border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
        </div>

        <!-- Role Field -->
        <div class="flex flex-col gap-1.5">
          <label for="role" class="text-sm font-medium text-gray-700">Rolle</label>
          <Dropdown id="role" v-model="selectedRole" :options="roles" optionLabel="name" class="w-full border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
        </div>

        <!-- Active Checkbox -->
        <div class="flex items-center gap-2 mt-1">
          <Checkbox v-model="isActive" inputId="isActive" :binary="true" class="border-gray-300 text-emerald-500 focus:ring-emerald-500" />
          <label for="isActive" class="text-sm text-gray-700 cursor-pointer">Ist aktiv</label>
        </div>
      </div>

      <!-- Footer -->
      <div class="p-6 pt-2 flex justify-end gap-3">
        <Button label="Abbrechen" class="bg-gray-100 text-gray-700 border-none hover:bg-gray-200 font-medium px-4 py-2" />
        <Button label="Speichern" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600 text-white font-medium px-4 py-2" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import TabMenu from 'primevue/tabmenu';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';

const activeTab = ref(0);
const tabs = ref([
  { label: 'Persönliche Daten' },
  { label: 'Einstellungen' }
]);

const name = ref('Max Mustermann');
const email = ref('max@example.com');

const selectedRole = ref({ name: 'Manager', code: 'MGR' });
const roles = ref([
  { name: 'Manager', code: 'MGR' },
  { name: 'Mitarbeiter', code: 'EMP' },
  { name: 'Kunde', code: 'CUS' }
]);

const isActive = ref(true);
</script>