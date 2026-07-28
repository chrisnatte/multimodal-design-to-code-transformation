<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-500">
    <Dialog v-model:visible="visible" modal header="Neues Projekt" :style="{ width: '32rem' }" :closable="true">
      <template #header>
        <span class="font-semibold text-lg">Neues Projekt</span>
      </template>

      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">1 - Allgemein</Tab>
          <Tab value="1">2 - Zeitplan</Tab>
          <Tab value="2">3 - Einstellungen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-col gap-4 py-2">
              <div class="flex flex-col gap-2">
                <label for="projektname" class="text-sm text-gray-700">Projektname</label>
                <InputText id="projektname" v-model="projektname" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="kategorie" class="text-sm text-gray-700">Kategorie</label>
                <Select id="kategorie" v-model="kategorie" :options="kategorieOptions" optionLabel="label" class="w-full" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="verantwortlicher" class="text-sm text-gray-700">Verantwortlicher</label>
                <Select id="verantwortlicher" v-model="verantwortlicher" :options="verantwortlicherOptions" optionLabel="label" class="w-full">
                  <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center gap-2">
                      <Avatar :label="slotProps.value.avatarLabel" shape="circle" size="normal" />
                      <span>{{ slotProps.value.label }}</span>
                    </div>
                    <span v-else>{{ slotProps.placeholder }}</span>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center gap-2">
                      <Avatar :label="slotProps.option.avatarLabel" shape="circle" size="normal" />
                      <span>{{ slotProps.option.label }}</span>
                    </div>
                  </template>
                </Select>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="1">
            <div class="py-4 text-sm text-gray-500">Zeitplan Inhalte</div>
          </TabPanel>

          <TabPanel value="2">
            <div class="flex flex-col gap-4 py-2">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="text-sm font-semibold">Öffentlich sichtbar</span>
                  <span class="text-xs text-gray-500">Für alle Teammitglieder</span>
                </div>
                <ToggleSwitch v-model="oeffentlichSichtbar" />
              </div>

              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="text-sm font-semibold">Benachrichtigungen</span>
                  <span class="text-xs text-gray-500">Bei Statusänderungen</span>
                </div>
                <ToggleSwitch v-model="benachrichtigungen" />
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="onCancel" />
        <Button label="Weiter" @click="onNext" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
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

const projektname = ref('')

const kategorieOptions = ref([
  { label: 'Entwicklung', value: 'entwicklung' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' }
])
const kategorie = ref(kategorieOptions.value[0])

const verantwortlicherOptions = ref([
  { label: 'Max Mustermann', value: 'max', avatarLabel: 'M' },
  { label: 'Anna Schmidt', value: 'anna', avatarLabel: 'A' }
])
const verantwortlicher = ref(verantwortlicherOptions.value[0])

const oeffentlichSichtbar = ref(true)
const benachrichtigungen = ref(false)

function onCancel() {
  visible.value = false
}

function onNext() {
  console.log('Weiter geklickt', {
    projektname: projektname.value,
    kategorie: kategorie.value,
    verantwortlicher: verantwortlicher.value,
    oeffentlichSichtbar: oeffentlichSichtbar.value,
    benachrichtigungen: benachrichtigungen.value
  })
}
</script>