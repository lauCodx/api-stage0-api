const express = require('express')
const cors = require('cors')
const port = 3000;

const app = express()
app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
    const email = 'lauphix1@gmail.com';
    const current_date_time = new Date().toISOString();
    const github_url ='https://github.com/lauCodx/api-stage0-api.git';

    res.status(200).json({
        email,
        current_date_time,
        github_url
    })

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

