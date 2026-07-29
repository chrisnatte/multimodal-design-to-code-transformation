<template>
  <Dialog
    v-model:visible="visible"
    header="Neues Projekt"
    modal
    :pt="{
      root: 'w-full max-w-[512px]',
      content: '!pb-0',
    }"
  >
    <Tabs value="0">
      <TabList>
        <Tab value="0">1 - Allgemein</Tab>
        <Tab value="1">2 - Zeitplan</Tab>
        <Tab value="2">3 - Einstellungen</Tab>
      </TabList>
      <TabPanels class="!px-0 !pb-0 !pt-6">
        <TabPanel value="0">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="projectName" class="text-sm text-surface-700">Projektname</label>
              <InputText id="projectName" v-model="projectName" />
            </div>
            
            <div class="flex flex-col gap-2">
              <label for="category" class="text-sm text-surface-700">Kategorie</label>
              <Select id="category" v-model="selectedCategory" :options="categories" class="w-full" />
            </div>
            
            <div class="flex flex-col gap-2">
              <label for="user" class="text-sm text-surface-700">Verantwortlicher</label>
              <Select id="user" v-model="selectedUser" :options="users" optionLabel="name" class="w-full">
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex items-center gap-2">
                    <Avatar :label="slotProps.value.initial" shape="circle" class="!w-6 !h-6 text-xs bg-slate-200 text-slate-700" />
                    <span>{{ slotProps.value.name }}</span>
                  </div>
                </template>
                <template #option="slotProps">
                  <div class="flex items-center gap-2">
                    <Avatar :label="slotProps.option.initial" shape="circle" class="!w-6 !h-6 text-xs bg-slate-200 text-slate-700" />
                    <span>{{ slotProps.option.name }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1"></TabPanel>
        <TabPanel value="2"></TabPanel>
      </TabPanels>
    </Tabs>
    
    <template #footer>
      <div class="flex justify-end gap-2 pt-4">
        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
        <Button label="Weiter" severity="primary" @click="visible = false" />
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
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'

const visible = ref(true)
const projectName = ref('')
const selectedCategory = ref('Entwicklung')
const categories = ref(['Entwicklung', 'Design', 'Marketing', 'Vertrieb'])

const selectedUser = ref({ name: 'Max Mustmann', initial: 'M' })
const users = ref([
  { name: 'Max Mustmann', initial: 'M' },
  { name: 'Erika Musterfrau', initial: 'E' },
  { name: 'John Doe', initial: 'J' }
])
</script>