<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Neues Projekt"
    :draggable="false"
    :style="{ width: '32rem' }"
    content-class="!pt-5"
  >
    <Tabs v-model:value="activeStep">
      <TabList>
        <Tab value="1">1 - Allgemein</Tab>
        <Tab value="2">2 - Zeitplan</Tab>
        <Tab value="3">3 - Einstellungen</Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="1" class="!px-1 !pt-4">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="project-name" class="text-sm">Projektname</label>
              <InputText v-model="projectName" id="project-name" fluid />
            </div>

            <div class="flex flex-col gap-2">
              <label for="category" class="text-sm">Kategorie</label>
              <Select
                v-model="category"
                input-id="category"
                :options="categories"
                option-label="label"
                option-value="value"
                fluid
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="owner" class="text-sm">Verantwortlicher</label>
              <Select
                v-model="owner"
                input-id="owner"
                :options="owners"
                option-label="name"
                option-value="id"
                fluid
              >
                <template #value="{ value }">
                  <div v-if="value" class="flex items-center gap-2">
                    <Avatar label="M" shape="circle" size="small" />
                    <span>Max Mustmann</span>
                  </div>
                </template>
                <template #option="{ option }">
                  <div class="flex items-center gap-2">
                    <Avatar :label="option.initials" shape="circle" size="small" />
                    <span>{{ option.name }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="2" class="!px-1 !pt-4">
          <div class="h-48"></div>
        </TabPanel>

        <TabPanel value="3" class="!px-1 !pt-4">
          <div class="h-48"></div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-2 pt-2">
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Weiter" severity="success" @click="activeStep = '2'" />
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
const activeStep = ref('1')
const projectName = ref('')
const category = ref('development')
const owner = ref('max')

const categories = ref([
  { label: 'Entwicklung', value: 'development' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Design', value: 'design' },
])

const owners = ref([
  { id: 'max', name: 'Max Mustmann', initials: 'M' },
  { id: 'anna', name: 'Anna Schmidt', initials: 'A' },
])
</script>