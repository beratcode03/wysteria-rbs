const fs = require('fs');

const path = require('path');

const https = require('https');

const outDir = path.join(__dirname, '..', 'public', 'assets', 'site');

const ids = [

  'photo-1544025162-d76694265947',

  'photo-1558030006-450675393462',

  'photo-1559847844-5315695dadae',

  'photo-1600891964092-4316c288032e',

  'photo-1603360946369-dc9bb6258143',

  'photo-1546964124-0cce460f38ef',

  'photo-1529692236671-f1f6cf9683ba',

  'photo-1588168333986-5078d3ae3976',

  'photo-1615937657715-bc7b4b7962c1',

  'photo-1541544741938-0af808871cc0',

  'photo-1504674900247-0877df9cc836',

  'photo-1555939594-58d7cb561ad1',

  'photo-1529193591184-b1d58069ecdd',

  'photo-1541014741259-de529411b96a',

  'photo-1533777857889-4be7c70b33f7',

  'photo-1414235077428-338989a2e8c0',

  'photo-1517248135467-4c7edcad34c4',

  'photo-1552566626-52f8b828add9',

  'photo-1514933651103-005eec06c04b',

  'photo-1466978913421-dad2ebd01d17',

  'photo-1559339352-11d035aa65de',

  'photo-1555396273-367ea4eb4db5',

  'photo-1592861956120-e524fc739696',

  'photo-1577219491135-ce391730fb2c',

  'photo-1581299894007-aaa50297cf16',

  'photo-1551218808-94e220e084d2',

  'photo-1432139555190-58524dae6a55',

  'photo-1600565193348-f74bd3c7ccdf',

  'photo-1580476262798-bddd9f4b7369',

  'photo-1467003909585-2f8a72700288',

  'photo-1473093295043-cdd812d0e601',

  'photo-1482049016688-2d3e1b311543',

  'photo-1551024506-0bccd828d307',

  'photo-1578985545062-69928b1d9587',

  'photo-1547595628-c61a29f496f0',

  'photo-1519690889869-e705e59f72e1',

  'photo-1510812431401-41d2bd2722f3',

  'photo-1543007630-9710e4a00a20',

  'photo-1470337458703-46ad1756a187',

  'photo-1514362545857-3bc16c4c7d1b',

  'photo-1528605248644-14dd04022da1',

  'photo-1607013251379-e6eecfffe234',

  'photo-1550966871-3ed3cdb5ed0c',

  'photo-1590846406792-0adc7f938f1d',

  'photo-1571091718767-18b5b1457add',

];

function download(url, dest) {

  return new Promise((resolve, reject) => {

    const doGet = (u, redirects = 0) => {

      https.get(u, (res) => {

        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {

          res.resume();

          if (redirects > 5) return reject(new Error('too many redirects'));

          return doGet(res.headers.location, redirects + 1);

        }

        if (res.statusCode !== 200) {

          res.resume();

          return reject(new Error(`HTTP ${res.statusCode} for ${u}`));

        }

        const file = fs.createWriteStream(dest);

        res.pipe(file);

        file.on('finish', () => file.close(resolve));

        file.on('error', reject);

      }).on('error', reject);

    };

    doGet(url);

  });

}

(async () => {

  fs.mkdirSync(outDir, { recursive: true });

  for (let i = 0; i < ids.length; i++) {

    const name = `img-${String(i + 1).padStart(2, '0')}.jpg`;

    const url = `https://images.unsplash.com/${ids[i]}?auto=format&fit=crop&w=1600&q=80`;

    try {

      await download(url, path.join(outDir, name));

      console.log(`ok ${name}`);

    } catch (e) {

      console.log(`FAIL ${name} ${e.message}`);

    }

  }

  console.log('done');

})();
