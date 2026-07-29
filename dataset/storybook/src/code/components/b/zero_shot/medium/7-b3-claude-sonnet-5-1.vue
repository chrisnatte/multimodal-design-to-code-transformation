<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <Card class="w-64" :pt="{ body: { class: 'p-[17.5px] flex flex-col gap-8' } }">
      <template #content>
        <div class="flex items-center justify-between">
          <span class="text-lg font-medium">Paket 1</span>
          <Tag severity="info" icon="pi pi-arrow-up-right" value="Beliebt" />
        </div>
        <div class="flex flex-col gap-4 mt-4">
          <div class="flex items-center gap-2">
            <Checkbox v-model="unlimitedProjects" binary />
            <span class="text-sm">Unbegrenzte Projekte</span>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="unlimitedDashboards" binary />
            <span class="text-sm">Unbegrenzte Dashboards</span>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="advancedAnalytics" binary />
            <span class="text-sm">Erweiterte Analytics</span>
          </div>
        </div>
        <div class="flex gap-2 mt-8">
          <Button label="Jetzt starten" class="w-full" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const unlimitedProjects = ref(true);
const unlimitedDashboards = ref(true);
const advancedAnalytics = ref(true);
</script>