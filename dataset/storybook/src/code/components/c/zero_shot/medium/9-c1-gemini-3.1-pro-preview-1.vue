<template>
  <div class="w-full max-w-3xl p-6 bg-white">
    <!-- Header / Steps -->
    <div class="mb-8 border-b border-slate-200">
      <TabMenu :model="steps" v-model:activeIndex="activeStep" :pt="{
        menu: { class: 'border-none' },
        action: ({ context }) => ({
          class: [
            'px-4 py-3 font-semibold text-base transition-colors',
            context.active ? 'text-emerald-500 border-b-2 border-emerald-500' : 'text-slate-500 hover:text-slate-700'
          ]
        })
      }" />
    </div>

    <!-- Content / Options -->
    <div class="flex flex-col gap-5 pl-4 mb-16">
      <div class="flex items-center gap-3">
        <RadioButton v-model="selectedOption" inputId="option1" name="options" value="Option1" />
        <label for="option1" class="text-slate-700 cursor-pointer select-none">Option1</label>
      </div>
      
      <div class="flex items-center gap-3">
        <RadioButton v-model="selectedOption" inputId="option2" name="options" value="Option2" />
        <label for="option2" class="text-slate-700 cursor-pointer select-none">Option2</label>
      </div>
      
      <div class="flex items-center gap-3">
        <RadioButton v-model="selectedOption" inputId="option3" name="options" value="Option3" />
        <label for="option3" class="text-slate-700 cursor-pointer select-none">Option3</label>
      </div>
    </div>

    <!-- Footer / Actions -->
    <div class="flex justify-end">
      <Button 
        label="Weiter" 
        outlined 
        class="!text-emerald-500 !border-emerald-200 hover:!bg-emerald-50 px-6 py-2 font-medium"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TabMenu from 'primevue/tabmenu';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const activeStep = ref(0);
const steps = ref([
  { label: 'Schritt 1' },
  { label: 'Schritt 2' },
  { label: 'Schritt 3' }
]);

const selectedOption = ref(null);
</script>