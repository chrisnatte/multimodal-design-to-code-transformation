<template>
  <div class="flex flex-col w-full bg-white">
    <Tabs v-model:value="state.activeTab" class="w-full">
      <TabList class="flex">
        <Tab value="profil" class="px-4 py-3">
          <div class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span class="text-sm font-bold">Profil &amp; Konto</span>
          </div>
        </Tab>
        <Tab value="sicherheit" class="px-4 py-3">
          <div class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span class="text-sm font-bold">Sicherheit &amp; Präferenzen</span>
          </div>
        </Tab>
      </TabList>

      <TabPanels class="px-4 pt-3 pb-4 bg-white">
        <TabPanel value="profil"></TabPanel>
        <TabPanel value="sicherheit">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex flex-col gap-2">
              <label class="text-sm">Passwort</label>
              <Password v-model="state.password" toggleMask :feedback="true" promptLabel="Passwort wählen" weakLabel="Schwach" mediumLabel="Medium" strongLabel="Stark" class="w-full" inputClass="w-full" />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="state.twoFactor" />
              <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm">Sitzungsdauer (Minuten)</label>
              <InputNumber v-model="state.sessionDuration" class="w-full" />
              <Slider v-model="state.sessionDuration" :min="0" :max="120" class="w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="state.securityLevel" inputId="low" name="security" value="Niedrig" />
                  <label for="low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="state.securityLevel" inputId="medium" name="security" value="Mittel" />
                  <label for="medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="state.securityLevel" inputId="high" name="security" value="Hoch" />
                  <label for="high" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" disabled />
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
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const state = reactive({
  activeTab: 'sicherheit',
  password: '********',
  twoFactor: false,
  sessionDuration: 30,
  securityLevel: 'Hoch'
})
</script>