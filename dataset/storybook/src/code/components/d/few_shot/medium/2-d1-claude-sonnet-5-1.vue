<template>
  <Tabs value="0" class="w-lg">
    <TabList>
      <Tab value="0"><i class="pi pi-user-edit mr-2"></i>Profil & Konto</Tab>
      <Tab value="1"><i class="pi pi-shield mr-2"></i>Sicherheit & Präferenzen</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="0">
        <div class="flex flex-col gap-5 pt-3">
          <div class="relative w-fit">
            <Avatar label="P" size="xlarge" class="!bg-slate-100 !text-slate-700" />
            <Tag value="Edit" severity="success" class="absolute -top-2 -right-3 !text-xs" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="username-input" class="text-sm">Benutzername</label>
            <InputText v-model="username" input-id="username-input" placeholder="Benutzername eingeben" />
          </div>

          <Textarea v-model="bio" placeholder="Informationen über dich...." rows="4" />

          <div class="flex items-center gap-3">
            <ToggleSwitch v-model="isPublic" input-id="public-switch" />
            <label for="public-switch" class="text-sm">Öffentlich sichtbar</label>
          </div>

          <Button label="Speichern" severity="primary" class="w-fit" />
        </div>
      </TabPanel>
      <TabPanel value="1">
        <div class="pt-3 text-sm text-slate-500">Sicherheit & Präferenzen</div>
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
  import Tag from 'primevue/tag'
  import InputText from 'primevue/inputtext'
  import Textarea from 'primevue/textarea'
  import ToggleSwitch from 'primevue/toggleswitch'
  import Button from 'primevue/button'

  const username = ref('')
  const bio = ref('')
  const isPublic = ref(false)
</script>