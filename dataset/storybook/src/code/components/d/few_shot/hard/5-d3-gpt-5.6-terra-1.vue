<template>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    header="Neues Projekt"
    :draggable="false"
    :style="{ width: '32rem' }"
  >
    <Tabs v-model:value="activeStep">
      <TabList>
        <Tab value="1">1 - Allgemein</Tab>
        <Tab value="2">2 - Zeitplan</Tab>
        <Tab value="3">3 - Einstellungen</Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="1">
          <div class="flex flex-col gap-4 pt-1">
            <div class="flex flex-col gap-2">
              <label for="project-name" class="text-sm">Projektname</label>
              <InputText id="project-name" v-model="projectName" fluid />
            </div>

            <div class="flex flex-col gap-2">
              <label for="category" class="text-sm">Kategorie</label>
              <Select
                id="category"
                v-model="category"
                :options="categories"
                option-label="label"
                option-value="value"
                fluid
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="owner" class="text-sm">Verantwortlicher</label>
              <Select
                id="owner"
                v-model="owner"
                :options="owners"
                option-label="name"
                fluid
              >
                <template #value="{ value, placeholder }">
                  <div v-if="value" class="flex items-center gap-2">
                    <Avatar :label="value.initials" shape="circle" size="normal" />
                    <span>{{ value.name }}</span>
                  </div>
                  <span v-else>{{ placeholder }}</span>
                </template>
                <template #option="{ option }">
                  <div class="flex items-center gap-2">
                    <Avatar :label="option.initials" shape="circle" size="normal" />
                    <span>{{ option.name }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="2" />

        <TabPanel value="3">
          <div class="flex flex-col gap-4 pt-1">
            <div class="flex items-center justify-between px-1">
              <div class="flex flex-col">
                <span class="text-sm font-semibold">Öffentlich sichtbar</span>
                <span class="text-xs font-light">Für alle Teammitglieder</span>
              </div>
              <ToggleSwitch v-model="isPublic" />
            </div>

            <div class="flex items-center justify-between px-1">
              <div class="flex flex-col">
                <span class="text-sm font-semibold">Benachrichtigungen</span>
                <span class="text-xs font-light">Bei Statusänderungen</span>
              </div>
              <ToggleSwitch v-model="notifications" />
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" @click="dialogVisible = false" />
        <Button label="Weiter" severity="primary" @click="nextStep" />
      </div>
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
const activeStep = ref('1')
const projectName = ref('')
const category = ref('Entwicklung')
const owner = ref({
  name: 'Max Mustmann',
  initials: 'M',
})
const isPublic = ref(true)
const notifications = ref(false)

const categories = ref([
  { label: 'Entwicklung', value: 'Entwicklung' },
])

const owners = ref([
  {
    name: 'Max Mustmann',
    initials: 'M',
  },
])

function nextStep() {
  if (activeStep.value === '1') {
    activeStep.value = '2'
  } else if (activeStep.value === '2') {
    activeStep.value = '3'
  } else {
    dialogVisible.value = false
  }
}
</script>