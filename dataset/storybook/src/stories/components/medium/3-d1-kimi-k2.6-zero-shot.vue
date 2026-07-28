<template>
  <div class="flex flex-col w-full max-w-[488px]">
    <Accordion v-model:activeIndex="activeIndex" class="w-full">
      <AccordionTab header="Was ist Design-To-Code?">
        <div class="px-4 pb-4 text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </AccordionTab>
      <AccordionTab header="Welche unterschiedlichen Ansätze gibt es?" />
    </Accordion>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'

const activeIndex = ref(0)
</script>