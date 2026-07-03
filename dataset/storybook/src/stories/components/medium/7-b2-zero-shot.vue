<template>
  <div class="flex flex-col gap-2.5">
    <Card class="rounded-xl bg-white">
      <template #content>
        <div class="flex flex-col gap-8 p-4">
          <div class="flex items-center justify-between gap-2">
            <span class="text-base font-medium">Paket 1</span>
            <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" />
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <Checkbox v-model="state.unbegrenzteProjekte" binary inputId="unbegrenzteProjekte" />
              <label for="unbegrenzteProjekte" class="text-sm">Unbegrenzte Projekte </label>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="state.unbegrenzteDashboards" binary inputId="unbegrenzteDashboards" />
              <label for="unbegrenzteDashboards" class="text-sm">Unbegrenzte Dashboards </label>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="state.erweiterteAnalytics" binary inputId="erweiterteAnalytics" />
              <label for="erweiterteAnalytics" class="text-sm">Erweiterte Analytics</label>
            </div>
          </div>

          <div class="flex gap-2">
            <Button label="Jetzt starten" class="w-full" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const state = reactive({
  unbegrenzteProjekte: true,
  unbegrenzteDashboards: true,
  erweiterteAnalytics: true
});
</script>