<template>
  <div class="flex min-h-screen items-center justify-center bg-black/50 p-8">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="false"
      :style="{ width: '512px' }"
      :pt="{
        root: 'rounded-xl bg-white border border-surface-200',
        header: 'flex items-center justify-between p-4',
        content: 'p-4 pt-0',
        footer: 'flex justify-end gap-2 p-4',
      }"
    >
      <template #header>
        <div class="flex w-full items-center justify-between">
          <div class="flex items-center gap-16">
            <div class="flex items-center gap-3">
              <Avatar label="M" shape="circle" class="bg-surface-200 text-surface-900" />
              <div class="flex flex-col">
                <span class="text-sm font-normal">Max Mustermann</span>
                <span class="text-[10px] font-light">Manager</span>
              </div>
            </div>
            <Tag value="Aktiv" severity="success" />
          </div>
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            rounded
            aria-label="Close"
            @click="visible = false"
          />
        </div>
      </template>

      <Tabs value="0">
        <TabList>
          <Tab value="0">Persönliche Daten</Tab>
          <Tab value="1">Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0" class="flex flex-col gap-4 pt-4">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-sm">Name</label>
              <InputText id="name" v-model="name" placeholder="Name eingeben" class="w-full" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm">E-Mail</label>
              <InputText id="email" v-model="email" placeholder="Name eingeben" class="w-full" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="role" class="text-sm">Rolle</label>
              <Select
                id="role"
                v-model="role"
                :options="roles"
                optionLabel="label"
                placeholder="Placeholder"
                class="w-full"
              />
            </div>
            <div class="mt-2 flex items-center gap-2">
              <Checkbox id="active" v-model="isActive" binary />
              <label for="active" class="text-sm">Ist aktiv</label>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <!-- Einstellungen Content -->
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Speichern" severity="primary" @click="save" />
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

  const visible = ref(true)
  const name = ref('Max Mustmann')
  const email = ref('max@example.com')
  const role = ref({ label: 'Manager', value: 'Manager' })
  const roles = ref([
    { label: 'Manager', value: 'Manager' },
    { label: 'Mitarbeiter', value: 'Mitarbeiter' },
    { label: 'Kunde', value: 'Kunde' },
  ])
  const isActive = ref(true)

  const save = () => {
    visible.value = false
  }
</script>