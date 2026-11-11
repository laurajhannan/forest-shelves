import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import type { GalleryItem } from "@/lib/types";
import { galleryItems } from "@/data/gallery";
import { Image as ImageIcon } from "lucide-react";

const categories = [
  { value: "all", label: "All" },
  { value: "shelves", label: "Shelves" },
  { value: "peter", label: "Peter" },
  { value: "installation", label: "Installation" }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const isLoading = false;

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems?.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-6">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our handcrafted shelves and see Peter at work in his workshop in Portugal
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
            {categories.map(cat => (
              <TabsTrigger 
                key={cat.value} 
                value={cat.value}
                data-testid={`tab-${cat.value}`}
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="aspect-[4/3] rounded-md" />
            ))}
          </div>
        ) : filteredItems && filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card 
                key={item.id}
                className="overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-all"
                onClick={() => setSelectedImage(item)}
                data-testid={`gallery-item-${item.id}`}
              >
                <div className="aspect-[4/3] relative bg-muted">
                  {item.type === 'image' ? (
                    <img 
                      src={item.url} 
                      alt={item.caption || "Gallery image"}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <video 
                      src={item.url}
                      className="w-full h-full object-contain"
                      controls={false}
                    />
                  )}
                </div>
                {item.caption && (
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">{item.caption}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">
              No images in this category yet
            </p>
          </div>
        )}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0">
          {selectedImage && (
            <div className="relative">
              {selectedImage.type === 'image' ? (
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.caption || "Gallery image"}
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
              ) : (
                <video 
                  src={selectedImage.url}
                  className="w-full h-auto max-h-[90vh]"
                  controls
                  autoPlay
                />
              )}
              {selectedImage.caption && (
                <div className="p-6 bg-background">
                  <p className="text-muted-foreground">{selectedImage.caption}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
