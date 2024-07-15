from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import chromadb
import uuid

chroma_client = chromadb.Client()
collection = chroma_client.create_collection(name="products")
collection.add(documents=["Name: Harry Potter, Description: A fantasy novel", "Name: Star Wars, Description: A war across the universe", "Name: Hobbit, Description: A fantastical journey acroos middle earth"],
               metadatas=[{"name":"Harry Potter","description":"A fantasy novel"}, {"name":"Star Wars","description":"A war across the universe"}, {"name":"Hobbit","description":"A fantastical journey acroos middle earth"}],
               ids=[str(uuid.uuid4()), str(uuid.uuid4()), str(uuid.uuid4())])
app = FastAPI()

# Allow CORS for development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Product(BaseModel):
    name: str
    description: str

def add_product(product: Product):
    collection.add(documents=[f"Name: {product.name}, Description: {product.description}"],
                   metadatas=[{"name":product.name,"description":product.description}],
                   ids=[str(uuid.uuid4())])

def parse_collection(product_collection: dict):
    product_list:List[Product] = []
    for product in product_collection:
        product_list.append(Product(name=product["name"], description=product["description"]))
    return product_list

def search_product(searchText: str, resultNumber: int):
    results = collection.query(
        query_texts=[searchText],
        n_results=resultNumber
    )
    return parse_collection(results["metadatas"][0])

@app.get("/allProducts", response_model=List[Product])
async def get_allProducts():
    return parse_collection(collection.get()["metadatas"])

@app.post("/product")
async def post_product(product: Product):
    add_product(product)

@app.get("/product")
async def get_product(searchText: str = Query(None), resultNumber: int = Query(None)):
    return search_product(searchText, resultNumber)