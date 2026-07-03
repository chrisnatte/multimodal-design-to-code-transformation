<template>
  <div class="flex flex-col">
    <Tabs v-model:value="state.activeTab">
      <TabList class="flex">
        <Tab value="0" as="div" class="flex items-center gap-2 px-4 py-3.5 font-bold text-sm">
          <i class="pi pi-user-edit"></i>
          <span>Profil &amp; Konto</span>
        </Tab>
        <Tab value="1" as="div" class="flex items-center gap-2 px-4 py-3.5 font-bold text-sm">
          <i class="pi pi-shield"></i>
          <span>Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels class="px-4 py-3">
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex flex-col gap-2">
              <label class="text-sm">Passwort</label>
              <Password v-model="state.password" :feedback="false" toggleMask class="w-full" inputClass="w-full" />
              <div class="flex flex-col gap-2">
                <div class="flex flex-col gap-3.5">
                  <span class="text-sm font-semibold">Passwort wählen</span>
                  <div class="flex">
                    <div class="h-2 flex-1 bg-amber-500 rounded-l-md"></div>
                    <div class="h-2 flex-1 bg-amber-500"></div>
                    <div class="h-2 flex-1 bg-slate-200 rounded-r-md"></div>
                  </div>
                </div>
                <span class="text-sm">Medium</span>
              </div>
              <Divider />
              <div class="flex flex-col gap-1">
                <span class="text-sm">Ein Kleinbuchstabe</span>
                <span class="text-sm">Ein Großbuchstabe</span>
                <span class="text-sm">Eine Zahl</span>
                <span class="text-sm">Acht Zeichen</span>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="state.twoFactor" />
              <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm">Sitzungsdauer (Minuten)</label>
              <InputText v-model="state.sessionDuration" />
              <Slider v-model="state.sessionDurationNumber" :min="0" :max="120" class="w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="state.securityLevel" inputId="level-low" name="securityLevel" value="Niedrig" />
                  <label for="level-low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="state.securityLevel" inputId="level-medium" name="securityLevel" value="Mittel" />
                  <label for="level-medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="state.securityLevel" inputId="level-high" name="securityLevel" value="Hoch" />
                  <label for="level-high" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" disabled />
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div class="py-3">
            <span class="text-sm">Sicherheit &amp; Präferenzen</span>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Password from 'primevue/password'
import ToggleSwitch from 'primevue/toggleswitch'
import InputText from 'primevue/inputtext'
import Slider from 'primevue/slider'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'
import Button from 'primevue/button'

const state = reactive({
  activeTab: '0',
  password: '********',
  twoFactor: false,
  sessionDuration: '30',
  sessionDurationNumber: 30,
  securityLevel: 'Hoch'
})
</script>