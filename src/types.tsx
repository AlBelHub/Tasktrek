export interface Page {
    id: string,
    name: string,
    blocks: Block[]
}

export interface Block {
    id: string,
    header: string,
    cards: Array<number>
}

export interface Card {
    id: string,
    header: string,
}