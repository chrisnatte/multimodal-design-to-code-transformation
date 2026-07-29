<template>
  <Tabs value="0">
    <TabList>
      <Tab value="0">
        <i class="pi pi-user-edit" />
        <span>Profil &amp; Konto</span>
      </Tab>
      <Tab value="1">
        <i class="pi pi-shield" />
        <span>Sicherheit &amp; Präferenzen</span>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="0">
        <div class="flex flex-col gap-5 py-3">
          <div class="relative w-fit">
            <Avatar label="P" size="xlarge" class="!bg-slate-100 !text-slate-700" />
            <Tag value="Edit" severity="success" class="absolute -top-2 -right-2 !text-xs" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="username-input" class="text-sm">Benutzername</label>
            <InputText v-model="username" input-id="username-input" placeholder="Benutzername eingeben" />
          </div>
          <Textarea v-model="about" placeholder="Informationen über dich...." rows="4" />
          <div class="flex items-center gap-3">
            <ToggleSwitch v-model="isPublic" input-id="public-switch" />
            <label for="public-switch" class="text-sm">Öffentlich sichtbar</label>
          </div>
          <Button label="Speichern" severity="primary" class="w-fit" />
        </div>
      </TabPanel>
      <TabPanel value="1">
        <div class="flex flex-col gap-5 py-3">
          <div class="flex flex-col gap-2">
            <Password v-model="password" input-id="password-input" toggle-mask input-class="w-full" />
          </div>
          <div class="flex items-center gap-3">
            <ToggleSwitch v-model="twoFactorAuth" input-id="two-factor-switch" />
            <label for="two-factor-switch" class="text-sm">Zwei-Faktor-Authentifizierung</label>
          </div>
          <div class="flex flex-col gap-2">
            <label for="session-duration-input" class="text-sm">Sitzungsdauer (Minuten)</label>
            <InputText v-model="sessionDuration" input-id="session-duration-input" />
            <Slider v-model="sessionDurationValue" />
          </div>
          <div class="flex flex-col gap-3">
            <label class="text-sm">Sicherheitsstufe</label>
            <div class="flex items-center gap-5">
              <div class="flex items-center gap-2">
                <RadioButton v-model="securityLevel" input-id="security-low" value="Niedrig" />
                <label for="security-low" class="text-sm">Niedrig</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="securityLevel" input-id="security-medium" value="Mittel" />
                <label for="security-medium" class="text-sm">Mittel</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="securityLevel" input-id="security-high" value="Hoch" />
                <label for="security-high" class="text-sm">Hoch</label>
              </div>
            </div>
          </div>
          <Button label="Speichern" severity="primary" disabled class="w-fit" />
        </div>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<script setup lang="ts">
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

  const username = ref('')
  const about = ref('')
  const isPublic = ref(false)

  const password = ref('')
  const twoFactorAuth = ref(false)
  const sessionDuration = ref('30')
  const sessionDurationValue = ref(30)
  const securityLevel = ref('Hoch')
</script>