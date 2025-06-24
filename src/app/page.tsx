import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProdutcsTab } from "@/components/products/tab";
import { TabsSkeleton } from "@/components/products/tabsSkeleton";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Imagem de fundo com blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md z-[-1]"
        style={{ backgroundImage: "url('/images/sushi.jpg')" }}
      />

      {/* Conteúdo principal */}
      <div className="w-full max-w-4xl mx-auto relative z-10 text-white">
        <Header />
        <div className="mx-2">
          <Suspense fallback={<TabsSkeleton />}>
            <ProdutcsTab />
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
}
