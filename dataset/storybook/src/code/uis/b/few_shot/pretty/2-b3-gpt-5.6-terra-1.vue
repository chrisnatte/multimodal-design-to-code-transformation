<template>
  <div class="flex min-h-[1080px] items-center justify-center bg-black py-[280px]">
    <Dialog
      v-model:visible="dialogVisible"
      modal
      append-to="self"
      :draggable="false"
      :style="{ width: '512px' }"
      :pt="{
        root: 'border border-surface-200',
        header: '!p-[17.5px]',
        content: '!p-0',
        footer: 'flex justify-end gap-[7px] !px-[17.5px] !pb-[17.5px] !pt-0',
      }"
    >
      <template #header>
        <div class="flex w-full items-center justify-between gap-16">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" aria-label="Max Mustermann" />
            <div class="flex flex-col">
              <span class="text-sm">Max Mustermann</span>
              <span class="text-[10px] font-light">Manager</span>
            </div>
          </div>
          <Tag value="Aktiv" severity="primary" />
        </div>
      </template>

      <div class="flex flex-col gap-[7px] px-[17.5px] pb-[17.5px]">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="personal">Persönliche Daten</Tab>
            <Tab value="settings">Einstellungen</Tab>
          </TabList>
          <TabPanels class="px-1 pt-3 pb-4">
            <TabPanel value="personal">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                  <label for="name" class="text-sm">Name</label>
                  <InputText id="name" v-model="name" fluid />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="email" class="text-sm">E-Mail</label>
                  <InputText id="email" v-model="email" type="email" fluid />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="role" class="text-sm">Rolle</label>
                  <Select
                    id="role"
                    v-model="role"
                    :options="roleOptions"
                    option-label="label"
                    option-value="value"
                    fluid
                  />
                </div>

                <div class="flex items-center gap-2">
                  <Checkbox v-model="isActive" input-id="is-active" binary />
                  <label for="is-active" class="text-sm">Ist aktiv</label>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="settings">
              <div></div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <template #footer>
        <Button
          label="Abbrechen"
          severity="secondary"
          @click="dialogVisible = false"
        />
        <Button label="Speichern" @click="dialogVisible = false" />
      </template>
    </Dialog>
  </div>
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

const dialogVisible = ref(true)
const activeTab = ref('personal')
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