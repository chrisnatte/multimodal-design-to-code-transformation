<template>
    <div class="flex w-20 flex-col pt-6 pl-6">
        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option1" name="options" value="Option1" size="small" />
            <label for="option1" class="text-sm">Option1</label>
        </div>

        <Divider class="!my-2" />

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option2" name="options" value="Option2" size="small" />
            <label for="option2" class="text-sm">Option2</label>
        </div>

        <Divider class="!my-2" />

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option3" name="options" value="Option3" size="small" />
            <label for="option3" class="text-sm">Option3</label>
        </div>

        <Divider class="!my-2" />

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option4" name="options" value="Option4" size="small" />
            <label for="option4" class="text-sm">Option4</label>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Divider from 'primevue/divider';
import RadioButton from 'primevue/radiobutton';

const selectedOption = ref('Option1');
</script>