<template>
  <div class="min-h-screen bg-white">
    <Dialog
      v-model:visible="profileDialogVisible"
      modal
      closable
      :draggable="false"
      :pt="{
        mask: '!bg-black',
        root: '!w-[512px] !rounded-xl !border !border-[#e2e8f0] !shadow-none',
        header: '!px-[17.5px] !py-[17.5px]',
        content: '!px-[17.5px] !pt-0 !pb-[17.5px]',
        footer: '!px-[17.5px] !pb-[17.5px] !pt-0',
      }"
    >
      <template #header>
        <div class="flex w-[424px] items-center justify-between">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm !text-black" />
            <div class="flex flex-col">
              <span class="text-sm text-black">Max Mustermann</span>
              <span class="text-[10px] font-light text-black">Manager</span>
            </div>
          </div>
          <Tag value="Aktiv" class="!bg-[#d1fae5] !px-[7px] !py-[3px] !text-[12px] !font-bold !text-black" />
        </div>
      </template>

      <Tabs value="personal">
        <TabList>
          <Tab value="personal" class="!px-4 !py-[13px] !text-sm !font-bold">
            Persönliche Daten
          </Tab>
          <Tab value="settings" class="!px-4 !py-[13px] !text-sm !font-bold">
            Einstellungen
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="personal" class="!px-1 !pt-3 !pb-0">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-[7px]">
                <label for="profile-name" class="text-sm text-black">Name</label>
                <InputText
                  id="profile-name"
                  v-model="name"
                  class="!h-[33px] !w-full !rounded-md !px-[11px] !text-sm"
                />
              </div>

              <div class="flex flex-col gap-[7px]">
                <label for="profile-email" class="text-sm text-black">E-Mail</label>
                <InputText
                  id="profile-email"
                  v-model="email"
                  type="email"
                  class="!h-[33px] !w-full !rounded-md !px-[11px] !text-sm"
                />
              </div>

              <div class="flex flex-col gap-[7px]">
                <label for="profile-role" class="text-sm text-black">Rolle</label>
                <Select
                  id="profile-role"
                  v-model="role"
                  :options="roles"
                  class="!h-[33px] !w-full !text-sm"
                />
              </div>

              <div class="flex items-center gap-[7px]">
                <Checkbox v-model="active" input-id="profile-active" binary />
                <label for="profile-active" class="text-sm text-black">Ist aktiv</label>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="settings" class="!px-1 !pt-3 !pb-0">
            <div class="min-h-[356px]"></div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <template #footer>
        <div class="flex justify-end gap-[7px]">
          <Button
            label="Abbrechen"
            severity="secondary"
            class="!h-[33px] !border-[#f1f5f9] !bg-[#f1f5f9] !px-[11px] !text-sm"
            @click="profileDialogVisible = false"
          />
          <Button
            label="Speichern"
            class="!h-[33px] !border-[#10b981] !bg-[#10b981] !px-[11px] !text-sm"
            @click="profileDialogVisible = false"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Tag from 'primevue/tag'

const profileDialogVisible = ref(true)
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const active = ref(true)
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
</script>