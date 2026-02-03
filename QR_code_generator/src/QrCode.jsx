import React, { useState } from 'react'

const QrCode = () => {

    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [qrData, setQrData] = useState("https://fhmnx.github.io/Portfolio/");
    const [qrSize, setQrSize] = useState("150");

    async function generateQr() {
        setLoading(true);
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        } catch (error) {
            console.error("Error generating QR code", error);
        } finally {
            setLoading(false);
        }
    }

    function downloadQr() {
        fetch(img)
            .then((response) => response.blob())
            .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "qrcode.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }).catch((error) => {
                console.error("Error downloading QR code" + error);
            })
    }
    return (
        <div className='app-container'>
            <h1>QR CODE GENERATOR</h1>
            {loading && <p>Please wait...</p>}
            {img && <img src={img} alt="" className='qr-code-image' />}
            <div>
                <label htmlFor="dataInput" className='input-label'>Data for QR code</label>
                <input type="text" id='dataInput' placeholder='data for QR code' value={qrData}
                    onChange={(e) => setQrData(e.target.value)} />

                <label htmlFor="sizeInput" className='input-label'>Image size(e.g., 150)</label>
                <input type="text" id='sizeInput' placeholder='enter image size' value={qrSize}
                    onChange={(e) => setQrSize(e.target.value)} />

                <button className='generate-btn' disabled={loading} onClick={generateQr}>Generate QR code</button>
                <button className='download-btn' onClick={downloadQr}>Download QR code</button>
            </div>
            <p className='footer'>Designed By <a href="https://fhmnx.github.io/Portfolio/">Fahman</a></p>
        </div>
    )
}

export default QrCode
