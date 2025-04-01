// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/audio_transcription_api_assistance/'
    : '/'
}
