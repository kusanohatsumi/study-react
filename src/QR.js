import React, { useState } from 'react'
import { useZxing } from 'react-zxing';
export const QR = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onResult(result) {
        setResult(result.getText());
    },
  });

  return (
    <div>
      <video ref={ref} />
      <p>結果を表示↓</p>
      { result ?
        <img src={`${process.env.PUBLIC_URL}/img/${result}.png`} />
        :
        null
      }
      


    </div>
  )
}
