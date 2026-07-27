<template>
    <div class="w-64 rounded-xl bg-white">
        <div class="flex flex-col gap-8 rounded-md p-[17.5px]">
            <div class="flex items-center justify-between gap-2">
                <span class="text-[17.5px] font-medium">Paket 1</span>
                <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" class="text-[12.25px] font-bold" />
            </div>

            <div class="flex flex-col gap-4">
                <div class="flex items-center gap-2">
                    <Checkbox
                        v-model="unlimitedProjects"
                        inputId="unlimited-projects"
                        binary
                        :dt="checkboxTokens"
                    />
                    <label for="unlimited-projects" class="text-sm">
                        Unbegrenzte Projekte
                    </label>
                </div>

                <div class="flex items-center gap-2">
                    <Checkbox
                        v-model="unlimitedDashboards"
                        inputId="unlimited-dashboards"
                        binary
                        :dt="checkboxTokens"
                    />
                    <label for="unlimited-dashboards" class="text-sm">
                        Unbegrenzte Dashboards
                    </label>
                </div>

                <div class="flex items-center gap-2">
                    <Checkbox
                        v-model="advancedAnalytics"
                        inputId="advanced-analytics"
                        binary
                        :dt="checkboxTokens"
                    />
                    <label for="advanced-analytics" class="text-sm">
                        Erweiterte Analytics
                    </label>
                </div>
            </div>

            <div class="flex gap-2">
                <Button
                    label="Jetzt starten"
                    class="h-[33px] w-full"
                    :dt="buttonTokens"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const unlimitedProjects = ref(true);
const unlimitedDashboards = ref(true);
const advancedAnalytics = ref(true);

const checkboxTokens = {
    root: {
        checkedBackground: '#10b981',
        checkedBorderColor: '#10b981',
        checkedHoverBackground: '#059669',
        checkedHoverBorderColor: '#059669'
    }
};

const buttonTokens = {
    root: {
        primaryBackground: '#10b981',
        primaryBorderColor: '#10b981',
        primaryHoverBackground: '#059669',
        primaryHoverBorderColor: '#059669',
        primaryActiveBackground: '#047857',
        primaryActiveBorderColor: '#047857'
    }
};
</script>