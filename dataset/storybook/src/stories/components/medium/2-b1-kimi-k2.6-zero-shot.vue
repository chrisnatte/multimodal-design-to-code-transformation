<template>
  <div class="w-[512px]">
    <Tabs v-model:value="activeTab">
      <TabList class="border-b border-slate-200">
        <Tab value="0">
          <div class="flex items-center gap-2 px-4 py-3.5">
            <i class="pi pi-user-edit text-sm"></i>
            <span class="text-sm font-bold">Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1">
          <div class="flex items-center gap-2 px-4 py-3.5">
            <i class="pi pi-shield text-sm"></i>
            <span class="text-sm font-bold">Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      <TabPanels class="px-4 pt-3 pb-4">
        <TabPanel value="0">
          <div class="py-3"></div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <div class="w-[216px]">
              <label class="block text-sm mb-1">Passwort</label>
              <Password v-model="password" toggleMask variant="filled" class="w-full" />
            </div>
            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactor" />
              <label class="text-sm">Zwei-Faktor-Authentifizierung</label>
            </div>
            <div class="w-[216px] flex flex-col gap-2">
              <label class="block text-sm mb-1">Sitzungsdauer (Minuten)</label>
              <InputText v-model="sessionDurationText" variant="filled" class="w-full" />
              <Slider v-model="sessionDurationValue" class="w-full" />
            </div>
            <div class="flex flex-col gap-3">
              <label class="block text-sm mb-1">Sicherheitsstufe</label>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" name="security" value="Niedrig" input-id="niedrig" />
                  <label for="niedrig" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" name="security" value="Mittel" input-id="mittel" />
                  <label for="mittel" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" name="security" value="Hoch" input-id="hoch" />
                  <label for="hoch" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>
            <Button label="Speichern" severity="primary" disabled />
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
import Button from 'primevue/button'

const activeTab = ref('1')
const password = ref('')
const twoFactor = ref(false)
const sessionDurationText = ref('30')
const sessionDurationValue = ref(30)
const securityLevel = ref('Hoch')
</script>