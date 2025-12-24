const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

let posts = [
    { id: 0, username: "Nola_King", photo_url: "https://placehold.co/600x400/333/FFF?text=French+Quarter+Night", caption: "Streets are alive tonight. 🎷", likes: 45 },
    { id: 1, username: "Vibe_Chaser", photo_url: "https://placehold.co/600x400/444/FFF?text=Uptown+Vibes", caption: "Just touched down. Where the moves at?", likes: 12 },
    { id: 2, username: "Saint_Row_Fan", photo_url: "https://placehold.co/600x400/555/FFF?text=Gaming+Setup", caption: "Leveling up on the new platform. 🎮", likes: 88 }
];

app.get('/feed', (req, res) => res.json(posts));

app.post('/like', (req, res) => {
    const postId = req.body.id;
    if(posts[postId]) {
        posts[postId].likes += 1;
        res.json({ success: true, newCount: posts[postId].likes });
    } else {
        res.json({ success: false });
    }
});

app.listen(PORT, () => console.log('Server running at http://localhost:3000'));
