<template>
  <div class="flex flex-col bg-white p-6">
    <Tabs value="1">
      <TabList>
        <Tab value="0">
          <div class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span class="text-sm font-bold">Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1">
          <div class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span class="text-sm font-bold">Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <!-- Placeholder for Profil & Konto -->
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <!-- Password -->
            <div class="flex flex-col gap-2">
              <label for="password-input" class="text-sm">Passwort</label>
              <Password
                v-model="password"
                input-id="password-input"
                toggle-mask
                :feedback="true"
                input-class="w-full max-w-[216px]"
              />
            </div>

            <!-- Two-Factor Authentication -->
            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactor" input-id="two-factor" />
              <label for="two-factor" class="text-sm">Zwei-Faktor-Authentifizierung</label>
            </div>

            <!-- Session Duration -->
            <div class="flex flex-col gap-2">
              <label for="session-duration" class="text-sm">Sitzungsdauer (Minuten)</label>
              <InputText
                v-model.number="sessionDuration"
                input-id="session-duration"
                class="w-full max-w-[216px]"
              />
              <Slider v-model="sessionDuration" class="w-full max-w-[216px] mt-2" />
            </div>

            <!-- Security Level -->
            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="level-low" value="Niedrig" />
                  <label for="level-low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="level-medium" value="Mittel" />
                  <label for="level-medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="level-high" value="Hoch" />
                  <label for="level-high" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

            <!-- Save Button -->
            <Button label="Speichern" severity="primary" disabled class="mt-2 w-fit" />
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
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

  const password = ref('********')
  const twoFactor = ref(false)
  const sessionDuration = ref(30)
  const securityLevel = ref('Hoch')
</script>