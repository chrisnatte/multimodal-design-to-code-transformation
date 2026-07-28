<template>
    <div class="flex w-[304px] flex-col gap-3 bg-white px-6 py-6">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
                <Checkbox v-model="taskOne" inputId="task-one" binary />
                <label for="task-one" class="text-sm text-slate-600">Aufgabe1</label>
            </div>
            <Tag value="Hoch" severity="danger" />
        </div>

        <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
                <Checkbox v-model="taskTwo" inputId="task-two" binary />
                <label for="task-two" class="text-sm text-slate-600">Aufgabe2</label>
            </div>
            <Tag value="Niedrig" severity="success" />
        </div>

        <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
                <Checkbox v-model="taskThree" inputId="task-three" binary />
                <label for="task-three" class="text-sm text-slate-600">Aufgabe3</label>
            </div>
            <Tag value="Mittel" severity="warn" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const taskOne = ref(false);
const taskTwo = ref(false);
const taskThree = ref(false);
</script>