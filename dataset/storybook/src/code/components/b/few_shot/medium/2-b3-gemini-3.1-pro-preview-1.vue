<template>
  <div class="flex flex-col bg-white p-6">
    <Tabs value="1" class="w-[512px]">
      <TabList>
        <Tab value="0">
          <div class="flex items-center gap-2">
            <i class="pi pi-user-edit"></i>
            <span class="font-bold">Profil & Konto</span>
          </div>
        </Tab>
        <Tab value="1">
          <div class="flex items-center gap-2">
            <i class="pi pi-shield"></i>
            <span class="font-bold">Sicherheit & Präferenzen</span>
          </div>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex w-[216px] flex-col gap-2">
              <label for="password" class="text-sm">Passwort</label>
              <Password
                v-model="password"
                input-id="password"
                toggle-mask
                :feedback="true"
                prompt-label="Passwort wählen"
                weak-label="Schwach"
                medium-label="Medium"
                strong-label="Stark"
                input-class="w-full"
                class="w-full"
              />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactor" input-id="2fa" />
              <label for="2fa" class="text-sm">Zwei-Faktor-Authentifizierung</label>
            </div>

            <div class="flex w-[216px] flex-col gap-2">
              <label for="session" class="text-sm">Sitzungsdauer (Minuten)</label>
              <InputText v-model.number="sessionDuration" input-id="session" class="w-full" />
              <Slider v-model="sessionDuration" class="mt-2" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="sec-low" value="Niedrig" />
                  <label for="sec-low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="sec-med" value="Mittel" />
                  <label for="sec-med" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="sec-high" value="Hoch" />
                  <label for="sec-high" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

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
  import InputText from 'primevue/inputtext'
  import Slider from 'primevue/slider'
  import RadioButton from 'primevue/radiobutton'
  import Button from 'primevue/button'

  const password = ref('')
  const twoFactor = ref(false)
  const sessionDuration = ref(30)
  const securityLevel = ref('Hoch')
</script>