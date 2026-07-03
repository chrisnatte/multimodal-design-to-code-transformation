<template>
  <div class="w-[288px] h-[266px] bg-[#f3f4f6] p-6">
    <div class="flex flex-col gap-2">
      <Select
        v-model="state.selectedPerson"
        :options="state.people"
        optionLabel="name"
        placeholder="Verantwortlichen aus."
        class="w-full"
      >
        <template #dropdownicon>
          <span class="pi pi-chevron-down text-slate-500 text-sm"></span>
        </template>
        <template #clearicon>
          <span class="pi pi-times text-slate-400 text-sm"></span>
        </template>
      </Select>

      <Card class="shadow-md rounded-md">
        <template #content>
          <div class="flex flex-col gap-3 p-0">
            <IconField iconPosition="right">
              <InputText
                v-model="state.search"
                placeholder="Suche..."
                class="w-full"
              />
              <InputIcon class="pi pi-search text-slate-400" />
            </IconField>

            <div class="flex flex-col gap-3 text-[28px] leading-none">
              <div
                v-for="person in filteredPeople"
                :key="person.id"
                class="text-slate-700 text-[30px] leading-none cursor-pointer"
                @click="state.selectedPerson = person"
              >
                {{ person.name }}
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import Select from 'primevue/select'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const state = reactive({
  search: '',
  selectedPerson: null,
  people: [
    { id: 1, name: 'Max Mustermann' },
    { id: 2, name: 'Anna Schmidt' },
    { id: 3, name: 'Lisa Weber' },
    { id: 4, name: 'Paul Müller' }
  ]
})

const filteredPeople = computed(() => {
  const term = state.search.trim().toLowerCase()
  if (!term) return state.people
  return state.people.filter((p) => p.name.toLowerCase().includes(term))
})
</script>