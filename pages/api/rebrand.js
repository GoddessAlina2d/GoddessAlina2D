// pages/api/rebrand.js
import { exec } from "child_process";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const scriptPath = path.join(process.cwd(), "scripts", "rebrand.py");

  exec(`python3 ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error("Python error:", stderr);
      return res.status(500).json({ message: "Python execution failed", error: stderr });
    }

    return res.status(200).json({ message: "Rebrand completed", output: stdout });
  });
}
