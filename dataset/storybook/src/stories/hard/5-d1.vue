<template>
  <div class="min-h-screen w-full bg-black/40 flex items-center justify-center p-6">
    <div class="w-full max-w-[510px] bg-white rounded-xl shadow-2xl flex flex-col">
      <div class="flex items-center justify-between px-5 pt-5 pb-4">
        <h2 class="text-3xl font-semibold text-slate-700 text-[30px] leading-none">Neues Projekt</h2>
        <Button icon="pi pi-times" text rounded severity="secondary" class="!w-8 !h-8 !text-slate-500" />
      </div>

      <div class="px-5 pb-4 flex flex-col">
        <Tabs value="1">
          <TabList>
            <Tab value="1">1 - Allgemein</Tab>
            <Tab value="2">2 - Zeitplan</Tab>
            <Tab value="3">3 - Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="1">
              <div class="flex flex-col gap-4 pt-2">
                <div class="flex flex-col gap-2">
                  <label class="text-[28px] text-slate-700">Projektname</label>
                  <InputText v-model="form.projectName" class="w-full" />
                </div>

                <div class="flex flex-col gap-2">
                  <label class="text-[28px] text-slate-700">Kategorie</label>
                  <Select
                    v-model="form.category"
                    :options="categories"
                    optionLabel="label"
                    optionValue="value"
                    class="w-full"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label class="text-[28px] text-slate-700">Verantwortlicher</label>
                  <Select
                    v-model="form.owner"
                    :options="owners"
                    optionLabel="name"
                    optionValue="id"
                    class="w-full"
                  >
                    <template #value="slotProps">
                      <div v-if="slotProps.value" class="flex items-center gap-2">
                        <Avatar label="M" shape="circle" class="!w-6 !h-6 !text-xs bg-slate-200 text-slate-700" />
                        <span class="text-slate-700">Max Mustmann</span>
                      </div>
                    </template>
                    <template #option="slotProps">
                      <div class="flex items-center gap-2">
                        <Avatar label="M" shape="circle" class="!w-6 !h-6 !text-xs bg-slate-200 text-slate-700" />
                        <span>{{ slotProps.option.name }}</span>
                      </div>
                    </template>
                  </Select>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="2" />
            <TabPanel value="3" />
          </TabPanels>
        </Tabs>
      </div>

      <div class="flex justify-end gap-2 px-5 pb-5">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Weiter" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Avatar from 'primevue/avatar'

const form = reactive({
  projectName: '',
  category: 'entwicklung',
  owner: 1
})

const categories = [
  { label: 'Entwicklung', value: 'entwicklung' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Vertrieb', value: 'vertrieb' }
]

const owners = [
  { id: 1, name: 'Max Mustmann' }
]
</script>