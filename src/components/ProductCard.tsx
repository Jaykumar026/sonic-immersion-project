import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard = ({ image, title, description }: ProductCardProps) => {
  return (
    <Card className="bg-card border-border hover:border-primary transition-smooth shadow-card hover:shadow-glow hover:-translate-y-2 overflow-hidden group">
      <CardHeader className="p-0">
        <div className="overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-2xl mb-3 text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground mb-6 min-h-[4rem]">
          {description}
        </CardDescription>
        <Button 
          variant="hero" 
          className="w-full"
        >
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
