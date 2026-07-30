<template>
  <div class="min-h-screen bg-black/50 flex items-center justify-center p-4">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="false"
      :pt="{
        root: { class: 'w-full max-w-[512px] bg-white rounded-xl shadow-lg' },
        header: { class: 'p-4 border-b border-surface-200' },
        content: { class: 'p-0' },
        footer: { class: 'p-4 border-t border-surface-200' }
      }"
    >
      <template #header>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center gap-16">
            <div class="flex items-center gap-3">
              <Avatar
                label="M"
                shape="circle"
                class="bg-surface-100 text-surface-700 font-normal"
              />
              <div class="flex flex-col">
                <span class="text-sm font-normal text-surface-900">Max Mustermann</span>
                <span class="text-[10px] font-light text-surface-500">Manager</span>
              </div>
            </div>
            <Tag
              value="Aktiv"
              class="bg-[#d1fae5] text-[#065f46] font-bold text-xs px-2 py-0.5"
              :rounded="false"
            />
          </div>
          <Button
            icon="pi pi-times"
            variant="text"
            severity="secondary"
            class="w-7 h-7 p-0 text-surface-500 hover:bg-surface-100"
            @click="visible = false"
          />
        </div>
      </template>

      <div class="p-4">
        <Tabs v-model:value="activeTab">
          <TabList class="border-b border-surface-200">
            <Tab value="0" class="font-bold text-sm">Persönliche Daten</Tab>
            <Tab value="1" class="font-bold text-sm text-surface-500">Einstellungen</Tab>
          </TabList>
          <TabPanels class="p-0 pt-4">
            <TabPanel value="0">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                  <label for="name" class="text-sm text-surface-900">Name</label>
                  <InputText
                    id="name"
                    v-model="name"
                    class="w-full border-surface-300 rounded-md"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="email" class="text-sm text-surface-900">E-Mail</label>
                  <InputText
                    id="email"
                    v-model="email"
                    class="w-full border-surface-300 rounded-md"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="role" class="text-sm text-surface-900">Rolle</label>
                  <Select
                    id="role"
                    v-model="selectedRole"
                    :options="roles"
                    class="w-full border-surface-300 rounded-md"
                  />
                </div>

                <div class="flex items-center gap-2 mt-2">
                  <Checkbox
                    v-model="isActive"
                    inputId="isActive"
                    binary
                    class="border-surface-300"
                  />
                  <label for="isActive" class="text-sm text-surface-900 cursor-pointer">
                    Ist aktiv
                  </label>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <!-- Settings Content -->
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button
            label="Abbrechen"
            severity="secondary"
            class="bg-surface-100 hover:bg-surface-200 text-surface-700 border-none font-medium text-sm px-4 py-2"
            @click="visible = false"
          />
          <Button
            label="Speichern"
            class="bg-[#10b981] hover:bg-[#059669] border-none text-white font-medium text-sm px-4 py-2"
            @click="visible = false"
          />
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
const selectedRole = ref('Manager');
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde']);
const isActive = ref(true);
</script>