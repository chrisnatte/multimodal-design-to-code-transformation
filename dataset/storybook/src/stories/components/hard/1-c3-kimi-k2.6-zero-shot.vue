<template>
  <Dialog v-model:visible="visible" modal header="Profil bearbeiten" :style="{ width: '25rem' }">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="name">Name</label>
        <InputText id="name" v-model="name" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="role">Rolle</label>
        <Select v-model="selectedRole" :options="roles" inputId="role" />
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="isActive" binary inputId="active" />
        <label for="active">Ist aktiv</label>
      </div>
    </div>
    <template #footer>
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" variant="text" @click="visible = false" />
        <Button label="Speichern" severity="success" @click="visible = false" />
      </div>
    </template>
  </Dialog>
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