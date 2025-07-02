import { whatsappUrl } from '@/lib/data/whatsappUtils';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Whatsapp = () =>
{
  
 
  return (
    <div className="fixed w-12 h-12 bg-green-600 bottom-0 right-0 shadow-lg z-50 mr-3 mb-4 flex justify-center items-center text-white rounded-full overflow-clip">
      <span>
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex justify-center items-center text-white"
        >
          <Image
            src="https://res.cloudinary.com/dk5mfu099/image/upload/v1751377089/4-2-whatsapp-transparent-thumb_ezuljh.png"
            alt="Whatsapp Icon"
                      width={40}
                      height={40}
          />
        </Link>
      </span>
    </div>
  );
}

export default Whatsapp