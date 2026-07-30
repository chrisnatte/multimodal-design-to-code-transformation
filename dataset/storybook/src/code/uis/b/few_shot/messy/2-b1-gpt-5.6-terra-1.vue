<template>
  <div class="flex min-h-screen items-center justify-center bg-black">
    <Dialog
      v-model:visible="profileDialogVisible"
      modal
      :closable="false"
      :draggable="false"
      :pt="{
        root: 'w-full max-w-[512px] overflow-visible rounded-xl border border-slate-200',
        header: '!p-0',
        content: '!overflow-visible !p-0',
        footer: '!p-0',
      }"
    >
      <template #header>
        <div class="flex w-full items-center justify-between px-[17.5px] py-[17.5px]">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-900" />
            <div class="flex flex-col">
              <span class="text-sm">Max Mustermann</span>
              <span class="text-[10px] font-light">Manager</span>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <Tag value="Aktiv" severity="success" class="!px-2 !py-1 !text-xs !font-bold" />
            <Button
              icon="pi pi-times"
              severity="secondary"
              text
              aria-label="Schließen"
              class="!h-7 !w-[35px]"
              @click="profileDialogVisible = false"
            />
          </div>
        </div>
      </template>

      <div class="px-[17.5px]">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="personal" class="!px-4 !py-3.5 !text-sm !font-bold">
              Persönliche Daten
            </Tab>
            <Tab value="settings" class="!px-4 !py-3.5 !text-sm !font-bold">
              Einstellungen
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel value="personal" class="!px-1 !pt-3 !pb-4">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-1.5">
                  <label for="profile-name" class="text-sm">Name</label>
                  <InputText v-model="name" input-id="profile-name" class="w-full" />
                </div>

                <div class="flex flex-col gap-1.5">
                  <label for="profile-email" class="text-sm">E-Mail</label>
                  <InputText v-model="email" input-id="profile-email" type="email" class="w-full" />
                </div>

                <div class="flex flex-col gap-1.5">
                  <label for="profile-role" class="text-sm">Rolle</label>
                  <Select
                    ref="roleSelect"
                    v-model="role"
                    input-id="profile-role"
                    :options="roles"
                    class="w-full"
                  />
                </div>

                <div class="flex items-center gap-2">
                  <Checkbox v-model="isActive" input-id="profile-active" binary />
                  <label for="profile-active" class="text-sm">Ist aktiv</label>
                </div>
              </div>
            </TabPanel>

            <TabPanel value="settings" class="!px-1 !pt-3 !pb-4">
              <span class="text-sm">Einstellungen</span>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <template #footer>
        <div class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
          <Button
            label="Abbrechen"
            severity="secondary"
            @click="profileDialogVisible = false"
          />
          <Button label="Speichern" severity="primary" @click="profileDialogVisible = false" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
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
const activeTab = ref('personal')
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const isActive = ref(true)
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
const roleSelect = ref<InstanceType<typeof Select> | null>(null)

onMounted(async () => {
  await nextTick()
  roleSelect.value?.show()
})
</script>