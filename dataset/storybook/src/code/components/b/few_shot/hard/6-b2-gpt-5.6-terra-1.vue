<template>
  <div class="flex w-[264px] flex-col gap-2.5 bg-white p-6">
    <Select
      ref="responsibleSelect"
      v-model="selectedResponsible"
      :options="responsiblePeople"
      option-label="name"
      placeholder="Verantwortlichen aus."
      filter
      filter-placeholder="Suche..."
      show-clear
      fluid
      append-to="self"
      auto-filter-focus
      class="w-[216px]"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Select from 'primevue/select'

const selectedResponsible = ref(null)

const responsiblePeople = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' },
])

const responsibleSelect = ref()

onMounted(() => {
  responsibleSelect.value?.show()
})
</script>