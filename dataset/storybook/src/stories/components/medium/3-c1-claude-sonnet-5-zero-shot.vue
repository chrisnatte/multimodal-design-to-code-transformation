<template>
  <div class="w-full max-w-2xl mx-auto">
    <Accordion :multiple="true" :activeIndex="[0, 1]">
      <AccordionTab>
        <template #header>
          <span class="font-semibold">Was ist Design-To-Code?</span>
        </template>
        <p class="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </AccordionTab>
      <AccordionTab>
        <template #header>
          <span class="font-semibold">Welche unterschiedlichen Ansätze gibt es?</span>
        </template>
        <p class="text-gray-600 leading-relaxed"></p>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
</script>