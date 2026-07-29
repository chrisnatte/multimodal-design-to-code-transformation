<template>
  <div class="w-[536px] bg-white p-6 font-sans text-[#33435e]">
    <Accordion
      v-model:value="activePanel"
      class="w-full"
      :pt="{
        root: { class: 'flex flex-col' }
      }"
    >
      <AccordionPanel value="0" class="border-0">
        <AccordionHeader
          class="!flex !min-h-[46px] !border-x-0 !border-t-0 !border-b !border-[#e2e8f0] !bg-white !px-4 !py-[15px] !text-sm !font-semibold !text-[#33435e] !shadow-none"
        >
          <span>Was ist Design-To-Code?</span>
          <template #toggleicon="{ active }">
            <i :class="active ? 'pi pi-chevron-down text-sm' : 'pi pi-chevron-up text-sm'" />
          </template>
        </AccordionHeader>
        <AccordionContent
          :pt="{
            content: {
              class: '!border-x-0 !border-t-0 !border-b !border-[#e2e8f0] !bg-white !px-4 !pt-0 !pb-4'
            }
          }"
        >
          <p class="m-0 text-sm leading-[23px] text-[#33435e]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="1" class="border-0">
        <AccordionHeader
          class="!flex !min-h-[47px] !border-x-0 !border-t-0 !border-b !border-[#e2e8f0] !bg-white !px-4 !py-[15px] !text-sm !font-semibold !text-[#637793] !shadow-none"
        >
          <span>Welche unterschiedlichen Ansätze gibt es?</span>
          <template #toggleicon="{ active }">
            <i :class="active ? 'pi pi-chevron-down text-sm' : 'pi pi-chevron-up text-sm'" />
          </template>
        </AccordionHeader>
        <AccordionContent
          :pt="{
            content: {
              class: '!border-x-0 !border-t-0 !border-b !border-[#e2e8f0] !bg-white !px-4 !pt-0 !pb-4'
            }
          }"
        >
          <p class="m-0 text-sm leading-[23px] text-[#33435e]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </AccordionContent>
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

const activePanel = ref('0')
</script>