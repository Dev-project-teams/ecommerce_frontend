
// app/page.jsx
import StorefrontPage from "./(storefront)/page";
import StorefrontLayout from "@/components/layouts/storefront";

export default function Home() {
  return (
    <StorefrontLayout>
      <StorefrontPage />
    </StorefrontLayout>
  );
}
