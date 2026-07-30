<template>
  <div class="min-h-screen bg-black">
    <Dialog
      v-model:visible="profileDialogVisible"
      modal
      :draggable="false"
      :pt="{
        root: 'w-[512px] overflow-visible rounded-xl',
        header: '!px-[18px] !py-[17px]',
        content: '!px-[18px] !pb-[17px] !pt-0',
        footer: 'flex justify-end gap-[7px] !px-[18px] !pb-[17px] !pt-0',
        mask: '!bg-black',
      }"
    >
      <template #header>
        <div class="flex w-full items-center justify-between pr-6">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm">Max Mustermann</span>
              <span class="text-[10px] font-light">Manager</span>
            </div>
          </div>
          <Tag value="Aktiv" severity="success" class="text-xs" />
        </div>
      </template>

      <Tabs v-model:value="activeTab" class="w-full">
        <TabList>
          <Tab value="personal">Persönliche Daten</Tab>
          <Tab value="settings">Einstellungen</Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="personal">
            <div class="flex flex-col gap-4 pt-3">
              <div class="flex flex-col gap-2">
                <label for="name" class="text-sm">Name</label>
                <InputText id="name" v-model="name" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="email" class="text-sm">E-Mail</label>
                <InputText id="email" v-model="email" type="email" class="w-full" />
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

          <TabPanel value="settings">
            <div class="pt-3"></div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <Button
          label="Abbrechen"
          severity="secondary"
          @click="profileDialogVisible = false"
        />
        <Button label="Speichern" severity="primary" @click="profileDialogVisible = false" />
      </template>
    </Dialog>
  </div>
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

const profileDialogVisible = ref(true)
const activeTab = ref('personal')
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const isActive = ref(true)
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
const roleSelect = ref<InstanceType<typeof Select> | null>(null)

onMounted(async () => {
  await nextTick()
  roleSelect.value?.show()
})
</script>