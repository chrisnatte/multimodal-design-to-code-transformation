<template>
  <div class="flex flex-col w-[488px]">
    <Accordion :value="activeValue">
      <AccordionPanel value="0">
        <AccordionHeader>
          <span class="font-sans font-semibold text-sm">Was ist Design-To-Code?</span>
        </AccordionHeader>
        <AccordionContent>
          <p class="font-sans font-normal text-sm m-0 pb-4 px-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionContent>
      </AccordionPanel>
      
      <AccordionPanel value="1">
        <AccordionHeader>
          <span class="font-sans font-semibold text-sm">Welche unterschiedlichen Ansätze gibt es?</span>
        </AccordionHeader>
        <AccordionContent>
          <!-- Content for collapsed panel not provided in mockup -->
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

const activeValue = ref('0');
</script>