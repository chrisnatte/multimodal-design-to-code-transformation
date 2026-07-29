<template>
  <div class="w-lg p-6">
    <Tabs value="0">
      <TabList>
        <Tab value="0">
          <i class="pi pi-user-edit mr-2" />
          Profil & Konto
        </Tab>
        <Tab value="1">
          <i class="pi pi-shield mr-2" />
          Sicherheit & Präferenzen
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <p class="text-sm text-gray-500">Profil & Konto Inhalte</p>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <Password
              v-model="password"
              input-id="password-input"
              toggle-mask
              input-class="w-full"
              class="w-full"
            >
              <template #header>
                <h6 class="mb-2">Passwort wählen</h6>
              </template>
              <template #footer>
                <Divider />
                <ul class="pl-2 my-0 flex flex-col gap-1">
                  <li>Ein Kleinbuchstabe</li>
                  <li>Ein Großbuchstabe</li>
                  <li>Eine Zahl</li>
                  <li>Acht Zeichen</li>
                </ul>
              </template>
            </Password>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorAuth" input-id="two-factor-auth" />
              <label for="two-factor-auth">Zwei-Faktor-Authentifizierung</label>
            </div>

            <div class="flex flex-col gap-2">
              <label for="session-duration">Sitzungsdauer (Minuten)</label>
              <InputText v-model="sessionDuration" input-id="session-duration" class="w-full" />
              <Slider v-model="sessionDuration" class="w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <label>Sicherheitsstufe</label>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="security-low" value="low" />
                  <label for="security-low">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="security-medium" value="medium" />
                  <label for="security-medium">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="security-high" value="high" />
                  <label for="security-high">Hoch</label>
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
  import Password from 'primevue/password'
  import Divider from 'primevue/divider'
  import ToggleSwitch from 'primevue/toggleswitch'
  import InputText from 'primevue/inputtext'
  import Slider from 'primevue/slider'
  import RadioButton from 'primevue/radiobutton'
  import Button from 'primevue/button'

  const password = ref('')
  const twoFactorAuth = ref(false)
  const sessionDuration = ref(30)
  const securityLevel = ref('high')
</script>