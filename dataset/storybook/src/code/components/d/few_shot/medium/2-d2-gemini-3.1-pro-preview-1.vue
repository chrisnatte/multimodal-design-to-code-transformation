<template>
  <div class="w-full max-w-2xl bg-white p-6">
    <Tabs value="0">
      <TabList>
        <Tab value="0" class="flex items-center gap-2">
          <i class="pi pi-user-edit"></i>
          <span class="font-bold">Profil & Konto</span>
        </Tab>
        <Tab value="1" class="flex items-center gap-2">
          <i class="pi pi-shield"></i>
          <span class="font-bold">Sicherheit & Präferenzen</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-6 pt-6">
            <div class="relative w-fit">
              <Avatar
                label="P"
                class="h-16 w-16 rounded-lg bg-slate-200 text-2xl text-slate-700"
              />
              <Badge
                value="Edit"
                severity="success"
                class="absolute -right-4 -top-2"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="username" class="text-sm text-slate-700">Benutzername</label>
              <InputText
                id="username"
                v-model="username"
                placeholder="Benutzername eingeben"
              />
            </div>

            <div class="flex flex-col gap-2">
              <Textarea
                v-model="info"
                placeholder="Informationen über dich...."
                rows="4"
                class="resize-none"
              />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="isPublic" input-id="public-toggle" />
              <label for="public-toggle" class="text-sm text-slate-700">Öffentlich sichtbar</label>
            </div>

            <Button label="Speichern" severity="primary" class="w-fit" />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <!-- Content for Sicherheit & Präferenzen -->
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
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
  const info = ref('')
  const isPublic = ref(false)
</script>