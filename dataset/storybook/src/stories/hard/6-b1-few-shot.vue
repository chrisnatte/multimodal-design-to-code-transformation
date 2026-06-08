<template>
  <div class="flex flex-col gap-0.5">
    <Select
      v-model="form.selectedPerson"
      :options="people"
      optionLabel="name"
      placeholder="Verantwortlichen aus."
      showClear
      class="w-full"
    />

    <div class="flex flex-col rounded-md">
      <div class="flex flex-col px-2.5 pt-2 pb-1">
        <IconField iconPosition="right">
          <InputText v-model="form.search" placeholder="Suche..." class="w-full" />
          <InputIcon class="pi pi-search" />
        </IconField>
      </div>

      <div class="flex flex-col gap-0.5 p-1">
        <Button label="🇺🇸 Max Mustermann" text severity="secondary" class="justify-start" />
        <Button label="🇺🇸 Anna Schmidt" text severity="secondary" class="justify-start" />
        <Button label="🇺🇸 Lisa Weber" text severity="secondary" class="justify-start" />
        <Button label="🇺🇸 Paul Müller" text severity="secondary" class="justify-start" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Button from 'primevue/button'

const form = reactive({
  selectedPerson: null,
  search: '',
})

const people = reactive([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' },
])
</script>