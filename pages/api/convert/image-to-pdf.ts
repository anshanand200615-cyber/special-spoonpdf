import { NextApiRequest, NextApiResponse } from "next";

// Placeholder API route: image-to-pdf.ts
// Add full conversion logic here (compression, pdf-lib, sharp, libreoffice-convert)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send("API route image-to-pdf.ts placeholder");
}
