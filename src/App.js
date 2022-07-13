import Mobile from './mobile component/mobile';
import Web from './web component/web';

export default function App() {
  return (
    <div className="app">
      {/* mobile version */}
      <Mobile />

      {/* web version */}
      <Web />
    </div>
  );
}

