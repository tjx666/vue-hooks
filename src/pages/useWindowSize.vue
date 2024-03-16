<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

function useWindowResize() {
    const width = ref(window.innerWidth);
    const height = ref(window.innerHeight);

    const handleResize = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });

    return { width, height };
}

const { width, height } = useWindowResize();

const logRender = <T,>(v: T, msg: string) => {
    console.log(msg);
    return v;
};
</script>

<template>
    <div>
        <p>width: {{ logRender(width, 'w') }}</p>
        <p>height: {{ logRender(height, 'h') }}</p>
    </div>
</template>
