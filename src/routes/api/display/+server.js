import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
import { json, error } from '@sveltejs/kit'
export function GET (){

    const imageDirectory = './public/display-images/';
  let images = fs.readdirSync(imageDirectory, (err, files) => {
      if (err) {
        // console.log(err);
        // return err;
      }
      else{ return files}
    });
    console.log(images);
    return new Response(JSON.stringify({images}));
    
  };


    


// const express = require('express');

// const app = express() 

// const port = 3000;

// app.use(express.static('public'));
// // const cors = require('cors');
// // app.use(cors());


// app.get('/test', (req, res) => {
//     const imageDirectory = './public/images/';
//     fs.readdir(imageDirectory, (err, files) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Failed to read images directory' });
//         return;
//       }
      
//       res.json(files);
//     });
//   });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//   });