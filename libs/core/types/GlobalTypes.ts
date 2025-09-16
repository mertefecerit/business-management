declare global {
    interface IDataMessageResponse<T = unknown> {
        data : T,
        message: string,
    }
    type TErrorBag<T> = Partial<Record<keyof T, string[]>>

    interface IPaginatedListMeta {
        total           : number;
        last_page       : number;
        current_page    : number;
    }

    interface IPaginatedList<T> {
        data    : T[];
        meta    : IPaginatedListMeta;
    }

    type AxiosParameterType = Record<string, string | number | undefined>

    interface IPendingControl {
        isPending: boolean;
        setIsPending: (value: boolean) => void;
    }
}

export {}