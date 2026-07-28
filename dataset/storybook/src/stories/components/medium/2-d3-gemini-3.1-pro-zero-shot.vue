<template>
  <div class="flex flex-col w-[512px] bg-white text-surface-900 border border-surface-200">
    <Tabs value="0">
      <TabList class="border-b border-surface-200 flex">
        <Tab
          value="0"
          as="div"
          class="flex items-center gap-[7px] py-[14px] px-[15.75px] border-b-2 border-primary cursor-pointer hover:bg-surface-50"
        >
          <i class="pi pi-user-edit text-sm"></i>
          <span class="font-bold text-sm leading-none whitespace-nowrap"
            >Profil & Konto</span
          >
        </Tab>
        <Tab
          value="1"
          as="div"
          class="flex items-center gap-[7px] py-[14px] px-[15.75px] border-b-2 border-surface-200 cursor-pointer hover:bg-surface-50"
        >
          <i class="pi pi-shield text-sm"></i>
          <span class="font-bold text-sm leading-none whitespace-nowrap"
            >Sicherheit & Präferenzen</span
          >
        </Tab>
      </TabList>

      <TabPanels class="p-[15.75px] pt-[12.25px]">
        <TabPanel value="0" class="flex flex-col gap-5 py-3">
          <div class="flex flex-col gap-3">
            <div class="relative w-max">
              <div
                class="w-24 h-24 rounded-lg bg-surface-100 flex items-center justify-center text-4xl text-surface-600 font-medium"
              >
                P
              </div>
              <div
                class="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded"
              >
                Edit
              </div>
            </div>

            <div class="flex flex-col gap-[7px]">
              <label class="text-sm">Benutzername</label>
              <InputText v-model="username" placeholder="Benutzername eingeben" />
            </div>

            <Textarea
              v-model="description"
              placeholder="Informationen über dich...."
              rows="4"
              class="w-full"
            />
          </div>

          <div class="flex items-center gap-3">
            <ToggleSwitch v-model="publicVisible" />
            <span class="text-sm">Öffentlich sichtbar</span>
          </div>

          <div>
            <Button
              label="Speichern"
              class="bg-[#35d19e] border-[#35d19e] hover:bg-[#2bb486] hover:border-[#2bb486]"
            />
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';

const username = ref('');
const description = ref('');
const publicVisible = ref(false);
</script>