<template>
    <main class="min-h-screen bg-white p-6">
        <Accordion
            v-model:value="activePanel"
            unstyled
            expandIcon="pi pi-chevron-up"
            collapseIcon="pi pi-chevron-down"
            class="w-full text-[#334155]"
        >
            <AccordionPanel value="0" class="border-b border-slate-200">
                <AccordionHeader class="flex w-full items-center justify-between px-4 py-4 text-left text-[14px] font-semibold leading-5">
                    Was ist Design-To-Code?
                </AccordionHeader>
                <AccordionContent class="px-4 pb-2">
                    <p class="m-0 text-[15px] leading-[23px] text-[#334155]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>

            <AccordionPanel value="1" class="border-b border-slate-200">
                <AccordionHeader class="flex w-full items-center justify-between px-4 py-3.5 text-left text-[14px] font-semibold leading-5 text-[#62738f]">
                    Welche unterschiedlichen Ansätze gibt es?
                </AccordionHeader>
                <AccordionContent class="px-4 pb-4">
                    <p class="m-0 text-[15px] leading-[23px] text-[#334155]">
                        Es gibt verschiedene Ansätze, um Designvorlagen in Code zu übertragen.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

const activePanel = ref('0');
</script>