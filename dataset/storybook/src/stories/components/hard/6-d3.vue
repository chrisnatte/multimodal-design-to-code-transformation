<template>
  <div class="w-[264px] h-[266px] bg-white p-6">
    <div class="flex flex-col gap-1">
      <Select
        v-model="state.selectedPerson"
        :options="state.people"
        optionLabel="name"
        placeholder="Verantwortlichen aus."
        showClear
        class="w-full"
      />
      <div class="rounded-md border border-slate-200 bg-white shadow-md overflow-hidden">
        <div class="p-2 pb-1">
          <IconField>
            <InputText
              v-model="state.search"
              placeholder="Suche..."
              class="w-full"
            />
            <InputIcon class="pi pi-search" />
          </IconField>
        </div>
        <div class="flex flex-col gap-0.5 p-1">
          <Button
            v-for="person in filteredPeople"
            :key="person.name"
            :label="person.name"
            text
            severity="secondary"
            class="justify-start !px-2 !py-2 !text-slate-700"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const state = reactive({
  selectedPerson: null,
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