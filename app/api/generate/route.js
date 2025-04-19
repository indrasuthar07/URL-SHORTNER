import clientPromise from "@/lib/mongodb"
import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server'

export async function POST(req) {
    const body = await req.json()
    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    const doc = await collection.findOne({ shortUrl: body.shortUrl });
    // // if (doc) {
    // //     return NextResponse.json({ success: false, error: true, message: "Url already exists!" });
    // // }
    
    const result = await collection.insertOne({
    url : body.url,
    shortUrl : body.shortUrl
})
return NextResponse.json({ success: true, error: false, message: "Hello from the server!" });

}