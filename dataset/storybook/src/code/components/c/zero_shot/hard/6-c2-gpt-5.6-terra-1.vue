<template>
    <div class="flex min-h-64 items-start justify-center bg-white pt-6">
        <Select
            ref="responsibleSelect"
            v-model="selectedResponsible"
            :options="responsibles"
            optionLabel="name"
            filter
            filterPlaceholder="Suche..."
            showClear
            placeholder="Verantwortlichen aus."
            class="w-54"
            aria-label="Verantwortlichen auswählen"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Select from 'primevue/select';

const responsibleSelect = ref(null);
const selectedResponsible = ref({ name: 'Verantwortlichen aus.' });
const responsibles = ref([
    { name: 'Max Mustermann' },
    { name: 'Anna Schmidt' },
    { name: 'Lisa Weber' },
    { name: 'Paul Müller' }
]);

onMounted(() => {
    responsibleSelect.value?.show?.();
});
</script>