export type GalleryItem = {
  id: string;
  url: string;
  type: "image" | "video" | string;
  category: string;
  caption: string | null;
};

export type ShelfSpecification = {
  width: string;
  depth: string;
  woodStain: string;
  finish: string;
  quantity: number;
  notes?: string;
};
