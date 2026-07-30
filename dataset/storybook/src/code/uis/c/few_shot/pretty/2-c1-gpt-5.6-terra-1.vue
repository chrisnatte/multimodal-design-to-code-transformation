<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :draggable="false"
    :pt="{
      root: 'w-full max-w-[510px] overflow-visible',
      header: '!px-4 !pt-4 !pb-3',
      content: '!px-4 !py-0 overflow-visible',
      footer: '!px-4 !pt-5 !pb-4',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="!h-7 !w-7 !text-sm" />
          <div class="flex flex-col">
            <span class="text-sm font-medium">Max Mustermann</span>
            <span class="text-xs text-surface-500">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-5">
          <Tag value="Aktiv" severity="success" class="!text-xs" />
          <Button
            icon="pi pi-times"
            text
            rounded
            severity="secondary"
            aria-label="Schließen"
            class="!h-7 !w-7"
            @click="visible = false"
          />
        </div>
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
            <div class="flex flex-col gap-1.5">
              <label for="name" class="text-sm">Name</label>
              <InputText id="name" v-model="name" class="w-full" />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="email" class="text-sm">E-Mail</label>
              <InputText id="email" v-model="email" type="email" class="w-full" />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="role" class="text-sm">Rolle</label>
              <Select
                ref="roleSelect"
                v-model="role"
                input-id="role"
                :options="roles"
                class="w-full"
                append-to="self"
              />
            </div>

            <div class="flex items-center gap-2 pt-1">
              <Checkbox v-model="isActive" input-id="active" binary />
              <label for="active" class="text-sm">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="settings">
          <div class="h-60"></div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Speichern" severity="primary" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
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
const roleSelect = ref()

const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])

onMounted(() => {
  roleSelect.value?.show()
})
</script>