<template>
  <Dialog
    v-model:visible="visible"
    header="Neues Projekt"
    modal
    :style="{ width: '30rem' }"
    :pt="{
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
              <label for="projektname">Projektname</label>
              <InputText v-model="projektname" input-id="projektname" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="kategorie">Kategorie</label>
              <Select
                v-model="kategorie"
                :options="kategorieOptions"
                option-label="label"
                option-value="value"
                input-id="kategorie"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="verantwortlicher">Verantwortlicher</label>
              <Select
                v-model="verantwortlicher"
                :options="verantwortlicherOptions"
                option-label="label"
                option-value="value"
                input-id="verantwortlicher"
              >
                <template #value="{ value }">
                  <div class="flex items-center gap-2">
                    <Avatar :label="value?.charAt(0)" shape="circle" size="normal" />
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
          </div>
        </TabPanel>
        <TabPanel value="1">
          <p class="m-0">Zeitplan</p>
        </TabPanel>
        <TabPanel value="2">
          <p class="m-0">Einstellungen</p>
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
  import Button from 'primevue/button'

  const visible = ref(true)
  const projektname = ref('')
  const kategorie = ref('Entwicklung')
  const verantwortlicher = ref('Max Mustmann')

  const kategorieOptions = [
    { label: 'Entwicklung', value: 'Entwicklung' },
    { label: 'Design', value: 'Design' },
    { label: 'Marketing', value: 'Marketing' },
  ]

  const verantwortlicherOptions = [
    { label: 'Max Mustmann', value: 'Max Mustmann' },
    { label: 'Anna Beispiel', value: 'Anna Beispiel' },
  ]
</script>