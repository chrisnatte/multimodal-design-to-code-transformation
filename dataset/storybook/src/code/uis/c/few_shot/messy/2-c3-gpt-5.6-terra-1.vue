<template>
  <Dialog
    v-model:visible="visible"
    modal
    :draggable="false"
    :pt="{
      root: 'w-[510px]',
      header: '!px-5 !pt-5 !pb-3',
      content: '!px-5 !py-0',
      footer: '!px-5 !pt-6 !pb-5',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between pr-8">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm font-medium">Max Mustermann</span>
            <span class="text-xs text-surface-500">Manager</span>
          </div>
        </div>
        <Tag value="Aktiv" severity="success" />
      </div>
    </template>

    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="personal">Persönliche Daten</Tab>
        <Tab value="settings">Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="personal">
          <div class="flex flex-col gap-4 pt-4">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-sm">Name</label>
              <InputText id="name" v-model="name" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm">E-Mail</label>
              <InputText id="email" v-model="email" type="email" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="role" class="text-sm">Rolle</label>
              <Select
                ref="roleSelect"
                v-model="role"
                input-id="role"
                :options="roles"
                append-to="self"
                class="w-full"
              />
            </div>

            <div class="flex items-center gap-2 pt-1">
              <Checkbox v-model="isActive" input-id="active" binary />
              <label for="active" class="text-sm">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="settings">
          <div class="h-64" />
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, useTemplateRef } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Tag from 'primevue/tag'

const visible = ref(true)
const activeTab = ref('personal')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const role = ref('Manager')
const isActive = ref(true)
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
const roleSelect = useTemplateRef('roleSelect')

onMounted(async () => {
  await nextTick()
  roleSelect.value?.show()
})
</script>