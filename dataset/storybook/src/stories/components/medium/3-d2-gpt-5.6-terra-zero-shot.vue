<template>
    <div class="w-full max-w-[488px] bg-white p-6 font-sans text-[#34445f]">
        <Accordion
            v-model:value="activePanel"
            class="figma-accordion"
            expandIcon="pi pi-chevron-up"
            collapseIcon="pi pi-chevron-down"
        >
            <AccordionPanel value="0">
                <AccordionHeader>Was ist Design-To-Code?</AccordionHeader>
                <AccordionContent>
                    <p class="m-0 text-sm font-normal leading-[23px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>

            <AccordionPanel value="1">
                <AccordionHeader>Welche unterschiedlichen Ansätze gibt es?</AccordionHeader>
                <AccordionContent>
                    <p class="m-0 text-sm font-normal leading-[23px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

<style scoped>
.figma-accordion {
    --p-accordion-panel-border-width: 0;
    --p-accordion-header-background: #ffffff;
    --p-accordion-header-hover-background: #ffffff;
    --p-accordion-header-active-background: #ffffff;
    --p-accordion-header-active-hover-background: #ffffff;
    --p-accordion-header-color: #5f7393;
    --p-accordion-header-hover-color: #5f7393;
    --p-accordion-header-active-color: #34445f;
    --p-accordion-header-active-hover-color: #34445f;
    --p-accordion-header-padding: 0.9375rem 1rem;
    --p-accordion-header-font-weight: 600;
    --p-accordion-header-border-width: 0 0 1px 0;
    --p-accordion-header-border-color: #e2e8f0;
    --p-accordion-header-border-radius: 0;
    --p-accordion-content-background: #ffffff;
    --p-accordion-content-color: #34445f;
    --p-accordion-content-border-width: 0 0 1px 0;
    --p-accordion-content-border-color: #e2e8f0;
    --p-accordion-content-padding: 0 1rem 0.9375rem;
}

:deep(.p-accordionheader) {
    min-height: 46px;
    font-size: 14px;
    line-height: 14px;
    box-shadow: none;
}

:deep(.p-accordionheader-toggle-icon) {
    font-size: 14px;
}

:deep(.p-accordioncontent-content) {
    font-size: 14px;
}
</style>