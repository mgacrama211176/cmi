export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(`retrived`);
  } else {
    res.status(500).json(`error 500`);
  }
}
