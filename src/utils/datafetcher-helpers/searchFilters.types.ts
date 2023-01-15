

export type SingleSearchFilter<T> = Record<keyof T, string | string[] | number | number[] | boolean | boolean[] | null | undefined>;

export type SortByProperty = {
    key: string;
    order: "asc" | "desc";
};
export type SortByConfig = SortByProperty[];

export type SearchFilters<T> = {
    keyword?: string;
    filters?: SingleSearchFilter<T>;
    sort?: SortByConfig;
};