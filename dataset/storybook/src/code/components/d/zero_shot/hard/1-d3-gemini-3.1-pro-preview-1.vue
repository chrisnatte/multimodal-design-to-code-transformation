<template>
  <div class="min-h-screen flex items-center justify-center bg-black/50 p-8">
    <Dialog
      v-model:visible="visible"
      modal
      header="Profil bearbeiten"
      :style="{ width: '384px' }"
      :closable="true"
      :pt="{
        root: { class: 'bg-white rounded-xl border border-surface-200 shadow-sm' },
        header: { class: 'p-4 pb-2' },
        title: { class: 'text-[17.5px] font-semibold text-surface-900' },
        content: { class: 'p-4' },
        footer: { class: 'p-4 pt-2' }
      }"
    >
      <div class="flex flex-col gap-4">
        <!-- Name Input -->
        <div class="flex flex-col gap-1.5">
          <label for="name" class="text-sm text-surface-700">Name</label>
          <InputText 
            id="name" 
            v-model="name" 
            class="w-full" 
          />
        </div>

        <!-- Role Select -->
        <div class="flex flex-col gap-1.5">
          <label for="role" class="text-sm text-surface-700">Rolle</label>
          <Select 
            id="role" 
            v-model="role" 
            :options="roles" 
            class="w-full" 
          />
        </div>

        <!-- Is Active Checkbox -->
        <div class="flex items-center gap-2 mt-1">
          <Checkbox 
            v-model="isActive" 
            inputId="isActive" 
            binary 
          />
          <label for="isActive" class="text-sm text-surface-700 cursor-pointer">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button 
            label="Abbrechen" 
            variant="text" 
            plain 
            @click="visible = false" 
            class="font-medium"
          />
          <Button 
            label="Speichern" 
            @click="visible = false" 
            class="!bg-[#10B981] !border-[#10B981] hover:!bg-[#059669] hover:!border-[#059669] font-medium"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const visible = ref(true);
const name = ref('Max Mustmann');
const role = ref('Administrator');
const roles = ref(['Administrator', 'Projektleiter', 'Gast']);
const isActive = ref(false);
</script>