<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <div class="bg-white rounded-xl border border-gray-200 w-[512px]">
      <!-- Header -->
      <div class="flex items-center justify-between px-[17.5px] py-[17.5px]">
        <span class="text-lg font-semibold text-gray-800">Neues Projekt</span>
        <Button
          icon="pi pi-times"
          text
          severity="secondary"
          rounded
          @click="onClose"
        />
      </div>

      <!-- Content -->
      <div class="px-[17.5px]">
        <!-- Tabs -->
        <Tabs :value="activeTab">
          <TabList>
            <Tab value="0">1 - Allgemein</Tab>
            <Tab value="1">2 - Zeitplan</Tab>
            <Tab value="2">3 - Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="flex flex-col gap-4 py-3">
                <div class="flex flex-col gap-2">
                  <label for="projektname" class="text-sm text-gray-700">Projektname</label>
                  <InputText
                    id="projektname"
                    v-model="projektname"
                    class="w-full"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="kategorie" class="text-sm text-gray-700">Kategorie</label>
                  <Select
                    id="kategorie"
                    v-model="kategorie"
                    :options="kategorieOptions"
                    optionLabel="label"
                    optionValue="value"
                    class="w-full"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="verantwortlicher" class="text-sm text-gray-700">Verantwortlicher</label>
                  <Select
                    id="verantwortlicher"
                    v-model="verantwortlicher"
                    :options="verantwortlicherOptions"
                    optionLabel="label"
                    optionValue="value"
                    class="w-full"
                  >
                    <template #value="slotProps">
                      <div class="flex items-center gap-2" v-if="slotProps.value">
                        <Avatar :label="getInitial(slotProps.value)" shape="circle" size="normal" />
                        <span>{{ getLabel(slotProps.value) }}</span>
                      </div>
                      <span v-else>{{ slotProps.placeholder }}</span>
                    </template>
                    <template #option="slotProps">
                      <div class="flex items-center gap-2">
                        <Avatar :label="slotProps.option.label.charAt(0)" shape="circle" size="normal" />
                        <span>{{ slotProps.option.label }}</span>
                      </div>
                    </template>
                  </Select>
                </div>
              </div>
            </TabPanel>

            <TabPanel value="1">
              <div class="py-3 text-sm text-gray-500">
                Zeitplan Inhalte hier.
              </div>
            </TabPanel>

            <TabPanel value="2">
              <div class="flex flex-col gap-4 py-3">
                <div class="flex items-center justify-between">
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold text-gray-800">Öffentlich sichtbar</span>
                    <span class="text-xs text-gray-400">Für alle Teammitglieder</span>
                  </div>
                  <ToggleSwitch v-model="oeffentlichSichtbar" />
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold text-gray-800">Benachrichtigungen</span>
                    <span class="text-xs text-gray-400">Bei Statusänderungen</span>
                  </div>
                  <ToggleSwitch v-model="benachrichtigungen" />
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-2 px-[17.5px] py-[17.5px]">
        <Button label="Abbrechen" severity="secondary" @click="onCancel" />
        <Button label="Weiter" severity="primary" @click="onNext" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Avatar from 'primevue/avatar'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import ToggleSwitch from 'primevue/toggleswitch'

const activeTab = ref('0')

const projektname = ref('')
const kategorie = ref('entwicklung')
const kategorieOptions = ref([
  { label: 'Entwicklung', value: 'entwicklung' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' }
])

const verantwortlicher = ref('max')
const verantwortlicherOptions = ref([
  { label: 'Max Mustmann', value: 'max' },
  { label: 'Anna Schmidt', value: 'anna' }
])

const oeffentlichSichtbar = ref(true)
const benachrichtigungen = ref(false)

function getLabel(value) {
  const found = verantwortlicherOptions.value.find(o => o.value === value)
  return found ? found.label : ''
}

function getInitial(value) {
  const label = getLabel(value)
  return label ? label.charAt(0) : ''
}

function onClose() {
  console.log('Dialog geschlossen')
}

function onCancel() {
  console.log('Abbrechen geklickt')
}

function onNext() {
  console.log('Weiter geklickt')
}
</script>