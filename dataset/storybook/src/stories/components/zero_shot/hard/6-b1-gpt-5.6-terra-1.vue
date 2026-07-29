<template>
  <div class="flex w-[264px] flex-col gap-2.5 bg-white p-6">
    <div class="flex w-[216px] flex-col gap-0.5">
      <Select
        ref="selectRef"
        v-model="selectedPerson"
        :options="people"
        optionLabel="name"
        placeholder="Verantwortlichen aus."
        filter
        showClear
        filterPlaceholder="Suche..."
        appendTo="self"
        class="w-full"
        :pt="{
          root: { class: 'h-[33px] border-primary' },
          label: { class: 'py-[7px] pl-[10.5px] text-sm' },
          dropdown: { class: 'w-[35px]' },
          overlay: { class: 'mt-0.5 w-[216px]' },
          header: { class: 'px-[10.5px] pt-[7px] pb-[3.5px]' },
          filter: { class: 'h-[33px] bg-slate-50 text-sm' },
          listContainer: { class: 'p-[3.5px]' },
          list: { class: 'gap-0.5' },
          option: { class: 'min-h-[31px] px-[10.5px] py-[7px] text-sm' }
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Select from 'primevue/select'

const selectRef = ref(null)
const selectedPerson = ref(null)
const people = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
])

onMounted(async () => {
  await nextTick()
  selectRef.value?.show()
})
</script>