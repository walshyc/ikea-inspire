import Link from 'next/link';
import Image from 'next/image';
import ikeaLogo from '../public/Ikea_logo.svg';

export default function Page() {
    const mainFeatures = [
        {
            title: "Interior Design Advice",
            description: "Explore styles, get room-by-room guidance, and discover tips to transform your home.",
            image: "https://www.ikea.com/images/a-light-living-room-centred-around-a-jaettebo-three-and-a-ha-c7a5b708513cc0be58ebc3c4e94efd31.jpg?f=xxxl",
            link: "/advice"
        },
        {
            title: "Blogs",
            description: "Stay updated with our latest articles on home decor, sustainability, and more.",
            image: "https://www.ikea.com/images/a-small-studio-with-a-vansbro-bright-green-2-seat-sofa-bed-b-e4e271bd007a75af466351b6828af61c.jpg?f=xxxl",
            link: "/"
        },
        {
            title: "Product Information",
            description: "Learn more about IKEA products that can enhance your space.",
            image: "https://www.ikea.com/images/billy-series-080a2ee1d9108a599c4b9aaef027edd3.jpg?f=s",
            link: "/"
        },
        {
            title: "Ask an IKEA Expert",
            description: "Got questions? Our IKEA experts are here to help.",
            image: "https://www.ikea.com/ext/ingkadam/m/1b47d95c10fc1748/original/PH177855.jpg?f=s",
            link: "/"
        }
    ];
    return (
        <div className="flex flex-col overflow-scroll w-full items-center h-full pb-10  no-scrollbar">
            <div className="flex flex-col gap-4 text-xl">
                <div className='text-primary text-2xl font-bold flex items-center'>
                    <Image src={ikeaLogo} alt="Ikea Logo" className='inline mr-2' />
                    <span className='uppercase tracking-widest'>Inspire!</span></div>
                <div>Your guide to creating beautiful spaces with <span className='text-primary font-bold'>Ikea</span></div>
            </div>
            <div className="flex flex-col mt-8">
                {/* <div className="text-2xl font-bold">Main Features</div> */}
                <div className="flex flex-col flex-wrap justify-center gap-5">
                    {mainFeatures.map((feature) => {
                        return (
                            <Link href={feature.link} key={feature.title} >
                                <div className="flex flex-col w-full bg-center bg-cover" style={{ backgroundImage: `url(${feature.image})` }}>
                                    <div className="p-4 py-10 bg-gray-800 bg-opacity-80">
                                        <div className="text-xl font-bold text-secondary">{feature.title}</div>
                                        <div className="text-xs text-blue-50">{feature.description}</div>
                                    </div>
                                </div></Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}