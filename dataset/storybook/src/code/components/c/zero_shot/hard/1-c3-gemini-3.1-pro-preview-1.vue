<template>
  <div class="min-h-screen flex items-center justify-center bg-[#8c8c8c] p-4">
    <Dialog 
      v-model:visible="visible" 
      modal 
      header="Profil bearbeiten" 
      :style="{ width: '24rem' }" 
      :closable="true"
      :pt="{
        root: { class: 'bg-white rounded-xl shadow-lg' },
        header: { class: 'pb-0 pt-6 px-6' },
        title: { class: 'text-lg font-semibold text-surface-800' },
        content: { class: 'pt-4 pb-6 px-6' },
        footer: { class: 'pt-0 pb-6 px-6' }
      }"
    >
      <div class="flex flex-col gap-5">
        <!-- Name Input -->
        <div class="flex flex-col gap-1.5">
          <label for="name" class="text-sm text-surface-600">Name</label>
          <InputText 
            id="name" 
            v-model="name" 
            class="w-full" 
          />
        </div>

        <!-- Role Select -->
        <div class="flex flex-col gap-1.5">
          <label for="role" class="text-sm text-surface-600">Rolle</label>
          <Select 
            id="role" 
            v-model="selectedRole" 
            :options="roles" 
            class="w-full"
            :pt="{
              root: { class: 'border-[#10b981]' } 
            }"
          />
        </div>

        <!-- Is Active Checkbox -->
        <div class="flex items-center gap-2 mt-1">
          <Checkbox 
            inputId="isActive" 
            v-model="isActive" 
            binary 
          />
          <label for="isActive" class="text-sm text-surface-700">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-3 mt-4">
          <Button 
            label="Abbrechen" 
            variant="text" 
            severity="secondary" 
            @click="visible = false" 
            class="text-surface-700 font-medium"
          />
          <Button 
            label="Speichern" 
            @click="visible = false" 
            class="!bg-[#10b981] !border-[#10b981] hover:!bg-[#059669] hover:!border-[#059669] font-medium"
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
const selectedRole = ref('Administrator');
const roles = ref(['Administrator', 'Projektleiter', 'Gast']);
const isActive = ref(false);
</script>