import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import youtube from '../assets/youtube.png'
import twitter from '../assets/twitter.png'


const footer = () => {
    return (
        <div className="bg-[#216a6dd9] h-[20rem] flex grid-col-4 p-10 gap-10 justify-center pt-24 text-white">
            <div className="word-break w-[20rem]">
                <h1 className="font-bold">LITERACY CONNECT</h1>
                <p><span className="font-bold">Literacy Connect</span> adalah situs galang dana online untuk memudahkan Anda mendukung dan terhubung ke beragam gerakan aksi kebaikan dari seluruh Masyarakat</p>
            </div>
            <div>
                <ul>
                    <li>Tentang kami</li>
                    <li>Ketentuan & privasi</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Hubungi kami</li>
                    <li>Partner kami</li>
                    <li>Donasi </li>
                </ul>
            </div>
            <div className="flex gap-4 -white size-8">
               <img src={instagram} alt="" />
               <img src={facebook} alt="" />
               <img src={whatsapp} alt="" />
               <img src={youtube} alt="" />
               <img src={twitter} alt="" />
            </div>

        </div>

    )
}

export default footer  