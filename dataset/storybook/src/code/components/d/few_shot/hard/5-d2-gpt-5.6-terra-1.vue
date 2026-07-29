<template>
  <div class="min-h-screen">
    <Dialog
      v-model:visible="visible"
      modal
      header="Neues Projekt"
      :draggable="false"
      :style="{ width: '32rem' }"
      :breakpoints="{ '575px': 'calc(100vw - 2rem)' }"
      :pt="{
        root: 'overflow-hidden',
        header: 'px-[17.5px] py-[17.5px]',
        title: 'text-[17.5px] font-semibold',
        content: 'px-[17.5px] pb-[17.5px] pt-0',
        footer: 'flex justify-end gap-2 px-[17.5px] pb-[17.5px] pt-0',
        mask: 'bg-black/40',
      }"
    >
      <Tabs v-model:value="activeStep">
        <TabList>
          <Tab value="0">1 - Allgemein</Tab>
          <Tab value="1">2 - Zeitplan</Tab>
          <Tab value="2">3 - Einstellungen</Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 pt-1">
              <div class="flex flex-col gap-2">
                <label for="project-name" class="text-sm">Projektname</label>
                <InputText v-model="projectName" input-id="project-name" fluid />
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
                  option-label="label"
                  option-value="value"
                  fluid
                >
                  <template #value="{ value, placeholder }">
                    <div v-if="value" class="flex items-center gap-2">
                      <Avatar label="M" shape="circle" class="!h-6 !w-6 !text-xs" />
                      <span>{{ value }}</span>
                    </div>
                    <span v-else>{{ placeholder }}</span>
                  </template>
                  <template #option="{ option }">
                    <div class="flex items-center gap-2">
                      <Avatar label="M" shape="circle" class="!h-6 !w-6 !text-xs" />
                      <span>{{ option.label }}</span>
                    </div>
                  </template>
                </Select>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="1">
            <div class="min-h-36"></div>
          </TabPanel>

          <TabPanel value="2">
            <div class="flex flex-col gap-4 pt-1">
              <div class="flex items-center justify-between gap-4">
                <div class="flex flex-col">
                  <span class="text-sm font-semibold">Öffentlich sichtbar</span>
                  <span class="text-xs">Für alle Teammitglieder</span>
                </div>
                <ToggleSwitch v-model="isPublic" />
              </div>
              <div class="flex items-center justify-between gap-4">
                <div class="flex flex-col">
                  <span class="text-sm font-semibold">Benachrichtigungen</span>
                  <span class="text-xs">Bei Statusänderungen</span>
                </div>
                <ToggleSwitch v-model="notifications" />
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Weiter" class="!bg-emerald-500 !border-emerald-500" />
      </template>
    </Dialog>
  </div>
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

const visible = ref(true)
const activeStep = ref('0')
const projectName = ref('')
const category = ref('Entwicklung')
const owner = ref('Max Mustmann')
const isPublic = ref(true)
const notifications = ref(false)

const categories = ref([
  { label: 'Entwicklung', value: 'Entwicklung' },
])

const owners = ref([
  { label: 'Max Mustmann', value: 'Max Mustmann' },
])
</script>