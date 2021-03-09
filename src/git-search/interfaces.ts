export interface searchFormProps {
    onChangeSearch: Function;
    onChangeType: Function;
    searchValue: string
    typeValue: string
 
}

export interface searchCardProps{
    login?: string
    id?:number
    avatar_url?:string
    score?:number
    name?: string
    description?: string
    owner?: {
        login: string
        avatar_url:string
    }
    watchers?: number
    open_issues?: number
    forks?: number
}

