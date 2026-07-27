<template>
  <div class="flex w-[488px] flex-col font-[Inter]">
    <Accordion v-model:value="activePanels">
      <AccordionPanel value="0">
        <AccordionHeader>
          <span class="text-sm font-semibold">Was ist Design-To-Code?</span>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0 text-sm font-normal leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="1">
        <AccordionHeader>
          <span class="text-sm font-semibold">Welche unterschiedlichen Ansätze gibt es?</span>
        </AccordionHeader>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionContent from 'primevue/accordioncontent'
import AccordionHeader from 'primevue/accordionheader'
import AccordionPanel from 'primevue/accordionpanel'

const activePanels = ref(['0'])
</script>