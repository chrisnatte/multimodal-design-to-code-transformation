<template>
  <main class="w-[560px] min-h-[498px] bg-white p-6 font-sans text-[#334155]">
    <Tabs v-model:value="activeTab" class="w-full">
      <TabList class="border-b border-[#e2e8f0]">
        <Tab
          value="profile"
          class="flex items-center gap-2 border-b-2 border-transparent px-4 py-3 text-sm font-bold text-[#64748b] data-[p-active=true]:border-[#10b981] data-[p-active=true]:text-[#10b981]"
        >
          <i class="pi pi-user-edit text-sm" />
          <span>Profil &amp; Konto</span>
        </Tab>
        <Tab
          value="security"
          class="flex items-center gap-2 border-b-2 border-transparent px-4 py-3 text-sm font-bold text-[#64748b] data-[p-active=true]:border-[#10b981] data-[p-active=true]:text-[#10b981]"
        >
          <i class="pi pi-shield text-sm" />
          <span>Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels class="pt-6">
        <TabPanel value="profile" class="px-4">
          <section class="flex flex-col items-start gap-5">
            <div class="relative">
              <Avatar
                label="P"
                shape="square"
                class="h-14 w-14 bg-[#e2e8f0] text-2xl text-[#334155]"
              />
              <Button
                label="Edit"
                size="small"
                class="absolute -right-6 -top-3 !border-[#10b981] !bg-[#10b981] !px-2 !py-1 !text-xs"
              />
            </div>

            <div class="flex w-64 flex-col gap-2">
              <label for="username" class="text-sm">Benutzername</label>
              <InputText
                id="username"
                v-model="username"
                placeholder="Benutzername eingeben"
                class="w-full !border-[#cbd5e1] !bg-[#f8fafc] !text-sm"
              />
            </div>

            <Textarea
              v-model="about"
              placeholder="Informationen über dich...."
              :auto-resize="false"
              rows="4"
              class="h-[100px] w-64 resize-none !border-[#cbd5e1] !bg-[#f8fafc] !text-sm"
            />

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="isPublic" class="scale-90 origin-left" />
              <label class="-ml-1 text-sm" for="public-profile">Öffentlich sichtbar</label>
            </div>

            <Button
              label="Speichern"
              class="!border-[#4fd1b5] !bg-[#4fd1b5] !px-3 !py-2 !text-sm"
            />
          </section>
        </TabPanel>

        <TabPanel value="security" class="px-4">
          <section class="flex w-64 flex-col gap-5 py-3">
            <div class="flex flex-col gap-2">
              <label for="password" class="text-sm">Passwort</label>
              <Password
                id="password"
                v-model="password"
                toggle-mask
                :feedback="false"
                class="w-full"
                input-class="w-full !border-[#10b981] !bg-[#f8fafc]"
              />
              <div class="border border-[#e2e8f0] bg-white p-3">
                <div class="flex flex-col gap-2">
                  <span class="text-sm font-semibold">Passwort wählen</span>
                  <div class="flex h-2.5 overflow-hidden rounded">
                    <span class="w-1/3 bg-amber-500" />
                    <span class="w-1/3 bg-amber-500" />
                    <span class="w-1/3 bg-[#e2e8f0]" />
                  </div>
                  <span class="text-sm">Medium</span>
                  <Divider class="my-1" />
                  <div class="flex flex-col gap-1 text-sm">
                    <span>Ein Kleinbuchstabe</span>
                    <span>Ein Großbuchstabe</span>
                    <span>Eine Zahl</span>
                    <span>Acht Zeichen</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="twoFactorEnabled" class="scale-90 origin-left" />
              <span class="-ml-1 text-sm">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2">
              <label for="session-duration" class="text-sm">Sitzungsdauer (Minuten)</label>
              <InputText
                id="session-duration"
                v-model="sessionDuration"
                class="w-full !border-[#cbd5e1] !bg-[#f8fafc]"
              />
              <Slider v-model="sessionSlider" :min="0" :max="120" class="mt-2 w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <span class="text-sm">Sicherheitsstufe</span>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="low" value="Niedrig" />
                  <label for="low" class="text-sm">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="medium" value="Mittel" />
                  <label for="medium" class="text-sm">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="securityLevel" input-id="high" value="Hoch" />
                  <label for="high" class="text-sm">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" disabled class="w-fit" />
          </section>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </main>
</template>

<script setup>
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
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const activeTab = ref('profile')
const username = ref('')
const about = ref('')
const isPublic = ref(false)
const password = ref('********')
const twoFactorEnabled = ref(false)
const sessionDuration = ref('30')
const sessionSlider = ref(30)
const securityLevel = ref('Hoch')
</script>