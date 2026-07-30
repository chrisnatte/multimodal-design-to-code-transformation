<template>
  <div class="min-h-[1080px] w-full bg-white">
    <div class="flex min-h-[1080px] w-full flex-col items-center justify-center bg-black py-[280px]">
      <div
        v-if="dialogVisible"
        class="flex w-[512px] flex-col rounded-xl border border-[#e2e8f0] bg-white"
      >
        <div class="flex h-16 items-center gap-4 px-[17.5px] py-[17.5px]">
          <div class="flex flex-1 items-center justify-between gap-16">
            <div class="flex items-center gap-3">
              <Avatar label="M" shape="circle" class="h-7 w-7 bg-[#e2e8f0] text-sm text-slate-900" />
              <div class="flex flex-col">
                <span class="text-sm leading-[17px] text-slate-900">Max Mustermann</span>
                <span class="text-[10px] font-light leading-3 text-slate-700">Manager</span>
              </div>
            </div>
            <Tag value="Aktiv" severity="primary" class="text-[12.25px]" />
          </div>

          <div class="flex w-[35px] flex-col gap-[7px]">
            <Button
              icon="pi pi-times"
              severity="secondary"
              text
              aria-label="Schließen"
              class="h-7 w-[35px]"
              @click="dialogVisible = false"
            />
          </div>
        </div>

        <div class="flex flex-col gap-[7px] px-[17.5px] pb-[17.5px]">
          <Tabs v-model:value="activeTab" class="w-full">
            <TabList class="flex h-[46px] border-b border-[#e2e8f0] bg-white">
              <Tab value="personal" class="px-[15.75px] text-sm font-bold">
                Persönliche Daten
              </Tab>
              <Tab value="settings" class="px-[15.75px] text-sm font-bold">
                Einstellungen
              </Tab>
            </TabList>

            <TabPanels class="bg-white px-1 pb-[15.75px] pt-[12.25px]">
              <TabPanel value="personal">
                <div class="flex flex-col gap-4">
                  <div class="flex flex-col gap-[7px]">
                    <label for="name" class="text-sm leading-[21px] text-slate-900">Name</label>
                    <InputText
                      id="name"
                      v-model="name"
                      class="h-[33px] w-full text-sm"
                      placeholder="Name eingeben"
                    />
                  </div>

                  <div class="flex flex-col gap-[7px]">
                    <label for="email" class="text-sm leading-[21px] text-slate-900">E-Mail</label>
                    <InputText
                      id="email"
                      v-model="email"
                      type="email"
                      class="h-[33px] w-full text-sm"
                      placeholder="Name eingeben"
                    />
                  </div>

                  <div class="flex flex-col gap-0.5">
                    <label for="role" class="text-sm leading-[21px] text-slate-900">Rolle</label>
                    <Select
                      ref="roleSelect"
                      input-id="role"
                      v-model="role"
                      :options="roles"
                      option-label="label"
                      option-value="value"
                      class="h-[33px] w-full text-sm"
                    />
                  </div>

                  <div class="flex items-center gap-[7px]">
                    <Checkbox v-model="isActive" input-id="active" binary />
                    <label for="active" class="text-sm leading-[17px] text-slate-900">Ist aktiv</label>
                  </div>
                </div>
              </TabPanel>

              <TabPanel value="settings">
                <div class="min-h-[356px]"></div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>

        <div class="flex items-center justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
          <Button label="Abbrechen" severity="secondary" @click="dialogVisible = false" />
          <Button label="Speichern" severity="primary" @click="saveProfile" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Tag from 'primevue/tag'

const dialogVisible = ref(true)
const activeTab = ref('personal')
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('manager')
const isActive = ref(true)
const roleSelect = ref(null)

const roles = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'mitarbeiter' },
  { label: 'Kunde', value: 'kunde' }
])

const saveProfile = () => {
  dialogVisible.value = false
}

onMounted(() => {
  roleSelect.value?.show()
})
</script>