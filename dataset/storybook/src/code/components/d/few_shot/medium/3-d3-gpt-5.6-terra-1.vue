<template>
  <div class="w-[536px] bg-white p-6">
    <Accordion value="0" expand-icon="pi pi-chevron-down" collapse-icon="pi pi-chevron-up">
      <AccordionPanel value="0">
        <AccordionHeader>Was ist Design-To-Code?</AccordionHeader>
        <AccordionContent>
          <p class="m-0 text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader>Welche unterschiedlichen Ansätze gibt es?</AccordionHeader>
        <AccordionContent>
          <p class="m-0 text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<script setup lang="ts">
  import Accordion from 'primevue/accordion'
  import AccordionPanel from 'primevue/accordionpanel'
  import AccordionHeader from 'primevue/accordionheader'
  import AccordionContent from 'primevue/accordioncontent'
</script>