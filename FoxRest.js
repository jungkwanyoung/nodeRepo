// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// JSON 파일 경로
const jsonFilePath = path.join(__dirname, 'data.json');

// JSON 파일을 읽어서 응답하는 엔드포인트
app.post('/api/data', (req, res) => {
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: '파일을 읽는 중 오류 발생' });
        }
        res.json(JSON.parse(data));
    });
});

app.get('/api/data', (req, res) => {
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: '파일을 읽는 중 오류 발생' });
        }
        res.json(JSON.parse(data));
    });
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});