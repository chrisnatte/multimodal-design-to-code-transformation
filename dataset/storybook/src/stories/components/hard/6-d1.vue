<template>
  <div class="w-[265px] h-[266px] bg-white p-6">
    <div class="flex flex-col gap-1">
      <div class="relative">
        <Dropdown
          v-model="state.selected"
          :options="state.people"
          optionLabel="name"
          placeholder="Verantwortlichen aus."
          class="w-full"
          showClear
        />
      </div>

      <div class="bg-white border border-slate-200 rounded-md shadow-md p-2">
        <div class="pb-1">
          <IconField class="w-full">
            <InputText
              v-model="state.search"
              placeholder="Suche..."
              class="w-full bg-slate-50"
            />
            <InputIcon class="pi pi-search" />
          </IconField>
        </div>

        <div class="flex flex-col gap-0.5 pt-1">
          <Button
            v-for="person in filteredPeople"
            :key="person.name"
            :label="person.name"
            text
            severity="secondary"
            class="!justify-start !px-2 !py-1 !text-slate-700 hover:!bg-slate-100"
            @click="state.selected = person"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Button from 'primevue/button'

const state = reactive({
  selected: null,
  search: '',
  people: [
    { name: 'Max Mustermann' },
    { name: 'Anna Schmidt' },
    { name: 'Lisa Weber' },
    { name: 'Paul Müller' }
  ]
})

const filteredPeople = computed(() =>
  state.people.filter((p) =>
    p.name.toLowerCase().includes(state.search.toLowerCase())
  )
)
</script>