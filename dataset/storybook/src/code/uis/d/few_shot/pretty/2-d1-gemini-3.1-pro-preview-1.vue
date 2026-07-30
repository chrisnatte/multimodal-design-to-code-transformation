<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :pt="{
      root: 'w-full max-w-lg',
      content: '!p-0',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-slate-100 text-slate-600" />
          <div class="flex flex-col">
            <span class="text-sm font-medium text-gray-900">Max Mustermann</span>
            <span class="text-xs text-gray-500">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <Tag value="Aktiv" severity="success" />
          <Button
            icon="pi pi-times"
            text
            rounded
            severity="secondary"
            @click="visible = false"
            class="!h-8 !w-8 !p-0"
          />
        </div>
      </div>
    </template>

    <Tabs value="0">
      <TabList class="px-5">
        <Tab value="0">Persönliche Daten</Tab>
        <Tab value="1">Einstellungen</Tab>
      </TabList>
      <TabPanels class="px-5 py-4">
        <TabPanel value="0" class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-sm text-gray-700">Name</label>
            <InputText id="name" v-model="name" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm text-gray-700">E-Mail</label>
            <InputText id="email" v-model="email" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="role" class="text-sm text-gray-700">Rolle</label>
            <Select id="role" v-model="role" :options="roles" class="w-full" />
          </div>
          <div class="mt-2 flex items-center gap-2">
            <Checkbox inputId="active" v-model="isActive" binary />
            <label for="active" class="text-sm text-gray-700">Ist aktiv</label>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <!-- Einstellungen Content -->
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="visible = false" />
      <Button label="Speichern" severity="primary" @click="visible = false" />
    </template>
  </Dialog>
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

  const visible = ref(true)
  const name = ref('Max Mustmann')
  const email = ref('max@example.com')
  const role = ref('Manager')
  const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
  const isActive = ref(true)
</script>