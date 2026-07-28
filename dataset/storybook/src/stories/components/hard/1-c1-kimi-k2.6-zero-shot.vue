<template>
  <Dialog v-model:visible="visible" modal header="Profil bearbeiten" :style="{ width: '28rem' }" :closable="true">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="name">Name</label>
        <InputText id="name" v-model="name" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="role">Rolle</label>
        <Select id="role" v-model="selectedRole" :options="roles" optionLabel="name" placeholder="Rolle wählen" />
      </div>

      <div class="flex items-center gap-2">
        <Checkbox id="active" v-model="isActive" binary />
        <label for="active">Ist aktiv</label>
      </div>

      <div class="flex justify-end gap-2 mt-2">
        <Button label="Abbrechen" text @click="visible = false" />
        <Button label="Speichern" severity="success" @click="saveProfile" />
      </div>
    </div>
  </Dialog>
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
const selectedRole = ref({ name: 'Administrator' });
const isActive = ref(false);

const roles = ref([
  { name: 'Administrator' },
  { name: 'Projektleiter' },
  { name: 'Gast' }
]);

const saveProfile = () => {
  visible.value = false;
};
</script>