<template>
    <div class="flex w-[488px] flex-col">
        <Accordion v-model:value="activePanel" collapseIcon="pi pi-chevron-down" expandIcon="pi pi-chevron-up">
            <AccordionPanel value="0">
                <AccordionHeader class="text-sm font-semibold">
                    Was ist Design-To-Code?
                </AccordionHeader>
                <AccordionContent class="px-4 pb-4">
                    <p class="m-0 text-sm font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>

            <AccordionPanel value="1">
                <AccordionHeader class="text-sm font-semibold">
                    Welche unterschiedlichen Ansätze gibt es?
                </AccordionHeader>
            </AccordionPanel>
        </Accordion>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

const activePanel = ref('0');
</script>