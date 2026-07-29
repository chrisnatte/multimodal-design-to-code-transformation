<template>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    closable
    :draggable="false"
    :pt="{
      root: 'w-full max-w-[512px]',
      header: '!px-[18px] !py-[18px]',
      title: 'text-[18px] font-semibold',
      content: '!px-[18px] !pb-[18px]',
      footer: 'flex justify-end gap-2 !px-[18px] !pb-[18px]',
    }"
  >
    <template #header>
      <span>Neues Projekt</span>
    </template>

    <Tabs v-model:value="activeStep">
      <TabList>
        <Tab value="general">1 - Allgemein</Tab>
        <Tab value="schedule">2 - Zeitplan</Tab>
        <Tab value="settings">3 - Einstellungen</Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="general">
          <div class="flex flex-col gap-4 px-1 pt-3">
            <div class="flex flex-col gap-2">
              <label for="project-name" class="text-sm">Projektname</label>
              <InputText v-model="projectName" input-id="project-name" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="category" class="text-sm">Kategorie</label>
              <Select
                v-model="selectedCategory"
                :options="categories"
                option-label="label"
                input-id="category"
                class="w-full"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="manager" class="text-sm">Verantwortlicher</label>
              <Select
                v-model="selectedManager"
                :options="managers"
                option-label="name"
                input-id="manager"
                class="w-full"
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

        <TabPanel value="schedule">
          <div class="px-1 pt-3 text-sm"> </div>
        </TabPanel>

        <TabPanel value="settings">
          <div class="flex flex-col gap-4 px-1 pt-3">
            <div class="flex items-center justify-between">
              <div class="flex flex-col">
                <span class="text-sm font-semibold">Öffentlich sichtbar</span>
                <span class="text-xs">Für alle Teammitglieder</span>
              </div>
              <ToggleSwitch v-model="isPublic" />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex flex-col">
                <span class="text-sm font-semibold">Benachrichtigungen</span>
                <span class="text-xs">Bei Statusänderungen</span>
              </div>
              <ToggleSwitch v-model="notificationsEnabled" />
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="dialogVisible = false" />
      <Button label="Weiter" severity="primary" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import ToggleSwitch from 'primevue/toggleswitch'

const dialogVisible = ref(true)
const activeStep = ref('general')
const projectName = ref('')
const selectedCategory = ref({ label: 'Entwicklung' })
const selectedManager = ref({ name: 'Max Mustmann', initials: 'M' })
const isPublic = ref(true)
const notificationsEnabled = ref(false)

const categories = ref([
  { label: 'Entwicklung' },
])

const managers = ref([
  { name: 'Max Mustmann', initials: 'M' },
])
</script>