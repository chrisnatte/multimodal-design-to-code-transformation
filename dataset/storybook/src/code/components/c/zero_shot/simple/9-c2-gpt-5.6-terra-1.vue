<template>
    <div class="flex w-72 flex-col gap-3 p-6">
        <div v-for="task in tasks" :key="task.id" class="flex items-center justify-between">
            <div class="flex items-center gap-2">
                <Checkbox v-model="task.completed" :inputId="task.id" binary />
                <label :for="task.id" class="text-sm text-slate-600">{{ task.label }}</label>
            </div>
            <Tag :value="task.priority" :severity="task.severity" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const tasks = ref([
    { id: 'task1', label: 'Aufgabe1', priority: 'Hoch', severity: 'danger', completed: false },
    { id: 'task2', label: 'Aufgabe2', priority: 'Niedrig', severity: 'success', completed: false },
    { id: 'task3', label: 'Aufgabe3', priority: 'Mittel', severity: 'warn', completed: false }
]);
</script>