import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function EditProductPage() {
  const router = useRouter();
  console.log({ router });
  return <Layout>Edit Product Form</Layout>;
}
