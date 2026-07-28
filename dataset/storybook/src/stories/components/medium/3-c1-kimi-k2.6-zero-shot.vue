<template>
  <div class="flex justify-center p-8">
    <div class="w-full max-w-2xl">
      <Accordion v-model:value="activePanel">
        <AccordionPanel value="0">
          <AccordionHeader>Was ist Design-To-Code?</AccordionHeader>
          <AccordionContent>
            <p class="m-0 leading-relaxed text-surface-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>Welche unterschiedlichen Ansätze gibt es?</AccordionHeader>
          <AccordionContent />
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

const activePanel = ref('0');
</script>