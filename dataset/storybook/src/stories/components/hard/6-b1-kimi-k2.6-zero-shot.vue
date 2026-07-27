<template>
  <div class="flex flex-col gap-0.5 w-[216px] bg-white">
    <Select
      v-model="selectedValue"
      :options="options"
      optionLabel="label"
      placeholder="Verantwortlichen aus."
      showClear
      class="w-full"
    >
      <template #header>
        <div class="flex flex-col pt-2 pb-1 px-2.5">
          <IconField iconPosition="right">
            <InputText
              v-model="filterValue"
              placeholder="Suche..."
              class="w-full py-2 px-2.5"
            />
            <InputIcon class="pi pi-search" />
          </IconField>
        </div>
      </template>
    </Select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const selectedValue = ref(null)
const filterValue = ref('')
const options = ref([
  { label: 'Max Mustermann', value: 'Max Mustermann' },
  { label: 'Anna Schmidt', value: 'Anna Schmidt' },
  { label: 'Lisa Weber', value: 'Lisa Weber' },
  { label: 'Paul Müller', value: 'Paul Müller' }
])
</script>