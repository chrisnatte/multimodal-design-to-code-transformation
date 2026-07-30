<template>
  <Dialog
    v-model:visible="profileDialogVisible"
    modal
    :draggable="false"
    :style="{ width: '32rem' }"
    :pt="{
      root: 'overflow-visible border border-surface-200 shadow-xl',
      header: '!p-[17.5px]',
      content: '!overflow-visible !p-x-[17.5px] !pb-[17.5px]',
      footer: 'flex justify-end gap-2 !p-x-[17.5px] !pb-[17.5px]',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" aria-label="Max Mustermann" />
          <div class="flex flex-col">
            <span class="text-sm">Max Mustermann</span>
            <span class="text-xs font-light">Manager</span>
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
        <TabPanel value="personal" class="!px-1 !pt-3 !pb-4">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="profile-name" class="text-sm">Name</label>
              <InputText id="profile-name" v-model="name" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="profile-email" class="text-sm">E-Mail</label>
              <InputText id="profile-email" v-model="email" type="email" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="profile-role" class="text-sm">Rolle</label>
              <Select
                id="profile-role"
                v-model="role"
                :options="roles"
                option-label="label"
                option-value="value"
                class="w-full"
              />
              <div class="rounded-md border border-surface-200 bg-white p-1 shadow-md">
                <Button
                  v-for="option in roles"
                  :key="option.value"
                  :label="option.label"
                  text
                  class="w-full !justify-start !px-3 !py-2"
                  :class="option.value === role ? '!bg-emerald-50 !text-emerald-700' : ''"
                  @click="role = option.value"
                />
              </div>
            </div>

            <div class="flex items-center gap-2">
              <Checkbox v-model="isActive" input-id="profile-active" binary />
              <label for="profile-active" class="text-sm">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="settings" class="!px-1 !pt-3 !pb-4">
          <div class="min-h-[356px]"></div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="profileDialogVisible = false" />
      <Button label="Speichern" @click="profileDialogVisible = false" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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

const profileDialogVisible = ref(true)
const activeTab = ref('personal')
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('manager')
const isActive = ref(true)

const roles = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'mitarbeiter' },
  { label: 'Kunde', value: 'kunde' },
])
</script>