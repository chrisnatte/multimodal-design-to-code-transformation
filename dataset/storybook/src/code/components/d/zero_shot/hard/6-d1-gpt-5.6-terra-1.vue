<template>
  <div class="flex h-[265px] w-[264px] flex-col bg-white p-6 font-[Inter,Arial,sans-serif]">
    <div class="flex w-[216px] flex-col gap-0.5">
      <div
        class="flex h-[33px] items-center overflow-hidden rounded-md border border-[#10b981] bg-white"
      >
        <InputText
          v-model="selectedAssignee"
          placeholder="Verantwortlichen aus."
          readonly
          class="h-full min-w-0 flex-1 !rounded-none !border-0 !bg-transparent !px-[10px] !py-[7px] !text-sm !text-slate-700 !shadow-none focus:!ring-0"
        />
        <Button
          icon="pi pi-times"
          text
          rounded
          aria-label="Auswahl löschen"
          class="!h-[31px] !w-[29px] !rounded-none !p-0 !text-[#7890af] hover:!bg-transparent"
          @click="selectedAssignee = ''"
        />
        <Button
          icon="pi pi-chevron-down"
          text
          aria-label="Auswahl öffnen"
          class="!h-[31px] !w-[35px] !rounded-none !p-0 !text-[#7890af] hover:!bg-transparent"
          @click="isOpen = !isOpen"
        />
      </div>

      <div
        v-if="isOpen"
        class="flex h-[183px] flex-col overflow-hidden rounded-md border border-[#e2e8f0] bg-white shadow-md"
      >
        <div class="flex h-[44px] flex-col px-[10px] pb-[3px] pt-[7px]">
          <div class="relative">
            <InputText
              v-model="searchQuery"
              placeholder="Suche..."
              class="h-[33px] w-full !rounded-md !border-[#cbd5e1] !bg-[#f8fbfe] !px-[10px] !py-[7px] !pr-9 !text-sm !text-slate-700"
            />
            <i
              class="pi pi-search pointer-events-none absolute right-[11px] top-1/2 -translate-y-1/2 text-sm text-[#7890af]"
            />
          </div>
        </div>

        <div class="flex flex-1 flex-col gap-0.5 px-[3px] pb-[3px] pt-[3px]">
          <Button
            v-for="assignee in filteredAssignees"
            :key="assignee"
            :label="assignee"
            text
            class="!h-[31px] !w-full !justify-start !rounded-md !px-[10px] !py-[7px] !text-left !text-sm !font-normal !text-slate-700 hover:!bg-slate-100"
            @click="selectedAssignee = assignee"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const selectedAssignee = ref('')
const searchQuery = ref('')
const isOpen = ref(true)

const assignees = ref([
  'Max Mustermann',
  'Anna Schmidt',
  'Lisa Weber',
  'Paul Müller'
])

const filteredAssignees = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  if (!query) {
    return assignees.value
  }

  return assignees.value.filter((assignee) =>
    assignee.toLowerCase().includes(query)
  )
})
</script>