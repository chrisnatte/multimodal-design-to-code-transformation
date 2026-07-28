<template>
  <div class="flex flex-col w-72">
    <IconField>
      <InputText
        :value="selectedPerson?.name"
        readonly
        placeholder="Verantwortlichen aus."
        class="w-full border-green-500 rounded-lg bg-white"
      />
      <InputIcon class="pi pi-times cursor-pointer text-gray-400 hover:text-gray-600" @click="clearSelection" />
      <InputIcon class="pi pi-chevron-down text-gray-400" />
    </IconField>

    <Card class="mt-2 shadow-lg rounded-lg border-0">
      <template #content>
        <div class="flex flex-col gap-3">
          <IconField>
            <InputText
              v-model="searchQuery"
              placeholder="Suche..."
              class="w-full bg-slate-50 rounded-md border-slate-200"
            />
            <InputIcon class="pi pi-search text-slate-400" />
          </IconField>

          <Listbox
            v-model="selectedPerson"
            :options="filteredPeople"
            optionLabel="name"
            class="border-none shadow-none"
            :pt="{
              list: { class: 'p-0' },
              item: { class: 'py-2 px-0 cursor-pointer border-none rounded hover:bg-slate-50' }
            }"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Listbox from 'primevue/listbox'

const selectedPerson = ref(null)
const searchQuery = ref('')

const people = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
])

const filteredPeople = computed(() => {
  if (!searchQuery.value) return people.value
  return people.value.filter(p =>
    p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const clearSelection = () => {
  selectedPerson.value = null
}
</script>