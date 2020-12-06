export interface searchApiResponse {
    exhaustiveNbHits: boolean
    hits: Array<searchHitsItem>
    hitsPerPage: number
    nbHits: number
    nbPages: number
    page: number
    params: string
    processingTimeMS: number
    query: string
}

export interface searchHitsItem {
    author: string
    comment_text?: null
    created_at: string
    created_at_i: number
    num_comments: number
    objectID: string
    parent_id?: null
    points: number
    relevancy_score: number
    story_id?: null
    story_text?: null
    story_title?: null
    story_url?: null
    title: string
    url: string
    _highlightResult: highLightResult
    _tags: Array<string>
}

interface highLightResult {
    author: highLightAuthor
    title: highLightTitle
    url: highLightUrl
}

interface highLightAuthor {
    value: string
    matchLevel: string
    matchedWords: Array<any>
}

interface highLightTitle {
    value: string
    matchLevel: string
    matchedWords: Array<string>
    fullyHighlighted: boolean
}

interface highLightUrl {
    value: string
    matchLevel: string
    matchedWords: Array<any>
}