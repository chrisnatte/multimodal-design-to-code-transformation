<template>
  <div class="min-h-screen bg-[#808080] flex items-center justify-center p-4 font-sans">
    <Dialog 
      v-model:visible="visible" 
      modal 
      header="Profil bearbeiten" 
      :style="{ width: '384px' }"
      :closable="true"
    >
      <div class="flex flex-col gap-4 py-2">
        <!-- Name Field -->
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm text-surface-700 dark:text-surface-300">
            Name
          </label>
          <InputText 
            id="name" 
            v-model="name" 
            placeholder="Name eingeben" 
            class="w-full" 
          />
        </div>
        
        <!-- Role Field -->
        <div class="flex flex-col gap-2">
          <label for="role" class="text-sm text-surface-700 dark:text-surface-300">
            Rolle
          </label>
          <Select 
            id="role" 
            v-model="selectedRole" 
            :options="roles" 
            class="w-full" 
          />
        </div>

        <!-- Is Active Checkbox -->
        <div class="flex items-center gap-2 mt-1">
          <Checkbox 
            inputId="isActive" 
            v-model="isActive" 
            binary 
          />
          <label for="isActive" class="text-sm text-surface-700 dark:text-surface-300 cursor-pointer">
            Ist aktiv
          </label>
        </div>
      </div>

      <!-- Footer Actions -->
      <template #footer>
        <div class="flex items-center justify-end gap-2 pt-2">
          <Button 
            label="Abbrechen" 
            variant="text" 
            severity="secondary" 
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
const selectedRole = ref('Administrator');
const isActive = ref(false);

const roles = ref([
  'Administrator',
  'Projektleiter',
  'Gast'
]);
</script>