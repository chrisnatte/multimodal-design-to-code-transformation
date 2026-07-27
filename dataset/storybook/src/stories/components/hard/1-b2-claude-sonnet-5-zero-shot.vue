<template>
  <div class="w-full h-full flex items-center justify-center bg-black py-[280px]">
    <Dialog v-model:visible="visible" modal header="Profil bearbeiten" :style="{ width: '24rem' }" :closable="true">
      <div class="flex flex-col gap-4 items-center">
        <div class="flex flex-col gap-2 w-full">
          <label for="name" class="text-sm">Name</label>
          <InputText id="name" v-model="name" class="w-full" />
        </div>

        <div class="flex flex-col gap-2 w-full">
          <label for="rolle" class="text-sm">Rolle</label>
          <Select id="rolle" v-model="rolle" :options="rollen" optionLabel="label" optionValue="value" class="w-full" />
        </div>

        <div class="flex items-center gap-2 w-full">
          <Checkbox v-model="istAktiv" binary inputId="istAktiv" />
          <label for="istAktiv" class="text-sm">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <Button label="Abbrechen" text severity="secondary" @click="visible = false" />
        <Button label="Speichern" severity="success" @click="visible = false" />
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
const rolle = ref('Administrator');
const istAktiv = ref(false);

const rollen = ref([
  { label: 'Administrator', value: 'Administrator' },
  { label: 'Projektleiter', value: 'Projektleiter' },
  { label: 'Gast', value: 'Gast' }
]);
</script>