// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const products = [
    {
      name: "Mac Book Pro",
      price: 23000,
      category: "Laptop",
    },
    {
      name: "Lenevonpm ",
      price: 23000,
      category: "Laptop",
    },
  ];

  res.status(200).json({
    success: true,
    products,
  });
}
