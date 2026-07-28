<template>
  <div class="flex w-[216px] flex-col gap-0.5 bg-white font-[Inter]">
    <div class="relative">
      <Select
        v-model="selectedResponsible"
        :options="responsibles"
        placeholder="Verantwortlichen aus."
        showClear
        fluid
        class="h-[33px] text-sm"
        :pt="{
          root: { class: 'border-[#10b981] ring-0' },
          label: { class: 'py-0 pl-2.5 text-[#64748b]' },
          dropdown: { class: 'w-[35px]' }
        }"
      />
      <Button
        v-if="!selectedResponsible"
        icon="pi pi-times"
        text
        rounded
        size="small"
        aria-label="Auswahl löschen"
        class="absolute right-[29px] top-1/2 z-10 h-5 w-5 -translate-y-1/2 !p-0 !text-[#94a3b8]"
        @click.stop="selectedResponsible = null"
      />
    </div>

    <div class="flex flex-col rounded-md border border-[#e2e8f0] bg-white shadow-md">
      <div class="flex flex-col px-2.5 pb-[3px] pt-[7px]">
        <div class="relative">
          <InputText
            v-model="searchQuery"
            placeholder="Suche..."
            variant="filled"
            fluid
            class="h-[33px] border-[#cbd5e1] bg-[#f8fafc] pr-9 text-sm"
          />
          <Button
            icon="pi pi-search"
            text
            rounded
            size="small"
            aria-label="Suchen"
            class="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 !p-0 !text-[#94a3b8]"
          />
        </div>
      </div>

      <div class="flex flex-col gap-0.5 px-[3px] pb-[3px] pt-[3px]">
        <Button
          v-for="responsible in filteredResponsibles"
          :key="responsible"
          :label="responsible"
          text
          severity="secondary"
          class="h-[31px] justify-start !rounded-md !px-2.5 !py-[7px] !text-left !text-sm !font-normal !text-[#334155]"
          @click="selectedResponsible = responsible"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const selectedResponsible = ref(null)
const searchQuery = ref('')

const responsibles = ref([
  'Max Mustermann',
  'Anna Schmidt',
  'Lisa Weber',
  'Paul Müller'
])

const filteredResponsibles = computed(() => {
  const query = searchQuery.value.trim().toLocaleLowerCase()

  if (!query) {
    return responsibles.value
  }

  return responsibles.value.filter((responsible) =>
    responsible.toLocaleLowerCase().includes(query)
  )
})
</script>