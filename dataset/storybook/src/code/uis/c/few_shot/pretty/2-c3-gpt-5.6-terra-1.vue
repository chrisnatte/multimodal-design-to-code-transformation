<template>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    :closable="false"
    :draggable="false"
    :style="{ width: '365px' }"
    :pt="{
      root: 'overflow-visible rounded-lg',
      header: '!px-4 !pt-3 !pb-2',
      content: '!px-4 !pt-0 !pb-3 overflow-visible',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between">
        <div class="flex items-center gap-2">
          <Avatar label="M" shape="circle" class="!h-5 !w-5 !text-[9px]" />
          <div class="flex flex-col leading-none">
            <span class="text-[10px] font-medium text-slate-700">Max Mustermann</span>
            <span class="mt-0.5 text-[7px] text-slate-500">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <Tag value="Aktiv" severity="success" class="!px-1.5 !py-0.5 !text-[9px]" />
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            rounded
            size="small"
            aria-label="Schließen"
            class="!h-6 !w-6"
            @click="dialogVisible = false"
          />
        </div>
      </div>
    </template>

    <Tabs v-model:value="activeTab">
      <TabList class="!mb-3">
        <Tab value="personal" class="!px-2 !py-2 !text-[10px]">Persönliche Daten</Tab>
        <Tab value="settings" class="!px-2 !py-2 !text-[10px]">Einstellungen</Tab>
      </TabList>

      <TabPanels class="!p-0">
        <TabPanel value="personal" class="!p-0">
          <div class="flex flex-col gap-2.5">
            <div class="flex flex-col gap-1">
              <label for="name" class="text-[10px] text-slate-600">Name</label>
              <InputText
                id="name"
                v-model="name"
                class="!h-6 !w-full !px-2 !text-[10px]"
              />
            </div>

            <div class="flex flex-col gap-1">
              <label for="email" class="text-[10px] text-slate-600">E-Mail</label>
              <InputText
                id="email"
                v-model="email"
                type="email"
                class="!h-6 !w-full !px-2 !text-[10px]"
              />
            </div>

            <div class="flex flex-col gap-1">
              <label for="role" class="text-[10px] text-slate-600">Rolle</label>
              <Select
                ref="roleSelect"
                v-model="role"
                input-id="role"
                :options="roles"
                class="!h-6 !w-full !text-[10px]"
                :pt="{
                  label: '!px-2 !py-1 !text-[10px]',
                  dropdown: '!w-7',
                  overlay: '!text-[10px]',
                  option: '!px-2 !py-1.5 !text-[10px]',
                }"
              />
            </div>

            <div class="mt-1 flex items-center gap-1.5">
              <Checkbox v-model="active" input-id="active" binary class="!h-3 !w-3" />
              <label for="active" class="text-[10px] text-slate-600">Ist aktiv</label>
            </div>

            <div class="mt-3 flex justify-end gap-1.5">
              <Button
                label="Abbrechen"
                severity="secondary"
                size="small"
                class="!px-2 !py-1 !text-[10px]"
                @click="dialogVisible = false"
              />
              <Button
                label="Speichern"
                severity="success"
                size="small"
                class="!px-2 !py-1 !text-[10px]"
                @click="dialogVisible = false"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="settings" class="!p-0">
          <div class="h-48"></div>
        </TabPanel>
      </TabPanels>
    </Tabs>
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

const dialogVisible = ref(true)
const activeTab = ref('personal')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const role = ref('Manager')
const active = ref(true)
const roles = ['Manager', 'Mitarbeiter', 'Kunde']
const roleSelect = ref<InstanceType<typeof Select> | null>(null)

onMounted(async () => {
  await nextTick()
  roleSelect.value?.show()
})
</script>