import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Plus, Minus, Trash2 } from "lucide-react";
import type { ShelfSpecification } from "@/lib/types";

const ORDER_EMAIL = "petergosling40@gmail.com";

const orderFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().optional(),
  address: z.string().min(10, "Please provide your full delivery address"),
  specialRequirements: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderFormSchema>;

export default function Order() {
  const { toast } = useToast();
  const [shelves, setShelves] = useState<ShelfSpecification[]>([
    { width: "80", depth: "20", woodStain: "Natural", finish: "Satin", quantity: 1 }
  ]);

  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      specialRequirements: "",
    },
  });

  const [order, setOrder] = useState<{ subject: string; body: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const clampWidth = (w: string) =>
    Math.min(130, Math.max(25, parseInt(w) || 25)).toString();

  // No server on the static site. Submitting builds the order message and
  // shows ways to send it to Peter: Gmail, the customer's email app,
  // WhatsApp, or copy and paste.
  const buildOrder = (data: OrderFormData) => {
    const clean = shelves.map((s) => ({ ...s, width: clampWidth(s.width) }));
    setShelves(clean);
    const shelfLines = clean.map((s, i) =>
      `Shelf ${i + 1}: ${s.width} cm wide x 20 cm deep x 10 cm thick, ${s.woodStain} stain, ${s.finish} finish, quantity ${s.quantity}`
    ).join("\n");
    const body = [
      "New shelf order request",
      "",
      shelfLines,
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "-"}`,
      `Delivery address: ${data.address}`,
      `Special requirements: ${data.specialRequirements || "-"}`,
    ].join("\n");
    setOrder({ subject: `Shelf order request from ${data.name}`, body });
    setCopied(false);
    setTimeout(() => document.getElementById("send-order")?.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
  };

  const enc = encodeURIComponent;
  const gmailLink = order ? `https://mail.google.com/mail/?view=cm&fs=1&to=${ORDER_EMAIL}&su=${enc(order.subject)}&body=${enc(order.body)}` : "";
  const mailtoLink = order ? `mailto:${ORDER_EMAIL}?subject=${enc(order.subject)}&body=${enc(order.body)}` : "";
  const whatsappLink = order ? `https://wa.me/351912825711?text=${enc(order.body)}` : "";
  const copyOrder = async () => {
    if (!order) return;
    try {
      await navigator.clipboard.writeText(`To: ${ORDER_EMAIL}\nSubject: ${order.subject}\n\n${order.body}`);
      setCopied(true);
    } catch {
      toast({ title: "Couldn't copy", description: "Please select the text above and copy it.", variant: "destructive" });
    }
  };

  const addShelf = () => {
    setShelves([...shelves, { width: "80", depth: "20", woodStain: "Natural", finish: "Satin", quantity: 1 }]);
  };

  const removeShelf = (index: number) => {
    setShelves(shelves.filter((_, i) => i !== index));
  };

  const updateShelf = (index: number, field: keyof ShelfSpecification, value: string | number) => {
    const updated = [...shelves];
    updated[index] = { ...updated[index], [field]: value };
    setShelves(updated);
  };

  const onSubmit = (data: OrderFormData) => {
    if (shelves.length === 0) {
      toast({
        title: "No shelves selected",
        description: "Please add at least one shelf to your order",
        variant: "destructive",
      });
      return;
    }
    buildOrder(data);
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-6">
            Order Your Custom Shelf
          </h1>
          <p className="text-xl text-muted-foreground">
            Precision-crafted to your specifications. Delivered to your door.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Shelf Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {shelves.map((shelf, index) => (
                <div key={index} className="p-6 border rounded-md relative">
                  {shelves.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeShelf(index)}
                      className="absolute top-2 right-2"
                      data-testid={`button-remove-shelf-${index}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                  
                  <h3 className="font-medium mb-4">Shelf {index + 1}</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Width (cm)</label>
                      <Input 
                        type="number"
                        min="25"
                        max="130"
                        value={shelf.width}
                        onChange={(e) => {
                          updateShelf(index, "width", e.target.value.replace(/[^0-9]/g, ""));
                        }}
                        onBlur={() => updateShelf(index, "width", clampWidth(shelf.width))}
                        data-testid={`input-width-${index}`}
                        className="text-base"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Min: 25 cm, Max: 130 cm</p>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Depth</label>
                      <div className="h-9 flex items-center px-3 border rounded-md bg-muted/50">
                        <span className="text-muted-foreground">20 cm (fixed)</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">All shelves are 20 cm deep</p>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Thickness</label>
                      <div className="h-9 flex items-center px-3 border rounded-md bg-muted/50">
                        <span className="text-muted-foreground">10 cm (fixed)</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">All shelves are 10 cm thick</p>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Wood Stain</label>
                      <Select 
                        value={shelf.woodStain} 
                        onValueChange={(val) => updateShelf(index, "woodStain", val)}
                      >
                        <SelectTrigger data-testid={`select-stain-${index}`}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Natural">Natural</SelectItem>
                          <SelectItem value="Dark Brown">Dark Brown</SelectItem>
                          <SelectItem value="Grey">Grey</SelectItem>
                          <SelectItem value="White">White</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Finish</label>
                      <Select 
                        value={shelf.finish} 
                        onValueChange={(val) => updateShelf(index, "finish", val)}
                      >
                        <SelectTrigger data-testid={`select-finish-${index}`}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="None">None</SelectItem>
                          <SelectItem value="Satin">Satin</SelectItem>
                          <SelectItem value="Gloss">Gloss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Quantity</label>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateShelf(index, "quantity", Math.max(1, shelf.quantity - 1))}
                          data-testid={`button-decrease-qty-${index}`}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-12 text-center font-medium" data-testid={`text-qty-${index}`}>
                          {shelf.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateShelf(index, "quantity", shelf.quantity + 1)}
                          data-testid={`button-increase-qty-${index}`}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Button 
                variant="outline" 
                onClick={addShelf}
                className="w-full"
                data-testid="button-add-shelf"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Another Shelf
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8 p-6 bg-primary/10 rounded-md border border-primary/20">
          <h3 className="font-semibold mb-2 text-lg">Pricing Information</h3>
          <p className="text-muted-foreground">
            After you submit your order request, Peter will get back to you within 2-4 hours with a custom quote. 
            All prices are <strong>10% cheaper than comparable items on Etsy</strong>, ensuring you get the best value 
            for handcrafted quality.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">What's Included</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Precision-built floating shelf with seamless finish",
                "Hidden bracket mounting system (engineered for strength)",
                "Quality screws and rawl plugs for wall mounting",
                "Installation instructions and level-mounting guide",
                "Personal consultation via email/phone if needed"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Your Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (optional)</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Delivery Address *</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={3} data-testid="input-address" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="specialRequirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Requirements / Notes (optional)</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={4} data-testid="input-special-requirements" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg"
                  
                  data-testid="button-submit-order"
                >
                  Submit Order Request
                </Button>
                {order && (
                  <div id="send-order" className="p-6 rounded-md border border-primary/30 bg-primary/5 space-y-4">
                    <h3 className="font-semibold text-lg">Last step: send your order to Peter</h3>
                    <p className="text-sm text-muted-foreground">
                      Your order is ready. Choose how to send it, then press send in the window that opens.
                    </p>
                    <pre className="whitespace-pre-wrap text-sm bg-background border rounded-md p-4 font-sans">{order.body}</pre>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <Button asChild size="lg"><a href={gmailLink} target="_blank" rel="noopener noreferrer" data-testid="link-send-gmail">Send with Gmail</a></Button>
                      <Button asChild size="lg" variant="outline"><a href={whatsappLink} target="_blank" rel="noopener noreferrer" data-testid="link-send-whatsapp">Send on WhatsApp</a></Button>
                      <Button asChild size="lg" variant="outline"><a href={mailtoLink} data-testid="link-send-mailapp">Send with my email app</a></Button>
                      <Button type="button" size="lg" variant="outline" onClick={copyOrder} data-testid="button-copy-order">{copied ? "Copied" : "Copy the order"}</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Copied it? Paste it into an email to <a href={`mailto:${ORDER_EMAIL}`} className="underline">{ORDER_EMAIL}</a>. Peter replies within 2-4 hours.
                    </p>
                  </div>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 bg-card rounded-md border">
          <h3 className="font-semibold mb-4">Delivery Information</h3>
          <div className="space-y-2 text-muted-foreground">
            <p><strong>Portugal:</strong> €10 – typically 3-5 working days</p>
            <p><strong>EU Countries:</strong> €25 – typically 5-10 working days</p>
            <p><strong>UK & Other International:</strong> Contact for quote</p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-primary/10 rounded-md">
          <h3 className="font-semibold mb-2">Questions Before You Order?</h3>
          <p className="text-muted-foreground mb-4">
            We're happy to help you choose the right shelf for your space.
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>Email:</strong> petergosling40@gmail.com</p>
            <p><strong>Phone/WhatsApp:</strong> +351 912 825 711</p>
            <p className="text-muted-foreground">Response time: Within 2-4 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
