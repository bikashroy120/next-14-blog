// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
import Container from "@/ui/Container";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  // const a = Math.random();

  // console.log(a);

  return (
    <div className=" w-full">
      <Container>
        <div className=" mt-[100px] mb-[80px]">
          <div>
            <div className={styles.container}>
              <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="" fill className={styles.img} />
              </div>
              <div className={styles.formContainer}>
                {/* <HydrationTestNoSSR/> */}
                {/* <div suppressHydrationWarning>{a}</div> */}
                <form action="" className={styles.form}>
                  <input type="text" placeholder="Name and Surname" />
                  <input type="text" placeholder="Email Address" />
                  <input type="text" placeholder="Phone Number (Optional)" />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                  <button className=" py-2 px-5 bg-green-500 rounded-lg text-white">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
