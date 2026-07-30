<template>
  <div class="min-h-screen bg-black flex items-center justify-center p-8">
    <Dialog v-model:visible="visible" modal :style="{ width: '32rem' }" :closable="true">
      <template #header>
        <div class="flex items-center justify-between w-full pr-4">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" class="bg-surface-200 text-surface-700" />
            <div class="flex flex-col">
              <span class="text-sm font-normal text-surface-900">Max Mustermann</span>
              <span class="text-[10px] font-light text-surface-500">Manager</span>
            </div>
          </div>
          <Tag value="Aktiv" class="bg-green-100 text-green-800 font-bold text-xs px-2 py-1" :unstyled="true" />
        </div>
      </template>

      <div class="flex flex-col w-full">
        <Tabs value="0">
          <TabList>
            <Tab value="0">Persönliche Daten</Tab>
            <Tab value="1">Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-4 pt-4">
                <div class="flex flex-col gap-2">
                  <label for="name" class="text-sm text-surface-900">Name</label>
                  <InputText id="name" v-model="name" placeholder="Name eingeben" class="w-full" />
                </div>
                
                <div class="flex flex-col gap-2">
                  <label for="email" class="text-sm text-surface-900">E-Mail</label>
                  <InputText id="email" v-model="email" placeholder="Name eingeben" class="w-full" />
                </div>
                
                <div class="flex flex-col gap-2">
                  <label for="role" class="text-sm text-surface-900">Rolle</label>
                  <Select id="role" v-model="role" :options="roles" optionLabel="label" placeholder="Placeholder" class="w-full" />
                </div>
                
                <div class="flex items-center gap-2 mt-2">
                  <Checkbox inputId="isActive" v-model="isActive" binary />
                  <label for="isActive" class="text-sm text-surface-900">Ist aktiv</label>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <!-- Empty panel for Einstellungen -->
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2 w-full pt-4">
          <Button label="Abbrechen" severity="secondary" @click="visible = false" />
          <Button label="Speichern" @click="visible = false" />
        </div>
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
const name = ref('Max Mustmann');
const email = ref('max@example.com');
const role = ref({ label: 'Manager', value: 'manager' });
const roles = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'mitarbeiter' },
  { label: 'Kunde', value: 'kunde' }
]);
const isActive = ref(true);
</script>