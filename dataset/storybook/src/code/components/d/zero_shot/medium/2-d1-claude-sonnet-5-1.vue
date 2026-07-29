<template>
  <div class="p-6 bg-white">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">
          <i class="pi pi-user-edit mr-2"></i>
          <span>Profil & Konto</span>
        </Tab>
        <Tab value="1">
          <i class="pi pi-shield mr-2"></i>
          <span>Sicherheit & Präferenzen</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-5 py-3">
            <div class="relative w-fit">
              <Avatar label="P" size="large" class="bg-slate-100 text-slate-500" />
              <Tag value="Edit" severity="success" class="absolute -top-2 -right-2 text-xs"></Tag>
            </div>

            <div class="flex flex-col gap-2">
              <label for="benutzername" class="text-sm text-gray-700">Benutzername</label>
              <InputText
                id="benutzername"
                v-model="benutzername"
                placeholder="Benutzername eingeben"
                class="w-full"
              />
            </div>

            <Textarea
              v-model="ueberDich"
              placeholder="Informationen über dich...."
              rows="4"
              class="w-full"
            />

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="oeffentlichSichtbar" />
              <span class="text-sm text-gray-700">Öffentlich sichtbar</span>
            </div>

            <Button label="Speichern" class="w-fit" />
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div class="flex flex-col gap-5 py-3">
            <div class="flex flex-col gap-2 w-56">
              <label for="passwort" class="text-sm text-gray-700">Passwort</label>
              <Password
                id="passwort"
                v-model="passwort"
                toggleMask
                class="w-full"
                inputClass="w-full"
              />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="zweiFaktor" />
              <span class="text-sm text-gray-700">Zwei-Faktor-Authentifizierung</span>
            </div>

            <div class="flex flex-col gap-2 w-56">
              <label for="sitzungsdauer" class="text-sm text-gray-700">Sitzungsdauer (Minuten)</label>
              <InputText id="sitzungsdauer" v-model="sitzungsdauer" class="w-full" />
              <Slider v-model="sitzungsdauerValue" class="w-full" />
            </div>

            <div class="flex flex-col gap-3">
              <label class="text-sm text-gray-700">Sicherheitsstufe</label>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                  <RadioButton v-model="sicherheitsstufe" inputId="niedrig" value="niedrig" />
                  <label for="niedrig" class="text-sm text-gray-700">Niedrig</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="sicherheitsstufe" inputId="mittel" value="mittel" />
                  <label for="mittel" class="text-sm text-gray-700">Mittel</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioButton v-model="sicherheitsstufe" inputId="hoch" value="hoch" />
                  <label for="hoch" class="text-sm text-gray-700">Hoch</label>
                </div>
              </div>
            </div>

            <Button label="Speichern" :disabled="true" class="w-fit" />
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
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'
import Password from 'primevue/password'
import Slider from 'primevue/slider'
import RadioButton from 'primevue/radiobutton'

const activeTab = ref('0')

const benutzername = ref('')
const ueberDich = ref('')
const oeffentlichSichtbar = ref(false)

const passwort = ref('')
const zweiFaktor = ref(false)
const sitzungsdauer = ref('30')
const sitzungsdauerValue = ref(30)
const sicherheitsstufe = ref('hoch')
</script>