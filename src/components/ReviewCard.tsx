import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  review: string;
}

const ReviewCard = ({ name, review }: ReviewCardProps) => {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-smooth shadow-card">
      <CardHeader>
        <CardTitle className="text-lg text-foreground flex items-center gap-2">
          {name}
          <div className="flex gap-1 ml-auto">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground italic">"{review}"</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
