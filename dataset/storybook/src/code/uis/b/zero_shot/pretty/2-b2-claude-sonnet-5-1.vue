<template>
  <div class="flex justify-center items-center min-h-screen bg-black py-[280px]">
    <Dialog v-model:visible="visible" :modal="true" :draggable="false" :closable="false" style="width: 512px">
      <template #header>
        <div class="flex items-center justify-between w-full gap-16">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm">{{ user.name }}</span>
              <span class="text-xs font-light">{{ user.role }}</span>
            </div>
          </div>
          <Tag value="Aktiv" severity="success"></Tag>
        </div>
      </template>

      <Button icon="pi pi-times" text severity="secondary" class="absolute top-4 right-4" @click="visible = false" aria-label="Close" />

      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">Persönliche Daten</Tab>
          <Tab value="1">Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <label for="name" class="text-sm">Name</label>
                <InputText id="name" v-model="name" class="w-full" />
              </div>

              <div class="flex flex-col gap-1">
                <label for="email" class="text-sm">E-Mail</label>
                <InputText id="email" v-model="email" class="w-full" />
              </div>

              <div class="flex flex-col gap-1">
                <label for="role" class="text-sm">Rolle</label>
                <Select id="role" v-model="role" :options="roleOptions" optionLabel="label" optionValue="value" class="w-full" />
              </div>

              <div class="flex items-center gap-2">
                <Checkbox v-model="isActive" binary inputId="isActive" />
                <label for="isActive" class="text-sm">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0 text-sm">Einstellungen Inhalt</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Speichern" @click="onSave" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
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

const visible = ref(true);
const activeTab = ref('0');

const user = ref({
  name: 'Max Mustermann',
  role: 'Manager'
});

const name = ref('Max Mustmann');
const email = ref('max@example.com');
const role = ref('Manager');
const isActive = ref(true);

const roleOptions = ref([
  { label: 'Manager', value: 'Manager' },
  { label: 'Mitarbeiter', value: 'Mitarbeiter' },
  { label: 'Kunde', value: 'Kunde' }
]);

const onSave = () => {
  visible.value = false;
};
</script>