<template>
  <div class="bg-[#dddddd] p-6 w-fit">
    <div class="flex items-end gap-3">
      <div class="flex flex-col gap-2 w-56">
        <label for="search-input" class="text-[14px] text-slate-800">Suche</label>
        <span class="p-input-icon-left w-full">
          <i class="pi pi-search text-slate-400" />
          <InputText
            id="search-input"
            v-model="form.search"
            placeholder="Nach Namen suchen"
            variant="filled"
            class="w-full"
          />
        </span>
      </div>
      <Button
        icon="pi pi-check"
        rounded
        aria-label="Suche bestätigen"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const form = reactive({
  search: ''
})
</script>