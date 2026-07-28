<template>
  <div class="flex justify-center items-center min-h-screen">
    <Dialog v-model:visible="visible" modal header="Profil bearbeiten" :style="{ width: '24rem' }" :breakpoints="{ '960px': '75vw', '640px': '90vw' }">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label for="name" class="text-sm font-medium">Name</label>
          <InputText id="name" v-model="name" fluid />
        </div>
        <div class="flex flex-col gap-1">
          <label for="role" class="text-sm font-medium">Rolle</label>
          <Select id="role" v-model="role" :options="roles" fluid />
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="isActive" binary inputId="active" />
          <label for="active" class="text-sm">Ist aktiv</label>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Abbrechen" variant="text" severity="secondary" @click="visible = false" />
          <Button label="Speichern" severity="success" @click="visible = false" />
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