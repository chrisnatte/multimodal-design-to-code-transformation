<template>
  <div class="relative flex w-[216px] flex-col gap-0.5 bg-white font-sans">
    <Select
      ref="selectRef"
      v-model="selectedPerson"
      :options="people"
      optionLabel="name"
      placeholder="Verantwortlichen aus."
      showClear
      filter
      filterPlaceholder="Suche..."
      appendTo="self"
      size="small"
      class="w-full"
      :pt="{
        root: { class: 'border-[#10b981] shadow-none' },
        label: { class: 'text-sm text-slate-500' },
        overlay: { class: 'mt-0.5 w-[216px] rounded-md border border-slate-200 shadow-md' },
        header: { class: 'px-2.5 pt-[7px] pb-[3px]' },
        pcFilter: {
          root: {
            class:
              'h-[33px] w-full rounded-md border border-slate-300 bg-slate-50 px-2.5 py-[7px] text-sm shadow-none'
          }
        },
        pcFilterIconContainer: { class: 'text-slate-400' },
        listContainer: { class: 'p-[3px]' },
        list: { class: 'gap-0.5' },
        option: { class: 'h-[31px] px-2.5 py-[7px] text-sm text-slate-700' }
      }"
    />
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Select from 'primevue/select';

const selectRef = ref();
const selectedPerson = ref(null);
const people = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
]);

onMounted(async () => {
  await nextTick();
  selectRef.value?.show?.();
});
</script>