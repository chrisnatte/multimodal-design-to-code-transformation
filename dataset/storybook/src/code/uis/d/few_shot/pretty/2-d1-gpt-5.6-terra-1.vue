<template>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    :closable="false"
    :draggable="false"
    :pt="{
      root: 'w-[512px] overflow-visible rounded-xl',
      header: '!p-0',
      content: '!overflow-visible !p-0',
      footer: '!p-0',
      mask: 'bg-black/40',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between px-[17px] py-[17px]">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm">Max Mustermann</span>
            <span class="text-xs font-light">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <Tag value="Aktiv" severity="success" />
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            aria-label="Schließen"
            @click="dialogVisible = false"
          />
        </div>
      </div>
    </template>

    <div class="px-[17px] pb-[17px]">
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="personal">Persönliche Daten</Tab>
          <Tab value="settings">Einstellungen</Tab>
        </TabList>
        <TabPanels class="px-1 pt-3">
          <TabPanel value="personal">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <label for="profile-name" class="text-sm">Name</label>
                <InputText v-model="name" input-id="profile-name" class="w-full" />
              </div>

              <div class="flex flex-col gap-1">
                <label for="profile-email" class="text-sm">E-Mail</label>
                <InputText v-model="email" input-id="profile-email" type="email" class="w-full" />
              </div>

              <div class="flex flex-col gap-1">
                <label for="profile-role" class="text-sm">Rolle</label>
                <Select
                  ref="roleSelect"
                  v-model="role"
                  input-id="profile-role"
                  :options="roles"
                  class="w-full"
                />
              </div>

              <div class="flex items-center gap-2">
                <Checkbox v-model="isActive" input-id="is-active" binary />
                <label for="is-active" class="text-sm">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="settings">
            <div class="h-[356px]"></div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>

    <template #footer>
      <div class="flex justify-end gap-[7px] px-[17px] pb-[17px]">
        <Button label="Abbrechen" severity="secondary" @click="dialogVisible = false" />
        <Button label="Speichern" severity="primary" />
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

const dialogVisible = ref(true)
const activeTab = ref('personal')
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
const isActive = ref(true)

const roleSelect = useTemplateRef('roleSelect')

onMounted(async () => {
  await nextTick()
  roleSelect.value?.show()
})
</script>