<template>
  <div class="flex flex-col items-center justify-center bg-black w-[768px] min-h-[768px] py-[280px]">
    <Dialog v-model:visible="visible" modal :closable="false" contentClass="!p-0" class="w-96 rounded-xl">
      <template #header>
        <div class="flex items-center justify-between w-full p-[17.5px]">
          <span class="font-semibold text-[17.5px]">Profil bearbeiten</span>
          <Button icon="pi pi-times" severity="secondary" text @click="visible = false" aria-label="Close" />
        </div>
      </template>

      <div class="flex flex-col items-center gap-4 px-[17.5px] pb-[17.5px]">
        <div class="flex flex-col gap-1 w-full">
          <label class="text-sm">Name</label>
          <InputText v-model="name" placeholder="Name eingeben" class="w-full" />
        </div>

        <div class="flex flex-col gap-1 w-full">
          <label class="text-sm">Rolle</label>
          <Select v-model="role" :options="roles" class="w-full" />
        </div>

        <div class="flex items-center gap-2 w-full">
          <Checkbox v-model="isActive" binary inputId="active" />
          <label for="active" class="text-sm">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-[7px] p-[17.5px]">
          <Button label="Abbrechen" text @click="visible = false" />
          <Button label="Speichern" @click="visible = false" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';

const visible = ref(true);
const name = ref('Max Mustmann');
const role = ref('Administrator');
const roles = ref(['Administrator', 'Projektleiter', 'Gast']);
const isActive = ref(false);
</script>