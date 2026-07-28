<template>
  <main class="min-h-screen bg-white px-6 pt-8 font-sans text-slate-700">
    <Accordion
      v-model:value="activePanel"
      unstyled
      expandIcon="pi pi-chevron-up"
      collapseIcon="pi pi-chevron-down"
      class="w-full"
    >
      <AccordionPanel value="0" class="border-b border-slate-200">
        <AccordionHeader
          class="flex w-full items-center px-4 py-2 text-left text-sm font-semibold text-slate-700"
        >
          Was ist Design-To-Code?
        </AccordionHeader>
        <AccordionContent class="px-4 pb-4 pt-1">
          <p class="m-0 text-sm leading-[1.45rem] text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="1" class="border-b border-slate-200">
        <AccordionHeader
          class="flex w-full items-center px-4 py-3 text-left text-sm font-semibold text-slate-500"
        >
          Welche unterschiedlichen Ansätze gibt es?
        </AccordionHeader>
        <AccordionContent class="px-4 pb-4 pt-1">
          <p class="m-0 text-sm leading-[1.45rem] text-slate-700">
            Design-To-Code kann mit verschiedenen automatisierten und
            manuellen Ansätzen umgesetzt werden.
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'

const activePanel = ref('0')
</script>