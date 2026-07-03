<template>
  <div class="w-[264px] h-[138px] bg-[#f5f5f5] flex flex-col px-6 pt-6 gap-6">
    <div class="flex flex-col gap-3">
      <IconField>
        <InputText
          v-model="form.password"
          type="password"
          class="w-full"
          placeholder=""
        />
        <InputIcon class="pi pi-eye text-slate-400" />
      </IconField>

      <Button
        label="Anmelden"
        class="w-full"
        severity="success"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const form = reactive({
  password: '********'
})
</script>