import Banner from "@/components/Homepage/Banner";
import Products from "@/components/Products";

export const metadata = {
  title: "Anasayfa | HyperHub",
  description: "En iyi ürünleri keşfedin!",
};

export default function Home() {
  return (
    <>
      <Banner />
      <Products />
    </>
  );
}
