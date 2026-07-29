<template>
  <div class="flex w-[536px] flex-col gap-2.5 bg-white p-6">
    <Accordion v-model:value="activePanel">
      <AccordionPanel value="design-to-code">
        <AccordionHeader>
          <template #toggleicon="{ active }">
            <i :class="active ? 'pi pi-chevron-down' : 'pi pi-chevron-up'" class="text-xs" />
          </template>
          Was ist Design-To-Code?
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="approaches">
        <AccordionHeader>
          <template #toggleicon="{ active }">
            <i :class="active ? 'pi pi-chevron-down' : 'pi pi-chevron-up'" class="text-xs" />
          </template>
          Welche unterschiedlichen Ansätze gibt es?
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Design-To-Code kann durch manuelle Umsetzung, komponentenbasierte Entwicklung oder automatisierte
            Codegenerierung erfolgen.
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'

const activePanel = ref('design-to-code')
</script>