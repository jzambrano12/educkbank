import { NextResponse } from "next/server";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase/config";

export async function GET(request, { params }) {
  const { categoria } = params;
  const productosRef = collection(db, "productsFirebase");
  console.log(productosRef);
  console.log("vindo do routes do firebase");
  const q =
    categoria === "all"
      ? productosRef
      : query(productosRef, where("type", "==", categoria));
  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map((doc) => doc.data());
  console.log("dados vindo do firebase categoria");
  return NextResponse.json(docs);
}