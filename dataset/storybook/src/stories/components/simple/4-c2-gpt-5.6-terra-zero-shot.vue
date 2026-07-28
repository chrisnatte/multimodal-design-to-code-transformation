<template>
    <div class="w-32 bg-white px-6 py-6">
        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option1" name="options" value="Option1" class="radio-green" />
            <label for="option1" class="text-sm text-slate-600">Option1</label>
        </div>

        <Divider class="!my-2" />

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option2" name="options" value="Option2" />
            <label for="option2" class="text-sm text-slate-600">Option2</label>
        </div>

        <Divider class="!my-2" />

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option3" name="options" value="Option3" />
            <label for="option3" class="text-sm text-slate-600">Option3</label>
        </div>

        <Divider class="!my-2" />

        <div class="flex items-center gap-2">
            <RadioButton v-model="selectedOption" inputId="option4" name="options" value="Option4" />
            <label for="option4" class="text-sm text-slate-600">Option4</label>
        </div>
    </div>
</template>

<style scoped>
.radio-green {
    --p-radiobutton-checked-background: #10b981;
    --p-radiobutton-checked-border-color: #10b981;
    --p-radiobutton-checked-hover-background: #059669;
    --p-radiobutton-checked-hover-border-color: #059669;
}
</style>

<script setup>
import { ref } from 'vue';
import Divider from 'primevue/divider';
import RadioButton from 'primevue/radiobutton';

const selectedOption = ref('Option1');
</script>