<template>
  <div class="p-6 max-w-3xl mx-auto bg-white">
    <Accordion v-model:value="activePanel" expandIcon="pi pi-chevron-up" collapseIcon="pi pi-chevron-down">
      <AccordionPanel value="0">
        <AccordionHeader>
          <span class="font-semibold text-slate-800">Was ist Design-To-Code?</span>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0 text-slate-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionContent>
      </AccordionPanel>
      
      <AccordionPanel value="1">
        <AccordionHeader>
          <span class="font-semibold text-slate-500">Welche unterschiedlichen Ansätze gibt es?</span>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0 text-slate-600 leading-relaxed"></p>
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