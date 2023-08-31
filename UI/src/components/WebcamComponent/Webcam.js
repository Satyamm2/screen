import './Webcam.css';
import { ReactMediaRecorder } from 'react-media-recorder';

function Webcam(){


  return(
    <>
    <h1>Webcam....!</h1>

    <ReactMediaRecorder
        video

        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <video src={mediaBlobUrl} autoplay loop controls></video>
          </div>
        )}
      />

      <a
        href="/"
        download="Example"
        target="_blank" >
        Download
      </a>
    </>
  );
}

export default Webcam;




