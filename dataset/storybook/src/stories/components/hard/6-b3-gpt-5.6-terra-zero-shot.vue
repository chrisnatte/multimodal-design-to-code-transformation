<template>
  <div class="flex w-[216px] flex-col gap-0.5 bg-white">
    <Select
      v-model="selectedAssignee"
      :options="assignees"
      placeholder="Verantwortlichen aus."
      showClear
      fluid
      class="h-[33px] w-full"
      aria-label="Verantwortlichen auswählen"
    />

    <div class="flex w-full flex-col rounded-md border border-slate-200 bg-white">
      <div class="flex flex-col px-[10.5px] pb-[3.5px] pt-[7px]">
        <div class="relative flex items-center">
          <InputText
            v-model="searchQuery"
            placeholder="Suche..."
            variant="filled"
            fluid
            class="h-[33px] pr-9"
            aria-label="Verantwortliche suchen"
          />
          <Button
            icon="pi pi-search"
            text
            rounded
            severity="secondary"
            class="absolute right-1 h-7 w-7"
            aria-label="Suchen"
          />
        </div>
      </div>

      <div class="flex flex-col gap-0.5 px-[3.5px] pb-[3.5px] pt-[3.5px]">
        <Button
          v-for="assignee in filteredAssignees"
          :key="assignee"
          :label="assignee"
          text
          severity="secondary"
          class="h-[31px] w-full justify-start px-[10.5px] text-left text-sm"
          @click="selectedAssignee = assignee"
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

const selectedAssignee = ref(null)
const searchQuery = ref('')
const assignees = ref([
  'Max Mustermann',
  'Anna Schmidt',
  'Lisa Weber',
  'Paul Müller'
])

const filteredAssignees = computed(() => {
  const query = searchQuery.value.trim().toLocaleLowerCase()

  if (!query) {
    return assignees.value
  }

  return assignees.value.filter((assignee) =>
    assignee.toLocaleLowerCase().includes(query)
  )
})
</script>