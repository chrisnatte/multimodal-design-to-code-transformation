<template>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    :closable="false"
    :draggable="false"
    :dismissableMask="false"
    class="!w-[512px] !overflow-visible"
    :pt="{
      header: { class: '!px-[17px] !py-[17px]' },
      content: { class: '!overflow-visible !px-[17px] !py-0' }
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-slate-700">Max Mustermann</span>
            <span class="text-[10px] font-light text-slate-500">Manager</span>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <Tag value="Aktiv" severity="success" class="!px-2 !py-1 !text-xs" />
          <Button
            icon="pi pi-times"
            text
            rounded
            severity="secondary"
            aria-label="Schließen"
            class="!h-7 !w-7"
            @click="dialogVisible = false"
          />
        </div>
      </div>
    </template>

    <Tabs v-model:value="activeTab">
      <TabList class="!border-b !border-slate-200">
        <Tab value="personal" class="!px-4 !py-3 !text-sm">Persönliche Daten</Tab>
        <Tab value="settings" class="!px-4 !py-3 !text-sm">Einstellungen</Tab>
      </TabList>

      <TabPanels class="!p-0">
        <TabPanel value="personal" class="!p-0">
          <div class="flex flex-col pt-3">
            <div class="flex flex-col gap-[7px]">
              <label for="name" class="text-sm text-slate-600">Name</label>
              <InputText
                id="name"
                v-model="name"
                class="!h-[33px] !w-full !text-sm"
              />
            </div>

            <div class="mt-4 flex flex-col gap-[7px]">
              <label for="email" class="text-sm text-slate-600">E-Mail</label>
              <InputText
                id="email"
                v-model="email"
                class="!h-[33px] !w-full !text-sm"
              />
            </div>

            <div class="mt-4 flex flex-col">
              <label for="role" class="mb-[7px] text-sm text-slate-600">Rolle</label>
              <Select
                ref="roleSelect"
                id="role"
                v-model="role"
                :options="roles"
                appendTo="self"
                class="!h-[33px] !w-full !border-emerald-500 !text-sm"
                :pt="{
                  overlay: { class: '!mt-0 !w-full' },
                  option: { class: '!px-[10px] !py-[7px] !text-sm' }
                }"
              />
            </div>

            <div class="mt-[122px] flex items-center gap-[7px]">
              <Checkbox
                v-model="isActive"
                inputId="active"
                binary
                class="!h-[18px] !w-[18px]"
              />
              <label for="active" class="text-sm text-slate-600">Ist aktiv</label>
            </div>

            <div class="mt-[33px] flex h-[50px] justify-end gap-[7px]">
              <Button
                label="Abbrechen"
                severity="secondary"
                class="!h-[33px] !bg-slate-100 !px-3 !text-sm !text-slate-600 !border-slate-100"
                @click="dialogVisible = false"
              />
              <Button
                label="Speichern"
                severity="success"
                class="!h-[33px] !px-3 !text-sm"
                @click="saveProfile"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="settings" class="!p-0" />
      </TabPanels>
    </Tabs>
  </Dialog>
</template>

<script setup>
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

const dialogVisible = ref(true)
const activeTab = ref('personal')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const role = ref('Manager')
const isActive = ref(true)
const roleSelect = ref()

const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])

const saveProfile = () => {
  dialogVisible.value = false
}

onMounted(() => {
  roleSelect.value?.show()
})
</script>