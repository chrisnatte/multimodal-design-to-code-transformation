<template>
    <div class="flex w-[304px] flex-col bg-white p-6">
        <div class="flex w-64 flex-col gap-3">
            <div class="flex h-[22px] items-center gap-3">
                <div class="flex flex-1 items-center gap-2">
                    <Checkbox v-model="taskOneChecked" inputId="task-one" binary variant="filled" />
                    <label for="task-one" class="text-sm font-normal text-slate-700">Aufgabe1</label>
                </div>
                <Tag value="Hoch" severity="danger" rounded />
            </div>

            <div class="flex h-[22px] items-center gap-3">
                <div class="flex flex-1 items-center gap-2">
                    <Checkbox v-model="taskTwoChecked" inputId="task-two" binary variant="filled" />
                    <label for="task-two" class="text-sm font-normal text-slate-700">Aufgabe2</label>
                </div>
                <Tag value="Niedrig" severity="success" rounded />
            </div>

            <div class="flex h-[22px] items-center gap-3">
                <div class="flex flex-1 items-center gap-2">
                    <Checkbox v-model="taskThreeChecked" inputId="task-three" binary variant="filled" />
                    <label for="task-three" class="text-sm font-normal text-slate-700">Aufgabe3</label>
                </div>
                <Tag value="Mittel" severity="warn" rounded />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const taskOneChecked = ref(false)
const taskTwoChecked = ref(false)
const taskThreeChecked = ref(false)
</script>