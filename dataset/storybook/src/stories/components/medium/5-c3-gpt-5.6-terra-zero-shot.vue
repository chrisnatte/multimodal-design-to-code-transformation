<template>
    <main class="flex min-h-screen items-start justify-center bg-white p-6">
        <Card class="w-full max-w-[488px] overflow-hidden !rounded-xl !border !border-slate-100 !shadow-sm">
            <template #header>
                <div class="h-[172px] overflow-hidden bg-slate-950">
                    <svg
                        viewBox="0 0 488 172"
                        class="h-full w-full"
                        role="img"
                        aria-label="Abstract green lion artwork"
                        preserveAspectRatio="xMidYMid slice"
                    >
                        <defs>
                            <radialGradient id="orbGlow" cx="42%" cy="25%" r="75%">
                                <stop offset="0%" stop-color="#35c65b" />
                                <stop offset="42%" stop-color="#0f662f" />
                                <stop offset="76%" stop-color="#0b1731" />
                                <stop offset="100%" stop-color="#070b1e" />
                            </radialGradient>
                            <radialGradient id="smallOrb" cx="40%" cy="18%" r="75%">
                                <stop offset="0%" stop-color="#54d66e" />
                                <stop offset="47%" stop-color="#15783a" />
                                <stop offset="100%" stop-color="#0b1731" />
                            </radialGradient>
                            <linearGradient id="maneGreen" x1="0" y1="0" x2="1" y2="1">
                                <stop stop-color="#51c879" />
                                <stop offset="1" stop-color="#176b4a" />
                            </linearGradient>
                            <linearGradient id="faceGreen" x1="0" y1="0" x2="0.8" y2="1">
                                <stop stop-color="#46bd74" />
                                <stop offset="1" stop-color="#0d5d42" />
                            </linearGradient>
                        </defs>

                        <rect width="488" height="172" fill="#050a1d" />
                        <circle cx="179" cy="87" r="102" fill="url(#orbGlow)" />
                        <circle cx="357" cy="198" r="74" fill="url(#smallOrb)" />

                        <g opacity="0.24" stroke="#184064" stroke-width="1">
                            <path d="M0 141H488M0 151H488M0 162H488M0 172H488" />
                            <path d="M20 172L143 133M70 172L159 133M120 172L176 133M170 172L192 133M220 172L209 133M270 172L225 133M320 172L242 133M370 172L258 133M420 172L275 133M470 172L292 133" />
                        </g>

                        <g transform="translate(112 34)">
                            <path d="M23 21L47 19L56 2L76 4L86 19L111 15L111 37L102 46L106 69L91 84L78 100L52 100L36 86L23 80L18 58L8 43Z" fill="url(#maneGreen)" />
                            <path d="M37 36L58 28L78 37L95 31L100 51L89 66L84 87L66 98L48 90L40 72L27 60Z" fill="url(#faceGreen)" />
                            <path d="M36 35L48 21L61 35L58 49Z" fill="#447077" />
                            <path d="M61 35L76 4L88 24L79 43Z" fill="#5d7c80" />
                            <path d="M79 43L88 24L111 15L109 38L95 46Z" fill="#416970" />
                            <path d="M20 39L32 22L44 38L35 50Z" fill="#3b8868" />
                            <path d="M48 21L57 7L69 8L68 28Z" fill="#789496" />
                            <path d="M58 49L79 43L92 52L85 65L66 67Z" fill="#24585a" />
                            <path d="M40 72L58 67L66 98L48 90Z" fill="#1f7758" />
                            <path d="M66 67L85 65L84 87L66 98Z" fill="#25845f" />
                            <path d="M27 60L40 54L40 72L36 86L23 80L18 58Z" fill="#2b805d" />
                            <path d="M92 52L102 46L106 69L91 84L85 65Z" fill="#3b9a68" />
                        </g>

                        <g transform="translate(333 153)">
                            <path d="M20 6L42 10L55 0L79 7L89 27L83 52L64 65L39 58L24 43Z" fill="#378b59" />
                            <path d="M35 10L57 14L66 31L59 50L43 45L35 28Z" fill="#6ca4a1" />
                            <path d="M57 14L79 7L84 28L68 32Z" fill="#356c73" />
                        </g>
                    </svg>
                </div>
            </template>

            <template #content>
                <div class="flex flex-col gap-2 px-[18px] pt-5">
                    <div class="flex items-center gap-2">
                        <h2 class="text-lg font-medium leading-5 text-slate-700">Produkt1</h2>
                        <Tag value="Neu" severity="success" class="!px-2 !py-1 !text-xs !font-semibold" />
                    </div>

                    <p class="m-0 text-[15px] leading-[23px] text-slate-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>

                    <div class="mt-4 flex items-center justify-end gap-2">
                        <InputNumber
                            v-model="quantity"
                            input-id="product-quantity"
                            :min="1"
                            show-buttons
                            class="w-32"
                            input-class="!py-1.5"
                        />
                        <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" class="!px-3 !py-2" />
                    </div>
                </div>
            </template>
        </Card>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'

const quantity = ref(1)
</script>