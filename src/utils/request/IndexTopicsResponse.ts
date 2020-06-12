export interface IndexTopicsResponse {
    data: Array<IndexTopicsItem>
    success: boolean
}

export interface IndexTopicsItem {
    author?: Author
    avatar_url?: string
    loginname?: string
    author_id?: string
    content?: string
    create_at?: string
    good?: boolean
    id?: string
    last_reply_at?: string
    reply_count?: number
    tab?: string
    title?: string
    top?: boolean
    visit_count?: number
}

interface Author {
    loginname: string
    avatar_url: string
}