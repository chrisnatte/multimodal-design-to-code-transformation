<template>
  <Dialog v-model:visible="_state.n32_2636Visible" :modal="true">
    <template #header>
      <div class="flex p-4 items-center justify-between">
        <div class="flex gap-3 items-center">
          <Avatar
            label="M"
            size="large"
            shape="circle"
           />
          <div class="flex flex-col">
            <span class="text-sm">Dr. Mustermann</span>
            <span>Allgemeinmedizin</span>
          </div>
        </div>
        <div class="flex flex-col gap-[7px]">
          <Button severity="secondary" variant="text" />
        </div>
      </div>
    </template>
    <Divider />
    <div
      class="flex flex-col gap-[7px] px-[18px] pb-[18px] justify-center"
    >
      <Breadcrumb :model="_breadcrumb_n32_2692" />
      <div class="flex flex-col gap-4">
        <DatePicker v-model="_state.n32_2760" />
        <DatePicker v-model="_state.n32_2925" />
        <Textarea
          placeholder="Placeholder"
          v-model="_state.n32_2944"
          rows="4"
         />
      </div>
    </div>
    <template #footer>
      <div class="flex gap-[7px] px-[18px] pb-[18px] justify-between">
        <Button label="Zurück" severity="secondary" />
        <Button label="Weiter" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Textarea from 'primevue/textarea'

const _state = reactive({ n32_2636Visible: true, n32_2760: null, n32_2925: null, n32_2944: null })
</script>
