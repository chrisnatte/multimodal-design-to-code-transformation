<template>
  <div class="min-h-screen bg-black flex items-center justify-center p-8">
    <Dialog 
      v-model:visible="visible" 
      modal 
      header="Profil bearbeiten" 
      :closable="true" 
      :style="{ width: '24rem' }"
    >
      <div class="flex flex-col gap-4 py-4">
        <div class="flex flex-col gap-1">
          <label for="name" class="text-sm text-surface-700 dark:text-surface-300">Name</label>
          <InputText 
            id="name" 
            v-model="name" 
            placeholder="Name eingeben" 
            class="w-full"
          />
        </div>
        
        <div class="flex flex-col gap-1">
          <label for="role" class="text-sm text-surface-700 dark:text-surface-300">Rolle</label>
          <Select 
            id="role" 
            v-model="role" 
            :options="roles" 
            placeholder="Placeholder" 
            class="w-full"
          />
        </div>
        
        <div class="flex items-center gap-2 mt-2">
          <Checkbox 
            inputId="isActive" 
            v-model="isActive" 
            :binary="true" 
          />
          <label for="isActive" class="text-sm text-surface-700 dark:text-surface-300">Ist aktiv</label>
        </div>
      </div>
      
      <template #footer>
        <div class="flex justify-end gap-2 w-full pt-2">
          <Button 
            label="Abbrechen" 
            text 
            plain 
            @click="visible = false" 
          />
          <Button 
            label="Speichern" 
            @click="visible = false" 
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
const roles = ref(['Administator', 'Projektleiter', 'Gast']);
const isActive = ref(false);
</script>