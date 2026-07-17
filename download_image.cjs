const fs = require('fs');
const https = require('https');

const file = fs.createWriteStream("c:\\Users\\shayan.shaikh\\Downloads\\shayan-portfolio-main\\shayan-portfolio-main\\assets\\othello_mid_sec_bann.jpg");
https.get("https://www.othello4kings.com/wp-content/uploads/2024/09/othello-mid-sec-bann.jpg", function(response) {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Image download completed.');
  });
}).on('error', function(err) {
  fs.unlink(dest);
  console.error('Error downloading image:', err.message);
});
