<template>
  <div class="flex min-h-screen items-center justify-center bg-black p-8">
    <div class="w-[512px] rounded-xl border border-slate-200 bg-white">
      <div class="flex items-center justify-between px-5 py-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm">Max Mustermann</span>
            <span class="text-[10px] font-light">Manager</span>
          </div>
          <Tag value="Aktiv" severity="success" class="!bg-emerald-100 !text-emerald-700" />
        </div>
        <Button icon="pi pi-times" severity="secondary" text rounded />
      </div>

      <Tabs value="0">
        <TabList>
          <Tab value="0">Persönliche Daten</Tab>
          <Tab value="1">Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 px-1 py-4">
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
                  input-id="role-select"
                  :options="roleOptions"
                  option-label="label"
                  option-value="value"
                  class="w-full"
                />
              </div>
              <div class="flex items-center gap-2">
                <Checkbox v-model="isActive" input-id="is-active" binary />
                <label for="is-active" class="text-sm">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="px-1 py-4 text-sm text-slate-500">Einstellungen</div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <div class="flex justify-end gap-2 px-5 py-4">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
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