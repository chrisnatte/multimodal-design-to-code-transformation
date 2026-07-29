<template>
  <div class="w-[560px] bg-white p-6">
    <Tabs v-model:value="activeTab" class="w-full">
      <TabList class="border-b border-slate-200">
        <Tab value="profile" class="gap-2 px-4 py-3 text-sm font-bold">
          <span class="pi pi-user-edit text-sm" aria-hidden="true"></span>
          <span>Profil &amp; Konto</span>
        </Tab>
        <Tab value="security" class="gap-2 px-4 py-3 text-sm font-bold">
          <span class="pi pi-shield text-sm" aria-hidden="true"></span>
          <span>Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels class="px-4 pb-4 pt-3">
        <TabPanel value="profile">
          <div></div>
        </TabPanel>

        <TabPanel value="security">
          <div class="flex flex-col gap-5 py-3">
            <div class="w-[216px]">
              <label for="password" class="mb-2 block text-sm">Passwort</label>
              <Password
                id="password"
                v-model="password"
                toggle-mask
                feedback
                autofocus
                prompt-label="Passwort wählen"
                medium-label="Medium"
                class="w-full"
                input-class="w-full"
              >
                <template #footer>
                  <Divider class="my-3" />
                  <div class="flex flex-col gap-1 text-sm">
                    <span>Ein Kleinbuchstabe</span>
                    <span>Ein Großbuchstabe</span>
                    <span>Eine Zahl</span>
                    <span>Acht Zeichen</span>
                  </div>
                </template>
              </Password>
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorEnabled" />
              <label for="two-factor" class="text-sm">Zwei-Faktor-Authentifizierung</label>
            </div>

            <div class="w-[216px]">
              <label for="session-duration" class="mb-2 block text-sm">
                Sitzungsdauer (Minuten)
              </label>
              <InputText
                id="session-duration"
                v-model="sessionDuration"
                class="h-[33px] w-full"
              />
              <Slider v-model="sessionDuration" :min="0" :max="120" class="mt-4 w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton
                    id="security-low"
                    v-model="securityLevel"
                    name="security-level"
                    value="Niedrig"
                  />
                  <label for="security-low" class="text-sm">Niedrig</label>
                </div>

                <div class="flex items-center gap-2">
                  <RadioButton
                    id="security-medium"
                    v-model="securityLevel"
                    name="security-level"
                    value="Mittel"
                  />
                  <label for="security-medium" class="text-sm">Mittel</label>
                </div>

                <div class="flex items-center gap-2">
                  <RadioButton
                    id="security-high"
                    v-model="securityLevel"
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

const activeTab = ref('security')
const password = ref('********')
const twoFactorEnabled = ref(false)
const sessionDuration = ref(30)
const securityLevel = ref('Hoch')
</script>