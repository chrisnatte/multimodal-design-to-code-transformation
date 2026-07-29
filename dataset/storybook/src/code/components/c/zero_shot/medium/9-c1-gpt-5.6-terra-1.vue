<template>
    <div class="w-full max-w-[592px] min-h-[263px] bg-white px-6 py-9">
        <div class="flex items-center border-b border-surface-200">
            <button
                v-for="(step, index) in steps"
                :key="step"
                type="button"
                class="border-0 bg-transparent px-4 pb-3 pt-0 text-sm font-semibold"
                :class="index === activeStep ? 'border-b-2 border-emerald-500 text-emerald-500' : 'text-surface-500'"
                @click="activeStep = index"
            >
                {{ step }}
            </button>
        </div>

        <div class="flex flex-col gap-3 px-4 py-3">
            <div v-for="option in options" :key="option" class="flex items-center gap-2">
                <RadioButton v-model="selectedOption" :input-id="option" name="option" :value="option" />
                <label :for="option" class="text-sm text-surface-700">{{ option }}</label>
            </div>
        </div>

        <div class="mt-3 flex justify-end px-4">
            <Button label="Weiter" outlined severity="success" size="small" @click="activeStep = Math.min(activeStep + 1, steps.length - 1)" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import RadioButton from 'primevue/radiobutton'

const activeStep = ref(0)
const selectedOption = ref(null)

const steps = ref(['Schritt 1', 'Schritt 2', 'Schritt 3'])
const options = ref(['Option1', 'Option2', 'Option3'])
</script>