import Layout from "@/components/Layout";
import { useState } from "react";

export default function Categories() {
  const [name, setName] = useState("");

  async function saveCatagory(event) {
    event.preventDefault();
    await axios.post("/api/categories", { name });
    setName("");
  }

  return (
    <Layout>
      <h1>Categories</h1>
      <label>New category name</label>
      <form onSubmit={saveCatagory} className="flex gap-1">
        <input
          className="mb-0"
          type="text"
          placeholder={"Category Name"}
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <button type="submit" className="btn-primary py-1">
          Save
        </button>
      </form>
    </Layout>
  );
}
