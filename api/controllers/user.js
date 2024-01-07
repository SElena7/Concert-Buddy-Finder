import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
    const u_id = req.params.u_id;
    const q = "SELECT * FROM users WHERE id=?";

    db.query(q, [u_id], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (!data || data.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        const { password, ...info } = data[0];
        return res.json(info);
    });
};
