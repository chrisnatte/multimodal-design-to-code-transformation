<template>
  <div class="w-[560px] bg-white p-6">
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
          <p class="m-0 text-sm text-gray-600">Profil & Konto Inhalte</p>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <Password
              v-model="password"
              toggle-mask
              input-id="password-input"
              input-class="w-full"
              class="w-[216px]"
            >
              <template #header>
                <h6 class="m-0 font-semibold">Passwort wählen</h6>
              </template>
              <template #footer>
                <Divider />
                <ul class="m-0 flex flex-col gap-1 pl-2 text-sm">
                  <li>Ein Kleinbuchstabe</li>
                  <li>Ein Großbuchstabe</li>
                  <li>Eine Zahl</li>
                  <li>Acht Zeichen</li>
                </ul>
              </template>
            </Password>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorAuth" input-id="two-factor-auth" />
              <label for="two-factor-auth" class="text-sm">Zwei-Faktor-Authentifizierung</label>
            </div>

            <div class="flex flex-col gap-2 w-[216px]">
              <label for="session-duration" class="text-sm">Sitzungsdauer (Minuten)</label>
              <InputText v-model="sessionDuration" input-id="session-duration" />
              <Slider v-model="sessionDurationSlider" />
            </div>

            <div class="flex flex-col gap-3">
              <label class="text-sm">Sicherheitsstufe</label>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="security-low" value="low" />
                  <label for="security-low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="security-medium" value="medium" />
                  <label for="security-medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="security-high" value="high" />
                  <label for="security-high" class="text-sm">Hoch</label>
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
  const sessionDuration = ref('30')
  const sessionDurationSlider = ref(30)
  const securityLevel = ref('high')
</script>