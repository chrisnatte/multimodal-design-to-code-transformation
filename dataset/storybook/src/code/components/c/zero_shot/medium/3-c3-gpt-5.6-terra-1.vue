<template>
    <div class="w-full bg-white px-6 py-6">
        <Accordion
            v-model:value="activePanel"
            expandIcon="pi pi-chevron-up"
            collapseIcon="pi pi-chevron-down"
            class="w-full"
        >
            <AccordionPanel value="0">
                <AccordionHeader class="text-sm font-bold text-slate-700">
                    Was ist Design-To-Code?
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0 text-sm leading-[23px] text-slate-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                        in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>

            <AccordionPanel value="1">
                <AccordionHeader class="text-sm font-bold text-slate-500">
                    Welche unterschiedlichen Ansätze gibt es?
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0 text-sm leading-[23px] text-slate-700">
                        Informationen zu den unterschiedlichen Ansätzen.
                    </p>
                </AccordionContent>
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