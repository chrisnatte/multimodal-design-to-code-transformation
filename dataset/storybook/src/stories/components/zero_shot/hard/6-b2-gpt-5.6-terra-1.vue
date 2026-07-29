<template>
    <div class="flex w-[264px] flex-col gap-2.5 bg-white p-6">
        <div class="flex w-[216px] flex-col gap-0.5">
            <Select
                v-model="selectedAssignee"
                :options="assignees"
                placeholder="Verantwortlichen aus."
                filter
                filterPlaceholder="Suche..."
                showClear
                fluid
                aria-label="Verantwortlichen auswählen"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';

const selectedAssignee = ref(null);

const assignees = ref([
    { name: 'Max Mustermann' },
    { name: 'Anna Schmidt' },
    { name: 'Lisa Weber' },
    { name: 'Paul Müller' }
]);
</script>