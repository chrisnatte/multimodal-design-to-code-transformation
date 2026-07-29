<template>
  <Dialog
    v-model:visible="visible"
    header="Neues Projekt"
    modal
    :style="{ width: '32rem' }"
    :pt="{
      content: 'flex flex-col !p-0',
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
              <label for="projektname" class="text-sm font-semibold">Projektname</label>
              <InputText id="projektname" v-model="projektname" class="w-full" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="kategorie" class="text-sm font-semibold">Kategorie</label>
              <Select
                id="kategorie"
                v-model="kategorie"
                :options="kategorieOptions"
                option-label="label"
                option-value="value"
                class="w-full"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="verantwortlicher" class="text-sm font-semibold">Verantwortlicher</label>
              <Select
                id="verantwortlicher"
                v-model="verantwortlicher"
                :options="verantwortlicherOptions"
                option-label="label"
                option-value="value"
                class="w-full"
              >
                <template #value="{ value }">
                  <div class="flex items-center gap-2">
                    <Avatar :label="value?.charAt(0)" size="normal" shape="circle" />
                    <span>{{ value }}</span>
                  </div>
                </template>
                <template #option="{ option }">
                  <div class="flex items-center gap-2">
                    <Avatar :label="option.value?.charAt(0)" size="normal" shape="circle" />
                    <span>{{ option.label }}</span>
                  </div>
                </template>
              </Select>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-4">
            <p class="text-sm text-surface-500">Zeitplan-Einstellungen folgen.</p>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <div class="flex flex-col">
                <span class="text-sm font-semibold">Öffentlich sichtbar</span>
                <span class="text-xs text-surface-500">Für alle Teammitglieder</span>
              </div>
              <ToggleSwitch v-model="oeffentlichSichtbar" />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex flex-col">
                <span class="text-sm font-semibold">Benachrichtigungen</span>
                <span class="text-xs text-surface-500">Bei Statusänderungen</span>
              </div>
              <ToggleSwitch v-model="benachrichtigungen" />
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

  const projektname = ref('')
  const kategorie = ref('entwicklung')
  const verantwortlicher = ref('Max Mustmann')

  const oeffentlichSichtbar = ref(true)
  const benachrichtigungen = ref(false)

  const kategorieOptions = [
    { label: 'Entwicklung', value: 'entwicklung' },
    { label: 'Design', value: 'design' },
    { label: 'Marketing', value: 'marketing' },
  ]

  const verantwortlicherOptions = [
    { label: 'Max Mustmann', value: 'Max Mustmann' },
    { label: 'Erika Musterfrau', value: 'Erika Musterfrau' },
  ]
</script>