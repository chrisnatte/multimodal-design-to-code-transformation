<template>
  <div class="min-h-screen bg-[#9ca3af] flex items-center justify-center p-4 font-sans">
    <div class="bg-white rounded-xl shadow-xl w-full max-w-[500px] p-6 flex flex-col gap-6">
      
      <!-- Header -->
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold text-slate-800 m-0">Neues Projekt</h2>
        <button class="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer bg-transparent border-none p-0">
          <i class="pi pi-times text-lg"></i>
        </button>
      </div>

      <!-- Tabs -->
      <TabMenu :model="tabItems" v-model:activeIndex="activeTab" :pt="{
        menu: { class: 'border-b border-slate-200 flex gap-2' },
        action: { class: 'bg-transparent border-b-2 border-transparent px-3 py-3 text-slate-500 font-medium hover:text-slate-700 transition-colors' }
      }">
        <template #item="{ item, props }">
          <a v-bind="props.action" :class="[
            'flex items-center cursor-pointer',
            { 'border-[#10b981] text-[#10b981] hover:text-[#10b981]': activeTab === tabItems.indexOf(item) }
          ]">
            <span class="font-medium">{{ item.label }}</span>
          </a>
        </template>
      </TabMenu>

      <!-- Form Content -->
      <div class="flex flex-col gap-5">
        
        <!-- Projektname -->
        <div class="flex flex-col gap-2">
          <label for="projectName" class="text-sm text-slate-700">Projektname</label>
          <InputText id="projectName" v-model="projectName" class="w-full" />
        </div>

        <!-- Kategorie -->
        <div class="flex flex-col gap-2">
          <label for="category" class="text-sm text-slate-700">Kategorie</label>
          <Select id="category" v-model="selectedCategory" :options="categories" optionLabel="name" class="w-full" />
        </div>

        <!-- Verantwortlicher -->
        <div class="flex flex-col gap-2">
          <label for="user" class="text-sm text-slate-700">Verantwortlicher</label>
          <Select id="user" v-model="selectedUser" :options="users" optionLabel="name" class="w-full">
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex items-center gap-2">
                <Avatar :label="slotProps.value.initial" shape="circle" class="bg-[#e2e8f0] text-slate-700 text-xs w-6 h-6 font-medium" />
                <span>{{ slotProps.value.name }}</span>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="flex items-center gap-2">
                <Avatar :label="slotProps.option.initial" shape="circle" class="bg-[#e2e8f0] text-slate-700 text-xs w-6 h-6 font-medium" />
                <span>{{ slotProps.option.name }}</span>
              </div>
            </template>
          </Select>
        </div>

      </div>

      <!-- Footer Actions -->
      <div class="flex justify-end gap-3 mt-2">
        <Button label="Abbrechen" class="bg-[#f1f5f9] text-slate-700 border-none hover:bg-[#e2e8f0] px-4 py-2 font-medium" />
        <Button label="Weiter" class="bg-[#10b981] border-[#10b981] hover:bg-[#059669] hover:border-[#059669] text-white px-4 py-2 font-medium" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import TabMenu from 'primevue/tabmenu';

const activeTab = ref(0);
const tabItems = ref([
  { label: '1 - Allgemein' },
  { label: '2 - Zeitplan' },
  { label: '3 - Einstellungen' }
]);

const projectName = ref('');

const categories = ref([
  { name: 'Entwicklung', code: 'DEV' },
  { name: 'Design', code: 'DES' },
  { name: 'Marketing', code: 'MAR' }
]);
const selectedCategory = ref(categories.value[0]);

const users = ref([
  { name: 'Max Mustmann', initial: 'M' },
  { name: 'Erika Musterfrau', initial: 'E' },
  { name: 'John Doe', initial: 'J' }
]);
const selectedUser = ref(users.value[0]);
</script>