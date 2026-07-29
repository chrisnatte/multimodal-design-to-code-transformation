<template>
    <div class="flex w-[304px] flex-col bg-white p-6">
        <div class="flex w-64 flex-col gap-6">
            <Textarea
                v-model="feedback"
                placeholder="Feedback eingeben..."
                variant="filled"
                fluid
                :rows="3"
                class="!h-[84px] !resize-none !border-[#cbd5e1] !bg-[#f8fafc] !text-sm"
            />

            <div class="flex items-center gap-[7px]">
                <Checkbox v-model="anonymous" inputId="anonymous" binary />
                <label for="anonymous" class="text-sm text-slate-700">Anonym senden</label>
            </div>

            <Button
                label="Absenden"
                icon="pi pi-check"
                iconPos="right"
                class="!h-[33px] !w-[113px] !border-[#10b981] !bg-[#10b981] !px-3 !py-2 !text-sm"
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