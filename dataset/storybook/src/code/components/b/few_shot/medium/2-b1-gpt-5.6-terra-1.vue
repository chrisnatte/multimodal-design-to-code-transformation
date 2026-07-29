<template>
  <div class="w-[560px] bg-white p-6">
    <Tabs v-model:value="activeTab" class="w-[512px]">
      <TabList>
        <Tab value="profile">
          <div class="flex items-center gap-2">
            <i class="pi pi-user-edit text-sm" aria-hidden="true"></i>
            <span>Profil &amp; Konto</span>
          </div>
        </Tab>
        <Tab value="security">
          <div class="flex items-center gap-2">
            <i class="pi pi-shield text-sm" aria-hidden="true"></i>
            <span>Sicherheit &amp; Präferenzen</span>
          </div>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="profile">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex w-[216px] flex-col gap-2">
              <label for="password">Passwort</label>
              <Password
                v-model="password"
                input-id="password"
                toggle-mask
                feedback
                input-class="w-full"
              >
                <template #header>
                  <span class="font-semibold">Passwort wählen</span>
                </template>
                <template #content>
                  <Divider />
                  <ul class="m-0 flex list-none flex-col gap-1 p-0">
                    <li>Ein Kleinbuchstabe</li>
                    <li>Ein Großbuchstabe</li>
                    <li>Eine Zahl</li>
                    <li>Acht Zeichen</li>
                  </ul>
                </template>
              </Password>
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorAuthentication" input-id="two-factor" />
              <label for="two-factor">Zwei-Faktor-Authentifizierung</label>
            </div>

            <div class="flex w-[216px] flex-col gap-3">
              <div class="flex flex-col gap-2">
                <label for="session-duration">Sitzungsdauer (Minuten)</label>
                <InputNumber
                  v-model="sessionDuration"
                  input-id="session-duration"
                  :min="0"
                  :max="120"
                  class="w-full"
                  input-class="w-full"
                />
              </div>
              <Slider v-model="sessionDuration" :min="0" :max="120" class="w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <span>Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton
                    v-model="securityLevel"
                    input-id="security-low"
                    name="security-level"
                    value="Niedrig"
                  />
                  <label for="security-low">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton
                    v-model="securityLevel"
                    input-id="security-medium"
                    name="security-level"
                    value="Mittel"
                  />
                  <label for="security-medium">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton
                    v-model="securityLevel"
                    input-id="security-high"
                    name="security-level"
                    value="Hoch"
                  />
                  <label for="security-high">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" severity="primary" disabled class="w-fit" />
          </div>
        </TabPanel>

        <TabPanel value="security">
          <div></div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import InputNumber from 'primevue/inputnumber'
import Password from 'primevue/password'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import ToggleSwitch from 'primevue/toggleswitch'

const activeTab = ref('profile')
const password = ref('********')
const twoFactorAuthentication = ref(false)
const sessionDuration = ref(30)
const securityLevel = ref('Hoch')
</script>