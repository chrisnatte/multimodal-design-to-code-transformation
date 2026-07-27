<template>
  <Card class="w-64 rounded-xl shadow-md bg-white">
    <template #content>
      <div class="flex flex-col gap-8 p-1">
        <!-- Caption -->
        <div class="flex justify-between items-center gap-2">
          <span class="text-[17.5px] font-medium font-sans text-surface-900">Paket 1</span>
          <Tag value="Beliebt" severity="info" class="font-bold text-xs">
            <template #icon>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-1">
                <path d="M2.625 8.375L8.375 2.625M8.375 2.625H3.5M8.375 2.625V7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </Tag>
        </div>

        <!-- Content -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Checkbox v-model="features.projects" inputId="feature-projects" binary />
            <label for="feature-projects" class="text-sm font-normal font-sans text-surface-700 cursor-pointer">
              Unbegrenzte Projekte
            </label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="features.dashboards" inputId="feature-dashboards" binary />
            <label for="feature-dashboards" class="text-sm font-normal font-sans text-surface-700 cursor-pointer">
              Unbegrenzte Dashboards
            </label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="features.analytics" inputId="feature-analytics" binary />
            <label for="feature-analytics" class="text-sm font-normal font-sans text-surface-700 cursor-pointer">
              Erweiterte Analytics
            </label>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex w-full">
          <Button label="Jetzt starten" class="w-full font-medium text-sm" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';

const features = ref({
  projects: true,
  dashboards: true,
  analytics: true
});
</script>