<template>
  <div class="flex min-h-screen items-center justify-center bg-black py-[280px]">
    <div class="flex w-[512px] flex-col rounded-xl border border-surface-200 bg-white">
      <div class="flex items-center gap-4 p-[17.5px]">
        <div class="flex flex-1 items-center justify-between">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm">Max Mustermann</span>
              <span class="text-[10px] font-light">Manager</span>
            </div>
          </div>
          <Tag value="Aktiv" severity="success" />
        </div>
        <Button icon="pi pi-times" severity="secondary" text rounded @click="isVisible = false" />
      </div>
      <div class="flex flex-col items-center px-[17.5px] pb-[17.5px]">
        <Tabs value="0" class="w-full">
          <TabList>
            <Tab value="0">Persönliche Daten</Tab>
            <Tab value="1">Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                  <label for="name-input" class="text-sm">Name</label>
                  <InputText v-model="name" type="text" input-id="name-input" placeholder="Name eingeben" />
                </div>
                <div class="flex flex-col gap-2">
                  <label for="email-input" class="text-sm">E-Mail</label>
                  <InputText v-model="email" type="email" input-id="email-input" placeholder="Name eingeben" />
                </div>
                <div class="flex flex-col gap-2">
                  <label for="role-select" class="text-sm">Rolle</label>
                  <Select
                    v-model="role"
                    :options="roleOptions"
                    option-label="label"
                    option-value="value"
                    input-id="role-select"
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
              <div class="flex flex-col gap-4"></div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div class="flex items-center justify-end gap-2 p-[17.5px]">
        <Button label="Abbrechen" severity="secondary" @click="isVisible = false" />
        <Button label="Speichern" severity="primary" @click="onSave" />
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

  const isVisible = ref(true)
  const name = ref('Max Mustmann')
  const email = ref('max@example.com')
  const role = ref('Manager')
  const isActive = ref(true)

  const roleOptions = [
    { label: 'Manager', value: 'Manager' },
    { label: 'Mitarbeiter', value: 'Mitarbeiter' },
    { label: 'Kunde', value: 'Kunde' },
  ]

  function onSave() {
    isVisible.value = false
  }
</script>