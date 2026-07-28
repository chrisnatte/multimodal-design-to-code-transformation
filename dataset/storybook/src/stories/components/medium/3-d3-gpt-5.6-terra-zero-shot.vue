<template>
  <div class="w-[488px]">
    <Accordion
      v-model:value="activePanel"
      expandIcon="pi pi-chevron-up"
      collapseIcon="pi pi-chevron-down"
      class="w-full"
    >
      <AccordionPanel value="0">
        <AccordionHeader
          class="!rounded-none !border-x-0 !border-t-0 !border-b !border-slate-200 !bg-white !px-4 !py-[15px] !text-sm !font-semibold !text-slate-700"
        >
          Was ist Design-To-Code?
        </AccordionHeader>
        <AccordionContent
          class="!border-x-0 !border-t-0 !border-b !border-slate-200 !bg-white !px-4 !pt-0 !pb-4 !text-sm !leading-[23px] !text-slate-700"
        >
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="1">
        <AccordionHeader
          class="!rounded-none !border-x-0 !border-t-0 !border-b !border-slate-200 !bg-white !px-4 !py-[15px] !text-sm !font-semibold !text-slate-500"
        >
          Welche unterschiedlichen Ansätze gibt es?
        </AccordionHeader>
        <AccordionContent
          class="!border-x-0 !border-t-0 !border-b !border-slate-200 !bg-white !px-4 !pt-0 !pb-4 !text-sm !leading-[23px] !text-slate-700"
        >
          <p class="m-0"></p>
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

const activePanel = ref('0')
</script>