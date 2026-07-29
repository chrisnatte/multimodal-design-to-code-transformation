<template>
  <div class="p-6 bg-white w-[288px] h-[560px]">
    <div class="bg-[#E2E8F0] p-6 flex flex-col justify-between h-full">
      <div class="flex flex-col gap-6">
        <h2 class="text-2xl font-normal text-center text-slate-700 m-0">Emails</h2>
        
        <div class="flex flex-col gap-4">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            class="w-full justify-start bg-[#F1F5F9] border-none text-slate-600 font-medium hover:bg-white"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            variant="text"
            severity="secondary"
            class="w-full justify-start text-slate-600 font-medium hover:bg-white/50"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            variant="text"
            severity="secondary"
            class="w-full justify-start text-slate-600 font-medium hover:bg-white/50"
          />
        </div>
      </div>

      <div class="flex flex-col w-full">
        <Divider class="before:border-[#64748B]" />
        
        <div class="flex flex-row items-center gap-4 justify-center pt-2">
          <Avatar
            label="B"
            size="large"
            shape="circle"
            class="bg-[#64748B] text-white"
          />
          <span class="text-base text-slate-700">Benutzername</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
</script>