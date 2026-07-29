<template>
  <div class="flex flex-col gap-2.5 bg-white p-6">
    <Select
      ref="responsibleSelect"
      v-model="selectedResponsible"
      :options="responsibles"
      placeholder="Verantwortlichen aus."
      show-clear
      filter
      filter-placeholder="Suche..."
      class="w-[216px]"
      append-to="self"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Select from 'primevue/select'

const selectedResponsible = ref<string | null>(null)
const responsibleSelect = ref<InstanceType<typeof Select> | null>(null)

const responsibles = ref([
  'Max Mustermann',
  'Anna Schmidt',
  'Lisa Weber',
  'Paul Müller',
])

onMounted(() => {
  responsibleSelect.value?.show()
})
</script>