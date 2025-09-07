export const createPaginationEntity = (arg:Partial<AxiosParameterType> = {}):AxiosParameterType => {
    return structuredClone({
        per_page: arg.per_page ?? 25,
        page: arg.page ?? 1,
        ...arg
    })
}