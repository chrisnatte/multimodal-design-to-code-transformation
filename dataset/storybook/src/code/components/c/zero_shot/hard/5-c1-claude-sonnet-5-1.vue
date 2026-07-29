<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="true"
      :draggable="false"
      header="Neues Projekt"
      class="w-[540px]"
    >
      <template #header>
        <span class="text-lg font-semibold text-gray-800">Neues Projekt</span>
      </template>

      <div class="flex flex-col">
        <div class="flex gap-6 border-b border-gray-200 mb-6">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTab = index"
            class="pb-3 text-sm font-medium"
            :class="activeTab === index
              ? 'text-green-500 border-b-2 border-green-500'
              : 'text-gray-500'"
          >
            {{ tab }}
          </button>
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm text-gray-700">Projektname</label>
            <InputText v-model="projektname" class="w-full" />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm text-gray-700">Kategorie</label>
            <Dropdown
              v-model="kategorie"
              :options="kategorieOptions"
              optionLabel="label"
              class="w-full"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm text-gray-700">Verantwortlicher</label>
            <Dropdown
              v-model="verantwortlicher"
              :options="verantwortlicherOptions"
              optionLabel="label"
              class="w-full"
            >
              <template #value="slotProps">
                <div class="flex items-center gap-2" v-if="slotProps.value">
                  <Avatar :label="slotProps.value.initial" shape="circle" size="normal" class="bg-gray-200 text-gray-700" />
                  <span>{{ slotProps.value.label }}</span>
                </div>
              </template>
              <template #option="slotProps">
                <div class="flex items-center gap-2">
                  <Avatar :label="slotProps.option.initial" shape="circle" size="normal" class="bg-gray-200 text-gray-700" />
                  <span>{{ slotProps.option.label }}</span>
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
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'

const visible = ref(true)
const activeTab = ref(0)
const tabs = ['1 - Allgemein', '2 - Zeitplan', '3 - Einstellungen']

const projektname = ref('')

const kategorieOptions = ref([
  { label: 'Entwicklung' },
  { label: 'Design' },
  { label: 'Marketing' },
])
const kategorie = ref(kategorieOptions.value[0])

const verantwortlicherOptions = ref([
  { label: 'Max Mustmann', initial: 'M' },
  { label: 'Anna Beispiel', initial: 'A' },
])
const verantwortlicher = ref(verantwortlicherOptions.value[0])

const onWeiter = () => {
  activeTab.value = Math.min(activeTab.value + 1, tabs.length - 1)
}
</script>