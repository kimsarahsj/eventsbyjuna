import Image from "next/image";
import styles from "./index.module.css";
import { Inter } from "next/font/google";
import CustomCard from "@/components/customCard";
import Link from "next/link";
import React from "react";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main className={`flex flex-col`}>
      <div
        className={`bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-center h-screen flex items-center`}
      >
        <div className={`w-full text-center`}>
          <div className={`font-cocogothic text-lg text-white uppercase `}>
            Welcome To
          </div>
          <div className={`font-amsterdamone text-7xl text-white pt-12`}>
            Events by
          </div>
          <div className={`font-amsterdamone text-7xl text-white mt-2 pb-20`}>
            Juna
          </div>
          <div className={`font-cocogothic text-lg text-white uppercase`}>
            <a href="#about">Learn More</a>
          </div>
        </div>
      </div>

      <div
        className={`bg-neutralOne grid grid-cols-1 lg:grid-cols-2 gap-8 px-12 py-4 xl:px-[10%] justify-items-center`}
      >
        <div
          className={`order-last lg:order-first flex justify-center items-center`}
        >
          <div className="w-[80%] xl:w-[50%]">
            <div
              className={"text-neutralBrown font-catchymager text-6xl"}
              id="about"
            >
              Full Service Event Planning
            </div>
            <div className={`pt-8 font-cocogothic text-lg text-neutralBrown`}>
              At Events by Juna we strive to deliver an unforgettable event from
              planning and decor we can make your dream event come to life. We
              work on events big or small including, but not limited to,
              engagements, weddings, corporate events, birthdays, baby showers,
              and anniversaries in Seattle and surrounding areas. Reach out to
              us today to find out how we can help you host your next event.
            </div>
            <div className={`pt-8 text-center`}>
              <Link
                href="/services"
                className={
                  "px-8 py-2 border border-neutralBrown rounded-full bg-transparent font-cocogothic text-neutralBrown text-xl hover:bg-stone-400"
                }
              >
                Services
              </Link>
            </div>
          </div>
        </div>
        <div className={``}>
          <Image
            src={`/images/flower_arch.jpg`}
            width={500}
            height={900}
            alt=""
          />
        </div>
      </div>

      <div className={`bg-neutralTwo py-4`}>
        <div
          className={`text-neutralBrown text-center font-catchymager text-6xl py-8`}
        >
          A La Carte Event Services
        </div>

        <div
          className={`grid grid-cols-1 gap-8 px-12 py-4 xl:px-[10%] xl:grid-cols-3 justify-items-center`}
        >
          <CustomCard
            image={"/images/flower_centerpiece_sq.jpg"}
            cardName={`Flower Arrangements`}
            cardDescription={`floral creations | bouquets, centerpieces`}
            refLink={"/services/#flowers"}
          />
          <CustomCard
            image={"/images/safari_balloon_sq.jpg"}
            cardName={`Balloon Decorations`}
            cardDescription={`backdrop designs | balloon arches, garlands`}
            refLink={"/services/#balloons"}
          />
          <CustomCard
            image={"/images/basket.jpg"}
            cardName={`Gift Baskets`}
            cardDescription={`desserts & gifts | gift baskets, table decor`}
            refLink={"/services/#additional"}
          />
        </div>
      </div>

      <div
        className={`bg-neutralOne grid grid-cols-1 lg:grid-cols-2 gap-8 px-12 py-4 xl:px-[10%] justify-items-center`}
      >
        <div
          className={`order-last lg:order-first flex justify-center items-center`}
        >
          <div className="w-[80%] xl:w-[50%]">
            <div
              className={"text-neutralBrown font-catchymager text-6xl"}
              id="about"
            >
              Rentals
            </div>
            <div className={`pt-8 font-cocogothic text-lg text-neutralBrown`}>
              Discover Our Rental Services: We offer a stunning selection of
              event backdrops, arches, sweet cart, cake table stands, peacock
              chair and more, for rent. Elevate your special occasions with our
              exquisite offerings.
            </div>
            <div className={`pt-8 text-center`}>
              <Link
                href="/services/#rentals"
                className={
                  "px-8 py-2 border border-neutralBrown rounded-full bg-transparent font-cocogothic text-neutralBrown text-xl hover:bg-stone-400"
                }
              >
                Rental Options
              </Link>
            </div>
          </div>
        </div>
        <div className={``}>
          <Image
            src={`/images/wedding_flowers.png`}
            width={500}
            height={900}
            alt=""
          />
        </div>
      </div>

      <div className={`bg-neutralOne`}>
        <div
          className={`px-8 py-12 2xl:px-[16%] grid grid-cols-1 2xl:grid-cols-3 gap-4 flex justify-center justify-items-center`}
        >
          <div className={`w-[350px]`}>
            <div className={``}>
              <Image
                src={`/images/custom_cake.PNG`}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                alt=""
              />
            </div>
            <div
              className={`border border-neutralBrown my-4 px-8 py-4 text-sm text-center font-cocogothic`}
            >
              <p>Add a custom cake to your event!</p>
            </div>
          </div>

          <div
            className={`w-[350px] md:w-[400px] 2xl:w-[700px] 2xl:col-span-2`}
          >
            <div className={``}>
              <Image
                src={`/images/cuddles-design1.jpg`}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                alt=""
              />
            </div>
            <div
              className={`border border-neutralBrown my-4 px-8 py-4 text-sm text-center font-cocogothic`}
            >
              <p>
                We can help you design any event from birthdays, engagements,
                baby showers, and weddings.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-neutralTwo`}>
        <div className={`py-12 flex flex-col justify-center items-center`}>
          <div
            className={
              "text-neutralBrown font-catchymager text-6xl text-center"
            }
          >
            Explore the Possibilities
          </div>
          <div className="m-12 w-[350px] sm:w-[450px] md:w-[600px] lg:w=[800px] xl:w-[1000px]">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/eventsbyjuna/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: "0",
                borderRadius: "3px",
                margin: "1px",
                maxWidth: "100%",
                minWidth: "90%",
                padding: "0",
                width: "99.375%",
                width: "-webkit-calc(100% - 2px)",
                width: "calc(100% - 2px)",
              }}
            >
              <div style={{ padding: "16px" }}>
                {" "}
                <a
                  href="https://www.instagram.com/eventsbyjuna/?utm_source=ig_embed&amp;utm_campaign=loading"
                  style={{
                    background: "#FFFFFF",
                    lineHeight: "0",
                    padding: "0 0",
                    textAlign: "center",
                    textDecoration: "none",
                    width: "100%",
                  }}
                  target="_blank"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        borderRadius: "50%",
                        flexGrow: 0,
                        height: "40px",
                        marginRight: "14px",
                        width: "40px",
                      }}
                    ></div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#F4F4F4",
                          borderRadius: "4px",
                          flexGrow: 0,
                          height: "14px",
                          marginBottom: "6px",
                          width: "100px",
                        }}
                      ></div>
                      <div
                        style={{
                          backgroundColor: "#F4F4F4",
                          borderRadius: "4px",
                          flexGrow: 0,
                          height: "14px",
                          width: "60px",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div style={{ padding: "19% 0" }}></div>
                  <div
                    style={{
                      display: "block",
                      height: "50px",
                      margin: "0 auto 12px",
                      width: "50px",
                    }}
                  >
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 60 60"
                    >
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M556.869 30.41a3.721 3.721 0 100 7.442 3.721 3.721 0 000-7.442M541 60.657c-5.886 0-10.658-4.77-10.658-10.657 0-5.886 4.772-10.658 10.658-10.658 5.887 0 10.658 4.772 10.658 10.658 0 5.887-4.771 10.657-10.658 10.657m0-26.771c-8.9 0-16.114 7.214-16.114 16.114 0 8.899 7.214 16.113 16.114 16.113S557.115 58.899 557.115 50c0-8.9-7.215-16.114-16.115-16.114m24.378 28.215c-.134 2.921-.622 4.505-1.032 5.562-.543 1.397-1.192 2.394-2.24 3.443-1.048 1.049-2.046 1.697-3.444 2.241-1.055.41-2.641.897-5.56 1.031-3.158.143-4.105.174-12.102.174s-8.944-.031-12.102-.174c-2.919-.134-4.505-.621-5.56-1.031-1.398-.544-2.396-1.192-3.444-2.241-1.048-1.049-1.697-2.046-2.24-3.443-.41-1.057-.899-2.641-1.031-5.562-.144-3.158-.175-4.105-.175-12.101 0-7.997.031-8.944.175-12.101.132-2.921.621-4.508 1.031-5.561.543-1.4 1.192-2.396 2.24-3.444 1.048-1.048 2.046-1.698 3.444-2.24 1.055-.41 2.641-.898 5.56-1.031 3.159-.144 4.106-.175 12.102-.175 7.997 0 8.943.031 12.102.175 2.919.133 4.505.621 5.56 1.031 1.398.542 2.396 1.192 3.444 2.24 1.048 1.048 1.697 2.044 2.24 3.444.41 1.053.898 2.64 1.032 5.561.144 3.157.174 4.104.174 12.101 0 7.996-.03 8.943-.174 12.101m5.442-24.47c-.146-3.193-.653-5.373-1.395-7.282-.766-1.972-1.792-3.647-3.46-5.314-1.668-1.667-3.342-2.693-5.313-3.46-1.909-.741-4.09-1.249-7.283-1.395-3.2-.147-4.221-.18-12.369-.18-8.147 0-9.169.033-12.369.18-3.193.146-5.374.654-7.282 1.395-1.973.767-3.646 1.793-5.314 3.46-1.667 1.667-2.693 3.342-3.461 5.314-.74 1.909-1.248 4.089-1.393 7.282-.146 3.2-.181 4.22-.181 12.369 0 8.147.035 9.17.181 12.369.145 3.193.653 5.374 1.393 7.282.768 1.974 1.794 3.645 3.461 5.314 1.668 1.669 3.341 2.693 5.314 3.46 1.908.742 4.089 1.248 7.282 1.395 3.2.145 4.222.181 12.369.181 8.148 0 9.169-.036 12.369-.181 3.193-.147 5.374-.653 7.283-1.395 1.971-.767 3.645-1.791 5.313-3.46 1.668-1.669 2.694-3.34 3.46-5.314.742-1.908 1.249-4.089 1.395-7.282.146-3.199.18-4.222.18-12.369 0-8.149-.034-9.169-.18-12.369"
                        transform="translate(-511 -20)"
                      ></path>
                    </svg>
                  </div>
                  <div style={{ paddingTop: "8px" }}>
                    <div
                      style={{
                        color: "#3897f0",
                        fontFamily: "Arial,sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "550",
                        lineHeight: "18px",
                      }}
                    >
                      View this profile on Instagram
                    </div>
                  </div>
                  <div style={{ padding: "12.5% 0" }}></div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "14px",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          backgroundColor: "#F4F4F4",
                          borderRadius: "50%",
                          height: "12.5px",
                          width: "12.5px",
                          transform: "translateX(0px) translateY(7px)",
                        }}
                      ></div>
                      <div
                        style={{
                          backgroundColor: "#F4F4F4",
                          height: "12.5px",
                          transform:
                            "rotate(-45deg) translateX(3px) translateY(1px)",
                          width: "12.5px",
                          flexGrow: 0,
                          marginRight: "14px",
                          marginLeft: "2px",
                        }}
                      ></div>
                      <div
                        style={{
                          backgroundColor: "#F4F4F4",
                          borderRadius: "50%",
                          height: "12.5px",
                          width: "12.5px",
                          transform: "translateX(9px) translateY(-18px)",
                        }}
                      ></div>
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <div
                        style={{
                          backgroundColor: "#F4F4F4",
                          borderRadius: "50%",
                          flexGrow: 0,
                          height: "20px",
                          width: "20px",
                        }}
                      ></div>
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: "2px solid transparent",
                          borderLeft: "6px solid #f4f4f4",
                          borderBottom: "2px solid transparent",
                          transform:
                            "translateX(16px) translateY(-4px) rotate(30deg)",
                        }}
                      ></div>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <div
                        style={{
                          width: "0px",
                          borderTop: "8px solid #F4F4F4",
                          borderRight: "8px solid transparent",
                          transform: "translateY(16px)",
                        }}
                      ></div>
                      <div
                        style={{
                          backgroundColor: "#F4F4F4",
                          flexGrow: 0,
                          height: "12px",
                          width: "16px",
                          transform: "translateY(-4px)",
                        }}
                      ></div>
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: "8px solid #F4F4F4",
                          borderLeft: "8px solid transparent",
                          transform: "translateY(-4px) translateX(8px)",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      justifyContent: "center",
                      marginBottom: "24px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        borderRadius: "4px",
                        flexGrow: 0,
                        height: "14px",
                        marginBottom: "6px",
                        width: "224px",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        borderRadius: "4px",
                        flexGrow: 0,
                        height: "14px",
                        width: "144px",
                      }}
                    ></div>
                  </div>
                </a>
                <p
                  style={{
                    color: "#c9c8cd",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "14px",
                    lineHeight: "17px",
                    marginBottom: 0,
                    marginTop: "8px",
                    overflow: "hidden",
                    padding: "8px 0 7px",
                    textAlign: "center",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  <a
                    href="https://www.instagram.com/eventsbyjuna/?utm_source=ig_embed&amp;utm_campaign=loading"
                    style={{
                      color: "#c9c8cd",
                      fontFamily: "Arial,sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      lineHeight: "17px",
                    }}
                    target="_blank"
                  >
                    Events by Juna
                  </a>{" "}
                  (@
                  <a
                    href="https://www.instagram.com/eventsbyjuna/?utm_source=ig_embed&amp;utm_campaign=loading"
                    style={{
                      color: "#c9c8cd",
                      fontFamily: "Arial,sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      lineHeight: "17px",
                    }}
                    target="_blank"
                  >
                    eventsbyjuna
                  </a>
                  ) • Instagram photos and videos
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>

      <div
        className={`bg-[url('/images/reviews.png')] bg-cover bg-no-repeat bg-center h-screen flex items-center`}
      >
        <div className={`w-full text-center`}>
          <div className={`font-catchymager text-6xl text-white`}>What our</div>
          <div className={`font-catchymager text-6xl text-white pb-8`}>
            Customers say
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mx-8`}>
            <div>
              <div>
                <i className="fa-solid fa-quote-left text-white"></i>
              </div>
              <div className={`font-cocogothic text-md text-white px-4 `}>
                Look no further! Events by Juna really delivered a flawless full
                service event. Not only were they prompt and courteous, they
                were also really creative and brought those ideas to life!
              </div>
            </div>
            <div>
              <div>
                <i className="fa-solid fa-quote-left text-white "></i>
              </div>
              <div className={`font-cocogothic text-md text-white px-4 `}>
                Very professional and accommodating. Juna worked with us and our
                budget and gave us the best event we could have asked for!
                Highly recommend!
              </div>
            </div>
            <div>
              <div>
                <i className="fa-solid fa-quote-left text-white "></i>
              </div>
              <div className={`font-cocogothic text-md text-white px-4 `}>
                I was impressed by the event designs and equally impressed by
                Juna&aposs professionalism. If I ever have to plan another event
                again I know who to call.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}