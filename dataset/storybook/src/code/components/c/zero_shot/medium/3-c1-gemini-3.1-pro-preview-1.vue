<template>
  <div class="w-full max-w-3xl mx-auto p-4 bg-white">
    <Accordion v-model:value="activePanel">
      <AccordionPanel value="0">
        <AccordionHeader>
          <span class="text-slate-700 font-medium">Was ist Design-To-Code?</span>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0 text-slate-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionContent>
      </AccordionPanel>
      
      <AccordionPanel value="1">
        <AccordionHeader>
          <span class="text-slate-700 font-medium">Welche unterschiedlichen Ansätze gibt es?</span>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0 text-slate-600 leading-relaxed">
            Hier würde der Inhalt für den zweiten Ansatz stehen.
          </p>
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