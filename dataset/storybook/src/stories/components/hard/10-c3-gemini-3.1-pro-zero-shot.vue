<template>
  <div class="p-8 bg-white font-sans">
    <DataTable :value="users" class="w-full text-sm">
      <Column header="Nutzer" class="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <div class="flex items-center gap-4">
            <div class="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium text-sm">
              {{ data.initials }}
            </div>
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column header="Status" class="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" class="px-2 py-1 text-xs font-bold rounded-md" />
        </template>
      </Column>
      
      <Column header="Fortschritt" class="py-4 border-b border-slate-100 w-1/3">
        <template #body="{ data }">
          <div class="flex flex-col w-full max-w-[200px]">
            <div class="flex justify-between text-xs text-slate-500 mb-1.5">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progressValue }} %</span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-1.5">
              <div class="bg-emerald-500 h-1.5 rounded-full" :style="{ width: data.progressValue + '%' }"></div>
            </div>
          </div>
        </template>
      </Column>
      
      <Column header="Aktion" class="py-4 border-b border-slate-100 w-24">
        <template #body="{ data }">
          <Button 
            icon="pi pi-ellipsis-h" 
            variant="text" 
            rounded 
            class="text-slate-500 hover:bg-slate-100 w-8 h-8 p-0" 
            :class="{ 'bg-slate-100': selectedUser?.id === data.id && isPopoverVisible }"
            @click="toggle($event, data)" 
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op" @hide="isPopoverVisible = false">
      <div class="flex flex-col gap-2 w-48 p-1 bg-white">
        <button class="flex items-center gap-3 px-3 py-2 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-slate-50 transition-colors w-full text-left">
          <i class="pi pi-pencil text-slate-400"></i>
          Profil bearbeiten
        </button>
        <button class="flex items-center gap-3 px-3 py-2 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-slate-50 transition-colors w-full text-left">
          <i class="pi pi-flag text-slate-400"></i>
          Status ändern
        </button>
        <button class="flex items-center gap-3 px-3 py-2 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-slate-50 transition-colors w-full text-left">
          <i class="pi pi-copy text-slate-400"></i>
          Duplizieren
        </button>
        <button class="flex items-center gap-3 px-3 py-2 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-slate-50 transition-colors w-full text-left">
          <i class="pi pi-trash text-slate-400"></i>
          Deaktiveren
        </button>
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const users = ref([
  { id: 1, initials: 'M', name: 'Max Mustermann', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progressValue: 45 },
  { id: 2, initials: 'A', name: 'Anna Schmidt', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progressValue: 87 },
  { id: 3, initials: 'L', name: 'Lisa Weber', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progressValue: 4 },
  { id: 4, initials: 'P', name: 'Paul Müller', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progressValue: 11 },
]);

const op = ref();
const selectedUser = ref(null);
const isPopoverVisible = ref(false);

const toggle = (event, user) => {
  selectedUser.value = user;
  isPopoverVisible.value = true;
  op.value.toggle(event);
};
</script>