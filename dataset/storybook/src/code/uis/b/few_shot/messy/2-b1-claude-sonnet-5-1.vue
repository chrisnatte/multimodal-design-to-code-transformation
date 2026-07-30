<template>
  <div class="flex items-center justify-center bg-black p-8">
    <Card
      class="w-[512px]"
      :pt="{
        body: '!p-0 !gap-0',
        content: '!p-0',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between border-b border-surface-200 px-4 py-4">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm font-normal">Max Mustermann</span>
              <span class="text-xs font-light text-surface-500">Manager</span>
            </div>
            <Tag value="Aktiv" severity="success" class="ml-2" />
          </div>
          <Button icon="pi pi-times" severity="secondary" text rounded />
        </div>
      </template>
      <template #content>
        <Tabs value="0">
          <TabList>
            <Tab value="0">Persönliche Daten</Tab>
            <Tab value="1">Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-4 p-4">
                <div class="flex flex-col gap-2">
                  <label for="name-input" class="text-sm">Name</label>
                  <InputText v-model="name" input-id="name-input" class="w-full" />
                </div>
                <div class="flex flex-col gap-2">
                  <label for="email-input" class="text-sm">E-Mail</label>
                  <InputText v-model="email" type="email" input-id="email-input" class="w-full" />
                </div>
                <div class="flex flex-col gap-2">
                  <label for="role-select" class="text-sm">Rolle</label>
                  <Select
                    v-model="role"
                    :options="roleOptions"
                    option-label="label"
                    option-value="value"
                    input-id="role-select"
                    class="w-full"
                  />
                  <div class="flex flex-col gap-2 rounded-md border border-surface-200 p-2">
                    <div
                      v-for="option in roleOptions"
                      :key="option.value"
                      class="rounded p-2"
                      :class="{ 'bg-green-50': role === option.value }"
                    >
                      {{ option.label }}
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isActive" input-id="is-active" binary />
                  <label for="is-active" class="text-sm">Ist aktiv</label>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="flex flex-col gap-4 p-4">
                <span class="text-sm text-surface-500">Einstellungen</span>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>
      <template #footer>
        <div class="flex justify-end gap-2 border-t border-surface-200 p-4">
          <Button label="Abbrechen" severity="secondary" />
          <Button label="Speichern" severity="primary" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
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

  const name = ref('Max Mustermann')
  const email = ref('max@example.com')
  const role = ref('Manager')
  const isActive = ref(true)

  const roleOptions = [
    { label: 'Manager', value: 'Manager' },
    { label: 'Mitarbeiter', value: 'Mitarbeiter' },
    { label: 'Kunde', value: 'Kunde' },
  ]
</script>