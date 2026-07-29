<template>
  <div class="w-full max-w-[560px] p-6">
    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="profile">
          <i class="pi pi-user-edit" />
          <span>Profil &amp; Konto</span>
        </Tab>
        <Tab value="security">
          <i class="pi pi-shield" />
          <span>Sicherheit &amp; Präferenzen</span>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="profile">
          <div class="flex w-64 flex-col gap-5">
            <div class="relative h-16 w-16">
              <Avatar label="P" size="xlarge" />
              <Badge
                value="Edit"
                severity="success"
                class="absolute -right-6 -top-3"
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
              v-model="bio"
              placeholder="Informationen über dich...."
              rows="4"
              class="w-full"
            />

            <div class="flex items-center gap-3">
              <InputSwitch v-model="isPublic" input-id="public-profile" />
              <label for="public-profile">Öffentlich sichtbar</label>
            </div>

            <Button
              label="Speichern"
              severity="success"
              class="w-fit"
            />
          </div>
        </TabPanel>

        <TabPanel value="security">
          <div class="min-h-64" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
import Button from 'primevue/button'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Textarea from 'primevue/textarea'

const activeTab = ref('profile')
const username = ref('')
const bio = ref('')
const isPublic = ref(false)
</script>