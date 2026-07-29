<template>
  <div class="flex items-center justify-center bg-black min-h-screen py-16">
    <Dialog v-model:visible="visible" modal header="Profil bearbeiten" :style="{ width: '24rem' }" :closable="true">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm">Name</label>
          <InputText id="name" v-model="name" placeholder="Name eingeben" class="w-full" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="rolle" class="text-sm">Rolle</label>
          <Select id="rolle" v-model="rolle" :options="rollenOptions" optionLabel="label" optionValue="value" placeholder="Placeholder" class="w-full" />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="istAktiv" binary inputId="istAktiv" />
          <label for="istAktiv" class="text-sm">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <Button label="Abbrechen" text severity="secondary" @click="visible = false" />
        <Button label="Speichern" severity="primary" @click="onSave" />
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

const rollenOptions = ref([
  { label: 'Administator', value: 'Administrator' },
  { label: 'Projektleiter', value: 'Projektleiter' },
  { label: 'Gast', value: 'Gast' }
]);

const onSave = () => {
  visible.value = false;
};
</script>