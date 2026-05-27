<template>
  <div class="w-full bg-[#f7f7f7] p-6">
    <div class="flex items-center gap-6">
      <div class="w-56">
        <InputText
          v-model="state.user"
          placeholder="Benutzer1"
          fluid
        />
      </div>

      <div class="flex items-center w-[340px]">
        <Button
          icon="pi pi-minus"
          variant="outlined"
          class="!rounded-r-none !h-8 !w-9 !p-0"
          aria-label="Decrease"
          @click="decrementAge"
        />
        <InputNumber
          v-model="state.age"
          placeholder="Alter eingeben"
          :useGrouping="false"
          fluid
          class="flex-1"
          :pt="{
            pcInputText: { root: { class: '!rounded-none !h-8' } }
          }"
        />
        <Button
          icon="pi pi-plus"
          variant="outlined"
          class="!rounded-l-none !h-8 !w-9 !p-0"
          aria-label="Increase"
          @click="incrementAge"
        />
      </div>

      <Divider layout="vertical" class="!h-8" />

      <div class="flex items-center gap-3">
        <ToggleSwitch v-model="state.showInfo" inputId="showInfo" />
        <label for="showInfo" class="text-[26px] leading-none"></label>
        <span class="text-[#222] text-[28px] leading-none">Informationen einblenden</span>
      </div>

      <Divider layout="vertical" class="!h-8" />

      <div class="flex items-center gap-8">
        <div class="flex items-center gap-2">
          <RadioButton v-model="state.option" inputId="option1a" name="opt" value="option1a" />
          <label for="option1a" class="text-[#334155] text-[28px] leading-none">Option1</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="state.option" inputId="option1b" name="opt" value="option1b" />
          <label for="option1b" class="text-[#334155] text-[28px] leading-none">Option1</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="state.option" inputId="option1c" name="opt" value="option1c" disabled />
          <label for="option1c" class="text-[#334155] text-[28px] leading-none">Option1</label>
        </div>
      </div>

      <Button
        label="Suche"
        icon="pi pi-check"
        iconPos="right"
        class="!bg-emerald-500 !border-emerald-500 !h-8 !px-5"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import ToggleSwitch from 'primevue/toggleswitch';

const state = reactive({
  user: 'Benutzer1',
  age: null,
  showInfo: true,
  option: 'option1b'
});

const incrementAge = () => {
  state.age = (state.age ?? 0) + 1;
};

const decrementAge = () => {
  state.age = Math.max(0, (state.age ?? 0) - 1);
};
</script>