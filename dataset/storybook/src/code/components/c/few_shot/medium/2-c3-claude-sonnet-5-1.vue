<template>
  <Tabs value="0" class="w-md">
    <TabList>
      <Tab value="0"><i class="pi pi-user-edit mr-2" />Profil & Konto</Tab>
      <Tab value="1"><i class="pi pi-shield mr-2" />Sicherheit & Präferenzen</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="0">
        <div class="flex flex-col gap-4">
          <div class="relative w-fit">
            <Avatar label="P" size="xlarge" class="!rounded-lg !bg-slate-200" />
            <Badge value="Edit" severity="success" class="absolute -top-2 -right-2" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="username-input" class="text-sm">Benutzername</label>
            <InputText v-model="username" type="text" placeholder="Benutzername eingeben" input-id="username-input" />
          </div>
          <Textarea v-model="about" placeholder="Informationen über dich...." rows="4" />
          <div class="flex items-center gap-2">
            <ToggleSwitch v-model="isPublic" input-id="public-switch" />
            <label for="public-switch">Öffentlich sichtbar</label>
          </div>
          <Button label="Speichern" severity="primary" class="w-fit" />
        </div>
      </TabPanel>
      <TabPanel value="1">
        <p class="m-0">Sicherheit & Präferenzen Inhalt</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Tabs from 'primevue/tabs'
  import TabList from 'primevue/tablist'
  import Tab from 'primevue/tab'
  import TabPanels from 'primevue/tabpanels'
  import TabPanel from 'primevue/tabpanel'
  import Avatar from 'primevue/avatar'
  import Badge from 'primevue/badge'
  import InputText from 'primevue/inputtext'
  import Textarea from 'primevue/textarea'
  import ToggleSwitch from 'primevue/toggleswitch'
  import Button from 'primevue/button'

  const username = ref('')
  const about = ref('')
  const isPublic = ref(false)
</script>