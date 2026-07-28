<template>
  <div class="min-h-screen bg-[#9ca3af] flex items-center justify-center p-4 font-sans">
    <div class="bg-white rounded-xl shadow-xl w-full max-w-[500px] overflow-hidden">
      
      <!-- Header -->
      <div class="flex justify-between items-center px-6 pt-6 pb-4">
        <h2 class="text-xl font-semibold text-slate-800 m-0">Neues Projekt</h2>
        <button class="text-slate-400 hover:text-slate-600 transition-colors bg-transparent border-none cursor-pointer p-1">
          <i class="pi pi-times text-sm"></i>
        </button>
      </div>

      <!-- Tabs -->
      <div class="px-6">
        <TabMenu :model="tabItems" v-model:activeIndex="activeTab" class="border-b border-slate-200" 
                 :pt="{
                   menu: { class: 'flex m-0 p-0 list-none' },
                   menuitem: { class: 'mr-6' },
                   action: ({ context }) => ({
                     class: [
                       'cursor-pointer flex items-center px-0 py-3 border-b-2 font-medium text-sm transition-colors duration-200',
                       context.active ? 'border-[#10b981] text-[#10b981]' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                     ]
                   })
                 }" />
      </div>

      <!-- Form Content -->
      <div class="p-6 flex flex-col gap-5">
        
        <!-- Projektname -->
        <div class="flex flex-col gap-2">
          <label for="projectName" class="text-sm text-slate-700">Projektname</label>
          <InputText id="projectName" v-model="projectName" class="w-full border-slate-300 rounded-md" />
        </div>

        <!-- Kategorie -->
        <div class="flex flex-col gap-2">
          <label for="category" class="text-sm text-slate-700">Kategorie</label>
          <Dropdown id="category" v-model="selectedCategory" :options="categories" optionLabel="name" 
                    class="w-full border-slate-300 rounded-md" />
        </div>

        <!-- Verantwortlicher -->
        <div class="flex flex-col gap-2">
          <label for="responsible" class="text-sm text-slate-700">Verantwortlicher</label>
          <Dropdown id="responsible" v-model="selectedResponsible" :options="responsibles" optionLabel="name" 
                    class="w-full border-slate-300 rounded-md align-items-center">
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex items-center gap-2">
                <Avatar :label="slotProps.value.initial" shape="circle" class="w-6 h-6 text-xs bg-slate-200 text-slate-700 font-medium" />
                <span class="text-slate-700">{{ slotProps.value.name }}</span>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="flex items-center gap-2">
                <Avatar :label="slotProps.option.initial" shape="circle" class="w-6 h-6 text-xs bg-slate-200 text-slate-700 font-medium" />
                <span>{{ slotProps.option.name }}</span>
              </div>
            </template>
          </Dropdown>
        </div>

      </div>

      <!-- Footer -->
      <div class="px-6 pb-6 pt-2 flex justify-end gap-3">
        <Button label="Abbrechen" class="bg-[#f1f5f9] text-slate-700 border-none hover:bg-slate-200 px-4 py-2 rounded-md font-medium" />
        <Button label="Weiter" class="bg-[#10b981] text-white border-none hover:bg-[#059669] px-4 py-2 rounded-md font-medium" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import TabMenu from 'primevue/tabmenu';
import Avatar from 'primevue/avatar';

const activeTab = ref(0);
const tabItems = ref([
  { label: '1 - Allgemein' },
  { label: '2 - Zeitplan' },
  { label: '3 - Einstellungen' }
]);

const projectName = ref('');

const selectedCategory = ref({ name: 'Entwicklung', code: 'DEV' });
const categories = ref([
  { name: 'Entwicklung', code: 'DEV' },
  { name: 'Design', code: 'DES' },
  { name: 'Marketing', code: 'MAR' },
  { name: 'Vertrieb', code: 'SAL' }
]);

const selectedResponsible = ref({ name: 'Max Mustmann', initial: 'M' });
const responsibles = ref([
  { name: 'Max Mustmann', initial: 'M' },
  { name: 'Erika Musterfrau', initial: 'E' },
  { name: 'John Doe', initial: 'J' }
]);
</script>