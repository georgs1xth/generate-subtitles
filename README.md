# Generate-subtitles & WhisperX
Three years ago I was learning french and wanted to make some subtitles for videos to better understand language. I came across free-subtitles.ai and went to their github to launch it on my machine.

Now, I needed it to continue learning french, but after downloading and installing it, the server didn't work. I tried using web version, but it wasn't in it's best shape too. 

After trying to find another solution, [whisperx](https://github.com/m-bain/whisperX?ysclid=m988m22ajs631030856) was found.

It was much faster than whisper(more than 10x). However I didn't like the idea of using command line and decided to fork generate-subtitles project, at the same time fixing it and empowering it with whisperx 

# REQUIREMENTS

- Install FFmpeg
- Install Nvidia CudNN
- Install Nvidia dev CUDA Toolkit 


# SETUP

- Install Anaconda Navigator
- Open anaconda prompt

## 1. Create environment
```
conda create --name WhisperX python==3.10
conda activate WhisperX
```
## 2. Install PyTorch and etc.
```
conda install pytorch==2.0.0 torchaudio==2.0.0 pytorch-cuda=11.8 -c pytorch -c nvidia
```
## 3. Install Whisperx repo
```
pip install git+https://github.com/m-bain/whisperx.git
```
## 4. Clone this repo and install dependecies
```
git clone https://github.com/georgs1xth/generate-subtitles
cd generate-subtitles
npm install
```
## 5. Start the project (!IMPORTANT: Start it in conda environment)
```
npm start
```

# Credits
 - https://github.com/mayeaux/generate-subtitles
 - https://github.com/m-bain/whisperX

@article{bain2022whisperx,
  title={WhisperX: Time-Accurate Speech Transcription of Long-Form Audio},
  author={Bain, Max and Huh, Jaesung and Han, Tengda and Zisserman, Andrew},
  journal={INTERSPEECH 2023},
  year={2023}
}