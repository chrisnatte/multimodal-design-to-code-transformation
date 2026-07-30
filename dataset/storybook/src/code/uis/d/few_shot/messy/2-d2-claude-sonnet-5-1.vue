<template>
  <Dialog
    v-model:visible="isVisible"
    modal
    :pt="{
      root: 'w-full max-w-lg',
      header: '!pb-0',
      content: '!pt-0',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between">
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

    <Tabs value="0">
      <TabList>
        <Tab value="0">Persönliche Daten</Tab>
        <Tab value="1">Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4 pt-4">
            <div class="flex flex-col gap-2">
              <label for="name-input" class="text-sm">Name</label>
              <InputText v-model="name" type="text" input-id="name-input" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email-input" class="text-sm">E-Mail</label>
              <InputText v-model="email" type="email" input-id="email-input" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="role-select" class="text-sm">Rolle</label>
              <Select
                v-model="role"
                :options="roleOptions"
                option-label="label"
                option-value="value"
                input-id="role-select"
              />
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="isActive" input-id="is-active" binary />
              <label for="is-active" class="text-sm">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="pt-4 text-sm text-gray-500">Einstellungen</div>
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