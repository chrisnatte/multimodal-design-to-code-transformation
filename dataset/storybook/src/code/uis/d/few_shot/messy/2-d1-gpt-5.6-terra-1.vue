<template>
  <Dialog
    v-model:visible="profileDialogVisible"
    modal
    :closable="false"
    :draggable="false"
    :pt="{
      root: 'w-full max-w-lg overflow-visible rounded-xl',
      content: '!overflow-visible !p-0',
    }"
  >
    <div class="flex flex-col">
      <div class="flex items-center justify-between px-[18px] py-[17px]">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="!h-7 !w-7 !text-sm" />
          <div class="flex flex-col">
            <span class="text-sm">Max Mustermann</span>
            <span class="text-xs font-light">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <Tag value="Aktiv" severity="success" class="!text-xs" />
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            rounded
            aria-label="Schließen"
            @click="profileDialogVisible = false"
          />
        </div>
      </div>

      <Tabs v-model:value="activeTab">
        <TabList class="px-[18px]">
          <Tab value="personal">Persönliche Daten</Tab>
          <Tab value="settings">Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="personal">
            <div class="flex flex-col gap-4 px-[18px] pb-[18px] pt-3">
              <div class="flex flex-col gap-1.5">
                <label for="profile-name" class="text-sm">Name</label>
                <InputText v-model="name" input-id="profile-name" class="w-full" />
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="profile-email" class="text-sm">E-Mail</label>
                <InputText v-model="email" input-id="profile-email" type="email" class="w-full" />
              </div>

              <div class="flex flex-col gap-1.5">
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
                <Checkbox v-model="isActive" input-id="profile-active" binary />
                <label for="profile-active" class="text-sm">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="settings">
            <div class="px-[18px] pb-[18px] pt-3"></div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <div class="flex justify-end gap-2 px-[18px] pb-[18px]">
        <Button
          label="Abbrechen"
          severity="secondary"
          @click="profileDialogVisible = false"
        />
        <Button label="Speichern" severity="primary" @click="profileDialogVisible = false" />
      </div>
    </div>
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

const profileDialogVisible = ref(true)
const activeTab = ref('personal')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const role = ref('Manager')
const isActive = ref(true)
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
const roleSelect = ref<any>(null)

onMounted(async () => {
  await nextTick()
  roleSelect.value?.show()
})
</script>