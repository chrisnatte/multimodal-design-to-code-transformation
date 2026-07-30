<template>
  <Dialog
    v-model:visible="isVisible"
    modal
    :draggable="false"
    :pt="{
      root: 'w-full max-w-xl',
      content: 'flex flex-col !gap-4 !p-0',
    }"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <Avatar label="M" shape="circle" />
        <div class="flex flex-col">
          <span class="text-base leading-tight">Max Mustermann</span>
          <span class="text-sm text-gray-500 leading-tight">Manager</span>
        </div>
      </div>
    </template>
    <template #closeicon>
      <div class="flex items-center gap-2">
        <Tag value="Aktiv" severity="success" />
        <i class="pi pi-times" />
      </div>
    </template>

    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="personal">Persönliche Daten</Tab>
        <Tab value="settings">Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="personal">
          <div class="flex flex-col gap-4 p-6">
            <div class="flex flex-col gap-2">
              <label for="name-input">Name</label>
              <InputText v-model="name" input-id="name-input" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email-input">E-Mail</label>
              <InputText v-model="email" type="email" input-id="email-input" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="role-select">Rolle</label>
              <Select
                v-model="role"
                input-id="role-select"
                :options="roleOptions"
                option-label="label"
                option-value="value"
              />
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="isActive" input-id="is-active" binary />
              <label for="is-active">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="settings">
          <div class="p-6"></div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="isVisible = false" />
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
  const role = ref('manager')
  const isActive = ref(true)

  const roleOptions = [
    { label: 'Manager', value: 'manager' },
    { label: 'Mitarbeiter', value: 'mitarbeiter' },
    { label: 'Kunde', value: 'kunde' },
  ]
</script>