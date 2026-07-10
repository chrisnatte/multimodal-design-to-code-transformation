<template>
  <Dialog
    v-model:visible="visible"
    modal
    :pt="{
      root: 'w-full max-w-lg',
      header: 'flex items-center gap-4',
    }"
  >
    <template #header>
      <div class="flex flex-1 items-center justify-between">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" />

          <div class="flex flex-col">
            <span class="text-surface-900 font-medium">Max Mustermann</span>
            <span class="text-surface-500 text-xs">Manager</span>
          </div>
        </div>

        <Tag value="Aktiv" severity="success" />
      </div>
    </template>

    <Tabs value="0">
      <TabList>
        <Tab value="0">Persönliche Daten</Tab>
        <Tab value="1">Einstellungen</Tab>
      </TabList>
      <TabPanels :pt="{ root: '!p-1' }">
        <TabPanel value="0">
          <div class="flex flex-col gap-4 pt-4">
            <div class="flex flex-col gap-2">
              <label for="personal-data-user-name" class="text-surface-700 text-sm">Name</label>
              <InputText id="personal-data-user-name" v-model="personalData.name" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="personal-data-user-email" class="text-surface-700 text-sm">E-Mail</label>
              <InputText id="personal-data-user-email" v-model="personalData.email" type="email" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="personal-data-user-role" class="text-surface-700 text-sm">Rolle</label>
              <Select
                id="personal-data-user-role"
                v-model="personalData.role"
                :options="roleOptions"
              />
            </div>

            <div class="flex items-center gap-2">
              <Checkbox id="personal-data-user-is-active" v-model="personalData.isActive" binary />
              <label for="personal-data-user-is-active">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div class="flex flex-col gap-4 pt-4">
            <div class="flex items-center gap-4">
              <ToggleSwitch
                v-model="settings.receiveNotifications"
                input-id="settings-receive-notifications"
              />
              <label for="user-is-active-switch">Benachrichtigungen erhalten</label>
            </div>

            <div class="flex flex-col gap-2">
              <label for="settings-font-size" class="text-surface-700 text-sm">Schriftgröße</label>

              <div class="flex items-center gap-4">
                <Slider
                  id="settings-font-size"
                  v-model="settings.fontSize"
                  :min="12"
                  :max="24"
                  :step="1"
                  class="flex-1"
                />
                <span class="text-surface-700 text-sm">{{ settings.fontSize }}px</span>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label for="settings-language" class="text-surface-700 text-sm">Sprache</label>
              <Select
                id="settings-language"
                v-model="settings.language"
                :options="languageOptions"
              />
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" @click="visible = false" />
      <Button label="Speichern" @click="onSave" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Dialog from 'primevue/dialog'
  import Avatar from 'primevue/avatar'
  import Tag from 'primevue/tag'
  import Button from 'primevue/button'
  import Tabs from 'primevue/tabs'
  import TabList from 'primevue/tablist'
  import Tab from 'primevue/tab'
  import TabPanels from 'primevue/tabpanels'
  import TabPanel from 'primevue/tabpanel'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import Checkbox from 'primevue/checkbox'
  import ToggleSwitch from 'primevue/toggleswitch'
  import Slider from 'primevue/slider'

  const visible = ref(true)

  const roleOptions = ['Manager', 'Mitarbeiter', 'Kunde']

  const personalData = ref({
    name: 'Max Mustmann',
    email: 'max@example.com',
    role: 'Manager',
    isActive: true,
  })

  const languageOptions = ['Deutsch', 'Englisch', 'Französisch', 'Spanisch']

  const settings = ref({
    receiveNotifications: true,
    fontSize: 16,
    language: 'Deutsch',
  })

  function onSave() {
    visible.value = false
  }
</script>
