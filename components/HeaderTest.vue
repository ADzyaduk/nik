
<script setup lang="ts">
const items = [
    [{
        label: 'Покраска монолита',
        icon: 'i-heroicons-arrow-right-20-solid',
        to: '/pokraskamonolita'
    }],
    [{
        label: 'Покраска фасада',
        icon: 'i-heroicons-arrow-right-20-solid',
        to: '/pokraskafasada'
    }],
    [{
        label: 'Покраска металла',
        icon: 'i-heroicons-arrow-right-20-solid',
        to: '/pokraskametalla'
    }],
    [{
        label: 'Покраска забора',
        icon: 'i-heroicons-arrow-right-20-solid',
        to: '/pokraskazabora'
    }],
    [{
        label: 'Покраска кирпича',
        icon: 'i-heroicons-arrow-right-20-solid',
        to: '/pokraskakirpicha'
    }],
    [{
        label: 'Покраска обоев',
        icon: 'i-heroicons-arrow-right-20-solid',
        to: '/pokraskaoboev'
    }],

]
</script>

<template>
    <div class="bg-cover bg-center flex items-top justify-center h-[180px]  bg-slate-800 mb-4">
        <nav class="relative container mx-auto p-6">
            <div class="flex items-center justify-between">
                <div class="pt-2">
                    <img src="~/assets/logo3.png" alt="logo" class="" width="400px">
                </div>
                <div class="hidden md:flex space-x-6">
                    <ULink to="/" active-class="text-lime-500 dark:text-indigo-500"
                        inactive-class="font-semibold text-gray-400 dark:text-gray-400 hover:text-lime-500 dark:hover:text-indigo-500">
                        Главная
                    </ULink>
                    <UDropdown :items="items" mode="click" :popper="{ placement: 'bottom-start' }">
                        <UButton
                            class=" font-semibold text-gray-400 dark:text-gray-400 hover:text-lime-500 dark:hover:text-indigo-500"
                            color="lime" variant="link" label="Покраска"
                            trailing-icon="i-heroicons-chevron-down-20-solid" />
                    </UDropdown>
                    <ULink to="price" active-class="text-lime-500 dark:text-indigo-500"
                        inactive-class="font-semibold text-gray-400 dark:text-gray-400 hover:text-lime-500 dark:hover:text-indigo-500">
                        Цены
                    </ULink>
                    <ULink to="galery" active-class="text-lime-500 dark:text-indigo-500"
                        inactive-class="font-semibold text-gray-400 dark:text-gray-400 hover:text-lime-500 dark:hover:text-indigo-500">
                        Галерея
                    </ULink>
                    <ULink to="contacts" active-class="text-lime-500 dark:text-indigo-500"
                        inactive-class="font-semibold text-gray-400 dark:text-gray-400 hover:text-lime-500 dark:hover:text-indigo-500">
                        Контакты
                    </ULink>
                </div>
                <div>
                    <BtnColorMode class="m-2" />
                </div>
            </div>
        </nav>

    </div>
</template>


<style scoped>
</style>
