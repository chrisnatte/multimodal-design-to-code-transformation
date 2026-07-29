<template>
  <div class="min-h-screen bg-[#9ca3af] flex items-center justify-center p-4 font-sans">
    <Dialog
      v-model:visible="visible"
      modal
      header="Profil bearbeiten"
      :style="{ width: '26rem' }"
      :closable="true"
      class="shadow-2xl rounded-xl"
      :pt="{
        root: { class: 'bg-white rounded-xl overflow-hidden' },
        header: { class: 'pb-0 pt-6 px-6 border-b-0' },
        title: { class: 'text-xl font-semibold text-surface-800' },
        content: { class: 'px-6 pt-4 pb-2' },
        footer: { class: 'px-6 pb-6 pt-2 border-t-0' }
      }"
    >
      <div class="flex flex-col gap-5">
        <!-- Name Field -->
        <div class="flex flex-col gap-1.5">
          <label for="name" class="text-surface-600 text-sm">Name</label>
          <InputText 
            id="name" 
            v-model="name" 
            class="w-full border-surface-300 rounded-md px-3 py-2 text-surface-800" 
          />
        </div>

        <!-- Role Field -->
        <div class="flex flex-col gap-1.5">
          <label for="role" class="text-surface-600 text-sm">Rolle</label>
          <!-- 
            Note: The mockup shows the dropdown in an open state. 
            This implementation provides the functional Select component.
            The green border simulates the focused state shown in the mockup.
          -->
          <Select
            id="role"
            v-model="selectedRole"
            :options="roles"
            optionLabel="label"
            class="w-full rounded-md"
            :pt="{
              root: { class: 'border-[#22c55e] ring-1 ring-[#22c55e] shadow-sm' },
              label: { class: 'px-3 py-2 text-surface-800' }
            }"
          />
        </div>

        <!-- Is Active Checkbox -->
        <div class="flex items-center gap-2 mt-1">
          <Checkbox 
            v-model="isActive" 
            inputId="isActive" 
            binary 
            :pt="{
              box: { class: 'border-surface-300 rounded' }
            }"
          />
          <label for="isActive" class="text-surface-700 text-sm cursor-pointer select-none">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end items-center gap-3 mt-4">
          <Button
            label="Abbrechen"
            variant="text"
            class="text-surface-700 hover:bg-surface-100 font-medium px-4 py-2 rounded-md transition-colors"
            @click="visible = false"
            :pt="{ root: { class: 'border-none bg-transparent' } }"
          />
          <Button
            label="Speichern"
            class="bg-[#10b981] hover:bg-[#059669] border-none text-white font-medium px-4 py-2 rounded-md transition-colors"
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
const selectedRole = ref({ label: 'Administrator', value: 'admin' });
const roles = ref([
  { label: 'Administrator', value: 'admin' },
  { label: 'Projektleiter', value: 'pm' },
  { label: 'Gast', value: 'guest' }
]);
const isActive = ref(false);
</script>