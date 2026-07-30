<template>
  <div class="flex min-h-screen items-center justify-center bg-black p-8">
    <Card
      :pt="{
        root: 'w-[512px] rounded-xl border border-slate-200',
        body: '!p-0 !gap-0',
        content: '!p-0',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm">Max Mustermann</span>
              <span class="text-[10px] font-light">Manager</span>
            </div>
            <Tag value="Aktiv" class="!bg-emerald-100 !text-emerald-700" />
          </div>
          <Button icon="pi pi-times" text severity="secondary" rounded />
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
              <div class="flex flex-col gap-4 px-6 py-4">
                <div class="flex flex-col gap-1">
                  <label for="name-input" class="text-sm">Name</label>
                  <InputText v-model="name" input-id="name-input" />
                </div>
                <div class="flex flex-col gap-1">
                  <label for="email-input" class="text-sm">E-Mail</label>
                  <InputText v-model="email" type="email" input-id="email-input" />
                </div>
                <div class="flex flex-col gap-1">
                  <label for="role-select" class="text-sm">Rolle</label>
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
                  <label for="is-active" class="text-sm">Ist aktiv</label>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="px-6 py-4 text-sm text-slate-500">Einstellungen</div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </template>
      <template #footer>
        <div class="flex items-center justify-end gap-2 px-6 pb-4">
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
  const role = ref('manager')
  const isActive = ref(true)

  const roleOptions = [
    { label: 'Manager', value: 'manager' },
    { label: 'Mitarbeiter', value: 'mitarbeiter' },
    { label: 'Kunde', value: 'kunde' },
  ]
</script>