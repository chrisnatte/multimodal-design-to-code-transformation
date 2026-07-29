<template>
    <div class="flex w-[264px] flex-col gap-2.5 bg-white p-6">
        <Select
            ref="selectRef"
            v-model="selectedAssignee"
            :options="assignees"
            optionLabel="name"
            placeholder="Verantwortlichen aus."
            filter
            showClear
            size="small"
            appendTo="self"
            class="w-[216px]"
            :pt="{
                root: { class: 'border-emerald-500' },
                overlay: { class: 'mt-0.5 w-[216px]' },
                header: { class: 'p-[10px] pb-[4px]' },
                filterContainer: { class: 'w-full' },
                filterInput: { class: 'w-full bg-slate-50 text-sm' },
                listContainer: { class: 'p-[3px]' },
                list: { class: 'gap-0.5' },
                option: { class: 'px-[10px] py-[7px] text-sm' }
            }"
        >
            <template #value>
                <span class="text-sm text-slate-500">Verantwortlichen aus.</span>
            </template>

            <template #filtericon>
                <i class="pi pi-search text-sm text-slate-400" />
            </template>
        </Select>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Select from 'primevue/select';

const assignees = ref([
    { name: 'Max Mustermann' },
    { name: 'Anna Schmidt' },
    { name: 'Lisa Weber' },
    { name: 'Paul Müller' }
]);

const selectedAssignee = ref(assignees.value[0]);
const selectRef = ref(null);

onMounted(() => {
    selectRef.value?.show();
});
</script>