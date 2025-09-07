import type {AxiosResponse} from "axios";

export const createPaginatedListMetaEntity = (meta: Partial<IPaginatedListMeta> = {}): IPaginatedListMeta => {
    return structuredClone({
        total: meta.total ?? 0,
        last_page: meta.last_page ?? 1,
        current_page: meta.current_page ?? 1
    })
}

export const createPaginatedListEntity = <T>({data}: AxiosResponse<IPaginatedList<T>>, createEntity:(params:Partial<T>) => T): IPaginatedList<T> => {
    return structuredClone({
        data: data.data.map((entity) => createEntity(entity)),
        meta: createPaginatedListMetaEntity(data.meta),
    })
}

export const createEmptyPaginatedListEntity = <T>(): IPaginatedList<T> => {
    return {
        data: [],
        meta: createPaginatedListMetaEntity()
    }
}