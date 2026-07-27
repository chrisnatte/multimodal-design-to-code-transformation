<template>
  <div class="flex w-[512px] flex-col bg-white">
    <Tabs v-model:value="activeTab" class="w-full">
      <TabList class="flex border-b border-[#e2e8f0] bg-white">
        <Tab value="0" class="flex items-center gap-2 px-4 py-3.5 text-sm font-bold">
          <span class="pi pi-user-edit text-sm" aria-hidden="true"></span>
          <span>Profil &amp; Konto</span>
        </Tab>
        <Tab value="1" class="flex items-center gap-2 px-4 py-3.5 text-sm font-bold">
          <span class="pi pi-shield text-sm" aria-hidden="true"></span>
          <span>Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels class="bg-white px-4 pb-4 pt-3">
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <div class="min-h-[282px] w-[216px]">
              <Password
                v-model="password"
                input-id="password"
                toggle-mask
                feedback
                prompt="Passwort wählen"
                medium-label="Medium"
                class="w-[216px]"
                input-class="w-full"
              >
                <template #header>
                  <div class="flex flex-col gap-3.5">
                    <span class="text-sm font-semibold">Passwort wählen</span>
                  </div>
                </template>

                <template #footer>
                  <div class="flex flex-col gap-3">
                    <Divider />
                    <div class="flex flex-col gap-1 text-sm">
                      <span>Ein Kleinbuchstabe</span>
                      <span>Ein Großbuchstabe</span>
                      <span>Eine Zahl</span>
                      <span>Acht Zeichen</span>
                    </div>
                  </div>
                </template>
              </Password>
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorEnabled" input-id="two-factor" />
              <label for="two-factor" class="text-sm">Zwei-Faktor-Authentifizierung</label>
            </div>

            <div class="flex w-[216px] flex-col gap-3">
              <div class="flex flex-col gap-1.5">
                <label for="session-duration" class="text-sm">Sitzungsdauer (Minuten)</label>
                <InputText
                  id="session-duration"
                  v-model="sessionDuration"
                  class="w-full"
                />
              </div>
              <Slider v-model="sessionDuration" :min="0" :max="120" class="w-full" />
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

            <Button label="Speichern" disabled class="w-fit" />
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
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

const activeTab = ref('0')
const password = ref('********')
const twoFactorEnabled = ref(false)
const sessionDuration = ref(30)
const securityLevel = ref('Hoch')
</script>