<template>
  <div class="flex w-full items-center justify-center bg-black py-[280px]">
    <Dialog
      v-model:visible="isVisible"
      modal
      :closable="false"
      :pt="{
        root: 'w-full max-w-[512px]',
        content: 'flex flex-col !gap-0 !p-0',
      }"
    >
      <template #header>
        <div class="flex w-full items-center justify-between">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm">Max Mustermann</span>
              <span class="text-xs font-light">Manager</span>
            </div>
          </div>
          <Tag value="Aktiv" severity="success" />
        </div>
        <Button icon="pi pi-times" severity="secondary" text @click="isVisible = false" />
      </template>
      <Tabs value="0">
        <TabList>
          <Tab value="0">Persönliche Daten</Tab>
          <Tab value="1">Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <label for="name-input" class="text-sm">Name</label>
                <InputText v-model="name" input-id="name-input" placeholder="Name eingeben" />
              </div>
              <div class="flex flex-col gap-2">
                <label for="email-input" class="text-sm">E-Mail</label>
                <InputText v-model="email" input-id="email-input" type="email" placeholder="E-Mail eingeben" />
              </div>
              <div class="flex flex-col gap-2">
                <label for="role-select" class="text-sm">Rolle</label>
                <Select
                  v-model="role"
                  input-id="role-select"
                  :options="roleOptions"
                  option-label="label"
                  option-value="value"
                  placeholder="Placeholder"
                />
              </div>
              <div class="flex items-center gap-2">
                <Checkbox v-model="isActive" input-id="is-active" binary />
                <label for="is-active">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <span>Einstellungen</span>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="isVisible = false" />
        <Button label="Speichern" severity="primary" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Dialog from 'primevue/dialog'
  import Avatar from 'primevue/avatar'
  import Tag from 'primevue/tag'
  import Button from 'primevue/button'
  import Tabs from 'primevue/tabs'
  import TabList from 'primevue/tablist'
  import Tab from 'primevue/tab'
  import TabPanels from 'primevue/tabpanels'
  import TabPanel from 'primevue/tabpanel'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import Checkbox from 'primevue/checkbox'

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