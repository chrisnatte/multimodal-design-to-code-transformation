<template>
    <div class="flex min-h-screen items-start justify-center bg-white p-6">
        <div class="w-54">
            <Select
                ref="assigneeSelect"
                v-model="selectedAssignee"
                :options="assignees"
                optionLabel="name"
                placeholder="Verantwortlichen aus."
                showClear
                filter
                filterPlaceholder="Suche..."
                appendTo="self"
                class="w-full"
            />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Select from 'primevue/select';

const assigneeSelect = ref();
const selectedAssignee = ref({ name: 'Verantwortlichen aus.' });
const assignees = ref([
    { name: 'Max Mustermann' },
    { name: 'Anna Schmidt' },
    { name: 'Lisa Weber' },
    { name: 'Paul Müller' }
]);

onMounted(() => {
    assigneeSelect.value?.show();
});
</script>