<template>
  <div class="w-[512px] bg-white rounded-xl shadow-sm">
    <div class="flex flex-col gap-6 p-[17.5px]">
      <div class="flex flex-col gap-2">
        <span class="text-slate-800 text-lg font-medium">Dashboardeinrichtung</span>
        <span class="text-slate-500 text-sm">Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</span>
      </div>

      <div class="flex flex-col gap-3">
        <ProgressBar :value="50" severity="success" />
        <span class="text-slate-600 text-xs font-light">Projektmetriken werden analysiert</span>
      </div>

      <div class="flex justify-end gap-2">
        <Button label="Weiter" severity="secondary" disabled />
      </div>
    </div>
  </div>
</template>