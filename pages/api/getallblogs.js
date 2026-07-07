// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'node:fs';

export default function handler(req, res) {
    fs.readdir("blogdata", (err, data) => {
        if (err) {
            res.status(500).json({ error: "No Blogs Found" });
        }
        res.status(200).json(data);
    })
}
