<template>
  <div class="w-[544px] bg-[#f5f5f5] p-6">
    <Accordion v-model:value="state.activeIndex">
      <AccordionPanel value="0">
        <AccordionHeader>
          <span class="text-[30px] font-semibold text-slate-700">Was ist Design-To-Code?</span>
        </AccordionHeader>
        <AccordionContent>
          <p class="text-[32px] leading-[1.55] text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="1">
        <AccordionHeader>
          <span class="text-[33px] font-semibold text-slate-500">Welche unterschiedlichen Ansätze gibt es?</span>
        </AccordionHeader>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'

const state = reactive({
  activeIndex: '0'
})
</script>