<template>
  <div class="w-[560px] bg-white p-6">
    <Tabs value="profile" class="w-full">
      <TabList>
        <Tab value="profile" class="gap-[7px] px-4 py-3.5">
          <i class="pi pi-user-edit text-sm" aria-hidden="true" />
          <span class="text-sm font-bold whitespace-nowrap">Profil &amp; Konto</span>
        </Tab>
        <Tab value="security" class="gap-[7px] px-4 py-3.5">
          <i class="pi pi-shield text-sm" aria-hidden="true" />
          <span class="text-sm font-bold whitespace-nowrap">Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels class="px-4 pt-3 pb-4">
        <TabPanel value="profile" class="py-3">
          <div class="flex flex-col gap-5">
            <div class="flex w-[216px] flex-col gap-2">
              <label for="password" class="text-sm">Passwort</label>
              <Password
                v-model="password"
                input-id="password"
                toggle-mask
                feedback
                prompt-label="Passwort wählen"
                medium-label="Medium"
                weak-label="Schwach"
                strong-label="Stark"
                input-class="w-full"
              >
                <template #footer>
                  <Divider />
                  <ul class="m-0 flex list-none flex-col gap-1 p-0 text-sm">
                    <li>Ein Kleinbuchstabe</li>
                    <li>Ein Großbuchstabe</li>
                    <li>Eine Zahl</li>
                    <li>Acht Zeichen</li>
                  </ul>
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
                <InputText
                  v-model="sessionDurationText"
                  input-id="session-duration"
                  inputmode="numeric"
                />
              </div>
              <Slider v-model="sessionDuration" :min="0" :max="100" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton
                    v-model="securityLevel"
                    input-id="security-low"
                    name="security-level"
                    value="Niedrig"
                  />
                  <label for="security-low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton
                    v-model="securityLevel"
                    input-id="security-medium"
                    name="security-level"
                    value="Mittel"
                  />
                  <label for="security-medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton
                    v-model="securityLevel"
                    input-id="security-high"
                    name="security-level"
                    value="Hoch"
                  />
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
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import ToggleSwitch from 'primevue/toggleswitch'

const password = ref('Passwort')
const twoFactorAuthentication = ref(false)
const sessionDuration = ref(30)
const sessionDurationText = ref('30')
const securityLevel = ref('Hoch')
</script>