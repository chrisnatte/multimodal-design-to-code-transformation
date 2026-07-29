<template>
  <div class="p-6 bg-white w-full max-w-5xl rounded-lg">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <div class="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-sm text-slate-700">
              {{ data.initials }}
            </div>
            <span class="text-sm text-slate-900">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" :rounded="false" />
        </template>
      </Column>
      
      <Column field="progress" header="Fortschritt">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-60">
            <div class="flex justify-between text-xs text-slate-700">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progressValue }} %</span>
            </div>
            <div class="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div class="h-full bg-emerald-500" :style="{ width: data.progressValue + '%' }"></div>
            </div>
          </div>
        </template>
      </Column>
      
      <Column header="Aktionen">
        <template #body="{ data }">
          <Button 
            icon="pi pi-ellipsis-h" 
            variant="text" 
            severity="secondary" 
            @click="togglePopover($event, data)" 
            aria-label="Aktionen"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 p-2 w-48">
        <Button variant="outlined" severity="secondary" class="w-full justify-start" icon="pi pi-pencil" label="Profil bearbeiten" />
        <Button variant="outlined" severity="secondary" class="w-full justify-start" icon="pi pi-flag" label="Status ändern" />
        <Button variant="outlined" severity="secondary" class="w-full justify-start" icon="pi pi-clone" label="Duplizieren" />
        <Button variant="outlined" severity="secondary" class="w-full justify-start" icon="pi pi-trash" label="Deaktiveren" />
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
import Tag from 'primevue/tag';

const users = ref([
  {
    id: 1,
    name: 'Max Mustermann',
    initials: 'M',
    status: 'In Prüfung',
    statusSeverity: 'danger',
    progressLabel: 'Zertifizierung',
    progressValue: 45,
  },
  {
    id: 2,
    name: 'Anna Schmidt',
    initials: 'A',
    status: 'Aktiv',
    statusSeverity: 'success',
    progressLabel: 'Onboarding',
    progressValue: 87,
  },
  {
    id: 3,
    name: 'Lisa Weber',
    initials: 'L',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progressValue: 4,
  },
  {
    id: 4,
    name: 'Paul Müller',
    initials: 'P',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progressValue: 11,
  }
]);

const op = ref();
const selectedUser = ref(null);

const togglePopover = (event, user) => {
  selectedUser.value = user;
  op.value.toggle(event);
};
</script>