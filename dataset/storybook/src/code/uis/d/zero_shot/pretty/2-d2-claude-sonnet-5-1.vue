<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <Dialog v-model:visible="visible" modal :closable="false" :style="{ width: '32rem' }">
      <template #header>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center gap-3">
            <Avatar :label="avatarLabel" shape="circle" />
            <div class="flex flex-col">
              <span class="font-normal text-sm">{{ name }}</span>
              <span class="font-light text-xs text-gray-500">{{ role }}</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <Tag severity="success" value="Aktiv" />
          </div>
        </div>
      </template>

      <Button
        icon="pi pi-times"
        severity="secondary"
        text
        rounded
        class="absolute top-4 right-4"
        @click="onCancel"
        aria-label="Close"
      />

      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">Persönliche Daten</Tab>
          <Tab value="1">Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 py-2">
              <div class="flex flex-col gap-2">
                <label for="name" class="text-sm">Name</label>
                <InputText id="name" v-model="nameInput" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="email" class="text-sm">E-Mail</label>
                <InputText id="email" v-model="email" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="rolle" class="text-sm">Rolle</label>
                <Select
                  id="rolle"
                  v-model="selectedRole"
                  :options="roleOptions"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full"
                />
              </div>

              <div class="flex items-center gap-2">
                <Checkbox v-model="isActive" binary inputId="isActive" />
                <label for="isActive" class="text-sm">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="py-2">
              <p class="m-0 text-sm text-gray-500">Keine Einstellungen verfügbar.</p>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <div class="flex justify-end gap-2 w-full">
          <Button label="Abbrechen" severity="secondary" @click="onCancel" />
          <Button label="Speichern" @click="onSave" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Dialog from 'primevue/dialog';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';

const visible = ref(true);
const activeTab = ref('0');

const name = ref('Max Mustermann');
const role = ref('Manager');
const avatarLabel = computed(() => name.value.charAt(0));

const nameInput = ref('Max Mustmann');
const email = ref('max@example.com');
const isActive = ref(true);

const roleOptions = ref([
  { label: 'Manager', value: 'Manager' },
  { label: 'Mitarbeiter', value: 'Mitarbeiter' },
  { label: 'Kunde', value: 'Kunde' }
]);
const selectedRole = ref('Manager');

const onCancel = () => {
  visible.value = false;
};

const onSave = () => {
  visible.value = false;
};
</script>