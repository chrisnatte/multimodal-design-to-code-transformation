<template>
  <Dialog
    v-model:visible="visible"
    modal
    :draggable="false"
    :style="{ width: '32rem' }"
    :pt="{
      root: 'overflow-visible',
      header: '!px-5 !pt-5 !pb-4',
      content: '!px-5 !py-0 overflow-visible',
      footer: '!px-5 !pt-8 !pb-5',
      mask: 'bg-black/40',
    }"
    @hide="visible = false"
  >
    <template #header>
      <div class="flex w-full items-center gap-3 pr-2">
        <Avatar label="M" shape="circle" class="!h-8 !w-8 !text-sm" />
        <div class="flex flex-col">
          <span class="text-sm font-medium">Max Mustermann</span>
          <span class="text-xs text-surface-500">Manager</span>
        </div>
        <Tag value="Aktiv" severity="success" class="ml-auto !text-xs" />
      </div>
    </template>

    <Tabs v-model:value="activeTab" :pt="{ root: 'overflow-visible' }">
      <TabList>
        <Tab value="personal" class="!px-4 !py-3 !text-sm">Persönliche Daten</Tab>
        <Tab value="settings" class="!px-4 !py-3 !text-sm">Einstellungen</Tab>
      </TabList>

      <TabPanels class="!p-0">
        <TabPanel value="personal" class="!p-0 !pt-4">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-sm">Name</label>
              <InputText v-model="name" input-id="name" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm">E-Mail</label>
              <InputText v-model="email" input-id="email" type="email" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="role" class="text-sm">Rolle</label>
              <Select
                ref="roleSelect"
                v-model="role"
                input-id="role"
                :options="roles"
                class="w-full"
              />
            </div>

            <div class="flex items-center gap-2 pt-1">
              <Checkbox v-model="isActive" input-id="active" binary />
              <label for="active" class="text-sm">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="settings" class="!p-0 !pt-4">
          <div class="h-56"></div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" size="small" @click="visible = false" />
        <Button label="Speichern" severity="success" size="small" @click="visible = false" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
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
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const isActive = ref(true)
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
const roleSelect = ref<InstanceType<typeof Select> | null>(null)

onMounted(async () => {
  await nextTick()
  window.setTimeout(() => roleSelect.value?.show(), 150)
})
</script>