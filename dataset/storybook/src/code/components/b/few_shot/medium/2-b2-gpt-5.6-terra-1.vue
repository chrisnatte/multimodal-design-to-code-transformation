<template>
  <div class="flex w-[560px] flex-col bg-white p-6">
    <Tabs v-model:value="activeTab" class="w-full">
      <TabList>
        <Tab value="profile" class="gap-2 text-sm font-bold">
          <i class="pi pi-user-edit text-sm" />
          <span>Profil &amp; Konto</span>
        </Tab>
        <Tab value="security" class="gap-2 text-sm font-bold">
          <i class="pi pi-shield text-sm" />
          <span>Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="profile" class="px-4 py-3">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex w-[216px] flex-col gap-2">
              <label for="password-input" class="text-sm">Passwort</label>
              <Password
                v-model="password"
                input-id="password-input"
                toggle-mask
                feedback
                prompt-label="Passwort wählen"
                medium-label="Medium"
                input-class="w-full"
              >
                <template #header>
                  <span class="text-sm font-semibold">Passwort wählen</span>
                </template>
                <template #footer>
                  <div class="mt-3 flex flex-col gap-1 text-sm">
                    <span>Ein Kleinbuchstabe</span>
                    <span>Ein Großbuchstabe</span>
                    <span>Eine Zahl</span>
                    <span>Acht Zeichen</span>
                  </div>
                </template>
              </Password>
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorAuthentication" input-id="two-factor-authentication" />
              <label for="two-factor-authentication" class="text-sm">
                Zwei-Faktor-Authentifizierung
              </label>
            </div>

            <div class="flex w-[216px] flex-col gap-3">
              <div class="flex flex-col gap-2">
                <label for="session-duration" class="text-sm">Sitzungsdauer (Minuten)</label>
                <InputNumber
                  v-model="sessionDuration"
                  input-id="session-duration"
                  :use-grouping="false"
                  class="w-full"
                  input-class="w-full"
                />
              </div>
              <Slider v-model="sessionDuration" :min="0" :max="120" class="w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="security-low" value="Niedrig" />
                  <label for="security-low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="security-medium" value="Mittel" />
                  <label for="security-medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="security-high" value="Hoch" />
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
import ToggleSwitch from 'primevue/toggleswitch'
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const activeTab = ref('profile')
const password = ref('password')
const twoFactorAuthentication = ref(false)
const sessionDuration = ref(30)
const securityLevel = ref('Hoch')
</script>