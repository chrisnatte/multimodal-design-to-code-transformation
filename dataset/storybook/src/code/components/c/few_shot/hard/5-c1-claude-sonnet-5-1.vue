<template>
  <Dialog
    v-model:visible="isVisible"
    header="Neues Projekt"
    modal
    :pt="{
      root: 'w-full max-w-lg',
      content: 'flex flex-col !gap-4',
    }"
  >
    <Tabs value="0">
      <TabList>
        <Tab value="0">1 - Allgemein</Tab>
        <Tab value="1">2 - Zeitplan</Tab>
        <Tab value="2">3 - Einstellungen</Tab>
      </TabList>
    </Tabs>
    <div class="flex flex-col gap-2">
      <label for="projectname-input" class="text-sm">Projektname</label>
      <InputText v-model="projectName" type="text" input-id="projectname-input" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="category-select" class="text-sm">Kategorie</label>
      <Select
        v-model="category"
        :options="categoryOptions"
        option-label="label"
        option-value="value"
        input-id="category-select"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="owner-select" class="text-sm">Verantwortlicher</label>
      <Select
        v-model="owner"
        :options="ownerOptions"
        option-label="label"
        option-value="value"
        input-id="owner-select"
      >
        <template #value="{ value }">
          <div class="flex items-center gap-2">
            <Avatar :label="value.charAt(0)" shape="circle" size="normal" />
            <span>{{ value }}</span>
          </div>
        </template>
        <template #option="{ option }">
          <div class="flex items-center gap-2">
            <Avatar :label="option.label.charAt(0)" shape="circle" size="normal" />
            <span>{{ option.label }}</span>
          </div>
        </template>
      </Select>
    </div>
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
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import Avatar from 'primevue/avatar'
  import Button from 'primevue/button'

  const isVisible = ref(true)
  const projectName = ref('')
  const category = ref('Entwicklung')
  const owner = ref('Max Mustmann')

  const categoryOptions = [
    { label: 'Entwicklung', value: 'Entwicklung' },
    { label: 'Design', value: 'Design' },
    { label: 'Marketing', value: 'Marketing' },
  ]

  const ownerOptions = [
    { label: 'Max Mustmann', value: 'Max Mustmann' },
    { label: 'Anna Schmidt', value: 'Anna Schmidt' },
  ]
</script>