<template>
  <div class="flex flex-col">
    <Tabs v-model:value="form.activeTab">
      <TabList class="flex">
        <Tab value="0" as="div" class="flex items-center gap-2 px-4 py-3.5 font-bold">
          <i class="pi pi-user-edit"></i>
          <span>Profil &amp; Konto</span>
        </Tab>
        <Tab value="1" as="div" class="flex items-center gap-2 px-4 py-3.5 font-bold">
          <i class="pi pi-shield"></i>
          <span>Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels class="px-4 py-3">
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex flex-col gap-2">
              <label class="text-sm">Passwort</label>
              <Password v-model="form.password" :toggleMask="true" promptLabel="Passwort wählen" mediumLabel="Medium" weakLabel="Schwach" strongLabel="Stark" />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="form.twoFactor" />
              <span>Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm">Sitzungsdauer (Minuten)</label>
              <InputNumber v-model="form.sessionDuration" />
              <Slider v-model="form.sessionDuration" :min="0" :max="120" />
            </div>

            <div class="flex flex-col gap-3">
              <span>Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="form.securityLevel" inputId="sec-low" name="security" value="Niedrig" />
                  <label for="sec-low">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="form.securityLevel" inputId="sec-mid" name="security" value="Mittel" />
                  <label for="sec-mid">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="form.securityLevel" inputId="sec-high" name="security" value="Hoch" />
                  <label for="sec-high">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" :disabled="true" />
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div class="py-3">
            <span>Sicherheit &amp; Präferenzen</span>
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
import InputNumber from 'primevue/inputnumber'
import Slider from 'primevue/slider'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const form = reactive({
  activeTab: '0',
  password: '********',
  twoFactor: false,
  sessionDuration: 30,
  securityLevel: 'Hoch'
})
</script>