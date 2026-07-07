// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'node:fs/promises';

export default async function handler(req, res) {
    try {
        const data = await fs.readFile(`blogdata/${req.query.slug}.json`, { encoding: 'utf8' });
        res.status(200).json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({ error: "No Such Blog Found" });
    }
}
