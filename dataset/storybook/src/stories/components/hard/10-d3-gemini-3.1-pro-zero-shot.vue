<template>
  <div class="p-8 bg-white h-full w-full min-h-screen">
    <div class="w-[897px] max-w-full">
      <DataTable :value="users" class="w-full">
        <!-- Nutzer Column -->
        <Column header="Nutzer" class="border-b border-[#E2E8F0] py-[10.5px] px-[14px]">
          <template #body="{ data }">
            <div class="flex items-center gap-[12px]">
              <div class="w-[28px] h-[28px] rounded-full bg-[#E2E8F0] flex items-center justify-center text-[14px] text-surface-900 font-normal">
                {{ data.initial }}
              </div>
              <span class="text-[14px] font-normal text-surface-900">{{ data.name }}</span>
            </div>
          </template>
        </Column>

        <!-- Status Column -->
        <Column header="Status" class="border-b border-[#E2E8F0] py-[10.5px] px-[14px]">
          <template #body="{ data }">
            <!-- Custom Tag mapping styles based on screenshots since standard severity colors usually have darker backgrounds by default in Aura -->
            <div 
              class="inline-flex items-center px-2 py-1 rounded font-bold text-[12.25px]"
              :class="{
                'bg-[#FEEDED] text-[#DC2626]': data.status === 'In Prüfung',
                'bg-[#DCFCE7] text-[#16A34A]': data.status === 'Aktiv',
                'bg-[#FFEDD5] text-[#D97706]': data.status === 'Inaktiv'
              }"
            >
              {{ data.status }}
            </div>
          </template>
        </Column>

        <!-- Fortschritt Column -->
        <Column header="Fortschritt" class="border-b border-[#E2E8F0] py-[10.5px] px-[14px]">
          <template #body="{ data }">
            <div class="w-[240px] flex flex-col gap-[4px]">
              <div class="flex justify-between items-end w-full">
                <span class="text-[10px] font-normal text-surface-700">{{ data.progressLabel }}</span>
                <span class="text-[12px] font-normal text-surface-900">{{ data.progress }} %</span>
              </div>
              <div class="h-[6px] w-full bg-[#E2E8F0] rounded-full flex overflow-hidden">
                <div 
                  class="h-full bg-[#10B981] rounded-full" 
                  :style="{ width: data.progress + '%' }"
                ></div>
              </div>
            </div>
          </template>
        </Column>

        <!-- Aktion Column -->
        <Column header="Aktion" class="border-b border-[#E2E8F0] py-[10.5px] px-[14px]">
          <template #body="{ data, event }">
            <Button 
              icon="pi pi-ellipsis-h" 
              variant="text" 
              severity="secondary" 
              class="w-[35px] h-[28px] !p-0 flex items-center justify-center rounded-md hover:bg-surface-100 transition-colors"
              :class="{ 'bg-[#F1F5F9]': activeRowId === data.id }"
              @click="togglePopover($event, data)"
            />
          </template>
        </Column>
      </DataTable>

      <Popover ref="op">
        <div class="flex flex-col gap-[8px] w-[169px] p-1">
          <Button 
            variant="outlined" 
            severity="secondary" 
            icon="pi pi-file-edit" 
            label="Profil bearbeiten" 
            class="w-full text-left justify-start !text-[14px] font-medium !border-surface-200" 
          />
          <Button 
            variant="outlined" 
            severity="secondary" 
            icon="pi pi-flag" 
            label="Status ändern" 
            class="w-full text-left justify-start !text-[14px] font-medium !border-surface-200" 
          />
          <Button 
            variant="outlined" 
            severity="secondary" 
            icon="pi pi-copy" 
            label="Duplizieren" 
            class="w-full text-left justify-start !text-[14px] font-medium !border-surface-200" 
          />
          <Button 
            variant="outlined" 
            severity="secondary" 
            icon="pi pi-trash" 
            label="Deaktiveren" 
            class="w-full text-left justify-start !text-[14px] font-medium !border-surface-200 text-surface-700" 
          />
        </div>
      </Popover>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const users = ref([
  {
    id: 1,
    initial: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    progressLabel: 'Zertifizierung',
    progress: 45
  },
  {
    id: 2,
    initial: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    progressLabel: 'Onboarding',
    progress: 87
  },
  {
    id: 3,
    initial: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    progressLabel: 'Onboarding',
    progress: 4
  },
  {
    id: 4,
    initial: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    progressLabel: 'Onboarding',
    progress: 11
  }
]);

const op = ref();
const activeRowId = ref(null);

const togglePopover = (event, data) => {
  activeRowId.value = data.id;
  op.value.toggle(event);
};
</script>