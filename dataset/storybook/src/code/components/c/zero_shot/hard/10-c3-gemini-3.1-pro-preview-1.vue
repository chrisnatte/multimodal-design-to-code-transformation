<template>
  <div class="p-8 bg-white font-sans">
    <DataTable :value="users" class="w-full text-sm">
      <Column field="name" header="Nutzer" class="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-medium text-sm">
              {{ data.initials }}
            </div>
            <span class="text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="status" header="Status" class="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <span
            class="px-2.5 py-1 rounded text-xs font-semibold"
            :class="{
              'bg-red-100 text-red-700': data.status === 'In Prüfung',
              'bg-green-100 text-green-700': data.status === 'Aktiv',
              'bg-orange-100 text-orange-700': data.status === 'Inaktiv'
            }"
          >
            {{ data.status }}
          </span>
        </template>
      </Column>

      <Column field="progress" header="Fortschritt" class="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <div class="flex flex-col gap-1.5 w-48">
            <div class="flex justify-between items-center text-xs text-slate-500">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progressValue }} %</span>
            </div>
            <div class="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                class="h-full bg-emerald-500 rounded-full"
                :style="{ width: data.progressValue + '%' }"
              ></div>
            </div>
          </div>
        </template>
      </Column>

      <Column header="Aktion" class="py-4 border-b border-slate-100">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            variant="text"
            rounded
            class="text-slate-500 hover:text-slate-700 hover:bg-slate-100 w-8 h-8 p-0"
            :class="{ 'bg-slate-100': selectedUser?.id === data.id && isMenuOpen }"
            @click="toggleMenu($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="menuPopover" @hide="isMenuOpen = false" class="w-56 rounded-lg shadow-lg border border-slate-200 bg-white">
      <div class="flex flex-col gap-2 p-2">
        <Button variant="outlined" class="w-full justify-start text-slate-600 border-slate-200 hover:bg-slate-50 px-3 py-2 text-sm font-normal">
          <i class="pi pi-user-edit mr-2 text-slate-400"></i>
          Profil bearbeiten
        </Button>
        <Button variant="outlined" class="w-full justify-start text-slate-600 border-slate-200 hover:bg-slate-50 px-3 py-2 text-sm font-normal">
          <i class="pi pi-flag mr-2 text-slate-400"></i>
          Status ändern
        </Button>
        <Button variant="outlined" class="w-full justify-start text-slate-600 border-slate-200 hover:bg-slate-50 px-3 py-2 text-sm font-normal">
          <i class="pi pi-copy mr-2 text-slate-400"></i>
          Duplizieren
        </Button>
        <Button variant="outlined" class="w-full justify-start text-slate-600 border-slate-200 hover:bg-slate-50 px-3 py-2 text-sm font-normal">
          <i class="pi pi-trash mr-2 text-slate-400"></i>
          Deaktiveren
        </Button>
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const users = ref([
  { id: 1, initials: 'M', name: 'Max Mustermann', status: 'In Prüfung', progressLabel: 'Zertifizierung', progressValue: 45 },
  { id: 2, initials: 'A', name: 'Anna Schmidt', status: 'Aktiv', progressLabel: 'Onboarding', progressValue: 87 },
  { id: 3, initials: 'L', name: 'Lisa Weber', status: 'Inaktiv', progressLabel: 'Onboarding', progressValue: 4 },
  { id: 4, initials: 'P', name: 'Paul Müller', status: 'Inaktiv', progressLabel: 'Onboarding', progressValue: 11 },
]);

const menuPopover = ref();
const selectedUser = ref(null);
const isMenuOpen = ref(false);

const toggleMenu = (event, user) => {
  selectedUser.value = user;
  isMenuOpen.value = true;
  menuPopover.value.toggle(event);
};
</script>