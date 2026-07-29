<template>
  <div class="flex w-[304px] flex-col gap-2.5 bg-white p-6 font-[Inter]">
    <div class="flex w-64 flex-col gap-[7px] rounded-xl bg-white">
      <div class="flex w-full flex-col gap-8 rounded-md p-[17.5px]">
        <div class="flex h-[22px] w-full items-center justify-between gap-[7px]">
          <span class="text-[17.5px] font-medium leading-[21px]">Paket 1</span>
          <Tag
            value="Beliebt"
            icon="pi pi-arrow-up-right"
            severity="info"
            class="text-[12.25px] font-bold"
          />
        </div>

        <div class="flex w-full flex-col gap-4">
          <div class="flex h-[17.5px] items-center gap-[7px]">
            <Checkbox
              v-model="unlimitedProjects"
              input-id="unlimited-projects"
              binary
            />
            <label
              for="unlimited-projects"
              class="text-sm font-normal leading-[17px]"
            >
              Unbegrenzte Projekte
            </label>
          </div>

          <div class="flex h-[17.5px] items-center gap-[7px]">
            <Checkbox
              v-model="unlimitedDashboards"
              input-id="unlimited-dashboards"
              binary
            />
            <label
              for="unlimited-dashboards"
              class="text-sm font-normal leading-[17px]"
            >
              Unbegrenzte Dashboards
            </label>
          </div>

          <div class="flex h-[17.5px] items-center gap-[7px]">
            <Checkbox
              v-model="advancedAnalytics"
              input-id="advanced-analytics"
              binary
            />
            <label
              for="advanced-analytics"
              class="text-sm font-normal leading-[17px]"
            >
              Erweiterte Analytics
            </label>
          </div>
        </div>

        <div class="flex w-full gap-[7px]">
          <Button
            label="Jetzt starten"
            class="h-[33px] w-full !border-[#10b981] !bg-[#10b981] text-sm font-medium"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const unlimitedProjects = ref(true)
const unlimitedDashboards = ref(true)
const advancedAnalytics = ref(true)
</script>