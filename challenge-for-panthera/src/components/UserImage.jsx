import Image from "next/image"

export default function UserImage () {

    return <>
        <Image 
            className="user-image"
            src={'/deadpool.jpeg'}
            width={40}
            height={40}
            alt="user image"
        />
    </>
}