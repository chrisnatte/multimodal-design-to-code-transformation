<template>
  <Dialog
    v-model:visible="visible"
    header="Neues Projekt"
    modal
    :pt="{
      root: 'w-full max-w-lg',
      content: '!pb-0',
    }"
  >
    <Tabs value="0">
      <TabList>
        <Tab value="0">1 - Allgemein</Tab>
        <Tab value="1">2 - Zeitplan</Tab>
        <Tab value="2">3 - Einstellungen</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0" class="!p-0 !pt-6">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="projectName" class="text-sm text-surface-700">Projektname</label>
              <InputText id="projectName" v-model="projectName" />
            </div>
            
            <div class="flex flex-col gap-2">
              <label for="category" class="text-sm text-surface-700">Kategorie</label>
              <Select
                id="category"
                v-model="category"
                :options="categories"
                optionLabel="label"
                class="w-full"
              />
            </div>
            
            <div class="flex flex-col gap-2">
              <label for="responsible" class="text-sm text-surface-700">Verantwortlicher</label>
              <Select
                id="responsible"
                v-model="responsible"
                :options="responsibles"
                optionLabel="name"
                class="w-full"
              >
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex items-center gap-2">
                    <Avatar
                      :label="slotProps.value.avatar"
                      shape="circle"
                      class="!bg-slate-100 !text-slate-600 !w-6 !h-6 text-xs"
                    />
                    <span>{{ slotProps.value.name }}</span>
                  </div>
                </template>
                <template #option="slotProps">
                  <div class="flex items-center gap-2">
                    <Avatar
                      :label="slotProps.option.avatar"
                      shape="circle"
                      class="!bg-slate-100 !text-slate-600 !w-6 !h-6 text-xs"
                    />
                    <span>{{ slotProps.option.name }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </div>
        </TabPanel>
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

const category = ref({ label: 'Entwicklung', value: 'entwicklung' })
const categories = ref([
  { label: 'Entwicklung', value: 'entwicklung' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' }
])

const responsible = ref({ name: 'Max Mustmann', avatar: 'M', value: 'max' })
const responsibles = ref([
  { name: 'Max Mustmann', avatar: 'M', value: 'max' },
  { name: 'Erika Mustermann', avatar: 'E', value: 'erika' }
])
</script>