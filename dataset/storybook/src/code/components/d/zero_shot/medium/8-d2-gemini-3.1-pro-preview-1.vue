<template>
  <div class="w-[288px] h-[560px] bg-white p-6 flex flex-col">
    <div class="flex-1 bg-[#e2e8f0] p-6 flex flex-col justify-between font-sans">
      <!-- Top Section -->
      <div class="flex flex-col items-center w-full">
        <h1 class="text-2xl font-normal text-[#334155] mb-6">Emails</h1>
        <div class="flex flex-col gap-4 w-full">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            class="w-full justify-start !bg-[#f1f5f9] !border-none !text-[#475569] !px-3 !py-2 !rounded-md !font-medium"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            variant="text"
            class="w-full justify-start !text-[#475569] !px-3 !py-2 hover:!bg-slate-300/50 !rounded-md !font-medium"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            variant="text"
            class="w-full justify-start !text-[#475569] !px-3 !py-2 hover:!bg-slate-300/50 !rounded-md !font-medium"
          />
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="flex flex-col w-full">
        <Divider class="before:!border-[#64748b] !my-4" />
        <div class="flex items-center justify-center gap-4">
          <Avatar
            label="B"
            shape="circle"
            class="!bg-[#64748b] !text-white !text-[21px] !w-[42px] !h-[42px]"
          />
          <span class="text-base text-[#334155]">Benutzername</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
</script>