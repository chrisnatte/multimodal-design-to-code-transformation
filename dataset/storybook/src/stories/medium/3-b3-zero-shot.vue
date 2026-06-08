<template>
  <div class="flex flex-col">
    <Accordion v-model:value="state.activePanel">
      <AccordionPanel value="0">
        <AccordionHeader>Was ist Design-To-Code?</AccordionHeader>
        <AccordionContent>
          <div class="flex flex-col px-4 pb-4">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="1">
        <AccordionHeader>Welche unterschiedlichen Ansätze gibt es?</AccordionHeader>
        <AccordionContent />
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

const state = reactive({
  activePanel: '0'
});
</script>