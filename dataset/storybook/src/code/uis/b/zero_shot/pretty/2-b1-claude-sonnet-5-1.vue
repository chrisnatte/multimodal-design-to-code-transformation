<template>
  <div class="flex justify-center items-center bg-black py-[280px] w-full min-h-screen">
    <div class="bg-white rounded-xl border border-[#e3e8f0] w-[512px] flex flex-col">
      <!-- Header -->
      <div class="flex items-center gap-4 p-[17.5px]">
        <div class="flex items-center justify-between flex-1 gap-16">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm">Max Mustermann</span>
              <span class="text-[10px] font-light">Manager</span>
            </div>
          </div>
          <Tag severity="success" value="Aktiv" />
        </div>
        <div class="flex flex-col gap-[7px]">
          <Button icon="pi pi-times" severity="secondary" text rounded />
        </div>
      </div>

      <!-- Content -->
      <div class="flex flex-col items-center gap-[7px] px-[17.5px] pb-[17.5px]">
        <div class="w-full flex flex-col">
          <Tabs value="0">
            <TabList>
              <Tab value="0">Persönliche Daten</Tab>
              <Tab value="1">Einstellungen</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <div class="flex flex-col gap-4 py-3 px-1">
                  <div class="flex flex-col gap-1">
                    <label for="name" class="text-sm">Name</label>
                    <InputText id="name" v-model="name" class="w-full" />
                  </div>

                  <div class="flex flex-col gap-1">
                    <label for="email" class="text-sm">E-Mail</label>
                    <InputText id="email" v-model="email" class="w-full" />
                  </div>

                  <div class="flex flex-col gap-1">
                    <label for="role" class="text-sm">Rolle</label>
                    <Select
                      id="role"
                      v-model="role"
                      :options="roleOptions"
                      optionLabel="label"
                      optionValue="value"
                      class="w-full"
                    />
                  </div>

                  <div class="flex items-center gap-2">
                    <Checkbox v-model="isActive" binary inputId="isActive" />
                    <label for="isActive" class="text-sm">Ist aktiv</label>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="1">
                <div class="p-3 text-sm">Einstellungen Inhalt</div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex justify-end items-center gap-[7px] px-[17.5px] pb-[17.5px]">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'

const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('manager')
const isActive = ref(true)

const roleOptions = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'mitarbeiter' },
  { label: 'Kunde', value: 'kunde' }
])
</script>