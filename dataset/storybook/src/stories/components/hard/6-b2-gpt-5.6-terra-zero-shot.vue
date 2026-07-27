<template>
    <div class="flex w-[216px] flex-col gap-[2px] bg-white">
        <Select
            ref="selectRef"
            v-model="selectedResponsible"
            :options="responsibles"
            optionLabel="name"
            placeholder="Verantwortlichen aus."
            filter
            filterPlaceholder="Suche..."
            showClear
            appendTo="self"
            class="h-[33px] w-[216px]"
            aria-label="Verantwortlichen auswählen"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Select from 'primevue/select';

const selectRef = ref(null);
const selectedResponsible = ref(null);
const responsibles = ref([
    { name: 'Max Mustermann' },
    { name: 'Anna Schmidt' },
    { name: 'Lisa Weber' },
    { name: 'Paul Müller' }
]);

onMounted(() => {
    selectRef.value?.show?.();
});
</script>