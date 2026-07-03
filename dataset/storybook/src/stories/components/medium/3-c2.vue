<template>
  <div class="min-h-screen bg-gray-100 p-8 flex justify-center items-start">
    <div class="w-full max-w-3xl">
      <Accordion v-model:value="state.activePanel">
        <AccordionPanel value="0">
          <AccordionHeader>Was ist Design-To-Code?</AccordionHeader>
          <AccordionContent>
            <p class="m-0 text-slate-700 leading-10 text-[34px] sm:text-xl md:text-3xl lg:text-[36px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="1">
          <AccordionHeader>Welche unterschiedlichen Ansätze gibt es?</AccordionHeader>
          <AccordionContent>
            <p class="m-0 text-slate-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
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