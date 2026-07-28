<template>
  <div class="flex flex-col gap-6 p-6 max-w-2xl">
    <Steps :model="steps" :activeStep="activeStep" class="w-full" />

    <div class="flex flex-col gap-3 pl-2">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option1" name="options" value="Option1" />
        <label for="option1" class="text-gray-700 cursor-pointer">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option2" name="options" value="Option2" />
        <label for="option2" class="text-gray-700 cursor-pointer">Option2</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option3" name="options" value="Option3" />
        <label for="option3" class="text-gray-700 cursor-pointer">Option3</label>
      </div>
    </div>

    <div class="flex justify-end">
      <Button label="Weiter" severity="success" outlined @click="handleNext" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Steps from 'primevue/steps'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const activeStep = ref(0)
const selectedOption = ref('')

const steps = ref([
  { label: 'Schritt 1' },
  { label: 'Schritt 2' },
  { label: 'Schritt 3' }
])

const handleNext = () => {
  if (activeStep.value < steps.value.length - 1) {
    activeStep.value++
  }
}
</script>