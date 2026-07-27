<template>
  <div class="flex w-[256px] flex-col gap-3">
    <div class="flex h-[22px] items-center gap-3">
      <div class="flex flex-1 items-center gap-[7px]">
        <Checkbox
          v-model="aufgabe1"
          inputId="aufgabe1"
          binary
          variant="filled"
          :pt="checkboxPassThrough"
        />
        <label for="aufgabe1" class="text-sm font-normal">Aufgabe1</label>
      </div>
      <Tag
        value="Hoch"
        severity="danger"
        rounded
        class="text-[12.25px]"
        style="background-color: #ffe2e2"
      />
    </div>

    <div class="flex h-[22px] items-center gap-3">
      <div class="flex flex-1 items-center gap-[7px]">
        <Checkbox
          v-model="aufgabe2"
          inputId="aufgabe2"
          binary
          variant="filled"
          :pt="checkboxPassThrough"
        />
        <label for="aufgabe2" class="text-sm font-normal">Aufgabe2</label>
      </div>
      <Tag
        value="Niedrig"
        rounded
        class="text-[12.25px]"
        style="background-color: #d1fae5"
      />
    </div>

    <div class="flex h-[22px] items-center gap-3">
      <div class="flex flex-1 items-center gap-[7px]">
        <Checkbox
          v-model="aufgabe3"
          inputId="aufgabe3"
          binary
          variant="filled"
          :pt="checkboxPassThrough"
        />
        <label for="aufgabe3" class="text-sm font-normal">Aufgabe3</label>
      </div>
      <Tag
        value="Mittel"
        severity="warn"
        rounded
        class="text-[12.25px]"
        style="background-color: #ffedd5"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const aufgabe1 = ref(false);
const aufgabe2 = ref(false);
const aufgabe3 = ref(false);

const checkboxPassThrough = {
  box: {
    style: {
      backgroundColor: '#f8fafc',
      borderColor: '#cbd5e1'
    }
  }
};
</script>