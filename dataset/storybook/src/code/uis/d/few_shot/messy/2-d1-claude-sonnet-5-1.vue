<template>
  <Dialog
    v-model:visible="isVisible"
    modal
    :pt="{
      root: 'w-full max-w-xl',
      content: '!p-0',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between pr-2">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm">Max Mustermann</span>
            <span class="text-xs text-gray-500">Manager</span>
          </div>
        </div>
        <Tag value="Aktiv" severity="success" class="!bg-green-100 !text-green-700" />
      </div>
    </template>

    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">Persönliche Daten</Tab>
        <Tab value="1">Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4 p-2">
            <div class="flex flex-col gap-2">
              <label for="name-input" class="text-sm">Name</label>
              <InputText v-model="name" input-id="name-input" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email-input" class="text-sm">E-Mail</label>
              <InputText v-model="email" type="email" input-id="email-input" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="role-dropdown" class="text-sm">Rolle</label>
              <Select
                v-model="role"
                :options="roleOptions"
                option-label="label"
                option-value="value"
                input-id="role-dropdown"
              />
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="isActive" input-id="is-active" binary />
              <label for="is-active" class="text-sm">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="p-2 text-sm text-gray-500">Keine weiteren Einstellungen verfügbar.</div>
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
  const activeTab = ref('0')

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