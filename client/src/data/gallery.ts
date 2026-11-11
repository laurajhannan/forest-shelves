import type { GalleryItem } from "@/lib/types";

const base = import.meta.env.BASE_URL;

// Gallery list (exported from the Replit database on 11 Nov 2026).
// To add a photo: put it in client/public/uploads/ and add a line here.
export const galleryItems: GalleryItem[] = [
  { id: "4a199c1e-7b63-4fd0-b28a-41b56c64989c", url: base + "uploads/bracket_construction_1767365126619.jpeg", type: "image", category: "installation", caption: "Custom wooden brackets fit precisely" },
  { id: "2a3afb95-fab2-43d6-8832-5f44a5d306e4", url: base + "uploads/grey_bookshelf_xisto_1767365126618.jpeg", type: "image", category: "shelves", caption: "Grey floating shelf with vintage books" },
  { id: "57cfdd8e-411c-4743-9875-c71e39acf39c", url: base + "uploads/dark_shelf_flowers_1767365126618.jpeg", type: "image", category: "shelves", caption: "Dark stained shelf on xisto stone" },
  { id: "56a9027f-43eb-4337-8bfb-f87d75c0886d", url: base + "uploads/grey_shelf_brackets_1767365126598.png", type: "image", category: "installation", caption: "Hidden wooden brackets inside the shelf" },
  { id: "7bdf37be-d9b5-4eb5-a645-145e1963eb40", url: base + "uploads/natural_varnish_shelf_1767365126616.png", type: "image", category: "shelves", caption: "Natural wood with clear varnish finish" },
  { id: "246e4111-fa03-407c-832e-12cd38592101", url: base + "uploads/dark_brown_shelf_1767365126616.png", type: "image", category: "shelves", caption: "Dark brown stained floating shelf" },
  { id: "24590b98-65ce-411a-83af-76c2f45eed9c", url: base + "uploads/bathroom_white_shelf_1767365126617.jpeg", type: "image", category: "shelves", caption: "White floating shelf on xisto stone wall" },
  { id: "da09948b-8460-4966-a4bb-9988acba8ef9", url: base + "uploads/saw_outside_workshop_1763316728647.png", type: "image", category: "peter", caption: "Peter using the saw at his outdoor workshop" },
  { id: "0724d579-961f-428f-8378-9a7c5cf0e1cd", url: base + "uploads/outside_house_1763315960125.jpeg", type: "image", category: "peter", caption: "Peter in the porch he built for his house near Gois" },
  { id: "53077419-5e7e-4852-9d05-3ce6e3438751", url: base + "uploads/drilling_box_1763315960125.png", type: "image", category: "peter", caption: "Peter crafting shelves at his outdoor workshop" },
];
