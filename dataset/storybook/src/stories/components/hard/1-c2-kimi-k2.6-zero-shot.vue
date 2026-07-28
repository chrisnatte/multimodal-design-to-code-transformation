<template>
  <Dialog v-model:visible="visible" modal header="Profil bearbeiten" :style="{ width: '25rem' }">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="name">Name</label>
        <InputText id="name" v-model="name" fluid />
      </div>
      <div class="flex flex-col gap-2">
        <label for="role">Rolle</label>
        <Select id="role" v-model="role" :options="roles" fluid />
      </div>
      <div class="flex items-center gap-2">
        <Checkbox id="isActive" v-model="isActive" binary inputId="isActive" />
        <label for="isActive">Ist aktiv</label>
      </div>
      <div class="flex justify-end gap-2 mt-2">
        <Button label="Abbrechen" variant="text" @click="visible = false" />
        <Button label="Speichern" severity="success" @click="visible = false" />
      </div>
    </div>
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
const role = ref('Administrator');
const roles = ref(['Administrator', 'Projektleiter', 'Gast']);
const isActive = ref(false);
</script>