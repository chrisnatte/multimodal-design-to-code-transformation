<template>
  <div class="flex items-end justify-end gap-3">
    <div class="flex flex-col gap-1">
      <label class="text-sm">Suche</label>
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          v-model="form.search"
          placeholder="Nach Namen suchen"
          :invalid="false"
          :disabled="false"
          variant="filled"
        />
      </IconField>
    </div>
    <Button
      icon="pi pi-check"
      rounded
      severity="primary"
      :disabled="false"
      @click="onSubmit"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Button from 'primevue/button'

const form = reactive({
  search: ''
})

const onSubmit = () => {
  // submit action placeholder
}
</script>