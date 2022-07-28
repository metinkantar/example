export default async function Handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "GET request" });
  } else if (req.method === "POST") {
    res.status(200).json({ message: "POST request" });
  }
}
