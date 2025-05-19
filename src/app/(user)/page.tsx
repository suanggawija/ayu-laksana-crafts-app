import {
  Hero,
  BestProductSection,
  ProductCategoriesSection,
  CompanyAdvantagesSection,
  TestimonialSection,
} from "@/components/layouts/user/Home";

export default function Home() {
  return (
    <main>
      <Hero />
      <BestProductSection />
      <ProductCategoriesSection />
      <CompanyAdvantagesSection />
      <TestimonialSection />
    </main>
  );
}
