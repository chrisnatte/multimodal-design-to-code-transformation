<template>
  <div class="w-full h-full flex items-center justify-center bg-gray-500 p-8">
    <div class="w-[512px] rounded-xl border border-slate-200 bg-white shadow-sm">
      <!-- Header -->
      <div class="flex items-center justify-between p-[17.5px]">
        <span class="text-lg font-semibold text-slate-800">Neues Projekt</span>
        <Button icon="pi pi-times" text rounded severity="secondary" @click="onClose" />
      </div>

      <!-- Content -->
      <div class="px-[17.5px] pb-[17.5px]">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">1 - Allgemein</Tab>
            <Tab value="1">2 - Zeitplan</Tab>
            <Tab value="2">3 - Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-4 py-3">
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-slate-600" for="projectname">Projektname</label>
                  <InputText id="projectname" v-model="projectName" class="w-full" />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-slate-600" for="kategorie">Kategorie</label>
                  <Select
                    id="kategorie"
                    v-model="category"
                    :options="categoryOptions"
                    optionLabel="label"
                    optionValue="value"
                    class="w-full"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-slate-600" for="verantwortlicher">Verantwortlicher</label>
                  <Select
                    id="verantwortlicher"
                    v-model="responsible"
                    :options="responsibleOptions"
                    optionLabel="label"
                    optionValue="value"
                    class="w-full"
                  >
                    <template #value="slotProps">
                      <div v-if="slotProps.value" class="flex items-center gap-2">
                        <Avatar :label="getInitial(slotProps.value)" shape="circle" size="small" />
                        <span>{{ getLabel(slotProps.value) }}</span>
                      </div>
                      <span v-else>{{ slotProps.placeholder }}</span>
                    </template>
                    <template #option="slotProps">
                      <div class="flex items-center gap-2">
                        <Avatar :label="getInitial(slotProps.option.value)" shape="circle" size="small" />
                        <span>{{ slotProps.option.label }}</span>
                      </div>
                    </template>
                  </Select>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="py-3 text-sm text-slate-500">Zeitplan Inhalte</div>
            </TabPanel>
            <TabPanel value="2">
              <div class="flex flex-col gap-4 py-3">
                <div class="flex items-center justify-between px-1">
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold text-slate-800">Öffentlich sichtbar</span>
                    <span class="text-xs font-light text-slate-500">Für alle Teammitglieder</span>
                  </div>
                  <ToggleSwitch v-model="publicVisible" />
                </div>
                <div class="flex items-center justify-between px-1">
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold text-slate-800">Benachrichtigungen</span>
                    <span class="text-xs font-light text-slate-500">Bei Statusänderungen</span>
                  </div>
                  <ToggleSwitch v-model="notifications" />
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-end gap-[7px] p-[17.5px]">
        <Button label="Abbrechen" severity="secondary" text @click="onCancel" />
        <Button label="Weiter" severity="primary" @click="onNext" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Avatar from 'primevue/avatar'
import ToggleSwitch from 'primevue/toggleswitch'

const activeTab = ref('0')
const projectName = ref('')
const category = ref('development')
const responsible = ref('max')
const publicVisible = ref(true)
const notifications = ref(false)

const categoryOptions = ref([
  { label: 'Entwicklung', value: 'development' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' },
])

const responsibleOptions = ref([
  { label: 'Max Mustmann', value: 'max' },
  { label: 'Anna Beispiel', value: 'anna' },
])

const getLabel = (value) => {
  const found = responsibleOptions.value.find((o) => o.value === value)
  return found ? found.label : ''
}

const getInitial = (value) => {
  const label = getLabel(value)
  return label ? label.charAt(0) : ''
}

const onClose = () => {}
const onCancel = () => {}
const onNext = () => {}
</script>