import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-blue-950 dark:via-gray-900 dark:to-amber-950 flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
        <p className="text-xl text-foreground">Page not found</p>
        <Button
          data-testid="button-home"
          onClick={() => setLocation("/")}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
        >
          <Home className="mr-2" size={20} />
          Go Home
        </Button>
      </div>
    </div>
  );
}
