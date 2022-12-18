const YTDlpWrap = require('yt-dlp-wrap').default;
const which = require('which');
// const transcribe = require('./transcribe');

l = console.log;

const ytDlpFilename = process.platform === 'win32' ? 'YoutubeDL' : 'yt-dlp';
// async usage
// rejects if not found
const ytDlpBinaryPath = which.sync(ytDlpFilename);

const ytDlpWrap = new YTDlpWrap(ytDlpBinaryPath);

const testUrl = 'https://www.youtube.com/watch?v=P7ny6-lKoe4';

// function download(videoUrl, filename){
//   let ytDlpEventEmitter = ytDlpWrap
//     .exec([
//       videoUrl,
//       '-f',
//       'bestaudio / b',
//       '-o',
//       filename
//     ])
//     .on('progress', (progress) =>
//       console.log(
//         progress.percent,
//         progress.totalSize,
//         progress.currentSpeed,
//         progress.eta
//       )
//     )
//     .on('ytDlpEvent', (eventType, eventData) =>
//       console.log(eventType, eventData)
//     )
//     .on('error', (error) => console.error(error))
//     .on('close', () => {
//       l('done!');
//       transcribe(filename)
//     });
//
//   // console.log(ytDlpEventEmitter.ytDlpProcess.pid);
// }

async function download(videoUrl, filename) {
  let stdout = await ytDlpWrap.execPromise([
    videoUrl,
    '-f',
    'bestaudio / b',
    '-o',
    filename,
  ]);

  l(stdout);

  return true;

  // console.log(ytDlpEventEmitter.ytDlpProcess.pid);
}

async function getTitle(videoUrl) {
  let metadata = await ytDlpWrap.getVideoInfo(
    videoUrl,
    '--format',
    'bestaudio / b'
  );

  // l(metadata);
  // l(metadata.title);
  // l(metadata._filename);

  l(metadata);

  return metadata.title;
}

// getTitle(testUrl);

// l(transcribe);

// async function main(videoUrl){
//   const filename = await getTitle(videoUrl);
//   // l(filename)
//   await download(videoUrl, filename);
//   await transcribe(filename);
// }

// main();

// module.exports = main;

// getTitle();

// download();
