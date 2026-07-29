<template>
  <div class="flex flex-col gap-2.5 bg-white p-6">
    <Select
      ref="responsibleSelect"
      v-model="selectedResponsible"
      :options="responsiblePeople"
      placeholder="Verantwortlichen aus."
      filter
      show-clear
      filter-placeholder="Suche..."
      class="w-[216px]"
      :pt="{
        root: 'h-[33px] border-primary',
        label: 'py-1.5 pl-2.5 text-sm',
        dropdown: 'w-[35px]',
        overlay: 'mt-0.5 w-[216px]',
        header: 'p-2.5 pb-1',
        filter: 'h-[33px] bg-surface-50 text-sm',
        listContainer: 'p-1',
        option: 'px-2.5 py-1.5 text-sm',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'
import Select from 'primevue/select'

const selectedResponsible = ref<string | null>(null)
const responsibleSelect = useTemplateRef('responsibleSelect')

const responsiblePeople = ref([
  'Max Mustermann',
  'Anna Schmidt',
  'Lisa Weber',
  'Paul Müller',
])

onMounted(() => {
  responsibleSelect.value?.show()
})
</script>