<template>
  <div class="flex items-center justify-center min-h-screen bg-black/20">
    <Dialog v-model:visible="visible" modal :closable="true" :draggable="false" :style="{ width: '30rem' }">
      <template #header>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center gap-2">
            <Avatar label="M" shape="circle" style="background-color: #e5e7eb; color: #374151" />
            <div class="flex flex-col">
              <span class="font-semibold text-surface-900">Max Mustermann</span>
              <span class="text-sm text-surface-500">Manager</span>
            </div>
          </div>
          <Tag value="Aktiv" severity="success" rounded class="mr-2"></Tag>
        </div>
      </template>

      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">Persönliche Daten</Tab>
          <Tab value="1">Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 pt-4">
              <div class="flex flex-col gap-2">
                <label for="name" class="text-surface-700">Name</label>
                <InputText id="name" v-model="name" class="w-full" />
              </div>
              <div class="flex flex-col gap-2">
                <label for="email" class="text-surface-700">E-Mail</label>
                <InputText id="email" v-model="email" class="w-full" />
              </div>
              <div class="flex flex-col gap-2">
                <label for="role" class="text-surface-700">Rolle</label>
                <Select id="role" v-model="role" :options="roleOptions" optionLabel="label" optionValue="value" class="w-full" />
              </div>
              <div class="flex items-center gap-2">
                <Checkbox v-model="isActive" binary inputId="isActive" />
                <label for="isActive" class="text-surface-700">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="pt-4 text-surface-500">
              Keine Einstellungen verfügbar.
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" text @click="visible = false" />
        <Button label="Speichern" severity="success" @click="visible = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const visible = ref(true);
const activeTab = ref('0');
const name = ref('Max Mustmann');
const email = ref('max@example.com');
const role = ref('manager');
const isActive = ref(true);

const roleOptions = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'mitarbeiter' },
  { label: 'Kunde', value: 'kunde' }
]);
</script>