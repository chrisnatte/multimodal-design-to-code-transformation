<template>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    :closable="false"
    :draggable="false"
    :dismissable-mask="false"
    class="w-[512px] max-w-[calc(100vw-2rem)]"
    :pt="{
      root: 'overflow-visible',
      mask: '!bg-black/40',
      header: '!p-[17.5px]',
      content: '!px-[17.5px] !pb-[17.5px] !pt-0',
      footer: '!flex !justify-end !gap-[7px] !px-[17.5px] !pb-[17.5px] !pt-0',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between">
        <div class="flex items-center gap-3">
          <Avatar
            label="M"
            shape="circle"
            aria-label="Max Mustermann"
            :pt="{
              root: '!h-7 !w-7 !bg-surface-200 !text-sm',
            }"
          />
          <div class="flex flex-col">
            <span class="text-sm leading-4">Max Mustermann</span>
            <span class="text-[10px] leading-3 font-light">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <Tag value="Aktiv" :pt="{ root: '!px-2 !py-1 !text-xs' }" />
          <Button
            icon="pi pi-times"
            severity="secondary"
            variant="text"
            aria-label="Schließen"
            class="!h-7 !w-7 !p-0"
            @click="dialogVisible = false"
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
          <div class="flex flex-col gap-4 px-1 pt-3 pb-4">
            <div class="flex flex-col gap-2">
              <label for="name">Name</label>
              <InputText id="name" v-model="name" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="email">E-Mail</label>
              <InputText id="email" v-model="email" type="email" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="role">Rolle</label>
              <Select
                ref="roleSelect"
                id="role"
                v-model="role"
                :options="roles"
                option-label="label"
                option-value="value"
                class="w-full"
              />
            </div>

            <div class="flex items-center gap-2">
              <Checkbox v-model="isActive" input-id="active" binary />
              <label for="active">Ist aktiv</label>
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
const roleSelect = ref<InstanceType<typeof Select> | null>(null)

const roles = ref([
  { label: 'Manager', value: 'Manager' },
  { label: 'Mitarbeiter', value: 'Mitarbeiter' },
  { label: 'Kunde', value: 'Kunde' },
])

onMounted(async () => {
  await nextTick()
  roleSelect.value?.show()
})
</script>