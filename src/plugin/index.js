import {useRouter as originUserRouter} from "vue-router";
import {inject, ref} from "vue";

export const useRouter = () => {
    const router = originUserRouter()
    const originPush = router.push
    const store = usePageStackStore()
    const push = (...arr) => {
        return originPush(...arr).then(() => {
            store.push({...router.currentRoute.value})
        })
    }
    if (store.pageStack.value.length === 0) {
        store.push({...router.currentRoute.value})
    }
    return {
        ...router,
        push
    }
}
const injectKey = 'PageStackStore'
export const usePageStackStore = () => inject(injectKey)
export const createPageStackStore = () => {
    const pageStack = ref([])
    const push = (page) => {
        pageStack.value.push(page)
    }
    const pop = () => {
        return pageStack.value.pop()
    }
    window.addEventListener('popstate', () => {
        pop()
    })
    return {
        pageStack,
        push,
        pop
    }
}

export default {
    install(app) {
        app.provide(injectKey, createPageStackStore())
    }
}
