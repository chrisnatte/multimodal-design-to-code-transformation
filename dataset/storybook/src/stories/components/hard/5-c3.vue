<template>
  <div class="min-h-screen bg-black/40 flex items-center justify-center p-6">
    <Dialog
      v-model:visible="state.visible"
      modal
      :closable="false"
      :draggable="false"
      :style="{ width: '540px' }"
      class="rounded-xl"
      :pt="{
        root: { class: 'rounded-xl overflow-hidden' },
        content: { class: 'pt-0 pb-4' },
        mask: { class: 'backdrop-blur-[1px]' }
      }"
    >
      <div class="flex flex-col gap-5">
        <div class="flex items-center justify-between pt-1">
          <h2 class="text-3xl font-semibold text-slate-700">Neues Projekt</h2>
          <Button
            icon="pi pi-times"
            text
            rounded
            severity="secondary"
            @click="state.visible = false"
          />
        </div>

        <Tabs v-model:value="state.activeTab" class="w-full">
          <TabList>
            <Tab value="1">1 - Allgemein</Tab>
            <Tab value="2">2 - Zeitplan</Tab>
            <Tab value="3">3 - Einstellungen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="1">
              <div class="flex flex-col gap-4 pt-2">
                <div class="flex flex-col gap-2">
                  <label for="projektname" class="text-2xl text-slate-700">Projektname</label>
                  <InputText id="projektname" v-model="state.projektname" />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="kategorie" class="text-2xl text-slate-700">Kategorie</label>
                  <Select
                    id="kategorie"
                    v-model="state.kategorie"
                    :options="kategorieOptions"
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Kategorie wählen"
                    class="w-full"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="verantwortlicher" class="text-2xl text-slate-700">Verantwortlicher</label>
                  <Select
                    id="verantwortlicher"
                    v-model="state.verantwortlicher"
                    :options="verantwortlicheOptions"
                    optionLabel="name"
                    optionValue="id"
                    class="w-full"
                  >
                    <template #value="slotProps">
                      <div v-if="slotProps.value" class="flex items-center gap-2">
                        <Avatar
                          :label="selectedUserInitial"
                          shape="circle"
                          class="bg-slate-200 text-slate-600"
                          size="normal"
                        />
                        <span>{{ selectedUserName }}</span>
                      </div>
                      <span v-else class="text-slate-400">Verantwortlicher wählen</span>
                    </template>
                    <template #option="slotProps">
                      <div class="flex items-center gap-2">
                        <Avatar
                          :label="slotProps.option.name.charAt(0)"
                          shape="circle"
                          class="bg-slate-200 text-slate-600"
                          size="normal"
                        />
                        <span>{{ slotProps.option.name }}</span>
                      </div>
                    </template>
                  </Select>
                </div>
              </div>
            </TabPanel>

            <TabPanel value="2">
              <div class="py-4 text-slate-500">Zeitplan</div>
            </TabPanel>

            <TabPanel value="3">
              <div class="py-4 text-slate-500">Einstellungen</div>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <div class="flex justify-end gap-3 pt-2">
          <Button
            label="Abbrechen"
            severity="secondary"
            @click="state.visible = false"
          />
          <Button
            label="Weiter"
            @click="state.activeTab = '2'"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Avatar from 'primevue/avatar'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const state = reactive({
  visible: true,
  activeTab: '1',
  projektname: '',
  kategorie: 'entwicklung',
  verantwortlicher: 1
})

const kategorieOptions = [
  { label: 'Entwicklung', value: 'entwicklung' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Design', value: 'design' }
]

const verantwortlicheOptions = [
  { id: 1, name: 'Max Mustmann' },
  { id: 2, name: 'Anna Meyer' },
  { id: 3, name: 'Lukas Weber' }
]

const selectedUser = computed(() =>
  verantwortlicheOptions.find((u) => u.id === state.verantwortlicher)
)

const selectedUserName = computed(() => selectedUser.value?.name || '')
const selectedUserInitial = computed(() => selectedUser.value?.name?.charAt(0) || '')
</script>