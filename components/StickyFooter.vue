<template>
    <footer
        class="fixed bottom-0 left-0 z-20 w-full p-4 bg-slate-800 border-t border-lime-500 shadow md:flex md:items-center md:justify-between md:p-6  dark:border-indigo-500">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <a href="/" class="hover:text-lime-500 dark:hover:text-indigo-500 text-gray-400 dark:text-gray-400 ">Покраска в
                городе Казань </a>
            <ULink to="tel:79372979997" active-class="text-lime-500 dark:text-indigo-500 "
                inactive-class="hidden md:inline font-semibold text-gray-500 dark:text-gray-400 hover:text-lime-500 dark:hover:text-indigo-500">
                +7 937 297 99 97
            </ULink>
        </span>

        <div>
            <UButton to="tel:79372979997" icon="i-mdi-phone" size="sm" color="lime" square variant="link" />
            <UButton to="https://wa.me/79372979997" icon="i-mdi-whatsapp" size="sm" color="lime" square variant="link" />
            <UButton to="https://t.me/+79372979997" icon="i-mdi-telegram" size="sm" color="lime" square variant="link" />
        </div>

        <div
            class="flex flex-wrap md:hidden items-center justify-between mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 space-x-1">
            <ULink to="/" active-class="text-lime-500 dark:text-indigo-500"
                inactive-class="font-semibold text-gray-500 dark:text-gray-400 hover:text-lime-500 dark:hover:text-indigo-500">
                Главная
            </ULink>
            <UDropdown :items="items" mode="click" :popper="{ placement: 'bottom-start' }">
                <UButton
                    class="font-semibold  text-gray-400 dark:text-gray-400 hover:text-lime-500 dark:hover:text-indigo-500"
                    color="lime" variant="link" label="Покраска" trailing-icon="i-heroicons-chevron-down-20-solid" />
            </UDropdown>
            <ULink to="price" active-class="text-lime-500 dark:text-indigo-500"
                inactive-class="font-semibold text-gray-500 dark:text-gray-400 hover:text-lime-500 dark:hover:text-indigo-500">
                Цены
            </ULink>
            <ULink to="galery" active-class="text-lime-500 dark:text-indigo-500"
                inactive-class="font-semibold text-gray-500 dark:text-gray-400 hover:text-lime-500 dark:hover:text-indigo-500">
                Галерея
            </ULink>
            <ULink to="contacts" active-class="text-lime-500 dark:text-indigo-500"
                inactive-class="font-semibold text-gray-500 dark:text-gray-400 hover:text-lime-500 dark:hover:text-indigo-500">
                Контакты
            </ULink>
        </div>
    </footer>
</template>

<script setup>
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

<style lang="scss" scoped>
</style>
