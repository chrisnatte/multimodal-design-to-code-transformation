<template>
  <div class="w-[512px] bg-white font-[Inter]">
    <Tabs v-model:value="activeTab" class="w-full">
      <TabList class="h-[46px] border-b border-[#e2e8f0] bg-white">
        <Tab value="profile" class="flex items-center gap-[7px] px-[15.75px] py-[14px] text-sm font-bold">
          <i class="pi pi-user-edit text-sm" aria-hidden="true"></i>
          <span>Profil &amp; Konto</span>
        </Tab>
        <Tab value="security" class="flex items-center gap-[7px] px-[15.75px] py-[14px] text-sm font-bold">
          <i class="pi pi-shield text-sm" aria-hidden="true"></i>
          <span>Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels class="bg-white px-[15.75px] pb-[15.75px] pt-[12.25px]">
        <TabPanel value="profile" class="m-0 p-0">
          <div class="flex flex-col gap-5 py-3">
            <div class="w-[216px]">
              <label for="password" class="mb-[7px] block text-sm">Passwort</label>
              <Password
                input-id="password"
                v-model="password"
                toggle-mask
                :feedback="true"
                prompt-label="Passwort wählen"
                medium-label="Medium"
                weak-label="Schwach"
                strong-label="Stark"
                class="w-full"
                input-class="w-full"
              >
                <template #footer>
                  <div class="flex flex-col gap-[7px]">
                    <div class="border-t border-[#e2e8f0] pt-3">
                      <div class="flex flex-col gap-[3.5px] text-sm">
                        <span>Ein Kleinbuchstabe</span>
                        <span>Ein Großbuchstabe</span>
                        <span>Eine Zahl</span>
                        <span>Acht Zeichen</span>
                      </div>
                    </div>
                  </div>
                </template>
              </Password>
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorEnabled" input-id="two-factor" />
              <label for="two-factor" class="text-sm">Zwei-Faktor-Authentifizierung</label>
            </div>

            <div class="flex w-[216px] flex-col gap-[14px]">
              <div>
                <label for="session-duration" class="mb-[7px] block text-sm">Sitzungsdauer (Minuten)</label>
                <InputText
                  id="session-duration"
                  v-model="sessionDuration"
                  class="h-[33px] w-full text-sm"
                />
              </div>
              <Slider v-model="sessionDuration" :min="0" :max="120" class="w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-[7px]">
                  <RadioButton v-model="securityLevel" input-id="low" value="Niedrig" />
                  <label for="low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-[7px]">
                  <RadioButton v-model="securityLevel" input-id="medium" value="Mittel" />
                  <label for="medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-[7px]">
                  <RadioButton v-model="securityLevel" input-id="high" value="Hoch" />
                  <label for="high" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" disabled class="h-[33px] w-[91px] text-sm" />
          </div>
        </TabPanel>

        <TabPanel value="security" class="m-0 p-0">
          <div></div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
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

const activeTab = ref('profile')
const password = ref('password')
const twoFactorEnabled = ref(false)
const sessionDuration = ref(30)
const securityLevel = ref('Hoch')
</script>