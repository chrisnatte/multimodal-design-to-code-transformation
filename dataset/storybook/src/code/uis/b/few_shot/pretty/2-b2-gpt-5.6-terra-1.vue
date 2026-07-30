<template>
  <div class="flex min-h-[1080px] w-full flex-col items-center justify-center bg-black py-[280px]">
    <Dialog
      v-model:visible="dialogVisible"
      modal
      :closable="false"
      :draggable="false"
      :style="{ width: '512px' }"
      :pt="{
        root: 'border border-surface-200 rounded-xl',
        header: 'px-[17.5px] py-[17.5px]',
        content: 'px-[17.5px] pb-[17.5px]',
        footer: 'flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]',
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
          <Tag value="Aktiv" />
        </div>
        <Button
          icon="pi pi-times"
          severity="secondary"
          variant="text"
          aria-label="Dialog schließen"
          @click="dialogVisible = false"
        />
      </template>

      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="personal">Persönliche Daten</Tab>
          <Tab value="settings">Einstellungen</Tab>
        </TabList>

        <TabPanels
          :pt="{
            root: 'px-1 pt-[12.25px] pb-[15.75px]',
          }"
        >
          <TabPanel value="personal">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-[7px]">
                <label for="profile-name" class="text-sm">Name</label>
                <InputText id="profile-name" v-model="name" class="w-full" />
              </div>

              <div class="flex flex-col gap-[7px]">
                <label for="profile-email" class="text-sm">E-Mail</label>
                <InputText id="profile-email" v-model="email" type="email" class="w-full" />
              </div>

              <div class="flex flex-col gap-0.5">
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

          <TabPanel value="settings" />
        </TabPanels>
      </Tabs>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="dialogVisible = false" />
        <Button label="Speichern" @click="dialogVisible = false" />
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

const dialogVisible = ref(true)
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