<template>
  <main class="flex min-h-screen items-center justify-center bg-white p-6">
    <Card class="w-full max-w-[258px] rounded-xl border border-slate-100 shadow-sm">
      <template #content>
        <div class="flex flex-col">
          <div class="flex items-start justify-between">
            <h2 class="m-0 text-lg font-medium text-slate-700">Paket 1</h2>
            <Tag value="↗ Beliebt" severity="info" class="text-xs" />
          </div>

          <div class="mt-7 flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <i class="pi pi-check-circle text-lg text-emerald-500" />
              <span class="text-sm text-slate-600">Unbegrenzte Projekte</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="pi pi-check-circle text-lg text-emerald-500" />
              <span class="text-sm text-slate-600">Unbegrenzte Dashboards</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="pi pi-check-circle text-lg text-emerald-500" />
              <span class="text-sm text-slate-600">Erweiterte Analytics</span>
            </div>
          </div>

          <Button
            label="Jetzt starten"
            class="mt-8 w-full"
            severity="success"
          />
        </div>
      </template>
    </Card>
  </main>
</template>

<script setup>
import Card from 'primevue/card'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
</script>