<template>
  <Card class="w-64 p-4">
    <template #content>
      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between gap-2">
          <span class="text-lg font-medium">Paket 1</span>
          <Tag severity="info" icon="pi pi-arrow-up-right" value="Beliebt" />
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature1" binary inputId="feature1" />
            <label for="feature1">Unbegrenzte Projekte</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature2" binary inputId="feature2" />
            <label for="feature2">Unbegrenzte Dashboards</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="feature3" binary inputId="feature3" />
            <label for="feature3">Erweiterte Analytics</label>
          </div>
        </div>

        <div class="flex gap-2">
          <Button label="Jetzt starten" class="w-full" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const feature1 = ref(true);
const feature2 = ref(true);
const feature3 = ref(true);
</script>