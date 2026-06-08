<template>
  <div class="flex flex-col gap-0.5 bg-white">
    <div class="w-full">
      <Select
        v-model="state.selectedPerson"
        :options="state.people"
        optionLabel="name"
        placeholder="Verantwortlichen aus."
        showClear
        filter
        filterPlaceholder="Suche..."
        class="w-full"
      />
    </div>

    <div class="flex flex-col rounded-md bg-white w-full">
      <div class="flex flex-col px-3 py-2 pb-1">
        <IconField class="w-full">
          <InputText
            v-model="state.search"
            placeholder="Suche..."
            class="w-full"
            variant="filled"
          />
          <InputIcon class="pi pi-search" />
        </IconField>
      </div>

      <div class="flex flex-col gap-0.5 p-1 w-full">
        <Button
          v-for="person in filteredPeople"
          :key="person.name"
          :label="person.name"
          text
          severity="secondary"
          class="justify-start w-full"
          @click="state.selectedPerson = person"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Button from 'primevue/button'

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