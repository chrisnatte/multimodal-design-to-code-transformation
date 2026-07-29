<template>
  <Dialog
    v-model:visible="isNewProjectDialogVisible"
    header="Neues Projekt"
    modal
    :pt="{
      root: 'w-full max-w-lg',
      content: '!p-0',
    }"
  >
    <Tabs value="0">
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
              <label for="assignee">Verantwortlicher</label>
              <Select
                v-model="assignee"
                input-id="assignee"
                :options="assigneeOptions"
                option-label="label"
                option-value="value"
              >
                <template #value="{ value }">
                  <div class="flex items-center gap-2">
                    <Avatar :label="value?.charAt(0)" size="normal" shape="circle" />
                    <span>{{ value }}</span>
                  </div>
                </template>
                <template #option="{ option }">
                  <div class="flex items-center gap-2">
                    <Avatar :label="option.label.charAt(0)" size="normal" shape="circle" />
                    <span>{{ option.label }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <p class="text-sm text-gray-500">Zeitplan-Inhalte hier.</p>
        </TabPanel>
        <TabPanel value="2">
          <p class="text-sm text-gray-500">Einstellungen-Inhalte hier.</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <template #footer>
      <Button label="Abbrechen" severity="secondary" />
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
  import Button from 'primevue/button'

  const isNewProjectDialogVisible = ref(true)
  const projectName = ref('')
  const category = ref('Entwicklung')
  const assignee = ref('Max Mustmann')

  const categoryOptions = [
    { label: 'Entwicklung', value: 'Entwicklung' },
    { label: 'Design', value: 'Design' },
    { label: 'Marketing', value: 'Marketing' },
  ]

  const assigneeOptions = [
    { label: 'Max Mustmann', value: 'Max Mustmann' },
    { label: 'Anna Schmidt', value: 'Anna Schmidt' },
  ]
</script>