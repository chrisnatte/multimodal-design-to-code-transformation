<template>
  <div class="flex w-[216px] flex-col gap-0.5 bg-white">
    <div class="relative h-[33px] w-full">
      <Select
        v-model="selectedAssignee"
        :options="assignees"
        optionLabel="label"
        optionValue="value"
        placeholder="Verantwortlichen aus."
        class="h-[33px] w-full border-[#10b981] text-sm shadow-none"
        :pt="{
          label: { class: 'flex items-center py-0 pl-[10px] text-sm' },
          dropdown: { class: 'w-[35px]' }
        }"
      />
      <Button
        icon="pi pi-times"
        text
        rounded
        size="small"
        aria-label="Auswahl löschen"
        class="absolute right-[28px] top-1/2 z-10 h-5 w-5 -translate-y-1/2 !p-0 text-slate-500"
        @click="selectedAssignee = null"
      />
    </div>

    <div class="flex w-full flex-col rounded-md border border-slate-200 bg-white">
      <div class="flex flex-col px-[10px] pb-[3px] pt-[7px]">
        <div class="flex h-[33px] overflow-hidden rounded-md border border-slate-300 bg-slate-50">
          <InputText
            v-model="searchTerm"
            placeholder="Suche..."
            class="h-full min-w-0 flex-1 border-0 bg-transparent px-[10px] py-[7px] text-sm shadow-none focus:ring-0"
          />
          <Button
            icon="pi pi-search"
            text
            aria-label="Suchen"
            class="h-full w-[35px] !rounded-none !p-0 text-slate-500"
          />
        </div>
      </div>

      <div class="flex flex-col gap-0.5 px-[3px] pb-[3px] pt-[3px]">
        <Button
          v-for="assignee in filteredAssignees"
          :key="assignee.value"
          :label="assignee.label"
          text
          class="h-[31px] w-full justify-start !rounded-md !px-[10px] !py-[7px] text-left text-sm font-normal text-slate-700"
          @click="selectedAssignee = assignee.value"
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
const searchTerm = ref('')

const assignees = ref([
  { label: 'Max Mustermann', value: 'max-mustermann' },
  { label: 'Anna Schmidt', value: 'anna-schmidt' },
  { label: 'Lisa Weber', value: 'lisa-weber' },
  { label: 'Paul Müller', value: 'paul-mueller' }
])

const filteredAssignees = computed(() => {
  const search = searchTerm.value.trim().toLocaleLowerCase()

  if (!search) {
    return assignees.value
  }

  return assignees.value.filter((assignee) =>
    assignee.label.toLocaleLowerCase().includes(search)
  )
})
</script>