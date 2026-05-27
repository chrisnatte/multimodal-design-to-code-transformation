<template>
  <div class="p-6 bg-gray-100 min-h-screen flex items-start justify-center">
    <div class="w-full max-w-3xl">
      <Accordion v-model:value="state.activePanel" class="bg-transparent">
        <AccordionPanel value="0">
          <AccordionHeader>
            <span class="text-3xl font-semibold text-slate-700">Was ist Design-To-Code?</span>
          </AccordionHeader>
          <AccordionContent>
            <p class="m-0 text-2xl leading-relaxed text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="1">
          <AccordionHeader>
            <span class="text-3xl font-semibold text-slate-500">Welche unterschiedlichen Ansätze gibt es?</span>
          </AccordionHeader>
          <AccordionContent>
            <p class="m-0 text-2xl leading-relaxed text-slate-600">
              Unterschiedliche Ansätze umfassen regelbasierte, komponentenbasierte und KI-gestützte Workflows zur Umwandlung von Design in produktionsreifen Code.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'

const state = reactive({
  activePanel: '0'
})
</script>