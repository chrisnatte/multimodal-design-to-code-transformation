<template>
    <div class="flex h-32 w-[431px] gap-1 rounded-md bg-white p-3.5">
        <div class="flex h-[30px] w-[221px] items-center gap-[7px] py-2">
            <Breadcrumb
                :home="home"
                :model="breadcrumbItems"
                class="!h-[14px] !border-0 !bg-transparent !p-0 !text-sm"
            >
                <template #item="{ item, props }">
                    <a v-bind="props.action" class="flex items-center gap-[7px] text-sm">
                        <span v-if="item.icon" :class="item.icon" class="text-sm" />
                        <span v-if="item.label">{{ item.label }}</span>
                    </a>
                </template>
                <template #separator>
                    <span class="pi pi-chevron-right text-xs" />
                </template>
            </Breadcrumb>
            <span class="pi pi-chevron-right text-xs" aria-hidden="true" />
        </div>

        <div class="flex w-[175px] flex-col gap-0.5">
            <Button
                label="Dashboard anzeigen"
                severity="secondary"
                class="!h-[33px] !w-[161px] !justify-center !bg-[#f1f5f9] !px-3 !text-sm"
            />
            <Menu :model="dashboardItems" class="!w-[175px]" />
        </div>
    </div>
</template>

<script setup>
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const home = {
    icon: 'pi pi-home'
}

const breadcrumbItems = [
    {
        label: 'Projekt1'
    },
    {
        label: 'Gruppe1',
        icon: 'pi pi-table'
    }
]

const dashboardItems = [
    {
        label: 'Dashboard 1'
    },
    {
        label: 'Dashboard 2'
    }
]
</script>