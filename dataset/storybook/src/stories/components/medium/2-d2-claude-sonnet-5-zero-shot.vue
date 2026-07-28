<template>
  <div class="card">
    <Tabs value="0">
      <TabList>
        <Tab value="0">
          <span class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span>Profil & Konto</span>
          </span>
        </Tab>
        <Tab value="1">
          <span class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span>Sicherheit & Präferenzen</span>
          </span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3 w-full max-w-[480px]">
            <!-- Avatar with edit badge -->
            <div class="relative w-16 h-16">
              <Avatar :label="avatarLabel" shape="square" class="w-16 h-16 !bg-slate-100 !text-slate-500 text-2xl" />
              <Badge value="Edit" severity="success" class="absolute -top-2 left-0"></Badge>
            </div>

            <!-- Benutzername -->
            <div class="flex flex-col gap-2">
              <label for="username" class="text-sm">Benutzername</label>
              <InputText id="username" v-model="username" placeholder="Benutzername eingeben" class="w-full" />
            </div>

            <!-- Info textarea -->
            <div class="flex flex-col gap-2">
              <Textarea v-model="aboutYou" placeholder="Informationen über dich...." rows="4" class="w-full" />
            </div>

            <!-- Öffentlich sichtbar toggle -->
            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="publiclyVisible" />
              <span class="text-sm">Öffentlich sichtbar</span>
            </div>

            <!-- Speichern button -->
            <div>
              <Button label="Speichern" severity="success" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <p class="m-0 text-sm text-slate-500">Sicherheit & Präferenzen Inhalt</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';

const username = ref('');
const aboutYou = ref('');
const publiclyVisible = ref(false);

const avatarLabel = computed(() => (username.value ? username.value.charAt(0).toUpperCase() : 'P'));
</script>