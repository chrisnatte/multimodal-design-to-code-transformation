<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :dismissable-mask="false"
    :pt="{
      root: 'w-[364px] rounded-lg',
      content: '!p-4',
      footer: '!px-4 !pb-3 !pt-0',
    }"
  >
    <div class="flex flex-col gap-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2">
          <Avatar label="M" shape="circle" class="!h-5 !w-5 !text-[9px]" />
          <div class="flex flex-col leading-none">
            <span class="text-[10px] font-medium">Max Mustermann</span>
            <span class="mt-0.5 text-[7px] text-surface-500">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <Tag value="Aktiv" severity="success" class="!px-1.5 !py-0.5 !text-[9px]" />
          <Button
            icon="pi pi-times"
            text
            rounded
            severity="secondary"
            size="small"
            aria-label="Schließen"
            class="!h-5 !w-5"
            @click="visible = false"
          />
        </div>
      </div>

      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="personal" class="!px-2.5 !py-2 !text-[10px]">Persönliche Daten</Tab>
          <Tab value="settings" class="!px-2.5 !py-2 !text-[10px]">Einstellungen</Tab>
        </TabList>
        <TabPanels class="!p-0">
          <TabPanel value="personal" class="!p-0 !pt-3">
            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-1">
                <label for="name" class="text-[10px]">Name</label>
                <InputText id="name" v-model="name" class="!h-6 !w-full !text-[10px]" />
              </div>

              <div class="flex flex-col gap-1">
                <label for="email" class="text-[10px]">E-Mail</label>
                <InputText id="email" v-model="email" class="!h-6 !w-full !text-[10px]" />
              </div>

              <div class="flex flex-col gap-1">
                <label for="role" class="text-[10px]">Rolle</label>
                <Select
                  ref="roleSelect"
                  id="role"
                  v-model="role"
                  :options="roles"
                  class="!h-6 !w-full !text-[10px]"
                  :pt="{
                    label: '!py-1.5 !text-[10px]',
                    dropdown: '!w-7',
                    overlay: '!text-[10px]',
                    option: '!px-2 !py-1.5 !text-[10px]',
                  }"
                />
              </div>

              <div class="flex items-center gap-1.5">
                <Checkbox v-model="isActive" input-id="active" binary class="!h-3 !w-3" />
                <label for="active" class="text-[10px]">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="settings" class="!p-0 !pt-3">
            <div class="h-[205px]"></div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>

    <template #footer>
      <div class="mt-4 flex justify-end gap-2">
        <Button
          label="Abbrechen"
          severity="secondary"
          size="small"
          class="!h-6 !px-2.5 !text-[10px]"
          @click="visible = false"
        />
        <Button label="Speichern" size="small" class="!h-6 !px-2.5 !text-[10px]" />
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
const name = ref('Max Mustermann')
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