<template>
  <div class="w-[560px] bg-white p-6">
    <Tabs value="profile">
      <TabList>
        <Tab value="profile">
          <i class="pi pi-user-edit mr-2" />
          <span>Profil &amp; Konto</span>
        </Tab>
        <Tab value="security">
          <i class="pi pi-shield mr-2" />
          <span>Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="profile">
          <div class="flex w-64 flex-col gap-5 py-3">
            <div class="relative w-fit">
              <Avatar label="P" size="xlarge" shape="square" />
              <Button
                label="Edit"
                size="small"
                class="absolute -right-6 -top-3"
                aria-label="Profil bearbeiten"
              />
            </div>

            <div class="flex flex-col gap-2">
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
              rows="5"
              class="w-full"
            />

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="isPublic" input-id="public-visible" />
              <label for="public-visible">Öffentlich sichtbar</label>
            </div>

            <Button label="Speichern" severity="primary" class="w-fit" />
          </div>
        </TabPanel>

        <TabPanel value="security">
          <div class="p-3" />
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
import Tabs from 'primevue/tabs'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const username = ref('')
const profileInformation = ref('')
const isPublic = ref(false)
</script>