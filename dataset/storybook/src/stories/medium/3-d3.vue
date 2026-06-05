<template>
  <div class="w-[540px] bg-gray-100 p-6">
    <Accordion v-model:value="state.active" class="bg-transparent" expandIcon="pi pi-chevron-down" collapseIcon="pi pi-chevron-up">
      <AccordionPanel value="0" class="border-b border-slate-300">
        <AccordionHeader class="px-4 py-3">
          <span class="text-[30f] font-semibold text-slate-700">Was ist Design-To-Code?</span>
        </AccordionHeader>
        <AccordionContent class="px-4 pb-4">
          <p class="text-[29f] leading-10 text-slate-700 m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="1" class="border-b border-slate-300">
        <AccordionHeader class="px-4 py-3">
          <span class="text-[30f] font-semibold text-slate-500">Welche unterschiedlichen Ansätze gibt es?</span>
        </AccordionHeader>
        <AccordionContent class="px-4 pb-4">
          <p class="text-[29f] leading-10 text-slate-700 m-0">
            Weitere Informationen zu unterschiedlichen Ansätzen können hier dargestellt werden.
          </p>
        </AccordionContent>
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
  active: '0'
})
</script>