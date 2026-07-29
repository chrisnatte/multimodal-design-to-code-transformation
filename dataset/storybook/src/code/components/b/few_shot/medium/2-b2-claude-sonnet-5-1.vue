<template>
  <div class="w-[560px] bg-white p-6">
    <Tabs value="0">
      <TabList>
        <Tab value="0">
          <i class="pi pi-user-edit" />
          <span>Profil & Konto</span>
        </Tab>
        <Tab value="1">
          <i class="pi pi-shield" />
          <span>Sicherheit & Präferenzen</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <p class="m-0 text-gray-500">Keine Inhalte für diesen Tab definiert.</p>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex flex-col gap-2 w-[216px]">
              <label for="password-input">Passwort</label>
              <Password
                v-model="password"
                input-id="password-input"
                toggle-mask
                :feedback="true"
                input-class="w-full"
              />
            </div>
            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorAuth" input-id="two-factor-switch" />
              <label for="two-factor-switch">Zwei-Faktor-Authentifizierung</label>
            </div>
            <div class="flex flex-col gap-2 w-[216px]">
              <label for="session-duration-slider">Sitzungsdauer (Minuten)</label>
              <InputText v-model="sessionDuration" input-id="session-duration-slider" />
              <Slider v-model="sessionDuration" />
            </div>
            <div class="flex flex-col gap-3">
              <label>Sicherheitsstufe</label>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton
                    v-model="securityLevel"
                    input-id="security-low"
                    name="securityLevel"
                    value="Niedrig"
                  />
                  <label for="security-low">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton
                    v-model="securityLevel"
                    input-id="security-medium"
                    name="securityLevel"
                    value="Mittel"
                  />
                  <label for="security-medium">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton
                    v-model="securityLevel"
                    input-id="security-high"
                    name="securityLevel"
                    value="Hoch"
                  />
                  <label for="security-high">Hoch</label>
                </div>
              </div>
            </div>
            <Button label="Speichern" severity="primary" disabled class="w-fit" />
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
  import InputText from 'primevue/inputtext'
  import Slider from 'primevue/slider'
  import RadioButton from 'primevue/radiobutton'
  import Button from 'primevue/button'

  const password = ref('')
  const twoFactorAuth = ref(false)
  const sessionDuration = ref(30)
  const securityLevel = ref('Hoch')
</script>