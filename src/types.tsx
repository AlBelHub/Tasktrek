export interface Page {
  id: string;
  name: string;
  blocks: Block[];
}

export interface Block {
  id: string;
  header: string;
  cards: Card[];
}

export interface Card {
  id: string;
  header: string;
  parentBlockId: string;
  tags?: Tag[];
}

export interface Tag {
  text: string;
  color: string;
  cardID: string;
  blockId: string;
}
