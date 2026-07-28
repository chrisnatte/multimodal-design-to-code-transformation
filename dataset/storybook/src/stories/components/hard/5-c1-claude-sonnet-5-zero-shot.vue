<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-500">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="true"
      header="Neues Projekt"
      :style="{ width: '500px' }"
      :draggable="false"
    >
      <template #header>
        <span class="text-lg font-bold text-gray-800">Neues Projekt</span>
      </template>

      <div class="flex flex-col">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">1 - Allgemein</Tab>
            <Tab value="1">2 - Zeitplan</Tab>
            <Tab value="2">3 - Einstellungen</Tab>
          </TabList>
        </Tabs>

        <div class="flex flex-col gap-4 mt-4">
          <div class="flex flex-col gap-2">
            <label for="projektname" class="text-sm text-gray-700">Projektname</label>
            <InputText id="projektname" v-model="projektname" class="w-full" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="kategorie" class="text-sm text-gray-700">Kategorie</label>
            <Dropdown
              id="kategorie"
              v-model="kategorie"
              :options="kategorieOptions"
              optionLabel="label"
              class="w-full"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="verantwortlicher" class="text-sm text-gray-700">Verantwortlicher</label>
            <Dropdown
              id="verantwortlicher"
              v-model="verantwortlicher"
              :options="verantwortlicherOptions"
              optionLabel="name"
              class="w-full"
            >
              <template #value="slotProps">
                <div class="flex items-center gap-2" v-if="slotProps.value">
                  <Avatar :label="slotProps.value.avatar" shape="circle" size="normal" class="bg-gray-200 text-gray-700" />
                  <span>{{ slotProps.value.name }}</span>
                </div>
              </template>
              <template #option="slotProps">
                <div class="flex items-center gap-2">
                  <Avatar :label="slotProps.option.avatar" shape="circle" size="normal" class="bg-gray-200 text-gray-700" />
                  <span>{{ slotProps.option.name }}</span>
                </div>
              </template>
            </Dropdown>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Abbrechen" severity="secondary" text @click="visible = false" />
          <Button label="Weiter" severity="success" @click="onWeiter" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'

const visible = ref(true)
const activeTab = ref('0')

const projektname = ref('')

const kategorieOptions = ref([
  { label: 'Entwicklung' },
  { label: 'Design' },
  { label: 'Marketing' },
])
const kategorie = ref(kategorieOptions.value[0])

const verantwortlicherOptions = ref([
  { name: 'Max Mustmann', avatar: 'M' },
  { name: 'Anna Beispiel', avatar: 'A' },
])
const verantwortlicher = ref(verantwortlicherOptions.value[0])

const onWeiter = () => {
  activeTab.value = '1'
}
</script>