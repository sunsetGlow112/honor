import { useNavigate } from 'react-router-dom';

export default function Tip() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center cursor-pointer"
      style={{
        backgroundImage: 'url(https://miaoda-conversation-file.cdn.bcebos.com/user-79ww43jdlwcg/conv-79wzg8jncmio/20251102/file-79x0pu5d88w0.png)',
      }}
      onClick={() => navigate('/hero-select')}
    >
      <div className="absolute inset-0 bg-background/10" />
    </div>
  );
}
