<template>
  <Dialog
    v-model:visible="isVisible"
    modal
    :pt="{
      root: 'w-full max-w-2xl',
      header: '!pb-0',
      content: 'flex flex-col !gap-4',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between pr-8">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" />
          <div class="flex flex-col">
            <span class="text-base">Max Mustermann</span>
            <span class="text-sm text-gray-500">Manager</span>
          </div>
        </div>
        <Tag value="Aktiv" severity="success" />
      </div>
    </template>
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="personal">Persönliche Daten</Tab>
        <Tab value="settings">Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="personal">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="name-input" class="text-sm">Name</label>
              <InputText v-model="name" input-id="name-input" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email-input" class="text-sm">E-Mail</label>
              <InputText v-model="email" input-id="email-input" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="role-select" class="text-sm">Rolle</label>
              <Select v-model="role" :options="roleOptions" input-id="role-select" />
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="isActive" input-id="is-active" binary />
              <label for="is-active">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="settings">
          <div class="p-4"></div>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <template #footer>
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Speichern" severity="primary" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Dialog from 'primevue/dialog'
  import Avatar from 'primevue/avatar'
  import Tag from 'primevue/tag'
  import Tabs from 'primevue/tabs'
  import TabList from 'primevue/tablist'
  import Tab from 'primevue/tab'
  import TabPanels from 'primevue/tabpanels'
  import TabPanel from 'primevue/tabpanel'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import Checkbox from 'primevue/checkbox'
  import Button from 'primevue/button'

  const isVisible = ref(true)
  const activeTab = ref('personal')
  const name = ref('Max Mustmann')
  const email = ref('max@example.com')
  const role = ref('Manager')
  const roleOptions = ['Manager', 'Mitarbeiter', 'Kunde']
  const isActive = ref(true)
</script>