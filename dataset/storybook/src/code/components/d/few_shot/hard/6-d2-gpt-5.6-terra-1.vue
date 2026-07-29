<template>
  <div class="flex w-[264px] flex-col gap-2.5 bg-white p-6">
    <Select
      ref="assigneeSelect"
      v-model="selectedAssignee"
      :options="assignees"
      placeholder="Verantwortlichen aus."
      filter
      show-clear
      fluid
      aria-label="Verantwortlichen auswählen"
      :pt="{
        root: 'h-[33px] border-emerald-500',
        label: 'text-sm py-[7px] pl-[10.5px]',
        dropdown: 'w-[35px]',
        overlay: 'mt-0.5 border border-slate-200 shadow-md',
        header: 'px-[10.5px] pt-[7px] pb-[3.5px]',
        pcFilter: {
          root: 'h-[33px] bg-slate-50 border-slate-300 text-sm',
        },
        list: 'gap-0.5 px-[3.5px] pt-[3.5px] pb-[3.5px]',
        option: 'h-[31px] px-[10.5px] py-[7px] text-sm',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Select from 'primevue/select'

const selectedAssignee = ref<string | null>(null)
const assigneeSelect = ref<InstanceType<typeof Select> | null>(null)

const assignees = [
  'Max Mustermann',
  'Anna Schmidt',
  'Lisa Weber',
  'Paul Müller',
]

onMounted(() => {
  assigneeSelect.value?.show()
})
</script>