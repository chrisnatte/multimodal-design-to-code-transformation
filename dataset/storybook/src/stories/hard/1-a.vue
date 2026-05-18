<template>
  <div class="flex flex-col gap-2.5">
    <Dialog v-model:visible="_state.n26_1325Visible" :modal="true">
      <template #header>
        <div class="flex items-center justify-between p-[18px]">
          <span class="font-semibold">Profil bearbeiten</span>
          <div class="flex flex-col gap-[7px]">
            <Button severity="secondary" variant="text" />
          </div>
        </div>
      </template>
      <div class="flex flex-col justify-center gap-4 px-[18px] pb-[18px]">
        <InputText placeholder="Placeholder" v-model="_state.n26_1350" />
        <div class="flex flex-col gap-2">
          <label>Rolle</label>
          <Select
            v-model="_state.n26_1409"
            :options="_options_n26_1409"
            placeholder="Placeholder"
          />
        </div>
        <Checkbox v-model="_state.n28_3129" binary />
      </div>
      <template #footer>
        <div class="flex justify-end gap-[7px] px-[18px] pb-[18px]">
          <Button label="Abbrechen" variant="text" />
          <Button label="Speichern" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
  import { reactive } from 'vue'
  import Button from 'primevue/button'
  import Checkbox from 'primevue/checkbox'
  import Dialog from 'primevue/dialog'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'

  const _state = reactive({ n26_1325Visible: true, n26_1350: null, n26_1409: null, n28_3129: null })
</script>
