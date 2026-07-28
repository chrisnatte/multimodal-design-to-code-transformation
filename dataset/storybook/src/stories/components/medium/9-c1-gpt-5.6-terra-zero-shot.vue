<template>
  <div class="flex min-h-[263px] w-full flex-col bg-white px-6 py-8">
    <div class="flex items-center gap-10 border-b border-slate-200">
      <Button
        label="Schritt 1"
        text
        class="-mb-px border-b-2 border-emerald-500 px-4 py-2 font-semibold text-emerald-500"
      />
      <Button
        label="Schritt 2"
        text
        class="px-4 py-2 font-semibold text-slate-500"
      />
      <Button
        label="Schritt 3"
        text
        class="px-4 py-2 font-semibold text-slate-500"
      />
    </div>

    <div class="flex flex-col gap-3 px-4 py-3">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
        <label for="option1" class="text-sm text-slate-700">Option1</label>
      </div>

      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
        <label for="option2" class="text-sm text-slate-700">Option2</label>
      </div>

      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
        <label for="option3" class="text-sm text-slate-700">Option3</label>
      </div>
    </div>

    <div class="mt-auto flex justify-end pr-4 pt-2">
      <Button label="Weiter" outlined severity="success" size="small" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import RadioButton from 'primevue/radiobutton'

const selectedOption = ref(null)
</script>