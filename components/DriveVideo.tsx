export default function DriveVideo({ videoId }: { videoId: string }) {
  return (
    <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        src={`https://drive.google.com/file/d/${videoId}/preview`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        allow="autoplay"
        allowFullScreen
      ></iframe>
    </div>
  );
}