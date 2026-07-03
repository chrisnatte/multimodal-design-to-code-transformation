<template>
  <div class="flex flex-col">
    <Tabs v-model:value="form.activeTab">
      <TabList class="flex justify-end">
        <Tab value="0" as="div" class="flex items-center gap-2 px-4 py-3">
          <i class="pi pi-user-edit"></i>
          <span class="font-bold text-sm">Profil &amp; Konto</span>
        </Tab>
        <Tab value="1" as="div" class="flex items-center gap-2 px-4 py-3">
          <i class="pi pi-shield"></i>
          <span class="font-bold text-sm">Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels class="px-4 pt-3 pb-4">
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex flex-col gap-2">
              <label class="text-sm">Passwort</label>
              <Password v-model="form.password" :toggleMask="true" :feedback="true" promptLabel="Passwort wählen" weakLabel="Niedrig" mediumLabel="Medium" strongLabel="Hoch" />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="form.twoFactor" />
              <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm">Sitzungsdauer (Minuten)</label>
              <InputText v-model="form.sessionDurationText" />
              <Slider v-model="form.sessionDuration" :min="0" :max="120" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="form.securityLevel" inputId="level-low" name="securityLevel" value="Niedrig" />
                  <label for="level-low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="form.securityLevel" inputId="level-medium" name="securityLevel" value="Mittel" />
                  <label for="level-medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="form.securityLevel" inputId="level-high" name="securityLevel" value="Hoch" />
                  <label for="level-high" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" :disabled="true" />
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
import { reactive, watch } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Password from 'primevue/password'
import ToggleSwitch from 'primevue/toggleswitch'
import Slider from 'primevue/slider'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const form = reactive({
  activeTab: '0',
  password: '',
  twoFactor: false,
  sessionDuration: 30,
  sessionDurationText: '30',
  securityLevel: 'Hoch'
})

watch(
  () => form.sessionDuration,
  (val) => {
    form.sessionDurationText = String(val)
  }
)
</script>