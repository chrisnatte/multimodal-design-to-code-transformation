<template>
  <div class="w-full min-h-screen flex items-center justify-center bg-black py-[280px]">
    <Dialog v-model:visible="visible" modal :closable="false" :style="{ width: '32rem' }">
      <template #header>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm">Max Mustermann</span>
              <span class="text-xs font-light">Manager</span>
            </div>
          </div>
          <Tag value="Aktiv" severity="success" />
        </div>
      </template>

      <template #closeicon>
        <Button icon="pi pi-times" text severity="secondary" rounded @click="visible = false" />
      </template>

      <div class="flex flex-col gap-2">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">Persönliche Daten</Tab>
            <Tab value="1">Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                  <label for="name" class="font-normal">Name</label>
                  <InputText id="name" v-model="name" class="w-full" />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="email" class="font-normal">E-Mail</label>
                  <InputText id="email" v-model="email" class="w-full" />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="role" class="font-normal">Rolle</label>
                  <Select id="role" v-model="role" :options="roleOptions" optionLabel="label" optionValue="value" class="w-full" />
                </div>

                <div class="flex items-center gap-2">
                  <Checkbox v-model="isActive" binary inputId="isActive" />
                  <label for="isActive" class="font-normal">Ist aktiv</label>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0">Einstellungen Inhalt</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Speichern" severity="primary" @click="visible = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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
const name = ref('Max Mustmann');
const email = ref('max@example.com');
const role = ref('Manager');
const isActive = ref(true);

const roleOptions = ref([
  { label: 'Manager', value: 'Manager' },
  { label: 'Mitarbeiter', value: 'Mitarbeiter' },
  { label: 'Kunde', value: 'Kunde' }
]);
</script>