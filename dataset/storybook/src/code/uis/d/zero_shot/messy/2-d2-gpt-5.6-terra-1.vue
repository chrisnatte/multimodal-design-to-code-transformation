<template>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    :closable="false"
    :draggable="false"
    :style="{ width: '512px' }"
    maskClass="bg-black/40"
    class="overflow-hidden rounded-xl border border-slate-200"
  >
    <template #header>
      <div class="flex w-full items-center justify-between pr-1">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="h-7 w-7 bg-slate-200 text-sm text-slate-600" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-slate-700">Max Mustermann</span>
            <span class="text-[10px] font-light text-slate-500">Manager</span>
          </div>
        </div>

        <div class="flex items-center gap-5">
          <Tag value="Aktiv" severity="success" class="px-2 py-1 text-xs font-bold" />
          <Button
            icon="pi pi-times"
            text
            rounded
            size="small"
            class="h-7 w-7 text-slate-500"
            aria-label="Schließen"
            @click="dialogVisible = false"
          />
        </div>
      </div>
    </template>

    <Tabs value="personal" class="w-full">
      <TabList class="border-b border-slate-200">
        <Tab value="personal" class="px-4 py-3 text-sm font-bold">Persönliche Daten</Tab>
        <Tab value="settings" class="px-4 py-3 text-sm font-bold">Einstellungen</Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="personal">
          <div class="flex flex-col gap-4 px-1 pt-3">
            <div class="flex flex-col gap-1.5">
              <label for="name" class="text-sm text-slate-700">Name</label>
              <InputText
                id="name"
                v-model="name"
                class="h-[33px] w-full text-sm"
                aria-label="Name"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="email" class="text-sm text-slate-700">E-Mail</label>
              <InputText
                id="email"
                v-model="email"
                class="h-[33px] w-full text-sm"
                aria-label="E-Mail"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="role" class="text-sm text-slate-700">Rolle</label>
              <Select
                ref="roleSelect"
                inputId="role"
                v-model="role"
                :options="roles"
                optionLabel="label"
                optionValue="value"
                class="h-[33px] w-full text-sm"
                aria-label="Rolle"
              />
            </div>

            <div class="flex items-center gap-2 pt-1">
              <Checkbox v-model="isActive" inputId="active" binary />
              <label for="active" class="text-sm text-slate-700">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="settings">
          <div class="px-1 pt-3"></div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-2 pt-3">
        <Button
          label="Abbrechen"
          severity="secondary"
          class="h-[33px] bg-slate-100 px-3 text-sm text-slate-600"
          @click="dialogVisible = false"
        />
        <Button
          label="Speichern"
          severity="success"
          class="h-[33px] px-3 text-sm"
          @click="saveProfile"
        />
      </div>
    </template>
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
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const role = ref('Manager')
const isActive = ref(true)
const roleSelect = ref()

const roles = ref([
  { label: 'Manager', value: 'Manager' },
  { label: 'Mitarbeiter', value: 'Mitarbeiter' },
  { label: 'Kunde', value: 'Kunde' }
])

const saveProfile = () => {
  dialogVisible.value = false
}

onMounted(() => {
  roleSelect.value?.show()
})
</script>