// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'node:fs';

export default async function handler(req, res) {
    let data = await fs.promises.readdir("blogdata");
    let myBlog;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        myBlog = await fs.promises.readFile(`blogdata/${element}`, 'utf-8');
        allBlogs.push(JSON.parse(myBlog));
    }
    res.status(200).json(allBlogs);
}
