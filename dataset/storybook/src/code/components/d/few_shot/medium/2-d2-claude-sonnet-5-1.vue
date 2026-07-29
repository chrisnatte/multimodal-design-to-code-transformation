<template>
  <div class="w-xl p-6">
    <Tabs value="0">
      <TabList>
        <Tab value="0" class="flex items-center gap-2">
          <i class="pi pi-user-edit" />
          <span>Profil & Konto</span>
        </Tab>
        <Tab value="1" class="flex items-center gap-2">
          <i class="pi pi-shield" />
          <span>Sicherheit & Präferenzen</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <div class="relative w-fit">
              <Avatar label="P" size="xlarge" class="!bg-slate-100 !text-slate-600" />
              <Badge value="Edit" severity="success" class="absolute -top-2 -right-2" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="username-input">Benutzername</label>
              <InputText v-model="username" input-id="username-input" placeholder="Benutzername eingeben" />
            </div>
            <Textarea v-model="bio" placeholder="Informationen über dich...." rows="4" />
            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="isPublic" input-id="public-switch" />
              <label for="public-switch">Öffentlich sichtbar</label>
            </div>
            <Button label="Speichern" severity="primary" class="w-fit" />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex flex-col gap-2">
              <label for="password-input">Passwort</label>
              <Password v-model="password" input-id="password-input" toggle-mask input-class="w-full">
                <template #header>
                  <h6 class="font-semibold">Passwort wählen</h6>
                </template>
                <template #footer>
                  <Divider />
                  <ul class="m-0 flex flex-col gap-1 pl-4 text-sm">
                    <li>Ein Kleinbuchstabe</li>
                    <li>Ein Großbuchstabe</li>
                    <li>Eine Zahl</li>
                    <li>Acht Zeichen</li>
                  </ul>
                </template>
              </Password>
            </div>
            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactor" input-id="two-factor-switch" />
              <label for="two-factor-switch">Zwei-Faktor-Authentifizierung</label>
            </div>
            <div class="flex flex-col gap-3">
              <label for="session-slider">Sitzungsdauer (Minuten)</label>
              <InputText v-model="sessionDuration" input-id="session-slider" />
              <Slider v-model="sessionDurationValue" />
            </div>
            <div class="flex flex-col gap-3">
              <label>Sicherheitsstufe</label>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="level-low" name="securityLevel" value="Niedrig" />
                  <label for="level-low">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="level-medium" name="securityLevel" value="Mittel" />
                  <label for="level-medium">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="level-high" name="securityLevel" value="Hoch" />
                  <label for="level-high">Hoch</label>
                </div>
              </div>
            </div>
            <Button label="Speichern" severity="primary" disabled class="w-fit" />
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Tabs from 'primevue/tabs'
  import TabList from 'primevue/tablist'
  import Tab from 'primevue/tab'
  import TabPanels from 'primevue/tabpanels'
  import TabPanel from 'primevue/tabpanel'
  import Avatar from 'primevue/avatar'
  import Badge from 'primevue/badge'
  import InputText from 'primevue/inputtext'
  import Textarea from 'primevue/textarea'
  import ToggleSwitch from 'primevue/toggleswitch'
  import Button from 'primevue/button'
  import Password from 'primevue/password'
  import Divider from 'primevue/divider'
  import Slider from 'primevue/slider'
  import RadioButton from 'primevue/radiobutton'

  const username = ref('')
  const bio = ref('')
  const isPublic = ref(false)

  const password = ref('')
  const twoFactor = ref(false)
  const sessionDuration = ref('30')
  const sessionDurationValue = ref(30)
  const securityLevel = ref('Hoch')
</script>