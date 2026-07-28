<template>
  <Card class="w-80 rounded-xl shadow-md">
    <template #content>
      <div class="flex flex-col gap-6">
        <div class="flex justify-between items-center">
          <span class="text-xl font-semibold text-gray-800">Paket 1</span>
          <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" />
        </div>

        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <Checkbox v-model="checked1" binary readonly />
            <span class="text-gray-700">Unbegrenzte Projekte</span>
          </div>
          <div class="flex items-center gap-3">
            <Checkbox v-model="checked2" binary readonly />
            <span class="text-gray-700">Unbegrenzte Dashboards</span>
          </div>
          <div class="flex items-center gap-3">
            <Checkbox v-model="checked3" binary readonly />
            <span class="text-gray-700">Erweiterte Analytics</span>
          </div>
        </div>

        <Button label="Jetzt starten" severity="success" class="w-full rounded-lg" />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';

const checked1 = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
</script>