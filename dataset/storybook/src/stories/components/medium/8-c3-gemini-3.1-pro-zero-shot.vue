<template>
  <div class="w-64 h-full min-h-[500px] bg-slate-100 flex flex-col p-4 font-sans text-slate-700">
    <div class="text-2xl font-semibold text-center mb-6 text-slate-800">
      Emails
    </div>

    <div class="flex flex-col gap-2 flex-grow">
      <Button
        variant="text"
        class="w-full justify-start !bg-white !text-slate-600 !font-medium !px-4 !py-2 !rounded-md shadow-sm"
      >
        <template #icon>
          <i class="pi pi-inbox mr-3"></i>
        </template>
        Postfach
      </Button>

      <Button
        variant="text"
        class="w-full justify-start !text-slate-500 hover:!bg-slate-200 !font-medium !px-4 !py-2 !rounded-md"
      >
        <template #icon>
          <i class="pi pi-folder mr-3"></i>
        </template>
        Ordner
      </Button>

      <Button
        variant="text"
        class="w-full justify-start !text-slate-500 hover:!bg-slate-200 !font-medium !px-4 !py-2 !rounded-md"
      >
        <template #icon>
          <i class="pi pi-user mr-3"></i>
        </template>
        Konto
      </Button>
    </div>

    <div class="mt-auto pt-4">
      <Divider class="!my-4 !border-slate-300" />
      <div class="flex items-center gap-3 px-2">
        <Avatar
          label="B"
          shape="circle"
          size="large"
          class="!bg-slate-500 !text-white"
        />
        <span class="font-medium text-slate-700">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'
</script>