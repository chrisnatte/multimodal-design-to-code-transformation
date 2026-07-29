<template>
  <div class="flex items-center justify-center min-h-screen bg-black p-8">
    <Dialog 
      v-model:visible="visible" 
      header="Profil bearbeiten" 
      modal 
      :style="{ width: '24rem' }" 
      :closable="true"
    >
      <div class="flex flex-col gap-4 py-4">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm text-surface-700 dark:text-surface-300">Name</label>
          <InputText 
            id="name" 
            v-model="name" 
            placeholder="Name eingeben" 
            class="w-full" 
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <label for="role" class="text-sm text-surface-700 dark:text-surface-300">Rolle</label>
          <Select 
            id="role" 
            v-model="role" 
            :options="roles" 
            optionLabel="label" 
            placeholder="Rolle wählen" 
            class="w-full" 
          />
        </div>

        <div class="flex items-center gap-2 mt-2">
          <Checkbox 
            inputId="isActive" 
            v-model="isActive" 
            binary 
          />
          <label for="isActive" class="text-sm text-surface-700 dark:text-surface-300">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2 w-full pt-2">
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
const role = ref({ label: 'Administrator', value: 'Administrator' });
const roles = ref([
  { label: 'Administrator', value: 'Administrator' },
  { label: 'Projektleiter', value: 'Projektleiter' },
  { label: 'Gast', value: 'Gast' }
]);
const isActive = ref(false);
</script>