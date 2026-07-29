<template>
  <div class="w-[560px] bg-white p-6">
    <Tabs v-model:value="activeTab" class="w-full">
      <TabList>
        <Tab value="profile">
          <span class="flex items-center gap-2">
            <i class="pi pi-user-edit text-sm" />
            <span>Profil &amp; Konto</span>
          </span>
        </Tab>
        <Tab value="security">
          <span class="flex items-center gap-2">
            <i class="pi pi-shield text-sm" />
            <span>Sicherheit &amp; Präferenzen</span>
          </span>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="profile">
          <div class="flex w-64 flex-col gap-5 py-3">
            <div class="relative h-14 w-14">
              <Avatar label="P" size="xlarge" />
              <Tag
                value="Edit"
                severity="primary"
                class="absolute -right-5 -top-3 !px-1.5 !py-0.5 !text-xs"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="username">Benutzername</label>
              <InputText
                id="username"
                v-model="username"
                placeholder="Benutzername eingeben"
                class="w-full"
              />
            </div>

            <Textarea
              v-model="profileInformation"
              placeholder="Informationen über dich...."
              rows="4"
              class="w-full"
            />

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="isPublic" input-id="public-profile" />
              <label for="public-profile">Öffentlich sichtbar</label>
            </div>

            <Button label="Speichern" severity="primary" class="w-fit" />
          </div>
        </TabPanel>

        <TabPanel value="security">
          <div class="flex w-64 flex-col gap-5 py-3">
            <div class="flex flex-col gap-2">
              <label for="password">Passwort</label>
              <Password
                input-id="password"
                v-model="password"
                toggle-mask
                :feedback="false"
                input-class="w-full"
                class="w-full"
              />
              <div class="flex flex-col gap-2 border border-surface-200 bg-white p-3">
                <div class="flex flex-col gap-3">
                  <span class="font-semibold">Passwort wählen</span>
                  <div class="flex h-2 overflow-hidden rounded">
                    <span class="w-1/3 bg-orange-400" />
                    <span class="w-1/3 bg-orange-400" />
                    <span class="w-1/3 bg-surface-200" />
                  </div>
                </div>
                <span>Medium</span>
                <div class="border-t border-surface-200" />
                <div class="flex flex-col gap-1">
                  <span>Ein Kleinbuchstabe</span>
                  <span>Ein Großbuchstabe</span>
                  <span>Eine Zahl</span>
                  <span>Acht Zeichen</span>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorAuthentication" input-id="two-factor" />
              <label for="two-factor">Zwei-Faktor-Authentifizierung</label>
            </div>

            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-2">
                <label for="session-duration">Sitzungsdauer (Minuten)</label>
                <InputText
                  id="session-duration"
                  v-model="sessionDurationText"
                  class="w-full"
                />
              </div>
              <Slider v-model="sessionDuration" :min="0" :max="120" class="w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <span>Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="low" value="Niedrig" />
                  <label for="low">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="medium" value="Mittel" />
                  <label for="medium">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="high" value="Hoch" />
                  <label for="high">Hoch</label>
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
const password = ref('password')
const twoFactorAuthentication = ref(false)
const sessionDuration = ref(30)
const sessionDurationText = ref('30')
const securityLevel = ref('Hoch')
</script>