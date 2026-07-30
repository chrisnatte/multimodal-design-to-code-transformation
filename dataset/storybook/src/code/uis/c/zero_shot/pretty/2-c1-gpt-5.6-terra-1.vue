<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :draggable="false"
    :style="{ width: '510px' }"
    class="shadow-2xl"
  >
    <template #header>
      <div class="flex w-full items-center justify-between pr-1">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-slate-100 text-slate-600" />
          <div class="flex flex-col">
            <span class="text-sm font-medium text-slate-700">Max Mustermann</span>
            <span class="text-xs text-slate-500">Manager</span>
          </div>
        </div>

        <div class="flex items-center gap-5">
          <Tag value="Aktiv" severity="success" class="text-xs" />
          <Button
            icon="pi pi-times"
            text
            rounded
            severity="secondary"
            size="small"
            aria-label="Schließen"
            @click="visible = false"
          />
        </div>
      </div>
    </template>

    <Tabs value="personal">
      <TabList>
        <Tab value="personal">Persönliche Daten</Tab>
        <Tab value="settings">Einstellungen</Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="personal">
          <div class="flex flex-col gap-4 pt-1">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-sm text-slate-700">Name</label>
              <InputText id="name" v-model="name" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm text-slate-700">E-Mail</label>
              <InputText id="email" v-model="email" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="role" class="text-sm text-slate-700">Rolle</label>
              <Select
                ref="roleSelect"
                input-id="role"
                v-model="role"
                :options="roles"
                option-label="label"
                option-value="value"
                append-to="self"
                class="w-full"
              />
            </div>

            <div class="flex items-center gap-2 pt-1">
              <Checkbox v-model="isActive" input-id="active" binary />
              <label for="active" class="text-sm text-slate-700">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="settings">
          <div class="py-2 text-sm text-slate-500">Einstellungen</div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-2 pt-4">
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Speichern" @click="save" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
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
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const role = ref('manager')
const isActive = ref(true)
const roleSelect = ref()

const roles = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'mitarbeiter' },
  { label: 'Kunde', value: 'kunde' }
])

const save = () => {
  visible.value = false
}

onMounted(async () => {
  await nextTick()
  roleSelect.value?.show()
})
</script>