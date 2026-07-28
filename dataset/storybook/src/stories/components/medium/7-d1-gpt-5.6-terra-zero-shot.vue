<template>
  <div class="flex min-h-[287px] items-start justify-start bg-white p-6">
    <section
      class="flex w-64 flex-col rounded-xl border border-slate-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
      aria-labelledby="package-title"
    >
      <div class="flex flex-col gap-8 p-[17.5px]">
        <div class="flex items-center justify-between gap-2">
          <h2 id="package-title" class="m-0 text-[17.5px] font-medium leading-[22px] text-slate-700">
            Paket 1
          </h2>

          <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" class="popular-tag" />
        </div>

        <div class="flex flex-col gap-4">
          <label for="projects" class="flex cursor-pointer items-center gap-[7px] text-sm leading-[17.5px] text-slate-700">
            <Checkbox v-model="projects" input-id="projects" binary class="package-checkbox" />
            <span>Unbegrenzte Projekte</span>
          </label>

          <label for="dashboards" class="flex cursor-pointer items-center gap-[7px] text-sm leading-[17.5px] text-slate-700">
            <Checkbox v-model="dashboards" input-id="dashboards" binary class="package-checkbox" />
            <span>Unbegrenzte Dashboards</span>
          </label>

          <label for="analytics" class="flex cursor-pointer items-center gap-[7px] text-sm leading-[17.5px] text-slate-700">
            <Checkbox v-model="analytics" input-id="analytics" binary class="package-checkbox" />
            <span>Erweiterte Analytics</span>
          </label>
        </div>

        <Button label="Jetzt starten" class="start-button w-full" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const projects = ref(true)
const dashboards = ref(true)
const analytics = ref(true)
</script>

<style scoped>
:deep(.popular-tag) {
  height: 22px;
  padding: 0.25rem 0.4375rem;
  gap: 0.25rem;
  background: #e0f2fe;
  color: #0369a1;
  border-radius: 6px;
  font-size: 12.25px;
  font-weight: 700;
  line-height: 15px;
}

:deep(.popular-tag .p-tag-icon) {
  font-size: 10.5px;
}

:deep(.package-checkbox .p-checkbox-box) {
  width: 17.5px;
  height: 17.5px;
  border-radius: 4px;
}

:deep(.package-checkbox .p-checkbox-box.p-highlight) {
  background: #10b981;
  border-color: #10b981;
}

:deep(.package-checkbox .p-checkbox-icon) {
  font-size: 12px;
}

:deep(.start-button) {
  height: 33px;
  justify-content: center;
  border-color: #10b981;
  background: #10b981;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
}

:deep(.start-button:not(:disabled):hover) {
  border-color: #059669;
  background: #059669;
}
</style>