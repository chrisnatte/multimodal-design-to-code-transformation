<template>
    <div class="flex w-[304px] flex-col bg-white p-6">
        <div class="flex w-64 flex-col gap-6">
            <Textarea
                id="feedback"
                v-model="feedback"
                placeholder="Feedback eingeben..."
                variant="filled"
                rows="3"
                fluid
                aria-label="Feedback eingeben"
                class="!h-[84px] !resize-none"
            />

            <div class="flex items-center gap-[7px]">
                <Checkbox v-model="anonymous" inputId="anonymous" binary aria-label="Anonym senden" />
                <label for="anonymous" class="text-sm font-normal">Anonym senden</label>
            </div>

            <Button
                type="button"
                label="Absenden"
                icon="pi pi-check"
                iconPos="right"
                class="!h-[33px] !bg-emerald-500 !border-emerald-500"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';

const feedback = ref('');
const anonymous = ref(false);
</script>