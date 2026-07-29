<template>
  <Dialog
    header="Neues Projekt"
    visible
    modal
    :pt="{
      root: 'w-full max-w-lg',
      content: 'flex flex-col !gap-4',
    }"
  >
    <Tabs :value="0">
      <TabList>
        <Tab :value="0">1 - Allgemein</Tab>
        <Tab :value="1">2 - Zeitplan</Tab>
        <Tab :value="2">3 - Einstellungen</Tab>
      </TabList>

      <TabPanels>
        <TabPanel :value="0" class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="project-name-input" class="text-sm">Projektname</label>
            <InputText v-model="projectName" type="text" input-id="project-name-input" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="category-input" class="text-sm">Kategorie</label>
            <Select v-model="category" :options="categories" input-id="category-input" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="responsible-person-input" class="text-sm">Verantwortlicher</label>
            <Select
              v-model="responsiblePerson"
              :options="persons"
              input-id="responsible-person-input"
            >
              <template #value="{ value }">
                <div class="flex items-center gap-1">
                  <Avatar :label="getAbbreviation(value)" size="normal" shape="circle" />
                  <span>{{ value }}</span>
                </div>
              </template>
            </Select>
          </div>
        </TabPanel>

        <TabPanel :value="1" class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="duration-input" class="text-sm">Laufzeit</label>
            <Select v-model="duration" :options="durations" input-id="duration-input" />
          </div>
        </TabPanel>

        <TabPanel :value="2" class="flex flex-col gap-4">
          <div class="flex items-center justify-between gap-4">
            <div class="flex flex-col">
              <label for="public-visible" class="font-semibold">Öffentlich sichtbar</label>
              <span class="text-xs font-light">Für alle Teammitglieder</span>
            </div>
            <ToggleSwitch v-model="publicVisible" input-id="public-visible" />
          </div>

          <div class="flex items-center justify-between gap-4">
            <div class="flex flex-col">
              <label for="notifications" class="font-semibold">Benachrichtigungen</label>
              <span class="text-xs font-light">Bei Statusänderungen</span>
            </div>
            <ToggleSwitch v-model="notifications" input-id="notifications" />
          </div>
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
  import Tab from 'primevue/tab'
  import Tabs from 'primevue/tabs'
  import Dialog from 'primevue/dialog'
  import Button from 'primevue/button'
  import Select from 'primevue/select'
  import TabList from 'primevue/tablist'
  import TabPanel from 'primevue/tabpanel'
  import TabPanels from 'primevue/tabpanels'
  import InputText from 'primevue/inputtext'
  import Avatar from 'primevue/avatar'
  import ToggleSwitch from 'primevue/toggleswitch'

  const projectName = ref('')
  const category = ref('Entwicklung')
  const responsiblePerson = ref('Max Mustermann')
  const duration = ref()
  const publicVisible = ref(true)
  const notifications = ref(false)

  const categories = ['Entwicklung', 'Produktion']

  const persons = ['Max Mustermann', 'Anna Schmidt', 'Lisa Weber', 'Paul Müller']

  const durations = ['Eine Woche', 'Ein Monat', 'Drei Monate', 'Sechs Monate', 'Ein Jahr']

  function getAbbreviation(name: string) {
    return name.charAt(0).toUpperCase()
  }
</script>
