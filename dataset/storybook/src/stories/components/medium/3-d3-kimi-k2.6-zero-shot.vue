<template>
  <div class="flex flex-col w-[488px]">
    <Accordion :value="activePanel" expandIcon="pi pi-chevron-up" collapseIcon="pi pi-chevron-down">
      <AccordionPanel value="0">
        <AccordionHeader>Was ist Design-To-Code?</AccordionHeader>
        <AccordionContent>
          <div class="px-4 pb-4">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader>Welche unterschiedlichen Ansätze gibt es?</AccordionHeader>
        <AccordionContent>
          <div class="px-4 pb-4"></div>
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

const activePanel = ref('0');
</script>