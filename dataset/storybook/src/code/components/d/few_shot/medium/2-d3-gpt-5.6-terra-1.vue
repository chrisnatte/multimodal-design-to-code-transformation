<template>
  <div class="w-[560px] bg-white p-6">
    <Tabs v-model:value="activeTab" class="w-full">
      <TabList>
        <Tab value="profile" class="flex items-center gap-2">
          <i class="pi pi-user-edit text-sm" />
          <span>Profil &amp; Konto</span>
        </Tab>
        <Tab value="security" class="flex items-center gap-2">
          <i class="pi pi-shield text-sm" />
          <span>Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="profile">
          <div class="flex flex-col gap-5 px-4 py-6">
            <div class="relative h-14 w-14">
              <Avatar label="P" size="xlarge" />
              <Tag
                value="Edit"
                severity="success"
                class="absolute -right-6 -top-3 !px-2 !py-1 !text-xs"
              />
            </div>

            <div class="flex w-64 flex-col gap-2">
              <label for="username">Benutzername</label>
              <InputText
                id="username"
                v-model="username"
                placeholder="Benutzername eingeben"
              />
            </div>

            <Textarea
              v-model="profileInformation"
              placeholder="Informationen über dich...."
              rows="4"
              class="w-64"
            />

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="isPublic" input-id="public-visible" />
              <label for="public-visible">Öffentlich sichtbar</label>
            </div>

            <Button label="Speichern" severity="primary" class="w-fit" />
          </div>
        </TabPanel>

        <TabPanel value="security">
          <div class="flex w-[216px] flex-col gap-5 px-4 py-6">
            <div class="flex flex-col gap-2">
              <label for="password">Passwort</label>
              <Password
                v-model="password"
                input-id="password"
                toggle-mask
                prompt-label="Passwort wählen"
                weak-label="Schwach"
                medium-label="Medium"
                strong-label="Stark"
                input-class="w-full"
              >
                <template #footer>
                  <Divider />
                  <ul class="m-0 flex list-none flex-col gap-1 p-0">
                    <li>Ein Kleinbuchstabe</li>
                    <li>Ein Großbuchstabe</li>
                    <li>Eine Zahl</li>
                    <li>Acht Zeichen</li>
                  </ul>
                </template>
              </Password>
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorAuthentication" input-id="two-factor" />
              <label for="two-factor">Zwei-Faktor-Authentifizierung</label>
            </div>

            <div class="flex flex-col gap-2">
              <label for="session-duration">Sitzungsdauer (Minuten)</label>
              <InputText
                id="session-duration"
                v-model="sessionDurationText"
                inputmode="numeric"
              />
              <Slider v-model="sessionDuration" :min="0" :max="120" />
            </div>

            <div class="flex flex-col gap-3">
              <span>Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton
                    v-model="securityLevel"
                    input-id="security-low"
                    name="security-level"
                    value="Niedrig"
                  />
                  <label for="security-low">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton
                    v-model="securityLevel"
                    input-id="security-medium"
                    name="security-level"
                    value="Mittel"
                  />
                  <label for="security-medium">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton
                    v-model="securityLevel"
                    input-id="security-high"
                    name="security-level"
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
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Tag from 'primevue/tag'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const activeTab = ref('profile')
const username = ref('')
const profileInformation = ref('')
const isPublic = ref(false)
const password = ref('Passwort')
const twoFactorAuthentication = ref(false)
const sessionDuration = ref(30)
const sessionDurationText = ref('30')
const securityLevel = ref('Hoch')
</script>