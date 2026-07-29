<template>
  <div class="bg-white p-6 w-[536px]">
    <Accordion :activeIndex="0">
      <AccordionTab header="Was ist Design-To-Code?">
        <p class="m-0 text-sm text-gray-700 leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </AccordionTab>
      <AccordionTab header="Welche unterschiedlichen Ansätze gibt es?">
        <p class="m-0 text-sm text-gray-700 leading-normal">
          Content for the second tab goes here.
        </p>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>