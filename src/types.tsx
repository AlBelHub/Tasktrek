export interface Page {
  id: string;
  name: string;
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
}
