<template>
    <div class="flex h-44 w-[479px] flex-col gap-2.5 bg-white p-6">
        <div class="flex items-start gap-1">
            <div class="flex items-start gap-[7px] rounded-md bg-white p-3.5">
                <div class="flex items-center gap-[7px] py-2">
                    <Breadcrumb
                        :home="home"
                        :model="breadcrumbItems"
                        class="!border-0 !bg-transparent !p-0"
                    />
                    <span class="pi pi-chevron-right text-sm text-surface-500" aria-hidden="true"></span>
                </div>

                <div class="flex w-[175px] flex-col gap-0.5">
                    <Button
                        label="Dashboard anzeigen"
                        severity="secondary"
                        class="h-[33px] w-[161px] !bg-[#f1f5f9] !px-3 !py-2 !text-sm"
                    />
                    <Menu :model="dashboardItems" class="w-[175px]" />
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