import Container from "@/ui/Container";
import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      <Container>
      <div className={" flex items-center justify-between h-[88vh]"}>
      <div className={"w-full"}>
        <h1 className={"text-[85px] font-bold w-[300px]"}>Creative Thoughts Agency.</h1>
        <p className={"text-[20px] font-medium"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={" flex items-center gap-5 mt-8"}>
          <button className={" py-4 px-7 rounded-md text-[20px] font-semibold bg-green-500 text-white"}>Learn More</button>
          <button className={" py-4 px-7 rounded-md text-[20px] font-semibold bg-yellow-500 text-white"}>Contact</button>
        </div>
        <div className={"mt-5"}>
          <Image src="/brands.png" alt="" width={600} height={100} className={"w-[500px]"}/>
        </div>
      </div>
      <div className={"w-full "}>
        <Image src="/hero.gif" alt="" width={500} height={500}  className={"w-[500px] h-[500px]"}/>
      </div>
    </div>
      </Container>
    </main>
  )
}
