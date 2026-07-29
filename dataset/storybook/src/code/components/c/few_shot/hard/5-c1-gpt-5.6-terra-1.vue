<template>
  <Dialog
    v-model:visible="visible"
    modal
    :dismissable-mask="false"
    :closable="true"
    :pt="{
      root: 'w-full max-w-[512px]',
      header: '!px-5 !pt-5 !pb-4',
      title: 'text-base font-semibold',
      content: '!px-5 !pb-5',
    }"
  >
    <template #header>
      <span>Neues Projekt</span>
    </template>

    <Stepper v-model:value="activeStep" class="w-full">
      <StepList class="border-b border-slate-200">
        <Step value="1" class="!px-4 !py-2 !text-sm">
          <span class="font-semibold">1 - Allgemein</span>
        </Step>
        <Step value="2" class="!px-4 !py-2 !text-sm">
          <span class="font-semibold">2 - Zeitplan</span>
        </Step>
        <Step value="3" class="!px-4 !py-2 !text-sm">
          <span class="font-semibold">3 - Einstellungen</span>
        </Step>
      </StepList>

      <StepPanels class="!pt-4">
        <StepPanel value="1">
          <template #content>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <label for="project-name" class="text-sm">Projektname</label>
                <InputText v-model="projectName" input-id="project-name" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="category" class="text-sm">Kategorie</label>
                <Select
                  v-model="category"
                  :options="categories"
                  input-id="category"
                  class="w-full"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label for="manager" class="text-sm">Verantwortlicher</label>
                <Select
                  v-model="manager"
                  :options="managers"
                  option-label="name"
                  input-id="manager"
                  class="w-full"
                >
                  <template #value="{ value }">
                    <div v-if="value" class="flex items-center gap-2">
                      <Avatar :label="value.initials" shape="circle" class="!h-6 !w-6 !text-xs" />
                      <span>{{ value.name }}</span>
                    </div>
                  </template>
                  <template #option="{ option }">
                    <div class="flex items-center gap-2">
                      <Avatar :label="option.initials" shape="circle" class="!h-6 !w-6 !text-xs" />
                      <span>{{ option.name }}</span>
                    </div>
                  </template>
                </Select>
              </div>

              <div class="flex justify-end gap-2 pt-4">
                <Button label="Abbrechen" severity="secondary" text @click="visible = false" />
                <Button label="Weiter" @click="activeStep = '2'" />
              </div>
            </div>
          </template>
        </StepPanel>

        <StepPanel value="2">
          <template #content>
            <div class="flex justify-end pt-4">
              <Button label="Weiter" @click="activeStep = '3'" />
            </div>
          </template>
        </StepPanel>

        <StepPanel value="3">
          <template #content>
            <div class="flex justify-end pt-4">
              <Button label="Abbrechen" severity="secondary" text @click="visible = false" />
            </div>
          </template>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Step from 'primevue/step'
import StepList from 'primevue/steplist'
import StepPanel from 'primevue/steppanel'
import StepPanels from 'primevue/steppanels'
import Stepper from 'primevue/stepper'

const visible = ref(true)
const activeStep = ref('1')
const projectName = ref('')
const category = ref('Entwicklung')
const categories = ref(['Entwicklung', 'Design', 'Marketing'])
const manager = ref({ name: 'Max Mustmann', initials: 'M' })
const managers = ref([
  { name: 'Max Mustmann', initials: 'M' },
  { name: 'Anna Schmidt', initials: 'A' },
])
</script>