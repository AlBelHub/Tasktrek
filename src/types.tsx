interface Page {
    id: string,
    name: string,
    blocks: Block[]
}

interface Block {
    id: string,
    header: string,
    cards: Card[]
}

interface Card {
    id: string,
    header: string,
}