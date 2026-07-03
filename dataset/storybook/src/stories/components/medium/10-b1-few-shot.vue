<template>
  <Card>
    <template #content>
      <div class="flex flex-col gap-2 p-4">
        <div class="flex flex-col gap-2">
          <h3>Dashboardeinrichtung</h3>
          <p>Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.</p>
        </div>

        <div class="flex flex-col gap-3">
          <ProgressBar :value="form.progress" />
          <span>Projektmetriken werden analysiert</span>
        </div>

        <div class="flex justify-end gap-2">
          <Button label="Weiter" severity="secondary" disabled />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'

const form = reactive({
  progress: 50
})
</script>