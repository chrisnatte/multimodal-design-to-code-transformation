<template>
  <div class="flex flex-col p-6 gap-2.5 bg-white w-[536px]">
    <div class="flex flex-col w-full">
      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>
            <span class="font-semibold text-sm font-['Inter']">Was ist Design-To-Code?</span>
          </AccordionHeader>
          <AccordionContent>
            <p class="m-0 text-sm font-normal font-['Inter']">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>
            <span class="font-semibold text-sm font-['Inter']">Welche unterschiedlichen Ansätze gibt es?</span>
          </AccordionHeader>
          <AccordionContent>
            <!-- Content for collapsed panel not provided in design -->
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
</script>