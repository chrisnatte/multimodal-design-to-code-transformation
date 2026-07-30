<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="true"
    :draggable="false"
    :style="{ width: '30rem' }"
    :pt="{
      content: '!p-0',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between pr-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" />
          <div class="flex flex-col">
            <span class="font-medium">Max Mustermann</span>
            <span class="text-sm text-surface-500">Manager</span>
          </div>
        </div>
        <Tag value="Aktiv" severity="success" rounded />
      </div>
    </template>
    <Tabs v-model:value="activeTab" class="px-6">
      <TabList>
        <Tab value="0">Persönliche Daten</Tab>
        <Tab value="1">Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4 py-4">
            <div class="flex flex-col gap-2">
              <label for="name">Name</label>
              <InputText id="name" v-model="name" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email">E-Mail</label>
              <InputText id="email" v-model="email" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="role">Rolle</label>
              <Select id="role" v-model="role" :options="roleOptions" option-label="label" option-value="value" />
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="isActive" input-id="is-active" binary />
              <label for="is-active">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="py-4">Einstellungen Inhalt</div>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="visible = false" />
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

  const visible = ref(true)
  const activeTab = ref('0')
  const name = ref('Max Mustmann')
  const email = ref('max@example.com')
  const role = ref('Manager')
  const isActive = ref(true)

  const roleOptions = [
    { label: 'Manager', value: 'Manager' },
    { label: 'Mitarbeiter', value: 'Mitarbeiter' },
    { label: 'Kunde', value: 'Kunde' },
  ]
</script>