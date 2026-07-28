<template>
    <div class="w-32 bg-white px-6 pt-6">
        <div class="flex h-4 items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option1" name="options" value="Option1" />
            <label for="option1" class="text-sm text-slate-700">Option1</label>
        </div>

        <Divider class="my-3" />

        <div class="flex h-4 items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option2" name="options" value="Option2" />
            <label for="option2" class="text-sm text-slate-700">Option2</label>
        </div>

        <Divider class="my-3" />

        <div class="flex h-4 items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option3" name="options" value="Option3" />
            <label for="option3" class="text-sm text-slate-700">Option3</label>
        </div>

        <Divider class="my-3" />

        <div class="flex h-4 items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option4" name="options" value="Option4" />
            <label for="option4" class="text-sm text-slate-700">Option4</label>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Divider from 'primevue/divider';
import RadioButton from 'primevue/radiobutton';

const selectedOption = ref('Option1');
</script>