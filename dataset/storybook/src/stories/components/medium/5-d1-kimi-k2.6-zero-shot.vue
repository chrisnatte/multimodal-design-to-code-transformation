<template>
  <div class="w-[488px] rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2 overflow-hidden">
    <div class="h-[172px] w-full bg-gradient-to-br from-emerald-900 to-slate-950 p-2.5 flex flex-col gap-2.5"></div>
    <div class="flex flex-col gap-2 p-4 w-full">
      <div class="flex items-center gap-2 w-full">
        <span class="text-lg font-medium text-slate-800">Produkt1</span>
        <Tag value="Neu" severity="primary" rounded />
      </div>
      <div class="w-full">
        <p class="text-sm text-slate-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </div>
      <div class="flex items-center justify-end gap-2 pt-4 w-full">
        <InputNumber v-model="quantity" showButtons buttonLayout="stacked" :min="1" class="w-32" />
        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="primary" />
      </div>
    </div>
  </div>
</template>