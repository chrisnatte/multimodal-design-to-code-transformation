<template>
  <div class="flex w-[479px] flex-col gap-2.5 bg-white p-6">
    <div class="flex gap-1">
      <div class="flex h-[128px] w-[431px] items-start gap-[7px] rounded-md bg-white p-[14px]">
        <Breadcrumb
          :home="home"
          :model="breadcrumbItems"
          class="h-[30px] w-[221px] !border-0 !bg-transparent !p-0 py-2"
        />

        <div class="flex h-[100px] w-[175px] flex-col gap-0.5">
          <Button
            label="Dashboard anzeigen"
            severity="secondary"
            class="h-[33px] w-[161px] whitespace-nowrap"
          />
          <Menu
            :model="dashboardItems"
            class="h-[65px] w-[175px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const home = ref({
  icon: 'pi pi-home'
})

const breadcrumbItems = ref([
  {
    label: 'Projekt1'
  },
  {
    label: 'Gruppe1',
    icon: 'pi pi-table'
  }
])

const dashboardItems = ref([
  {
    label: 'Dashboard 1'
  },
  {
    label: 'Dashboard 2'
  }
])
</script>