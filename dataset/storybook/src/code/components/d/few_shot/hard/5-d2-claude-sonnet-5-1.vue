<template>
  <Dialog
    v-model:visible="visible"
    header="Neues Projekt"
    modal
    :style="{ width: '32rem' }"
    :pt="{
      content: '!p-0',
    }"
  >
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">1 - Allgemein</Tab>
        <Tab value="1">2 - Zeitplan</Tab>
        <Tab value="2">3 - Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="project-name">Projektname</label>
              <InputText v-model="projectName" input-id="project-name" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="category">Kategorie</label>
              <Select
                v-model="category"
                input-id="category"
                :options="categoryOptions"
                option-label="label"
                option-value="value"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="responsible">Verantwortlicher</label>
              <Select
                v-model="responsible"
                input-id="responsible"
                :options="responsibleOptions"
                option-label="label"
                option-value="value"
              >
                <template #value="{ value }">
                  <div class="flex items-center gap-2">
                    <Avatar :label="getInitial(value)" size="small" shape="circle" />
                    <span>{{ getResponsibleLabel(value) }}</span>
                  </div>
                </template>
                <template #option="{ option }">
                  <div class="flex items-center gap-2">
                    <Avatar :label="getInitial(option.value)" size="small" shape="circle" />
                    <span>{{ option.label }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <p class="m-0">Zeitplan Inhalte</p>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <div class="flex flex-col">
                <span class="text-sm font-semibold">Öffentlich sichtbar</span>
                <span class="text-xs text-gray-400">Für alle Teammitglieder</span>
              </div>
              <ToggleSwitch v-model="isPublic" />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex flex-col">
                <span class="text-sm font-semibold">Benachrichtigungen</span>
                <span class="text-xs text-gray-400">Bei Statusänderungen</span>
              </div>
              <ToggleSwitch v-model="notifications" />
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="visible = false" />
      <Button label="Weiter" severity="primary" />
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
  import ToggleSwitch from 'primevue/toggleswitch'
  import Button from 'primevue/button'

  const visible = ref(true)
  const activeTab = ref('0')

  const projectName = ref('')
  const category = ref('development')
  const responsible = ref('max')

  const categoryOptions = [
    { label: 'Entwicklung', value: 'development' },
    { label: 'Design', value: 'design' },
    { label: 'Marketing', value: 'marketing' },
  ]

  const responsibleOptions = [
    { label: 'Max Mustmann', value: 'max' },
    { label: 'Erika Musterfrau', value: 'erika' },
  ]

  function getResponsibleLabel(value: string) {
    return responsibleOptions.find((o) => o.value === value)?.label ?? ''
  }

  function getInitial(value: string) {
    return getResponsibleLabel(value).charAt(0)
  }

  const isPublic = ref(true)
  const notifications = ref(false)
</script>