<template>
  <div class="min-h-screen flex items-center justify-center bg-surface-900/40 p-4">
    <Dialog 
      v-model:visible="visible" 
      header="Profil bearbeiten" 
      modal 
      :closable="true" 
      class="w-full max-w-[384px]"
      :pt="{
        root: { class: 'bg-white rounded-xl shadow-lg' },
        header: { class: 'px-5 py-4 border-b border-surface-200' },
        title: { class: 'text-lg font-semibold text-surface-900' },
        content: { class: 'px-5 py-4' },
        footer: { class: 'px-5 py-4 flex justify-end gap-2' }
      }"
    >
      <div class="flex flex-col gap-4">
        <!-- Name Field -->
        <div class="flex flex-col gap-1.5">
          <label for="name" class="text-sm text-surface-700">Name</label>
          <InputText 
            id="name" 
            v-model="name" 
            class="w-full" 
          />
        </div>

        <!-- Rolle Field -->
        <div class="flex flex-col gap-1.5">
          <label for="role" class="text-sm text-surface-700">Rolle</label>
          <Select 
            id="role" 
            v-model="role" 
            :options="roles" 
            class="w-full" 
          />
        </div>

        <!-- Ist aktiv Checkbox -->
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
        <Button 
          label="Abbrechen" 
          variant="text" 
          severity="secondary" 
          @click="visible = false" 
          class="font-medium"
        />
        <Button 
          label="Speichern" 
          @click="save" 
          class="font-medium bg-[#10B981] border-[#10B981] hover:bg-[#059669] hover:border-[#059669]"
        />
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

const save = () => {
  // Handle save logic here
  visible.value = false;
};
</script>