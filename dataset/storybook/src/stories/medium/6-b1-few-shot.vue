<template>
  <Card>
    <template #content>
      <div class="flex flex-col gap-2">
        <div class="flex flex-col items-center gap-3 p-2.5">
          <Avatar label="B" size="xlarge" />
          <span class="text-2xl">Benutzername</span>
        </div>

        <div class="flex flex-col gap-2 p-4">
          <Tabs value="informationen">
            <TabList>
              <Tab value="profil">Profil</Tab>
              <Tab value="informationen">Informationen</Tab>
              <Tab value="sicherheit">Sicherheit</Tab>
              <Tab value="aktivitaet">Aktivität</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="informationen">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const form = reactive({})
</script>