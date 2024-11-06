export interface ExploreList {
  data: Data;
  sectionItems: SectionItems;
  uri: string;
}

interface SectionItems {
  items: Items[];
}

interface Items {
  uri: string;
  content: Content;
}

interface Content {
  __typename: string;
  data: DataItem;
}

interface DataItem {
  __typename: string;
  data: DataItemContiner;
}

interface DataItemContiner {
  cardRepresentation: CardRepresentation;
}

interface CardRepresentation {
  title: TitleItem;
  artwork: Artwork;
  backgroundColor: BackgroundColor;
}

interface BackgroundColor {
  hex: string;
}

interface Artwork {
  sources: Sources[];
}

interface Sources {
  url: string;
}

interface TitleItem {
  transformedLabel: string;
}

interface Data {
  title: Title;
}

interface Title {
  transformedLabel: string;
}
