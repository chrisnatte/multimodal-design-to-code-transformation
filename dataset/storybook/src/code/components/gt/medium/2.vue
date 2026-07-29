<template>
  <Tabs value="0">
    <TabList>
      <Tab value="0"><i class="pi pi-user-edit"></i> Profil & Konto</Tab>
      <Tab value="1"><i class="pi pi-shield"></i> Sicherheit & Präferenzen</Tab>
    </TabList>

    <TabPanels>
      <TabPanel value="0">
        <div class="flex flex-col items-start gap-5 py-3">
          <OverlayBadge value="Edit" severity="primary">
            <Avatar label="P" size="xlarge" />
          </OverlayBadge>

          <div class="flex w-full max-w-3xs flex-col gap-2">
            <label for="username-input" class="text-sm">Benutzername</label>
            <InputText v-model="username" type="text" variant="filled" input-id="username-input" />
          </div>

          <Textarea
            v-model="information"
            placeholder="Informationen über dich..."
            variant="filled"
            class="w-full max-w-3xs"
          />

          <div class="flex items-center gap-2">
            <ToggleSwitch v-model="publicVisible" input-id="public-visible" />
            <label for="public-visible">Öffentlich sichtbar</label>
          </div>
          <Button label="Speichern" severity="primary" disabled />
        </div>
      </TabPanel>

      <TabPanel value="1">
        <div class="flex flex-col items-start gap-5 py-3">
          <div class="flex w-full max-w-3xs flex-col gap-2">
            <label for="password-input" class="text-sm">Passwort</label>
            <Password v-model="password" input-id="password-input" toggle-mask input-class="w-full">
              <template #header>
                <div class="text-xm mb-4 font-semibold">Passwort eingeben</div>
              </template>
              <template #footer>
                <Divider />
                <ul class="mx-2 list-inside list-disc text-sm">
                  <li>Ein Kleinbuchstabe</li>
                  <li>Ein Großbuchstabe</li>
                  <li>Eine Zahl</li>
                  <li>Acht Zeichen</li>
                </ul>
              </template>
            </Password>
          </div>

          <div class="flex items-center gap-2">
            <ToggleSwitch v-model="activateTFA" input-id="active-tfa" />
            <label for="active-tfa">Zwei-Faktor-Authentifizierung</label>
          </div>

          <div class="flex flex-col gap-2">
            <label for="sessions-interval-input">Sitzungsdauer (Minuten)</label>

            <InputNumber
              v-model="sessionInterval"
              id="sessions-interval-input"
              :min="1"
              :max="120"
              :step="1"
              class="w-full max-w-3xs"
            />

            <Slider
              v-model="sessionInterval"
              id="sessions-interval-slider"
              :min="1"
              :max="120"
              orientation="horizontal"
              :step="1"
              class="w-fill mt-3"
            />
          </div>

          <div class="flex flex-col gap-3">
            <label for="security-level">Sicherheitsstufe</label>
            <div class="flex items-center gap-5">
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="securityLevel"
                  input-id="security-level-1"
                  name="group"
                  value="low"
                />
                <label for="security-level-1">Niedrig</label>
              </div>

              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="securityLevel"
                  input-id="security-level-2"
                  name="group"
                  value="medium"
                />
                <label for="security-level-2">Mittel</label>
              </div>

              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="securityLevel"
                  input-id="security-level-3"
                  name="group"
                  value="high"
                />
                <label for="security-level-3">Hoch</label>
              </div>
            </div>
          </div>
          <Button label="Speichern" severity="primary" disabled />
        </div>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Tab from 'primevue/tab'
  import Tabs from 'primevue/tabs'
  import Avatar from 'primevue/avatar'
  import TabList from 'primevue/tablist'
  import TabPanel from 'primevue/tabpanel'
  import Textarea from 'primevue/textarea'
  import TabPanels from 'primevue/tabpanels'
  import InputText from 'primevue/inputtext'
  import OverlayBadge from 'primevue/overlaybadge'
  import ToggleSwitch from 'primevue/toggleswitch'
  import Button from 'primevue/button'
  import Password from 'primevue/password'
  import Divider from 'primevue/divider'
  import Slider from 'primevue/slider'
  import InputNumber from 'primevue/inputnumber'
  import RadioButton from 'primevue/radiobutton'

  const username = ref('')
  const information = ref('')
  const publicVisible = ref(false)

  const password = ref('password12')
  const activateTFA = ref(false)
  const sessionInterval = ref(30)
  const securityLevel = ref('high')
</script>
