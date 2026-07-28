<template>
  <div class="flex min-h-64 items-start justify-start p-6">
    <div class="relative w-54">
      <Select
        ref="responsibleSelect"
        v-model="selectedResponsible"
        :options="responsibles"
        optionLabel="name"
        placeholder="Verantwortlichen aus."
        filter
        filterPlaceholder="Suche..."
        class="w-full"
      />
      <Button
        v-if="selectedResponsible"
        icon="pi pi-times"
        text
        rounded
        size="small"
        aria-label="Auswahl löschen"
        class="absolute right-7 top-1/2 z-10 -translate-y-1/2"
        @click.stop="selectedResponsible = null"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Select from 'primevue/select'

const responsibleSelect = ref()
const selectedResponsible = ref(null)

const responsibles = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
])

onMounted(() => {
  responsibleSelect.value?.show()
})
</script>