<template>
  <div class="flex flex-col w-full max-w-[488px]">
    <Accordion :value="activePanel">
      <AccordionPanel value="0">
        <AccordionHeader>
          <span class="text-sm font-semibold">Was ist Design-To-Code?</span>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0 text-sm font-normal leading-[1.6] text-surface-700 dark:text-surface-0/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionContent>
      </AccordionPanel>
      
      <AccordionPanel value="1">
        <AccordionHeader>
          <span class="text-sm font-semibold">Welche unterschiedlichen Ansätze gibt es?</span>
        </AccordionHeader>
        <AccordionContent>
          <!-- Content purposefully empty as it is collapsed in the design -->
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'

// The first panel (value: '0') is expanded by default to match the mockup
const activePanel = ref('0')
</script>