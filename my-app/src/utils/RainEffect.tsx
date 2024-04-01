import React, { useEffect, useState } from 'react';

interface RainEffectProps {
  classUpdater: string;
}

const RainEffect: React.FC<RainEffectProps> = ({ classUpdater }) => {
  const [drops, setDrops] = useState<string>('');

  useEffect(() => {
    makeItRain();
  }, []);

  const makeItRain = () => {
    let increment = 0;
    let newDrops = '';

    while (increment < 100) {
      const randoHundo = Math.floor(Math.random() * 98 + 1);
      const randoFiver = Math.floor(Math.random() * 4 + 2);
      increment += randoFiver;

      newDrops += `<div class="drop" style="left: ${increment}%; bottom: ${randoFiver + randoFiver - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
    }

    setDrops(newDrops);
  };

  return (
    <>
      {/* <div className={`rain front-row output-container ${classUpdater}`} dangerouslySetInnerHTML={{ __html: drops }} /> */}

      <div className={`output-container ${classUpdater}`}>
        <div className="output-sizer">
          <div id="result_div" className="result">
            <iframe id="index.html-fac8b7e5-4d3b-36de-dfb4-2318e93c2167" src="https://cdpn.io/cpe/boomboom/index.html?key=index.html-fac8b7e5-4d3b-36de-dfb4-2318e93c2167" className="result-iframe iframe-visual-update" name="CodePen" loading="lazy"></iframe>
            <div id="editor-drag-cover" className="drag-cover"></div>
          </div>
          <div id="box-console" className="box box-console notranslate" translate="no">
            <div className="editor-resizer editor-resizer-console" title="Drag to resize. Double-click to expand."></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RainEffect;