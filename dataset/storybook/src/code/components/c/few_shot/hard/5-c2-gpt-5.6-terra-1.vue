<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Neues Projekt"
    :draggable="false"
    :style="{ width: '32rem' }"
    :pt="{
      root: 'rounded-xl',
      header: 'px-5 pt-5 pb-4',
      title: 'text-base font-semibold',
      content: 'px-5 pb-5',
      footer: 'px-5 pb-5 pt-2',
      mask: 'bg-black/35',
    }"
  >
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="general">1 - Allgemein</Tab>
        <Tab value="schedule">2 - Zeitplan</Tab>
        <Tab value="settings">3 - Einstellungen</Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="general" class="!px-1 !pt-4 !pb-2">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="project-name" class="text-sm">Projektname</label>
              <InputText v-model="projectName" input-id="project-name" fluid />
            </div>

            <div class="flex flex-col gap-2">
              <label for="category" class="text-sm">Kategorie</label>
              <Select
                v-model="category"
                :options="categories"
                input-id="category"
                option-label="label"
                option-value="value"
                fluid
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="owner" class="text-sm">Verantwortlicher</label>
              <Select
                v-model="owner"
                :options="owners"
                input-id="owner"
                option-label="name"
                fluid
              >
                <template #value="{ value }">
                  <div v-if="value" class="flex items-center gap-2">
                    <Avatar :label="value.initials" shape="circle" class="!h-6 !w-6 !text-xs" />
                    <span>{{ value.name }}</span>
                  </div>
                </template>
                <template #option="{ option }">
                  <div class="flex items-center gap-2">
                    <Avatar :label="option.initials" shape="circle" class="!h-6 !w-6 !text-xs" />
                    <span>{{ option.name }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="schedule" class="!px-1 !pt-4 !pb-2">
          <div class="h-48"></div>
        </TabPanel>

        <TabPanel value="settings" class="!px-1 !pt-4 !pb-2">
          <div class="h-48"></div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Weiter" @click="activeTab = 'schedule'" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'

const visible = ref(true)
const activeTab = ref('general')
const projectName = ref('')
const category = ref('development')
const owner = ref({
  name: 'Max Mustmann',
  initials: 'M',
})

const categories = ref([
  { label: 'Entwicklung', value: 'development' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' },
])

const owners = ref([
  { name: 'Max Mustmann', initials: 'M' },
  { name: 'Anna Schmidt', initials: 'A' },
  { name: 'Lisa Weber', initials: 'L' },
])
</script>